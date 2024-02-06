import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../ui/ui.service';
import { ExtraPaymentCreditCard } from '../../shared/definitions/requests/extra-payment.request';
import { Observable ,  Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomValidators } from '../../shared/custom-validators';
import { ExtraPaymentDefaultAddress } from '../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import { states } from '../../shared/definitions/constants/us_states';
import { ExtraPaymentDetailResponse } from '../../shared/definitions/responses/extra-payment-detail.response';
import {initSquare} from '../../square/square';

@Component({
  selector: 'tev-ep-credit-card-info',
  templateUrl: './ep-credit-card-info.component.html',
  styleUrls: ['./ep-credit-card-info.component.scss']
})
export class EpCreditCardInfoComponent implements OnInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  creditCardForm: FormGroup;
  cardPayment: any;
  showSquare: boolean;
  showLoading: boolean = Boolean(1);

  states = states;
  defaultAddress = ExtraPaymentDefaultAddress;
  addressNotInUsa = false;

  @Input()
  set validate(validate$: Observable<any>) {
    validate$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
      });
  }

  @Input() extraPayment: ExtraPaymentDetailResponse;

  @Output() formChanged: EventEmitter<ExtraPaymentCreditCard> = new EventEmitter<ExtraPaymentCreditCard>();
  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() squareCard: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.showLoading = true;
    this.showSquare = this.extraPayment.paymentProcessor.startsWith('Square');
    this.initForm();
  }

  async initForm() {
    this.creditCardForm = this.formBuilder
      .group({
        billingName: ['', [Validators.required, CustomValidators.asciiValidator()]],
        billingStreet1: ['', [Validators.required, CustomValidators.asciiValidator()]],
        billingStreet2: ['', [CustomValidators.asciiValidator()]],
        billingCity: ['', [Validators.required, CustomValidators.asciiValidator()]],
        billingState: ['', [Validators.required, CustomValidators.asciiValidator()]],
        billingZipcode: ['', [Validators.required, CustomValidators.usaZipCode()]],
        cardExp: ['', [Validators.required, CustomValidators.validCreditCardExpiration()]],
        cardCvv2: ['', [Validators.required, CustomValidators.validCreditCardCode()]],
        cardNumber: ['', [Validators.required, CustomValidators.validCreditCard()]],
        internationalBillingAddress: [false],
      });
    if (this.showSquare) {
      this.disableCardControls();
      await this.initSquare();
    }
    this.listenToFormChanges();
  }

  listenToFormChanges() {
    const {internationalBillingAddress, billingName} = this.creditCardForm.controls;

    this.creditCardForm
      .statusChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.formChanged.emit(this.creditCardForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    internationalBillingAddress
      .valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        this.addressNotInUsa = value;

        if (value) {
          this.disableAddressControls();
        } else {
          this.enableAddressControls();
        }

        this.creditCardForm.updateValueAndValidity();
      });

    billingName
      .valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        this.nameChanged.emit(value);
      });
  }

  disableAddressControls() {
    Object.keys(this.defaultAddress)
      .forEach(key => {
        this.creditCardForm.controls[key].setValue(this.defaultAddress[key]);
      });
  }

  enableAddressControls() {
    Object.keys(this.defaultAddress)
      .forEach(key => {
        this.creditCardForm.controls[key].setValue('');
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.creditCardForm);
  }

  getError(controlName: string) {
    const {errors} = this.creditCardForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  disableCardControls() {
    ['cardCvv2', 'cardExp', 'cardNumber']
      .forEach(key => {
        this.creditCardForm.controls[key].setValue('');
        this.creditCardForm.controls[key].disable();
        this.creditCardForm.controls[key].updateValueAndValidity();
      });
  }

  async initSquare() {
    this.cardPayment = await initSquare();
    this.squareCard.emit(this.cardPayment);
    this.showLoading = false;
  }

  onMonthYearChanged(value) {
    if (value) {
      this.creditCardForm.controls['cardExp'].setValue(value);
    }
  }
}
