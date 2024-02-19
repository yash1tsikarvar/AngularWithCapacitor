import {Component, OnInit} from '@angular/core';
import {states} from '../../shared/definitions/constants/us_states';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {CustomValidators} from '../../shared/custom-validators';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Fees } from '../../shared/definitions/constants/fees';

@Component({
  selector: 'tev-expedite-pay',
  templateUrl: './expedite-pay.component.html',
  styleUrls: ['./expedite-pay.component.scss']
})
export class ExpeditePayComponent implements OnInit {

  childForm: FormGroup;

  states = states;
  addressNotInUsa = false;
  formReady$: Subject<boolean> = new Subject<boolean>();
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  expedite_fee: number;
  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
  ) {
    this.expedite_fee = Fees.EXPEDITE_FEE;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        name: ['', [Validators.required, CustomValidators.asciiValidator()]],
        address1: ['', [Validators.required, CustomValidators.asciiValidator()]],
        city: ['', [Validators.required, CustomValidators.asciiValidator()]],
        state: ['', [Validators.required, CustomValidators.asciiValidator()]],
        zip: ['', [Validators.required, CustomValidators.usaZipCode()]],
        creditCard: ['', [Validators.required, CustomValidators.validCreditCard()]],
        creditCardExp: ['', [Validators.required, CustomValidators.validCreditCardExpiration()]],
        creditCardCvv: ['', [Validators.required, CustomValidators.validCreditCardCode()]],
        addressNotInUsa: [false],
        agreeTerms: [false],
      });

    this.formReady$.next(true);
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
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
    const {name, addressNotInUsa} = this.childForm.controls;

    addressNotInUsa
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.addressNotInUsa = value;

        this.childForm.updateValueAndValidity();
      });

    this.childForm.updateValueAndValidity();
  }
}
