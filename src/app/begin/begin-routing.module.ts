import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RegisterComponent} from './register/register.component';
import {BeginComponent} from './begin/begin.component';
import {UserNotLoggedInGuard} from '../core/guards/user-not-logged-in.guard';
import {RegisterSuccessComponent} from './register-success/register-success.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ReSendCodeComponent } from './verification-code/re-send-code/re-send-code.component';

const routes: Routes = [
  {
    path: '',
    component: BeginComponent,
    children: [
      {path: '', component: IntroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'change-password/:key', component: ChangePasswordComponent},
      {path: 'verification-code', component: VerificationCodeComponent},
      {path: 're-send-code', component: ReSendCodeComponent},
    ],
    canActivate: [UserNotLoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BeginRoutingModule {}
