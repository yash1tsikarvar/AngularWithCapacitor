import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {CustomValidators} from '../../shared/custom-validators';
import { Location } from '@angular/common';

@Component({
  selector: 'tev-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordInitForm: FormGroup;
  currentYear:number;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private httpService: HttpService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.initForm();
    this.currentYear=new Date().getFullYear();
  }

  initForm() {
    this.resetPasswordInitForm = this.formBuilder
      .group({
        email: ['', [Validators.email, CustomValidators.emailValidator(), Validators.maxLength(80), CustomValidators.asciiValidator()]]
      })
  }

  onBack() {
    this.location.back();
}

  submit() {
    if (this.resetPasswordInitForm.valid) {

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });

      const {email} = this.resetPasswordInitForm.value;

      this.httpService
        .resetPasswordInit(email)
        .subscribe(
          () => {
            this.uiService
              .showSuccess({
                message: 'We have sent a key to your email.',
                removeCurrent: true
              });

            this.router
              .navigate(['/login'])
              .catch(console.log);

        },
          (httError: HttpErrorResponse) =>{
            const {error} = httError;

            if (error.title === 'Email address not registered') {
              this.uiService
              .showError({
                message: 'Couldn’t find a Tenant Evaluation account associated with this email',
                removeCurrent: true
              });
            } else {
              this.uiService.showError({message: error.title, removeCurrent: true});
            }
          }
        );

    } else {
      this.markControlsAsTouched()
    }
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.resetPasswordInitForm);
  }

  getError(controlName: string): string {
    const {errors} = this.resetPasswordInitForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

}
