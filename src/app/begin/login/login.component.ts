import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../ui/ui.service';
import { AuthService } from '../../core/services/auth.service';
import { HttpService } from '../../core/services/http.service';
import { LoginVmRequest } from '../../shared/definitions/requests/login-vm.request';
import { Router } from '@angular/router';
import { ApplicationListItem } from '../../shared/definitions/responses/application-list.response';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../../shared/definitions/responses/error.response';
import { AlertType } from '../../shared/definitions/types/alert.type';
import { CustomValidators } from '../../shared/custom-validators';
import { ReCaptchaV3Service, OnExecuteData } from 'ng-recaptcha';
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs';
import { DataVerificationCode, SentType } from '../../shared/definitions/models/new-tenant-applicant.model';
import { ResendCodeRequest } from '../../shared/definitions/requests/send-sms.request';

@Component({
  selector: 'tev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  info: string;
  infoType: AlertType;
  hide: boolean;
  buttonText: string;
  token: string | undefined;
  applications: ApplicationListItem[] = [];
  private subscription: Subscription;
  currentYear:number;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private recaptchaV3Service: ReCaptchaV3Service
  ) { this.token = undefined; }


  ngOnInit() {
    this.initForm();
    this.subscription = this.recaptchaV3Service.onExecute.subscribe(
      (data: OnExecuteData) => {
        this.token = data.token;
      }
    );
    this.hide = true;
    this.buttonText = 'Show';
    this.currentYear=new Date().getFullYear();
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getApplications(dataUser) {
    this.httpService
      .getApplicationList(true)
      .subscribe(applicationsResponse => {
        if (applicationsResponse) {
          this.applications = applicationsResponse.applications;
          if ((dataUser.auth.includes('ROLE_REALTOR')) && (this.applications.length < 1)) {
            this.openDialog();
          } else if (dataUser.auth.includes('ROLE_CALL_CENTER_L1')) {
            this.router
              .navigate(['/verification-code'])
              .catch(console.log);
          } else {
            this.router
              .navigate(['/community/home'])
              .catch(console.log);
          }
        }

      });
    return this.applications;
  }

  initForm() {
    this.loginForm = this.formBuilder
      .group({
        login: ['', [Validators.required, Validators.email, CustomValidators.emailValidator(), Validators.maxLength(80), CustomValidators.asciiValidator()]],
        password: ['', [Validators.required, CustomValidators.asciiValidator()]]
      });
  }

  modifyVisibility() {
    this.hide = !this.hide;
    this.buttonText = this.hide ? 'Show' : 'Hide';
  }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const { errors } = this.loginForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialog, {
      panelClass: 'fit-dialog',
    })
    let instance = dialogRef.componentInstance
    instance['dialogTitle'] = 'Error'
    instance['dialogText'] = 'Our records indicate that the email listed on this account has been registered as a realtor account. For this reason you are not able to begin an application. Please create an account with a different email address in order to begin an application'
    dialogRef.afterClosed().subscribe(() =>
      this.authService.logOut().subscribe(() => {
        this.router.navigate(['/']).catch(console.log)
      })
    )
  }

  submit() {

    if (this.loginForm.valid) {

      this.uiService.showInfo({
        message: 'Processing the information',
        keepOpen: false
      });

      const { login, password } = this.loginForm.value;
      const data: LoginVmRequest = {
        username: login,
        password: password,
      };

      this.authService
        .login(data)
        .subscribe(
          () => {
            const dataUser = this.authService.getDecodedToken()
            this.uiService.showSuccess({
              message: 'Login Successful',
            });
            if(this.authService.redirectUrl){
              this.router
                .navigate([this.authService.redirectUrl])
                .catch(console.log);
            } else {
              this.getApplications(dataUser);
            }
          },
          (httpError: HttpErrorResponse) => {
            const error: ErrorResponse = JSON.parse(httpError.error);
            if (error.errorKey == "inactive.user") {
              this.uiService.showWarning({
                message: 'Inactive account! We have sent a code to the email registered in this account to restore it.',
                keepOpen: true
              });
              const dataVCode: DataVerificationCode = {
                email: login,
                phoneNumber: null,
                userId: error.userId,
                sentType: SentType.Mail,
                dialCode: null
              }
              const data: ResendCodeRequest = {
                user: dataVCode.userId,
                //value: this.bySMS ? `${dialCode}${mobile.split('-').join('')}` : email,
                value: dataVCode.email,
                //sentType: this.bySMS ? 1 : 2,
                sentType: SentType.Mail,
                role: this.authService.getDecodedToken() !== null ? this.authService.getDecodedToken().auth : null,
              };
              this.authService
              .resendCode(data)
              .subscribe(
                (value) => {
                  // dataVCode.dialCode = this.bySMS ? `${dialCode}` : null;
                  // dataVCode.email =  this.bySMS ? dataVCode.email : email;
                  // dataVCode.phoneNumber =  this.bySMS ? `${dialCode}${mobile.split('-').join('')}` : dataVCode.phoneNumber;
                  // dataVCode.sentType = this.bySMS ? SentType.SMS : SentType.Mail
                  if (value) {
                    localStorage.setItem("DataVerificationCode", JSON.stringify(dataVCode));
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
                });
              //localStorage.setItem("DataVerificationCode", JSON.stringify(dataVCode));
              // this.router
              //   .navigate(['/verification-code'])
              //   .catch(console.log);

            }
            else {
              this.uiService.showError({
                message: error.detail,
                removeCurrent: true
              });
            }
          },
        );
    } else {
      this.uiService.markControlsAsTouched(this.loginForm);
    }
  }

}


@Component({
  selector: 'login-dialog',
  templateUrl: './login.dialog.html'
})
export class LoginDialog {
  dialogTitle: String
  dialogText: String

  constructor() {
    this.dialogTitle = ''
    this.dialogText = ''
  }
}
