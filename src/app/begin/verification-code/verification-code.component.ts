import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ResendCodeRequest, VerifyCodeRequest } from '../../shared/definitions/requests/send-sms.request';
import { UiService } from '../../ui/ui.service';
import { AuthService } from '../../core/services/auth.service';
import { SmsCodeModel } from '../../shared/definitions/models/sms-code.model';
import { VerificationCodeDialog } from './verification-code-dialog/verification-code-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../../shared/definitions/responses/error.response';
import { DataVerificationCode, SentType } from '../../shared/definitions/models/new-tenant-applicant.model';


@Component({
  selector: 'verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {


  otp: string;
  validOtp: Boolean;

  phoneNumber: string;
  email: string;
  bySMS = true;
  invalidCode: boolean;
  errorMsg: string;
  dataVCode: DataVerificationCode;
  verifyBy: boolean;
  dialCodeUE: boolean;
  currentYear: number;
  selectedMethod: boolean;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInputRef: any;
  config: SmsCodeModel = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'padding': '0',
      'height': '55px',
      'width' : '3.2rem',
    }
  };

  constructor(
    public dialog: MatDialog,
    private uiService: UiService,
    public authService: AuthService,
    private router: Router
  ) {
    this.invalidCode = false;
    this.selectedMethod = false;
  }

  ngOnInit() {
    this.dataLoad();
    localStorage.setItem('callCenterL1Verified', 'false');
    this.currentYear=new Date().getFullYear();
  }

  dataLoad(){
    this.dataVCode = JSON.parse(localStorage.getItem('DataVerificationCode'));

    if (this.dataVCode) {
      this.email = this.dataVCode.email;
      this.phoneNumber = this.dataVCode.dialCode === '+1' ? this.dataVCode.phoneNumber : '';
      this.bySMS = this.dataVCode.sentType === SentType.SMS;
      this.dialCodeUE = this.dataVCode.dialCode === '+1';
    }
    if (this.authService.isCallCenterL1()) {
      this.phoneNumber = this.authService.getDecodedToken().pn;
      this.email = this.authService.getDecodedToken().em;
    }
  }
  back(){
    window.history.back();
  }

  onOtpChange(otp) {
    this.otp = otp;
    this.validOtp = false;
    if (this.otp.length == this.config.length) {
      this.validOtp = true;
    }

    if (this.otp.length <= this.config.length && this.invalidCode) {
      this.config.inputStyles = {
        'padding': '2.5rem 0 2.5rem 0'
      }
    }
  }

  validateVerificationCode() {
    this.invalidCode = false;
    const data: VerifyCodeRequest = {
      code: this.otp,
      value: this.getValue(),
      sentType: this.bySMS ? 1 : 2,
      role: this.authService.getDecodedToken() !== null ? this.authService.getDecodedToken().auth : null,
    };
    this.authService.verifyCode(data).subscribe(
      (value) => {
        if (!value) {
          this.invalidCode = false;
          if (this.authService.isCallCenterL1()) {
            localStorage.setItem('callCenterL1Verified', 'true');
            this.router
              .navigate(['/application-list'])
              .catch(console.log);
          } else {
            this.openDialog();
          }
        } else {
          this.invalidCode = true;
          this.changedStyleCode(value.error);
        }
      },
      (httpError: HttpErrorResponse) => {
        this.invalidCode = true;
        if (httpError.error.status != 401) {
          const error: ErrorResponse = JSON.parse(httpError.error);
        }
        this.changedStyleCode('Invalid code');
      },
    );
  }

  openDialog() {
    if (this.invalidCode) {
      this.changedStyleCode("");
    }

    this.dialog.open(VerificationCodeDialog, {
      panelClass: 'verification-dialog-container',
      disableClose: false,
      data: {
        bySMS: this.bySMS,
        validCode: this.validOtp ? !this.invalidCode : this.validOtp,
        value: this.bySMS ? this.phoneNumber : this.email
      }
    });
  }

  reSendCodeWithNewMailOrSMS() {
    this.dataVCode.sentType = this.bySMS ? SentType.SMS : SentType.Mail;
    localStorage.setItem("DataVerificationCode", JSON.stringify(this.dataVCode));
    this.router
      .navigate(['/re-send-code'])
      .catch(console.log);
  }

  reSendCode() {
    const data = this.getDataResendCodeRequest();

    this.sendCode(data);
  }

  sendCode(data: ResendCodeRequest) {
    this.authService
    .resendCode(data)
    .subscribe(
      (value) => {
        if (value.status.toString().toLowerCase() === 'success') {
          if (!this.verifyBy) {
            this.openDialog();
          } else {
            this.bySMS = !this.bySMS;
          }
        } else {
          this.uiService.showError({
            message: value.error,
            removeCurrent: true
          });
        }

        this.verifyBy = false;
      },
      (httpError: HttpErrorResponse) => {
        this.verifyBy = false;
        const error: ErrorResponse = JSON.parse(httpError.error);

        this.uiService.showError({
          message: error.title,
          removeCurrent: true
        });
      },
    );
  }

  resendCodeEmail() {
    this.bySMS = false;
    this.selectedMethod = true;
    const data = this.getDataResendCodeRequest();

    this.sendCode(data);
  }

  resendCodeSms() {
    this.bySMS = true;
    this.selectedMethod = true;
    const data = this.getDataResendCodeRequest();

    this.sendCode(data);
  }

  changedOption() {
    this.verifyBy = true;
    if (this.bySMS) {
      this.resendCodeSms();
    } else {
      this.resendCodeEmail();
    }
  }

  changedStyleCode(error: string) {
    this.errorMsg = error;
    if (error) {
      this.config.inputStyles = {
        'padding': '2.5rem 0 2.5rem 0',
        'border': 'solid 2.5px red'
      }
    }
    else {
      this.errorMsg = "Please enter the code below to continue";
      this.ngOtpInputRef.setValue("");
      this.config.inputStyles = {
        'padding': '2.5rem 0 2.5rem 0',
        'border': 'solid 2.5px'
      };
    }
  }

  getValue(): string {
    return this.authService.isCallCenterL1() ? this.authService.getDecodedToken().em :
      this.bySMS ? this.phoneNumber : this.email;
  }

  private getDataResendCodeRequest() {
    const bySMSCurrent = !this.verifyBy ? this.bySMS : !this.bySMS;
    let data: ResendCodeRequest;
    if (this.authService.isCallCenterL1()) {
      data = {
        user: null,
        value: this.authService.getDecodedToken().em,
        sentType: bySMSCurrent ? 1 : 2,
        role: this.authService.getDecodedToken() !== null ? this.authService.getDecodedToken().auth : null,
      };
    } else {
      data = {
        user: this.dataVCode.userId,
        value: bySMSCurrent ? this.dataVCode.phoneNumber : this.email,
        sentType: bySMSCurrent ? 1 : 2,
        role: this.authService.getDecodedToken() !== null ? this.authService.getDecodedToken().auth : null,
      };
    }
    return data;
  }

  maskEmail() {
    return this.email.replace(/^(.{2})[^@]+/, '$1***');
  }
}

