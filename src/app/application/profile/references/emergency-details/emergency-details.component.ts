import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {EmergencyContactInformation} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {AuthService} from '../../../../core/services/auth.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';
import {PhoneCode, phoneCodes } from '../../../../shared/definitions/constants/phone_codes';

@Component({
  selector: 'tev-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss']
})
export class EmergencyDetailsComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: EmergencyContactInformation;
  phonemask: any;
  @Input()
  set info(info$: Observable<EmergencyContactInformation>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<EmergencyContactInformation> = new EventEmitter<EmergencyContactInformation>();

  userEmail: string;

  @Input() viewType: string = 'normal';  
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private profileFormService: ProfileFormService,
  ) {
    this.userEmail = this.authService.email;
    this.defaultValues();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        name: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        relationship: [null, [Validators.required, Validators.maxLength(20), CustomValidators.asciiValidator()]],
        dialCode: ['+1', Validators.required],
        phone: [null, CustomValidators.emergencyPhoneValidator()],
        email: [
          '',
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

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            const data = this.data[controlName];
            if (!!data) {
              this.childForm.controls[controlName].setValue(data);
            }
          });

        this.childForm.updateValueAndValidity();

      });
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

      this.childForm
        .controls['dialCode']
        .valueChanges
        .pipe(
            takeUntil(this.unsubscribeSubject)
        )
        .subscribe(dialCode => {
            this.updatePhoneValidators(dialCode);
        });
        this.updatePhoneValidators(this.childForm.controls['dialCode'].value);
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.phoneValidator();
    if(dial == "+1"){
        phoneValidators.splice(2, 1, Validators.minLength(10));
        this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
        this.phonemask = false;
        if(this.childForm.controls['phone'].value){
            const cleanValue = this.childForm.controls['phone'].value.replace(/-/ig, '');
            this.childForm.controls['phone'].setValue(cleanValue);
            document.querySelector('#employmentEmergencyContactCellPhone')['value'] = cleanValue;
        }
    }
    
    this.childForm.controls['phone'].setValidators(phoneValidators);
    this.childForm.controls['phone'].updateValueAndValidity();
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
}
