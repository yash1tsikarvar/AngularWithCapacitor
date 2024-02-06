import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {PersonalReferenceVerification} from '../../shared/definitions/models/personal-reference-verification.model';
import {HttpService} from '../../core/services/http.service';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RelationshipTypeValues} from '../../shared/definitions/forms/profile-form/references/relationship-types';
import {countries, PhoneCode, phoneCodes} from '../../shared/definitions/constants/phone_codes';
import {CustomValidators} from '../../shared/custom-validators';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {SendEmailReferenceVerification} from '../../shared/definitions/requests/send-email-referece-verification.request';

@Component({
  selector: 'tev-personal-reference-verification',
  templateUrl: './personal-reference-verification.component.html',
  styleUrls: ['./personal-reference-verification.component.scss']
})
export class PersonalReferenceVerificationComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  relationshipsValues = RelationshipTypeValues;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');
  infoFrom: FormGroup;
  phonemask: any;

  reference: PersonalReferenceVerification;

  idReference: number;
  resended: boolean;

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idReference = Number(this.route.snapshot.paramMap.get('id'));
    this.listenToMainApplication();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let phone = this.reference.cellPhone;
    let dialCode = '+1';
    let numberWithoutDial;
    if (phone) {
      phone = phone.replace('+', '');
      dialCode = phone.indexOf(' ') === -1 ? phone.substring(0, 1) : phone.substring(0, phone.indexOf(' '));
      phone = phone.replace( dialCode, '').replace('-', '');
      numberWithoutDial =  phone.replace(' ', '' );
    }
    this.infoFrom = this.formBuilder
      .group({
        name: [this.reference.name, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        relationship: [this.reference.relationship, [Validators.required, CustomValidators.asciiValidator()]],
        country: [this.reference.country, [Validators.required, Validators.maxLength(2)]],
        dialCode: [dialCode.startsWith('+') ? dialCode : '+'.concat(dialCode), Validators.required],
        phone: [numberWithoutDial, CustomValidators.phoneValidator()],
        email: [
          this.reference.email,
          [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator(),
            Validators.maxLength(50),
            CustomValidators.asciiValidator()
          ],
        ],
      });
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges() {
    this.infoFrom
      .controls['dialCode']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(dialCode => {
        this.updatePhoneValidators(dialCode);
      });
    this.updatePhoneValidators(this.infoFrom.controls['dialCode'].value);
  }

  listenToMainApplication() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {

        this.mainApplication = application;
        this.reference = this.mainApplication.personalReferenceVerification.find(x => x.idReference === this.idReference);

        if (!this.reference) {
          this.router
            .navigate(['/dashboard', this.mainApplication.applicationId])
            .catch(console.log);
        }

      });
  }

  submit() {
    if (this.infoFrom.valid) {

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });
      const {name, relationship, country, dialCode, phone, email} = this.infoFrom.value;

      this.reference.name = name;
      this.reference.relationship = relationship;
      this.reference.country = country;
      this.reference.cellPhone = `${dialCode} ${phone}`;
      this.reference.email = email;

      this.httpService
        .updateReferenceInformation(this.reference)
        .subscribe(() => {

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {
              this.uiService
                .showSuccess({
                  message: 'Updated and Sent'
                });

              this.resended = true;
            });


        });

    } else {
      this.markControlsAsTouched();
    }
  }

  sendEmailPersonalReference() {


    const emailReferenceDto: SendEmailReferenceVerification = {
      applicantId: this.reference.applicantId,
      id: this.reference.personalVerificationId,
      applicationId: this.reference.applicationId,
      type: 'REFERENCE'
    };

    this.httpService
      .resendEmailToReferenceInformation(emailReferenceDto)
      .subscribe(() => {

        this.httpService
          .getApplicationById(this.mainApplication.applicationId.toString())
          .subscribe(() => {
            this.uiService
              .showSuccess({
                message: 'Email Resent!'

              });

            this.resended = true;
          });

      });
  }

  getError(controlName: string): string {
    const {errors} = this.infoFrom.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.infoFrom);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next(true);
    this.reference = null;
    this.infoFrom = null;
  }


  showSubmited() {
    return this.resended ||
      (this.reference.hideEmailLink
        && !this.reference.rejectReason);
  }

  showSubmitButton() {
    return !this.showSubmited();
  }


  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.phoneValidator();
    if(dial === "+1"){
      phoneValidators.splice(2, 1, Validators.minLength(10));
      this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      this.phonemask = false;
      if(this.infoFrom.controls['phone'].value){
        const cleanValue = this.infoFrom.controls['phone'].value.replace(/-/ig, '');
        this.infoFrom.controls['phone'].setValue(cleanValue);
        document.querySelector('#owner-phone')['value'] = cleanValue;
      }
    }

    this.infoFrom.controls['phone'].setValidators(phoneValidators);
    this.infoFrom.controls['phone'].updateValueAndValidity();
  }

}
