import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Inject } from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {Owner, OwnerInfo} from '../../../../shared/definitions/forms/profile-form/address-details/owner-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {AuthService} from '../../../../core/services/auth.service';
import {ProfileFormService} from '../../profile-form.service';
import {PhoneCode, phoneCodes} from '../../../../shared/definitions/constants/phone_codes';
import {takeUntil} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'tev-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  ownerInfoForm: FormGroup;

  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();
  phonemask: any;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: OwnerInfo;
  @Input()
  set info(info$: Observable<OwnerInfo>) {
    info$.subscribe(info => {
      this.data = info;
      if (this.data) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<OwnerInfo> = new EventEmitter<OwnerInfo>();

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
              if (controlName !== 'owner') {
                this.childForm.controls[controlName].setValue(this.data[controlName]);
              } else {
                this.setOwnerFormValues(this.data[controlName]);
              }
            }
          });

        this.childForm.updateValueAndValidity();
      });
  }

  setOwnerFormValues(data: Owner) {
    Object.keys(this.ownerInfoForm.controls)
      .forEach(controlName => {
        if (typeof data[controlName] !== 'undefined') {
          this.ownerInfoForm.controls[controlName].setValue(data[controlName]);
        }
      });
    this.ownerInfoForm.updateValueAndValidity();
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  getErrorSubForm(controlName: string): string {
    const {errors} = this.ownerInfoForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        knowOwnerInformation: [null, Validators.required]
      });

    const control = new FormControl(null, {
      validators: CustomValidators.requiredIfControlEqualsTo(this.childForm, 'knowOwnerInformation', 'yes')
    });

    this.childForm.addControl('owner', control);

    this.addOwnerInfoForm();
    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);
  }

  addOwnerInfoForm() {
    this.ownerInfoForm = this.formBuilder
      .group({
        fullName: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        dialCode: ['+1', Validators.required],
        phone: [null, CustomValidators.phoneValidator()],
        email: ['',
          [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator(),
            Validators.maxLength(50),
            CustomValidators.asciiValidator()
          ],
          [
            CustomValidators.usedEmailValidator('', this.profileFormService.emailsUsed$)
          ]
        ],
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
    this.uiService.markControlsAsTouched(this.ownerInfoForm);
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
      .controls['knowOwnerInformation']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.childForm.controls['owner'].updateValueAndValidity();
      });

    this.ownerInfoForm
      .controls['dialCode']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(dialCode => {
        this.updatePhoneValidators(dialCode);
      });
    this.updatePhoneValidators(this.ownerInfoForm.controls['dialCode'].value);

    this.ownerInfoForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID') {
          this.childForm.controls['owner'].setValue(this.ownerInfoForm.value);
        } else {
          this.childForm.controls['owner'].setValue(null);
        }
      });
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
    phoneValidators = CustomValidators.phoneValidator();
    if(dial == "+1"){
        phoneValidators.splice(2, 1, Validators.minLength(10));
        this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
        this.phonemask = false;
        if(this.ownerInfoForm.controls['phone'].value){
            const cleanValue = this.ownerInfoForm.controls['phone'].value.replace(/-/ig, '');
            this.ownerInfoForm.controls['phone'].setValue(cleanValue);
            const inputPhone = this.document.getElementById('profileOwnerCellphone');
            if (inputPhone) inputPhone['value'] = cleanValue;
        }
    }
    this.ownerInfoForm.controls['phone'].setValidators(phoneValidators);
    this.ownerInfoForm.controls['phone'].updateValueAndValidity();
  }
}
