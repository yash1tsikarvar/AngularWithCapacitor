import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import * as numeral from 'numeral';
import { ChildForm } from '../../child-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject ,  Observable ,  combineLatest } from 'rxjs';
import { PaymentAgree, PaymentAddExpedite } from '../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import { ProfileFormService } from '../../profile-form.service';
import { UiService } from '../../../../ui/ui.service';
import { CustomValidators } from '../../../../shared/custom-validators';
import { filter, takeUntil } from 'rxjs/operators';
import { PropertyInfoResponse } from '../../../../shared/definitions/responses/property-info.response';
import sweetAlert from 'sweetalert2'

@Component({
  selector: 'tev-payment-add-expedite',
  templateUrl: './payment-add-expedite.component.html',
  styleUrls: ['./payment-add-expedite.component.scss']
})
export class PaymentAddExpediteComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();
  propertyInfoReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  propertyInfo: PropertyInfoResponse;
  addExpediteApplication = false;

  data: PaymentAgree;
  @Input()
  set info(info$: Observable<PaymentAgree>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<PaymentAddExpedite> = new EventEmitter<PaymentAddExpedite>();

  setup: SetupResponse;

  constructor(
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    private formBuilder: FormBuilder,
  ) {
    this.defaultValues();
    this.listenToPropertyInformation();
    this.listenToSetup();
    this.listenForFormValidation();
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

  ngAfterViewInit() {
    if (!(window as any).tippy) return;
    (window as any).tippy('#priority-application-tooltip', {
      theme: 'tenant',
      content: 'Same-day processing time depends on how soon documentation and information provided by the applicant is received.',
    });
  }

  initForm() {
    const agreeValidator = this.setupHasFee()
      ? CustomValidators.agreeValidator() : null;

    this.childForm = this.formBuilder
      .group({
        addExpediteApplication: [null, Validators.required]
      });

  }

  defaultValues() {
    combineLatest([this.formReady$, this.propertyInfoReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        if (this.propertyInfo.rushProcessingPrice === 0) {
          this.childForm.controls['addExpediteApplication'].setValue('no');
        }
      });
  }

  setupHasFee(): boolean {
    return this.setup.applicationFee > 0;
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

  continueWithExpedite() {
    this.childForm.controls['addExpediteApplication'].setValue('yes');
    window.scrollTo(0, 0);
  }

  continueWithoutExpedite() {
    sweetAlert({
      customClass: 'confirm-remove-expedite-modal',
      title: 'We process all the applications in the order they come.',
      type: 'info',
      html: 'Please note due to high volume of applications, the completion of your report could take longer than usual.',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: 'Add Quick Pass',
      cancelButtonText: 'I don\'t want Quick Pass',
      confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large',
      cancelButtonClass: 'tev-btn tev-btn--block tev-btn--large',
      buttonsStyling: false,
      animation: false
    }).then((result) => {
      if (result.dismiss === sweetAlert.DismissReason.close) {
        // Close popup only
        this.childForm.controls['addExpediteApplication'].setValue('no');
      } else {
        this.childForm.controls['addExpediteApplication'].setValue(result.value ? 'yes' : 'no');
      }
      window.scrollTo(0, 0);
    })
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  subscribeToFormChanges() {
    const {addExpediteApplication} = this.childForm.controls;

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

    addExpediteApplication
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.addExpediteApplication = value === 'yes';
      });

    this.childForm.updateValueAndValidity();
    addExpediteApplication.updateValueAndValidity();
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
