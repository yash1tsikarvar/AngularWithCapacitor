import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, Inject} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {
  RealEstateAgent,
  RealEstateAgentInfo
} from '../../../../shared/definitions/forms/profile-form/address-details/real-estate-agent-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {AuthService} from '../../../../core/services/auth.service';
import {ProfileFormService} from '../../profile-form.service';
import {PhoneCode, phoneCodes} from '../../../../shared/definitions/constants/phone_codes';
import { DecodeTokenModel } from '../../../../shared/definitions/models/decode-token.model'
import {takeUntil} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'tev-real-state-info',
  templateUrl: './real-estate-info.component.html',
  styleUrls: ['./real-estate-info.component.scss']
})
export class RealEstateInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  realEstateInfoForm: FormGroup;

  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  phonemask: any;
  decodedToken: DecodeTokenModel

  data: RealEstateAgentInfo;
  @Input()
  set info(info$: Observable<RealEstateAgentInfo>) {
    info$.subscribe(info => {
      this.data = info;
      if (this.data) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<RealEstateAgentInfo> = new EventEmitter<RealEstateAgentInfo>();

  @Input() viewType: string = 'normal';
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private profileFormService: ProfileFormService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.defaultValues();
    this.listenForFormValidation();
    this.listenToDecodedToken()
  }

  ngOnInit() {
    this.initForm();
  }

  defaultValues() {
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            const data = this.data[controlName];

            if (data) {

              if (controlName !== 'realEstateAgent') {
                this.childForm.controls[controlName].setValue(data);
              } else {
                this.setRealEstateFormValues(data);
              }
            }

          });

        this.childForm.updateValueAndValidity();
      });
  }

  setRealEstateFormValues(data: RealEstateAgent) {
    Object.keys(this.realEstateInfoForm.controls)
      .forEach(controlName => {
        if (typeof data[controlName] !== 'undefined') {
          this.realEstateInfoForm.controls[controlName].setValue(data[controlName]);
        }
      });
    this.realEstateInfoForm.updateValueAndValidity();
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  getErrorSubForm(controlName: string): string {
    const {errors} = this.realEstateInfoForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  listenToDecodedToken() {
    this.profileFormService.decodedToken$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((data) => (this.decodedToken = data))
  }

  initForm() {
    const { em } = this.decodedToken
    this.profileFormService.setEmailUsed('mainApplicant', em)
    this.childForm = this.formBuilder
      .group({
        workingWithARealEstateAgent: [null, Validators.required]
      });

    const control = new FormControl(null, {
      validators: CustomValidators.requiredIfControlEqualsTo(this.childForm, 'workingWithARealEstateAgent', 'yes')
    });

    this.childForm.addControl('realEstateAgent', control);

    this.addRealEstateFormGroup();
    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);

  }

  addRealEstateFormGroup() {
    this.realEstateInfoForm = this.formBuilder
      .group({
        name: [null, [Validators.required, Validators.maxLength(120), CustomValidators.asciiValidator()]],
        email: [
          null,
          [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator(),
            Validators.maxLength(80),
            CustomValidators.asciiValidator()
          ],
          [
            CustomValidators.usedEmailValidator('', this.profileFormService.emailsUsed$)
          ]
        ],
        cellphone: [null, CustomValidators.realtorPhoneValidator()],
        dialCode: ['+1', Validators.required],
        receiveNotification: [true],
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
    this.uiService.markControlsAsTouched(this.realEstateInfoForm);
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  subscribeToFormChanges() {
    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID') {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm
      .controls['workingWithARealEstateAgent']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.childForm.controls['realEstateAgent'].updateValueAndValidity();
      });

    this.realEstateInfoForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID') {
          this.childForm.controls['realEstateAgent'].setValue(this.realEstateInfoForm.value);
        } else {
          this.childForm.controls['realEstateAgent'].setValue(null);
        }
      });
    this.realEstateInfoForm
      .controls['dialCode']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(dialCode => {
        this.updatePhoneValidators(dialCode);
      });
    this.updatePhoneValidators(this.realEstateInfoForm.controls['dialCode'].value);
  }

  listenForFormValidation(): void {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.realtorPhoneValidator();
    if(dial == "+1"){
        phoneValidators.splice(2, 1, Validators.minLength(10));
        this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
        this.phonemask = false;
        if(this.realEstateInfoForm.controls['cellphone'].value){
            const cleanValue = this.realEstateInfoForm.controls['cellphone'].value.replace(/-/ig, '');
            this.realEstateInfoForm.controls['cellphone'].setValue(cleanValue);
            const inputPhone = this.document.getElementById('profileAgentCellphone');
            if (inputPhone) inputPhone['value'] = cleanValue;
        }
    }
    this.realEstateInfoForm.controls['cellphone'].setValidators(phoneValidators);
    this.realEstateInfoForm.controls['cellphone'].updateValueAndValidity();
  }
}
