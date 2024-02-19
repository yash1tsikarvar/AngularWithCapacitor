import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import { FeesAndDocsResponse } from '../../../../shared/definitions/responses/fees-and-docs.response';
import * as numeral from 'numeral';
import { ChildForm } from '../../child-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject ,  Observable ,  combineLatest } from 'rxjs';
import { PaymentAgree, PaymentExpedite } from '../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import { ProfileFormService } from '../../profile-form.service';
import { UiService } from '../../../../ui/ui.service';
import { CustomValidators } from '../../../../shared/custom-validators';
import { filter, takeUntil } from 'rxjs/operators';
import { PropertyInfoResponse } from '../../../../shared/definitions/responses/property-info.response';
import sweetAlert from 'sweetalert2'

@Component({
  selector: 'tev-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();
  propertyInfoReady$: Subject<boolean> = new Subject<boolean>();
  applicationTotal$: Subject<number> = new Subject<number>();
  applicationTotal: number;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  propertyInfo: PropertyInfoResponse;
  expediteApplication = false;
  addExpediteApplication$: Subject<boolean> = new Subject<boolean>();
  activeMilitary$: Subject<boolean> = new Subject<boolean>();

  data: PaymentAgree;

  @Input()
  set info(info$: Observable<PaymentAgree>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<PaymentExpedite> = new EventEmitter<PaymentExpedite>();

  feesAndDocs: FeesAndDocsResponse;
  setup: SetupResponse;

  constructor(
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    private formBuilder: FormBuilder,
  ) {
    this.defaultValues();
    this.listenToPropertyInformation();
    this.listenToFeesAndDocs();
    this.listenToSetup();
    this.listenForFormValidation();

  }

  _addExpediteApplication: boolean;
  @Input()
  set addExpediteApplication(addExpediteApplication: boolean) {
    this._addExpediteApplication = addExpediteApplication;
    this.addExpediteApplication$.next();
  }

  get addExpediteApplication(): boolean {
    return this._addExpediteApplication;
  }

  _activeMilitary: boolean;
  @Input()
  set activeMilitary(activeMilitary: boolean) {
    this._activeMilitary = activeMilitary;
    this.activeMilitary$.next();
  }

  get activeMilitary(): boolean {
    return this._activeMilitary;
  }

  /**
   * Listen for the property information.
   *
   * The other one if we are resuming an application
   */
  listenToPropertyInformation() {

    this.profileFormService
      .propertyInfo$
      .pipe(
        filter(info => !!info),
        takeUntil(this.unsubscribeSubject),
      )
      .subscribe(info => {
        this.propertyInfo = info;
        this.propertyInfoReady$.next(true);
      });
  }

  ngOnInit() {

    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    const agreeValidator = this.setupHasFee()
      ? CustomValidators.agreeValidator() : null;

    this.childForm = this.formBuilder
      .group({
        expediteApplication: [null, Validators.required]
      });

    this.childForm.controls['expediteApplication'].setValue(this.addExpediteApplication?'yes':'no');
  }

  defaultValues() {
    combineLatest([this.formReady$, this.propertyInfoReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        if (this.propertyInfo.rushProcessingPrice === 0) {
          this.childForm.controls['expediteApplication'].setValue('no');
        }
      });
  }

  setupHasFee(): boolean {
    return this.setup.applicationFee > 0;
  }

  addExpedite() {
    this.expediteApplication = true;
    this.calculateApplicationTotal();

    // Emit change to parent component
    const pe: PaymentExpedite = <PaymentExpedite> {
      expediteApplication: "yes",
    }
    this.formChanged.emit(pe);
  }

  removeExpedite() {

//TODO:uiService
/*
    this.uiService.confirmAction({
      message: '',
      showCancel: false
    });
*/

    sweetAlert({
      customClass: 'confirm-remove-expedite-modal',
      title: 'We process all the applications in the order they come.',
      type: 'info',
      html: 'Please remember due to high volume of applications, the completion of your report could take longer than usual.',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: 'Keep Quick Pass',
      cancelButtonText: 'Remove Quick Pass',
      confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large',
      cancelButtonClass: 'tev-btn tev-btn--block tev-btn--large',
      buttonsStyling: false,
      animation: false
    }).then((result) => {
      if (!result.value) {
        this.expediteApplication = false
        this.calculateApplicationTotal()

        // Emit change to parent component
        const pe: PaymentExpedite = <PaymentExpedite> {
          expediteApplication: "no",
        }
        this.formChanged.emit(pe);
      }
    })

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
    this.applicationTotal = this.getApplicationTotalValue();
    this.applicationTotal$.next(this.applicationTotal);
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

  getApplicationTotal(): string {
    let total = 0;
    if (this.setup) {
      total += this.setup.applicationFee;
    }

    return numeral(total).format('$0,0.00');
  }

  getError(controlName: string): string {
    const errors = this.childForm.controls[controlName].errors;
    return this.uiService.getControlError(errors);
  }

  listenForFormValidation() {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => this.markControlsAsTouched());
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
    const {expediteApplication} = this.childForm.controls;

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

    expediteApplication
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.expediteApplication = value === 'yes';
        this.calculateApplicationTotal();
      });

    this.childForm.updateValueAndValidity();
    expediteApplication.updateValueAndValidity();
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
