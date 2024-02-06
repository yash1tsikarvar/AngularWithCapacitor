import { Component, OnInit, Inject } from '@angular/core';
import { UiService } from '../../ui/ui.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationListItem } from '../../shared/definitions/responses/application-list.response';
import { AuthService } from '../../core/services/auth.service';
import { LoginVmRequest } from '../../shared/definitions/requests/login-vm.request';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../../shared/definitions/responses/error.response';
import { AlertType } from '../../shared/definitions/types/alert.type';
import { CustomValidators } from '../../shared/custom-validators';
import { DataVerificationCode, SentType } from '../../shared/definitions/models/new-tenant-applicant.model';
import { ResendCodeRequest } from '../../shared/definitions/requests/send-sms.request';

@Component({
  selector: 'tev-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  loginForm: FormGroup;

  info: string;
  infoType: AlertType;
  hide: boolean;
  buttonText: string;
  currentYear:number;
  applications: ApplicationListItem[] = [];

  isLoading: boolean;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.initForm();
    this.hide = true;
    this.buttonText = 'Show';
    this.currentYear = new Date().getFullYear();
    this.isLoading = false;
    this.getNoticePlatform();
  }

  initForm() {
    const widgetStorage = localStorage.getItem('rWidget-faces');
    localStorage.clear();
    if (widgetStorage) localStorage.setItem('rWidget-faces', widgetStorage);
    this.loginForm = this.formBuilder
      .group({
        login: ['', [Validators.required, Validators.email, CustomValidators.emailValidator(), Validators.maxLength(80), CustomValidators.asciiValidator()]],
        password: ['', [Validators.required, CustomValidators.asciiValidator()]]
      });
  }

  getApplications(dataUser) {
    this.isLoading = true;
    this.httpService
      .getApplicationList(true)
      .subscribe(applicationsResponse => {
        if (applicationsResponse) {
          //console.log(this.authService.redirectUrl)
          this.applications = applicationsResponse.applications;
          if ((dataUser.auth.includes('ROLE_REALTOR')) && (this.applications.length < 1)) {
            this.openDialogRealtor();
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
        this.isLoading = false;
      });
    return this.applications;
  }

  redirectLogic(dataUser) {
    // if ((dataUser.auth.includes('ROLE_REALTOR')) && (this.applications.length < 1)) {
    //   this.openDialogRealtor();
    // } else
    if (dataUser.auth.includes('ROLE_CALL_CENTER_L1')) {
      this.router
        .navigate(['/verification-code'])
        .catch(console.log);
    } else {
      this.router
        .navigate(['/community/home'])
        .catch(console.log);
    }
  }

  getNoticePlatform() {
    this.httpService
      .getNoticePlatform()
      .subscribe(noticePlatformResponse => {
        if (noticePlatformResponse) {
          if(noticePlatformResponse.downtime){
            this.uiService.showWarning({
              message: noticePlatformResponse.notice,
              positionClass: "toast-top-large-width",
              keepOpen: true
            });
          }
        }

      });
  }

  openDialogRealtor() {
    const dialogRef = this.dialog.open(IntroDialog, {
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

      this.isLoading = true;
      this.authService
        .login(data)
        .subscribe(
          () => {
            this.isLoading = false;
            const dataUser = this.authService.getDecodedToken();
            this.uiService.showSuccess({
              message: 'Login Successful',
            });
            if(this.authService.redirectUrl){
              this.router
                .navigate([this.authService.redirectUrl])
                .catch(console.log);
            } else {
              // this.getApplications(dataUser);
              this.redirectLogic(dataUser);
            }
          },
          (httpError: HttpErrorResponse) => {
            this.isLoading = false;
            const error: ErrorResponse = JSON.parse(httpError.error);
            if (error.errorKey == "inactive.user") {
              this.uiService.showWarning({
                message: 'Inactive account! We have sent a code to the email registered in this account to restore it.',
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

  openDialog(btnNewAccount: boolean) {
    this.dialog.open(WhoWeAreDialog, {
      panelClass: 'begin-dialog-container',
      disableClose: false,
      data: { redirectRegister: btnNewAccount }
    });
  }

  openExternalUrl(){
    window.open('https://support.tenantevaluation.com/support/solutions/articles/65000166337-getting-started-with-your-application', '_blank');
  }
}


@Component({
  selector: 'who-we-are-dialog',
  templateUrl: './who-we-are-dialog.html',
  styleUrls: ['./intro.component.scss']
})
export class WhoWeAreDialog {

  constructor(
    public dialogRef: MatDialogRef<WhoWeAreDialog>,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  goToRegister() {
    this.dialogRef.close();
    if (this.data.redirectRegister)
      this.router.navigate(['/register']);
  }

}

@Component({
  selector: 'intro-dialog',
  templateUrl: './intro.dialog.html'
})
export class IntroDialog {
  dialogTitle: String
  dialogText: String

  constructor() {
    this.dialogTitle = ''
    this.dialogText = ''
  }
}

export interface DialogData {
  redirectRegister: any;
}
