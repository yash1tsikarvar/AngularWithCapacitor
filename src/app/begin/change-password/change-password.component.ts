import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {HttpService} from '../../core/services/http.service';
import {ResetPasswordFinishRequest} from '../../shared/definitions/requests/reset-password-finish.request';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomValidators} from '../../shared/custom-validators';
import {Subject, combineLatest} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'tev-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


  formReady$: Subject<boolean> = new Subject<boolean>();
  resetKeyReady$: Subject<boolean> = new Subject<boolean>();

  changePasswordForm: FormGroup;
  resetKey: string;
  currentYear:number;

  hide: boolean = true;
  buttonText: string;
  hideCP: boolean = true;
  buttonTextCP: string;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private httpService: HttpService,
    private router: Router,
    private activeRoute:ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.defaultValues();
    this.listenToUrlParams();
    this.checkToken();
  }

  ngOnInit() {
    this.initForm();
    this.currentYear=new Date().getFullYear();
  }

  checkToken() {
    this.httpService
      .checkExpiredToken(this.resetKey)
      .subscribe(
        (response) => {
          if (response === true){
            this.openDialog();
            this.uiService.clearCurrentToastr();
          }
        },
        (httpError: HttpErrorResponse) => {

        const {error} = httpError;

        this.uiService.showError({message: error.title});

        }
      )
  }

  initForm() {
    this.changePasswordForm = this.formBuilder
      .group({
        key: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.passwordStrength()
          ]
        ],
        confirmPassword: ['', [Validators.required]],
      },{
        validator: [CustomValidators.matchingInputs('password', 'confirmPassword')]
      }
      );

    // const confirmPasswordControl = new FormControl('', {
    //   validators: [Validators.required, CustomValidators.sameValueAs(this.changePasswordForm, 'password')]
    // });

    // this.changePasswordForm.addControl('confirmPassword', confirmPasswordControl);

    this.formReady$.next(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {panelClass: 'fit-dialog'});
  }

  modifyVisibility() {
    this.hide = !this.hide;
    this.buttonText = this.hide ? 'Show' : 'Hide';
  }

  modifyVisibilityCP() {
    this.hideCP = !this.hideCP;
    this.buttonTextCP = this.hideCP ? 'Show' : 'Hide';
  }

  submit() {
    if (this.changePasswordForm.valid) {

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });

      const {key, password} = this.changePasswordForm.value;
      const request: ResetPasswordFinishRequest = {
        key,
        newPassword: password
      };

      this.httpService
        .resetPasswordFinish(request)
        .subscribe(
          () => {
            this.uiService
              .showSuccess({
                message: 'Your password has been reset'
              });

            this.router
              .navigate(['/login'])
              .catch(console.log);
          },
          (httpError: HttpErrorResponse) => {
            const {error} = httpError;

            if(error.title == 'No applier was found for this reset key or key has expired') {
                this.openDialog();
                this.uiService.clearCurrentToastr();
            } else {
                this.uiService.showError({message: error.title});
            }

          },
        )

    } else {
      this.markControlsAsTouched();
    }
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.changePasswordForm);
  }

  getError(controlName: string): string {
    const {errors} = this.changePasswordForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  listenToUrlParams() {

    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {key} = params;
        this.resetKey = key;
        this.resetKeyReady$.next(true);
      });
  }

  defaultValues() {
    combineLatest([this.formReady$, this.resetKeyReady$])
      .subscribe(() => {
        this.changePasswordForm.controls['key'].setValue(this.resetKey);
      });
  }

}

@Component({
    selector: 'change-password-dialog',
    templateUrl: './change-password.dialog.html'
  })
  export class ChangePasswordDialog {}
