import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material';
import { CustomValidators } from '../../../shared/custom-validators';
import { AlertType } from '../../../shared/definitions/types/alert.type';
import { UiService } from '../../../ui/ui.service';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../../../shared/definitions/responses/error.response';
import { ResendCodeRequest } from '../../../shared/definitions/requests/send-sms.request';
import { DataVerificationCode, SentType } from '../../../shared/definitions/models/new-tenant-applicant.model';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
//import { VerificationCodeDialog } from '.././verification-code-dialog/verification-code-dialog.component';


import { PhoneCode, phoneCodes } from '../../../shared/definitions/constants/phone_codes';


@Component({
  selector: 're-send-code',
  templateUrl: './re-send-code.component.html',
  styleUrls: ['./re-send-code.component.scss']
})
export class ReSendCodeComponent implements OnInit {

  bySMS: boolean;
  resendForm: FormGroup;
  info: string;
  infoType: AlertType;
  dataVCode: DataVerificationCode;
  currentYear:number;

  phonemask: any;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code == 'US');

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  widgetId: any;
  private subscription: Subscription;

  constructor(
    //public dialog: MatDialog,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private router: Router,
  ) {
    this.dataVCode = JSON.parse(localStorage.getItem('DataVerificationCode'));
    if(this.dataVCode)
      this.bySMS = this.dataVCode.sentType == SentType.SMS;
    else{
      this.bySMS=false;
    }
  }

  ngOnInit() {
    this.initForm();
    this.currentYear=new Date().getFullYear();
  }

  /**
   * Init the form controls and validators.
   */

  initForm() {
    if (this.bySMS) {
      this.resendForm = this.formBuilder
        .group({
          dialCode: ['+1', [Validators.required]],
          mobile: ['', [Validators.required]],
        });
      this.resendForm
        .controls['dialCode']
        .valueChanges
        .pipe(
          takeUntil(this.unsubscribeSubject)
        )
        .subscribe(dialCode => {
          this.updatePhoneValidators(dialCode);
        });
      this.updatePhoneValidators(this.resendForm.controls['dialCode'].value);
    }
    else {
      this.resendForm = this.formBuilder
        .group({
          email: ['', [Validators.required, Validators.email, CustomValidators.emailValidator(), Validators.maxLength(80), CustomValidators.asciiValidator()]],
        });

        const confirmEmailControl = new FormControl('', {
          validators: [Validators.required, CustomValidators.sameEmailAs(this.resendForm, 'email')]
        });

        this.resendForm.addControl('confirmEmail', confirmEmailControl);
    }
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.realtorPhoneValidator();
    if (dial == "+1") {
      phoneValidators.splice(2, 1, Validators.minLength(10));
      this.phonemask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      this.phonemask = false;
      if (this.resendForm.controls['mobile'].value) {
        const cleanValue = this.resendForm.controls['mobile'].value.replace(/-/ig, '');
        this.resendForm.controls['mobile'].setValue(cleanValue);
        document.querySelector('[ng-reflect-id="registerMobile"]')['value'] = cleanValue;
      }
    }
    this.resendForm.controls['mobile'].setValidators(phoneValidators);
    this.resendForm.controls['mobile'].updateValueAndValidity();
  }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const { errors } = this.resendForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  // openDialog() {

  //   this.dialog.open(VerificationCodeDialog, {
  //     panelClass: 'verification-dialog-container',
  //     disableClose: false,
  //     data: {
  //       bySMS: this.bySMS,
  //       validCode: this.validOtp ? !this.invalidCode : this.validOtp,
  //       value: this.bySMS ? this.phoneNumber : this.email
  //     }
  //   });
  // }

  /**
   * Submit the form
   */
  submit() {

    if (this.resendForm.valid) {

      this.uiService.showInfo({
        message: 'Processing the information',
        keepOpen: false
      });

      const { email, dialCode, mobile } = this.resendForm.value;

      const data: ResendCodeRequest = {
        user: this.dataVCode.userId,
        value: this.bySMS ? `${dialCode}${mobile.split('-').join('')}` : email,
        sentType: this.bySMS ? 1 : 2,
        role: this.authService.getDecodedToken() !== null ? this.authService.getDecodedToken().auth : null,
      };

      this.authService
        .resendCode(data)
        .subscribe(
          (value) => {
            this.dataVCode.dialCode = this.bySMS ? `${dialCode}` : null;
            this.dataVCode.email =  this.bySMS ? this.dataVCode.email : email;
            this.dataVCode.phoneNumber =  this.bySMS ? `${dialCode}${mobile.split('-').join('')}` : this.dataVCode.phoneNumber;
            this.dataVCode.sentType = this.bySMS ? SentType.SMS : SentType.Mail

            if (value.status.toString().toLowerCase() === 'success') {
              localStorage.setItem("DataVerificationCode", JSON.stringify(this.dataVCode));
              this.router
                .navigate(['/verification-code'])
                .catch(console.log);
            }
            else{
              this.uiService.showError({
                message: value.error,
                removeCurrent: true
              })
            }

          },
          (httpError: HttpErrorResponse) => {

            const error: ErrorResponse = httpError.error;

            this.uiService.showError({
              message: error.title,
              removeCurrent: true
            })

          },
        );

    } else {
      this.uiService.markControlsAsTouched(this.resendForm);
    }
  }
}
