import {NgModule} from '@angular/core';
import {IntroComponent, WhoWeAreDialog, IntroDialog} from './intro/intro.component';
import {SharedModule} from '../shared/shared.module';
import {BeginRoutingModule} from './begin-routing.module';
import {LoginComponent, LoginDialog} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RegisterComponent, RegisterDialogInactiveUser, RegisterDialogUserExist, InfoNumberPhoneDialog} from './register/register.component';
import {BeginComponent} from './begin/begin.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';
import {ChangePasswordComponent, ChangePasswordDialog} from './change-password/change-password.component';
import {NgOtpInputModule } from 'ng-otp-input';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import {VerificationCodeComponent } from './verification-code/verification-code.component';
import {VerificationCodeDialog } from './verification-code/verification-code-dialog/verification-code-dialog.component';
import {ReSendCodeComponent } from './verification-code/re-send-code/re-send-code.component';
import {recaptchaKeys } from '../shared/definitions/constants/recaptcha_key';
//import { HomeComponent } from '../community/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    BeginRoutingModule,
    NgOtpInputModule,
    RecaptchaV3Module
  ],
  declarations: [
    IntroComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    BeginComponent,
    RegisterSuccessComponent,
    ChangePasswordComponent,
    RegisterDialogInactiveUser,
    RegisterDialogUserExist,
    InfoNumberPhoneDialog,
    ChangePasswordDialog,
    WhoWeAreDialog,
    LoginDialog,
    IntroDialog,
    VerificationCodeComponent,
    VerificationCodeDialog,
    ReSendCodeComponent,
    //HomeComponent
  ],
  entryComponents: [
    RegisterDialogInactiveUser,
    RegisterDialogUserExist,
    InfoNumberPhoneDialog,
    ChangePasswordDialog,
    WhoWeAreDialog,
    LoginDialog,
    IntroDialog,
    VerificationCodeDialog
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: recaptchaKeys.siteKey
    }
  ],
})
export class BeginModule { }
