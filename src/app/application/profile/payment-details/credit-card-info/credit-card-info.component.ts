import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {DefaultAddress, PaymentInfo} from '../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import {states} from '../../../../shared/definitions/constants/us_states';
import {CustomValidators} from '../../../../shared/custom-validators';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';
import {FeesAndDocsResponse} from '../../../../shared/definitions/responses/fees-and-docs.response';
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response';
import {takeUntil} from 'rxjs/operators';
import {initSquare} from '../../../../square/square';

@Component({
  selector: 'tev-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.scss']
})
export class CreditCardInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();
  propertyInfoReady$: Subject<boolean> = new Subject<boolean>();
  expediteApplication$: Subject<boolean> = new Subject<boolean>();
  applicationTotal$: Subject<number> = new Subject<number>();
  applicationTotal: number;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  propertyInfo: PropertyInfoResponse;

  data: PaymentInfo;
  cardPayment: any;
  showSquare: boolean;
  showLoading: boolean = Boolean(1);
  paymentProcessor: string;

  @Input()
  set info(info$: Observable<PaymentInfo>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  _expediteApplication: boolean;
  @Input()
  set expediteApplication(expediteApplication: boolean) {
    this._expediteApplication = expediteApplication;
    this.expediteApplication$.next();
  }

  @Input()
  set paymentProcessorInput(paymentProcessor: string) {
    this.paymentProcessor = paymentProcessor;
    this.showSquare = this.paymentProcessor.startsWith('Square');
    this.checkSquareControls();
  }

  get expediteApplication(): boolean {
    return this._expediteApplication;
  }

  @Output() formChanged: EventEmitter<PaymentInfo> = new EventEmitter<PaymentInfo>();
  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() squareCard: EventEmitter<any> = new EventEmitter<any>();

  feesAndDocs: FeesAndDocsResponse;
  setup: SetupResponse;

  states = states;
  defaultAddress = DefaultAddress;
  addressNotInUsa = false;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
    this.listenToFeesAndDocs();
    this.listenToSetup();
    this.calculateApplicationTotal();
    this.defaultValues();
    this.listenForFormValidation();
    this.listenToPropertyInfo();
    this.listenToApplicationTotal();
  }

  ngOnInit() {
    this.showLoading = true;
    this.showSquare = this.paymentProcessor.startsWith('Square');
    this.initForm();
    this.subscribeToFormChanges();
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        name: ['', [Validators.required, CustomValidators.asciiValidator()]],
        address1: ['', [Validators.required, CustomValidators.asciiValidator()]],
        city: ['', [Validators.required, CustomValidators.asciiValidator()]],
        state: ['', [Validators.required, CustomValidators.asciiValidator()]],
        zip: ['', [Validators.required, CustomValidators.usaZipCode()]],
        creditCard: ['', [Validators.required, CustomValidators.validCreditCard(), CustomValidators.validCreditCardNumber()]],
        creditCardExp: ['', [Validators.required, CustomValidators.validCreditCardExpiration()]],
        creditCardCvv: ['', [Validators.required, CustomValidators.validCreditCardCode()]],
        addressNotInUsa: [false],
      });
    this.checkSquareControls();
    if (this.showSquare) {
      this.initSquare();
    }

    this.formReady$.next(true);
  }

  checkSquareControls() {
    if (!this.childForm) {
      return;
    }

    if (this.showSquare) {
      this.disableCardControls();
    } else {
      this.squareCard.emit(null);
      this.enableCardControls();
    }
  }

  listenToApplicationTotal() {
    combineLatest([this.applicationTotal$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
          if (this.setup.applicationFee > 0 || (this.applicationTotal > 0  && this.expediteApplication)) {
            this.enableAddressControls();
            this.enableCCControls();
            if (this.paymentProcessor.startsWith('Square')) {
              this.showSquare = true;
              this.disableCardControls();
              if (this.applicationTotal === 0) {
                this.disableAddressControls();
                this.disableCCControls();
              }
            }
          } else {
            this.showSquare = false;
            this.disableAddressControls();
            this.disableCCControls();
          }
      });
  }

  listenToFeesAndDocs() {
    this.profileFormService
      .feesAndDocUploadRequirements$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => {
        this.feesAndDocs = info;
      });
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => {
        this.setup = info;
      });
  }

  listenToPropertyInfo() {
    this.profileFormService
      .propertyInfo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(propertyInfo => {

        this.propertyInfo = propertyInfo;
        this.propertyInfoReady$.next(true);
      });
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            if (typeof this.data[controlName] !== 'undefined') {
              this.childForm.controls[controlName].setValue(this.data[controlName]);
            }
          });

        this.childForm.updateValueAndValidity();
      });
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  listenForFormValidation() {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  subscribeToFormChanges() {
    const {name, addressNotInUsa} =  this.childForm.controls;

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    addressNotInUsa
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.addressNotInUsa = value;

        if (value) {
          this.disableAddressControls();
        } else {
          this.enableAddressControls();
        }

        this.childForm.updateValueAndValidity();
      });

    name
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.nameChanged.emit(value);
      });

    this.childForm.updateValueAndValidity();
  }

  disableAddressControls() {
    Object.keys(this.defaultAddress)
      .forEach(key => {
        this.childForm.controls[key].setValue(this.defaultAddress[key]);
        this.childForm.controls[key].disable();
        this.childForm.controls[key].updateValueAndValidity();
      });
  }

  disableCCControls() {
    ['name', 'creditCard', 'creditCardExp', 'creditCardCvv']
      .forEach(key => {
        this.childForm.controls[key].setValue('');
        this.childForm.controls[key].disable();
        this.childForm.controls[key].updateValueAndValidity();
      });
  }

  disableCardControls() {
    ['creditCard', 'creditCardExp', 'creditCardCvv']
      .forEach(key => {
        this.childForm.controls[key].setValue('');
        this.childForm.controls[key].disable();
        this.childForm.controls[key].updateValueAndValidity();
      });
  }

  enableCardControls() {
    ['creditCard', 'creditCardExp', 'creditCardCvv']
      .forEach(key => {
        this.childForm.controls[key].setValue('');
        this.childForm.controls[key].enable();
        this.childForm.controls[key].updateValueAndValidity();
      });
  }

  enableAddressControls() {
    if (!this.addressNotInUsa) {
    Object.keys(this.defaultAddress)
      .forEach(key => {
        this.childForm.controls[key].setValue('');
        this.childForm.controls[key].enable();
        this.childForm.controls[key].updateValueAndValidity();
      });
    }
  }

  enableCCControls() {
    ['name', 'creditCard', 'creditCardExp', 'creditCardCvv']
      .forEach(key => {
        this.childForm.controls[key].enable();
        this.childForm.controls[key].updateValueAndValidity();
      });
  }

  getApplicationTotalValue(): number {
    let total = 0;
    if (this.setup) {
      total += this.setup.applicationFee;
    }

    if (this.expediteApplication) {
      total += this.propertyInfo.rushProcessingPrice;
    }

    return total;
  }

  calculateApplicationTotal() {
    this.expediteApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.applicationTotal = this.getApplicationTotalValue();
        this.applicationTotal$.next(this.applicationTotal);
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  onMonthYearChanged(value) {
    this.childForm.controls['creditCardExp'].setValue(value);
  }

  async initSquare() {
    this.cardPayment = await initSquare();
    this.squareCard.emit(this.cardPayment);
    this.showLoading = false;
  }
}
