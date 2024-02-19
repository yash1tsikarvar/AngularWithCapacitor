import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {Subject, Observable, combineLatest} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupervisorInformation} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {AuthService} from '../../../../core/services/auth.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';
import {PhoneCode, phoneCodes } from '../../../../shared/definitions/constants/phone_codes';

let counter = 0;

@Component({
  selector: 'tev-supervisor-info',
  templateUrl: './supervisor-info.component.html',
  styleUrls: ['./supervisor-info.component.scss']
})
export class SupervisorInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  previousContactValue: boolean;

  data: SupervisorInformation;
  phonemask: any;
  @Input()
  set info(info$: Observable<SupervisorInformation>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  _applicantType: string = 'primary';
  @Input()
  set applicantType(applicantType: string) {
    this._applicantType = applicantType || this._applicantType;
  }

  get applicantType(): string {
    return this._applicantType;
  }

  @Output() formChanged: EventEmitter<SupervisorInformation> = new EventEmitter<SupervisorInformation>();

  counter = counter++;

  userEmail: string;

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

    let phone = this.data == null ? null : this.data['phone'];
    let dialCode = '+1';
    let numberWithoutDial;
    if (phone) {
      phone = phone.replace('+', '');
      dialCode = phone.length === 10 ? null :
                phone.indexOf(' ') === -1 ? phone.substring(0, 1) : phone.substring(0, phone.indexOf(' '));
      phone = phone.replace( dialCode, '').replace('-', '');
      numberWithoutDial =  phone.replace(' ', '' );
    }
    this.childForm = this.formBuilder
      .group({
        name: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        title: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        email: [
          '',
          [
            Validators.email,
            CustomValidators.emailValidator(),
            CustomValidators.valueDifferentThan(this.userEmail),
            Validators.maxLength(50),
            CustomValidators.asciiValidator(),
            Validators.required
          ],
          [
            CustomValidators.usedEmailValidator('', this.profileFormService.emailsUsed$)
          ]
        ],
        dialCode: ['+1', Validators.required],
        phone: [numberWithoutDial, CustomValidators.phoneValidator()],
        contact: [null],
      });
    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
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

            if (!!data && controlName !== 'phone') {
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

    this.listenToNotContactEmployer();

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

    this.childForm.updateValueAndValidity();

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
            document.querySelector('#supervisorPhoneNumber-' + this.counter)['value'] = cleanValue;
        }
    }

    this.childForm.controls['phone'].setValidators(phoneValidators);
    this.childForm.controls['phone'].updateValueAndValidity();
  }

  listenToNotContactEmployer() {
    const control = this.childForm.controls['contact'];
    control
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {

        if (!control.pristine
          && value === true
          && this.previousContactValue !== value) {

          this.uiService.confirmAction({
            message: 'If employment is not authorized the association may consider this application incomplete.',
            showCancel: false
          });
        }

        this.previousContactValue = value;
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

}
