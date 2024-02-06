import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {HttpService} from '../../core/services/http.service';
import {CustomValidators} from '../../shared/custom-validators';
import {PasswordChangeRequest} from '../../shared/definitions/requests/password-change.request';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '@angular/common';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;

  destroyed$: Subject<boolean> = new Subject<boolean>();

  changePasswordForm: FormGroup;

  constructor(
    private uiService: UiService,
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.listenToApplicationInfo();
  }


  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => this.mainApplication = application);
  }

  initForm() {
    this.changePasswordForm = this.formBuilder
      .group({
        currentPassword: ['', Validators.required],
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.passwordStrength()
          ]
        ],
      });

    const confirmPasswordControl = new FormControl(
      '',
      {
        validators:
          [
            Validators.required,
            CustomValidators.sameValueAs(this.changePasswordForm, 'newPassword')
          ]
      }
    );

    this.changePasswordForm.addControl('confirmPassword', confirmPasswordControl);
  }

  submit() {
    if (this.changePasswordForm.valid) {

      this.uiService.showInfo({
        message: 'Processing your request'
      });

      const {currentPassword, newPassword} = this.changePasswordForm.value;

      const request: PasswordChangeRequest = {
        currentPassword,
        newPassword
      };

      this.httpService
        .changePassword(request)
        .subscribe(
          () => {
            this.uiService
              .showSuccess({
                message: 'Password Updated',
                removeCurrent: true
              });

            this.location.back();
          },
          (httpError: HttpErrorResponse) => {
            const {error} = httpError;

            this.uiService
              .showError({
                message: error.title
              });
          },
        );

    } else {
      this.markControlsAsTouched();
    }
  }

  getError(controlName: string): string {
    const {errors} = this.changePasswordForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.changePasswordForm);
  }

  splitFullName(fullName: string, value: number = 0) {
    return fullName.split(' ')[value];
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }
}
