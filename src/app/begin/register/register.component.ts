import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../ui/ui.service';
import { DOCUMENT } from '@angular/common';


import { CustomValidators } from '../../shared/custom-validators';
import { NewTenantApplicantRequest } from '../../shared/definitions/requests/new-tenant-applicant.request';
import { AuthService } from '../../core/services/auth.service';
import { ErrorResponse } from '../../shared/definitions/responses/error.response';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertType } from '../../shared/definitions/types/alert.type';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PhoneNumber } from '../../shared/definitions/models/phone-number.model';
import { ReCaptchaV3Service, RecaptchaModule, OnExecuteData } from 'ng-recaptcha';
import { PhoneCode, phoneCodes } from '../../shared/definitions/constants/phone_codes';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { DataVerificationCode, SentType } from '../../shared/definitions/models/new-tenant-applicant.model';

@Component({
  selector: 'tev-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  info: string;
  infoType: AlertType;
  hide: boolean = true;
  buttonText: string;
  hideCP: boolean = true;
  buttonTextCP: string;
  currentYear:number;

  registerSuccess: boolean = false;
  showLabelPassword: boolean = true;
  showLabelMobile: boolean = true;
  dangerInputPasswordInfo: boolean = false;
  dangerInputConfirmPasswordInfo: boolean = false;

  token: string | undefined;

  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');
  firstDialCode : PhoneCode = {'name': 'USA/Canada', 'dial_code': '+1', 'code': 'US'};

  phonemask: any;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  widgetId: any;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private recaptchaV3Service: ReCaptchaV3Service,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.token = undefined;
  }

  ngOnInit() {
    this.initForm();
    this.subscription = this.recaptchaV3Service.onExecute.subscribe(
      (data: OnExecuteData) => {
        this.token =  data.token;
      }
    );
    this.currentYear=new Date().getFullYear();
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Init the form controls and validators.
   */
  initForm() {
    this.registerForm = this.formBuilder
      .group({
        email: ['',
          [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator(),
            Validators.maxLength(80),
            CustomValidators.asciiValidator()]],
        confirmEmail: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.passwordStrength(),
            CustomValidators.asciiValidator()
          ]
        ],
        confirmPassword: ['', [Validators.required]],
        firstName: ['', [Validators.required, CustomValidators.asciiValidator()]],
        lastName: ['', [Validators.required, CustomValidators.asciiValidator()]],
        dialCode: ['+1', [Validators.required]],
        mobile: ['', [Validators.required]],
      }, {
        validator: [CustomValidators.matchingInputs('password', 'confirmPassword'), CustomValidators.matchingInputs('email', 'confirmEmail')]
      });

    // const confirmEmailControl = new FormControl('', {
    //   validators: [Validators.required, CustomValidators.sameEmailAs(this.registerForm, 'email')]
    // });

    // const confirmPasswordControl = new FormControl('', {
    //   validators: [Validators.required, CustomValidators.sameValueAs(this.registerForm, 'password')]
    // });

    // this.registerForm.addControl('confirmEmail', confirmEmailControl);
    // this.registerForm.addControl('confirmPassword', confirmPasswordControl);

    this.registerForm
      .controls['password']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe( ()=> {
        if (this.registerForm.controls['password'].status === 'INVALID') {
          this.dangerInputPasswordInfo = true;
        } else {
          this.dangerInputPasswordInfo = false;
        }
        if(!this.registerForm.controls['confirmPassword'].pristine){
        if (this.registerForm.controls['confirmPassword'].value === this.registerForm.controls['password'].value) {
          this.dangerInputConfirmPasswordInfo = false;
        } else {
          this.dangerInputConfirmPasswordInfo = true;
        }
        }
      });

    this.registerForm
    .controls['confirmPassword']
    .valueChanges
    .pipe(
      takeUntil(this.unsubscribeSubject)
    )
    .subscribe( ()=> {
      if (this.registerForm.controls['confirmPassword'].value === this.registerForm.controls['password'].value) {
        this.dangerInputConfirmPasswordInfo = false;
      } else {
        this.dangerInputConfirmPasswordInfo = true;
      }
    });

    this.registerForm
      .controls['dialCode']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(dialCode => {
        this.updatePhoneValidators(dialCode);
      });
    this.updatePhoneValidators(this.registerForm.controls['dialCode'].value);
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.realtorPhoneValidator();
    if (dial == "+1") {
      phoneValidators.splice(2, 1, Validators.minLength(10));
      this.phonemask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      this.phonemask = false;
      if (this.registerForm.controls['mobile'].value) {
        const cleanValue = this.registerForm.controls['mobile'].value.replace(/-/ig, '');
        this.registerForm.controls['mobile'].setValue(cleanValue);
        const inputPhone = this.document.getElementById('registerMobile');
        if (inputPhone) inputPhone['value'] = cleanValue;
      }
    }
    this.registerForm.controls['mobile'].setValidators(phoneValidators);
    this.registerForm.controls['mobile'].updateValueAndValidity();
  }

  onKeyPressed(event: KeyboardEvent) {

    // let valueTarget;
    // valueTarget = (event.key as HTMLInputElement);

    let abcd=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","u","v","w","x","y","z"];
    // extract s for +590 codes

    let result = this.dialCodes.filter(dialCode => dialCode.name.toLowerCase().startsWith(event.key.toLowerCase()))

    if (event.key.toLowerCase() === 's') {
      this.firstDialCode.dial_code = '+290';
    } else if (abcd.includes(event.key.toLowerCase()) && result.length > 0) {
      this.firstDialCode.dial_code = result[0].dial_code;
    }

  }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const { errors } = this.registerForm.controls[controlName];

    if( !this.registerForm.controls['password'].pristine){
      this.showLabelPassword = false
    }

    if( !this.registerForm.controls['mobile'].pristine){
      this.showLabelMobile = false
    }
    // if( (controlName === 'password' && errors) || (controlName === 'mobile' && errors)){
    //   this.showLabels = false
    //   console.log(this.showLabels)
    // }
    return this.uiService.getControlError(errors);
  }

  openDialogUserExists() {
    const dialogRef = this.dialog.open(RegisterDialogUserExist, { panelClass: 'fit-dialog' });
  }

  openDialogInactiveUser() {
    const dialogRef = this.dialog.open(RegisterDialogInactiveUser, { panelClass: 'fit-dialog' });
  }

  modifyVisibility() {
    this.hide = !this.hide;
    this.buttonText = this.hide ? 'Show' : 'Hide';
  }

  modifyVisibilityCP() {
    this.hideCP = !this.hideCP;
    this.buttonTextCP = this.hideCP ? 'Show' : 'Hide';
  }

  register (data: NewTenantApplicantRequest, dataVCode: DataVerificationCode) {
    this.authService
    .register(data)
    .subscribe(
      (value) => {
        this.registerSuccess = true;
        let response = JSON.parse(value);
        dataVCode.userId = response.userId;
        dataVCode.sentType = response.sentType == 'mail' ? SentType.Mail : SentType.SMS;
        localStorage.setItem("DataVerificationCode", JSON.stringify(dataVCode));
        this.uiService.clearCurrentToastr();
        this.router
        .navigate(['/verification-code'])
        .catch(console.log);
      },
      (httpError: HttpErrorResponse) => {

        const error: ErrorResponse = JSON.parse(httpError.error);
        this.uiService.clearCurrentToastr();

        if (error.errorKey == "userexists") {
          this.openDialogUserExists();
        } else if (error.errorKey == "inactive.user") {
          this.openDialogInactiveUser();
          dataVCode.sentType = SentType.Mail;
          localStorage.setItem("DataVerificationCode", JSON.stringify(dataVCode));
          // this.router
          //   .navigate(['/login'])
          //   .catch(console.log);
        } else {
          this.uiService.showError({
            message: error.title,
            removeCurrent: true
          })
        }

      },
    );
  }

  /**
   * Submit the form
   */
  submit() {
    if (this.registerForm.valid) {

      this.uiService.showInfo({
        message: 'Processing the information',
        keepOpen: false
      });

      const { email, password, firstName, lastName, dialCode, mobile } = this.registerForm.value;
      const phoneNumber: PhoneNumber = {
        countryCode: dialCode,
        phoneNumber: mobile.split('-').join('')
      }

      const data: NewTenantApplicantRequest = {
        login: email,
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      };

      const dataVCode: DataVerificationCode = {
        email,
        phoneNumber: `${dialCode}${mobile.split('-').join('')}`,
        userId: null,
        sentType: SentType.None,
        dialCode
      }

      if (dialCode == "+1") {
        this.dialog.open(InfoNumberPhoneDialog, {
          panelClass: 'custom-dialog-container',
          disableClose: false
        }).afterClosed().subscribe(result => {
          if (result) {
            this.register(data, dataVCode);
          }
        });
      } else {
        this.register(data, dataVCode);
      }
    } else {
      this.uiService.markControlsAsTouched(this.registerForm);
    }
  }

}

@Component({
  selector: 'register-dialog-inactive',
  templateUrl: './register-inactive.dialog.html'
})
export class RegisterDialogInactiveUser { }

@Component({
  selector: 'register-dialog-exists',
  templateUrl: './register-exists.dialog.html'
})
export class RegisterDialogUserExist { }


@Component({
  selector: 'info-number-phone',
  templateUrl: './info-number-phone.html'
})
export class InfoNumberPhoneDialog {
}
