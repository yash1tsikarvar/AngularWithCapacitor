import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../core/services/http.service';
import {PhoneCode, phoneCodes} from '../../shared/definitions/constants/phone_codes';
import {CustomValidators} from '../../shared/custom-validators';
import {UiService} from '../../ui/ui.service';
import {UpdateOwnerInformationRequest} from '../../shared/definitions/requests/update-owner-information.request';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
//import containsLocation = google.maps.geometry.poly.containsLocation;

@Component({
  selector: 'tev-owner-verification',
  templateUrl: './owner-verification.component.html',
  styleUrls: ['./owner-verification.component.scss']
})
export class OwnerVerificationComponent implements OnInit {

  ownerInfoForm: FormGroup;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  mainApplication: ApplicationResponse;
  resent: boolean;
  phonemask: any;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  private emailsUsed: Record<string, string>;
  private emailsUsedSubject: BehaviorSubject<Record<string, string>> = new BehaviorSubject<Record<string, string>>(this.emailsUsed);

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
  }

  initForm() {

    let phone = this.mainApplication.ownerInfo.phone;
    let dialCode = '+1';
    let numberWithoutDial;
    this.emailsUsed = {
      'mainApplicant': this.mainApplication.applicants[0].email,
      'coApplicant': this.mainApplication.applicants[1] == null ? null : this.mainApplication.applicants[1].email,
    };
    this.emailsUsedSubject.next(this.emailsUsed);

    if (phone) {
      phone = phone.replace('+', '');
      dialCode = phone.indexOf(' ') === -1 ? phone.substring(0, 1) : phone.substring(0, phone.indexOf(' '));
      phone = phone.replace( dialCode, '').replace('-', '');
      numberWithoutDial =  phone.replace(' ', '' );
    }

    this.ownerInfoForm = this.formBuilder
      .group({
        fullName: [this.mainApplication.ownerInfo.fullName, [Validators.required, CustomValidators.asciiValidator()]],
        dialCode: [dialCode.startsWith('+') ? dialCode : '+'.concat(dialCode), Validators.required],
        phone: [numberWithoutDial, CustomValidators.phoneValidator()],
        email: [
          this.mainApplication.ownerInfo.email,
          [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator(),
            Validators.maxLength(80),
            CustomValidators.asciiValidator()
          ],
          [
            CustomValidators.usedEmailValidator('', this.emailsUsedSubject.asObservable())
          ]
        ],
      });

    this.subscribeToFormChanges();
    this.ownerInfoForm.updateValueAndValidity();
  }

  listenToMainApplication() {
    this.httpService
      .mainApplication$
      .subscribe(info => this.mainApplication = info);
  }

  subscribeToFormChanges() {
    this.ownerInfoForm
      .controls['dialCode']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(dialCode => {
        this.updatePhoneValidators(dialCode);
      });
    this.updatePhoneValidators(this.ownerInfoForm.controls['dialCode'].value);
  }

  submit() {
    if (this.ownerInfoForm.valid) {

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });
      const {fullName, dialCode, phone, email} = this.ownerInfoForm.value;
      const request: UpdateOwnerInformationRequest = {
        fullName: fullName,
        email: email,
        phone: `${dialCode} ${phone}`,
        ownerInfoLastEdit: this.mainApplication.ownerInfo.ownerInfoLastEdit,
        applicationId: this.mainApplication.applicationId
      };

      this.httpService
        .updateOwnerInformation(request)
        .subscribe(() => {

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {
              this.uiService
                .showSuccess({
                  message: 'Update and resend'
                });

              this.resent = true;
            });


        });

    } else {
      this.markControlsAsTouched();
    }
  }

  getError(controlName: string): string {
    const {errors} = this.ownerInfoForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.ownerInfoForm);
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.phoneValidator();
    if(dial == "+1"){
      phoneValidators.splice(2, 1, Validators.minLength(10));
      this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      this.phonemask = false;
      if(this.ownerInfoForm.controls['phone'].value){
        const cleanValue = this.ownerInfoForm.controls['phone'].value.replace(/-/ig, '');
        this.ownerInfoForm.controls['phone'].setValue(cleanValue);
        document.querySelector('#owner-phone')['value'] = cleanValue;
      }
    }

    this.ownerInfoForm.controls['phone'].setValidators(phoneValidators);
    this.ownerInfoForm.controls['phone'].updateValueAndValidity();
  }

}
