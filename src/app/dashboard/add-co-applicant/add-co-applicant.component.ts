import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import { HttpService } from '../../core/services/http.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../ui/ui.service';
import { CoApplicantInviteValues } from '../../shared/definitions/types/co-applicant.type';
import { InviteApplicantRequest } from '../../shared/definitions/requests/invite-applicant.request';
import { InviteReplaceRequest } from '../../shared/definitions/requests/invite-replace.request';
import { Router } from '@angular/router';
import { CustomValidators } from '../../shared/custom-validators';

@Component({
  selector: 'tev-add-co-applicant',
  templateUrl: './add-co-applicant.component.html',
  styleUrls: ['./add-co-applicant.component.scss']
})
export class AddCoApplicantComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  inviteForm: FormGroup;
  coApplicantTypes = CoApplicantInviteValues;

  formType: string = 'invite';  // 'invite', 'resend', 'accepted'

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.listenToMainApplication();
  }

  ngOnInit() {
    this.initForm();

    if (this.formType != 'invite') {
      this.inviteForm.controls['email'].setValue(this.mainApplication.invitationEmail);
      this.inviteForm.controls['firstName'].setValue(this.mainApplication.invitationFirstName);
      this.inviteForm.controls['lastName'].setValue(this.mainApplication.invitationLastName);
      this.inviteForm.controls['coApplicantType'].setValue(this.mainApplication.invitationCoapplicantType);
    }
  }

  initForm() {
    this.inviteForm = this.formBuilder
      .group({
        email: ['', [Validators.required, Validators.email, CustomValidators.emailValidator(), Validators.maxLength(80), CustomValidators.asciiValidator()]],
        firstName: ['', [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        lastName: ['', [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        coApplicantType: ['', Validators.required],
      });
  }

  getError(controlName: string): string {
    const { errors } = this.inviteForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  listenToMainApplication() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => {
        this.mainApplication = info;
        if (!this.mainApplication.allowNewApplicant) {
          if (this.mainApplication.supplementalPendingApplicationId != null) {
            this.formType = 'resend';
          }
          else {
            this.formType = 'accepted';
          }
        }
      });
  }

  submit() {
    if (this.inviteForm.valid) {
      const { email, firstName, lastName, coApplicantType } = this.inviteForm.value;

      if (this.formType == 'invite') {
        const inviteRequest: InviteApplicantRequest = {
          applicationId: this.mainApplication.applicationId,
          coApplicantType,
          email,
          firstName,
          lastName,
        };

        this.uiService
          .showInfo({
            message: 'Processing your request'
          });

        this.httpService
          .inviteCoApplicant(inviteRequest)
          .subscribe(() => {
            this.uiService
              .showSuccess({
                message: 'Invitation Sent'
              });

            this.httpService
              .getApplicationById(String(this.mainApplication.applicationId))
              .subscribe(() => {
                this.router
                  .navigate(['/dashboard', this.mainApplication.applicationId])
                  .catch(console.log);
              });
          });
      }
      else {
        let changed = (email != this.mainApplication.invitationEmail ||
          firstName != this.mainApplication.invitationFirstName ||
          lastName != this.mainApplication.invitationLastName ||
          coApplicantType != this.mainApplication.invitationCoapplicantType);

        if (changed) {
          const replaceRequest: InviteReplaceRequest = {
            pendingApplicationId: this.mainApplication.supplementalPendingApplicationId,
            coApplicantType,
            email,
            firstName,
            lastName,
          };

          this.uiService
            .showInfo({
              message: 'Processing your request'
            });

          this.httpService
            .replaceCoApplicant(replaceRequest)
            .subscribe(response => {
              this.httpService
                .getApplicationById(String(this.mainApplication.applicationId))
                .subscribe(application => {
                  this.mainApplication = application;
                  if (!changed) {
                    this.resendInvitation();
                  } else {
                    this.httpService
                      .getApplicationById(String(this.mainApplication.applicationId))
                      .subscribe(() => {
                        this.router
                          .navigate(['/dashboard', this.mainApplication.applicationId])
                          .catch(console.log);
                      });
                  }
                });

            });

        } else {
          this.resendInvitation();
        }
      }

    } else {
      this.markControlsAsTouched();
    }
  }

  resendInvitation() {
    this.uiService
      .showInfo({
        message: 'Resending invitation'
      });

    return this.httpService
      .resendCoApplicant(String(this.mainApplication.supplementalPendingApplicationId))
      .subscribe(() => {
        this.uiService
          .showSuccess({
            message: 'Invitation Sent'
          });

        this.httpService
          .getApplicationById(String(this.mainApplication.applicationId))
          .subscribe(() => {
            this.router
              .navigate(['/dashboard', this.mainApplication.applicationId])
              .catch(console.log);
          });
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.inviteForm);
  }


  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
