import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {getMaxAgeDate, getMinAgeDate} from '../../../shared/definitions/constants/dates-min-max-utils';
import {UiService} from '../../../ui/ui.service';
import {MobileIdVerification, PhotoIdVerification} from '../../../shared/definitions/models/photo-id-verification';
import {catchError, takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';
import HttpStatusCode from '../../../shared/utils/HTTPStatusCode';
import {AmericanDatePipe} from '../../../shared/pipes/american-date.pipe';
import {ApplicationListItem} from '../../../shared/definitions/responses/application-list.response';
import * as accents from 'remove-accents';
import {CustomValidators} from '../../../shared/custom-validators';


@Component({
  selector: 'tev-update-id-applicant',
  templateUrl: './update-id-applicant.component.html',
  styleUrls: ['./update-id-applicant.component.scss'],
  providers: [AmericanDatePipe],
  encapsulation: ViewEncapsulation.None
})
export class UpdateIdApplicantComponent implements OnInit {

  childForm: FormGroup;
  maxDate: Date;
  minDate: Date;

  firstNameDisabled = false;
  lastNameDisabled = false;
  dobDisabled = false;

  iconFirstNameDisabled = true;
  iconLastNameDisabled = true;
  iconDobDisabled = true;


  enableSend: boolean;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  @Input() application: ApplicationListItem;
  @Input() applicantFullName: string;
  @Input() checkFirstStep: boolean = Boolean(1);
  @Input() token: string;


  applicantData: PhotoIdVerification;
  @Output()
  dataSent = new EventEmitter<string>();
  retry: boolean;

  @Input()
  set info(info: PhotoIdVerification) {
    this.applicantData = info;
  }

  constructor(private formBuilder: FormBuilder,
              private uiService: UiService,
              private httpService: HttpService,
              private americanDate: AmericanDatePipe,
  ) {
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        id: [this.applicantData.id],
        firstName: [this.applicantData.firstName, [Validators.required, Validators.maxLength(30), CustomValidators.firstName()]],
        lastName: [this.applicantData.lastName, [Validators.required, Validators.maxLength(30), CustomValidators.lastName()]],
        dob: [this.applicantData.dob, [Validators.required]],
      });

    this.firstNameDisabled = (this.applicantData.firstName && this.applicantData.firstName !== '') ? true : false;
    this.lastNameDisabled = (this.applicantData.lastName && this.applicantData.lastName !== '') ? true : false;
    this.dobDisabled = (this.applicantData.dob) ? true : false;

    if (this.applicantData.firstName && this.applicantData.firstName !== '') {
      this.childForm.controls['firstName']
        .setValue(this.applicantData.step1Name ? this.applicantData.step1Name : this.applicantData.firstName);
      this.childForm.controls['firstName'].disable();
      this.iconFirstNameDisabled = false;
    }

    if (this.applicantData.lastName && this.applicantData.lastName !== '') {
      this.childForm.controls['lastName']
        .setValue(this.applicantData.step1Lastname ? this.applicantData.step1Lastname : this.applicantData.lastName);
      this.childForm.controls['lastName'].disable();
      this.iconLastNameDisabled = false;
    }

    if (this.applicantData.dob) {
      this.childForm.controls['dob'].disable();
      this.iconDobDisabled = false;
    }

  }

  ngOnInit() {
    this.maxDate = getMaxAgeDate();
    this.minDate = getMinAgeDate();
    this.initForm();

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID') {
          this.enableSend = true;
        } else {
          this.enableSend = false;
        }
      });
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    } else {

      if (this.checkFirstStep) {

        const nameCoincidence = (this.firstNameDisabled
          || this.childForm.controls['firstName'].value.toUpperCase() === this.applicantData.step1Name.toUpperCase());
        const lastNameCoincidence = (this.lastNameDisabled
          || this.childForm.controls['lastName'].value.toUpperCase() === this.applicantData.step1Lastname.toUpperCase());
        const dobCoincidence = (this.dobDisabled ||
          this.americanDate.transform(this.childForm.controls['dob'].value) === this.americanDate.transform(this.applicantData.step1dob));

        if (!this.retry && (!nameCoincidence || !lastNameCoincidence || !dobCoincidence)) {
          this.retry = true;
          this.uiService.confirmAction({
            showCancel: false,
            message: 'The information doesn\'t match with the application. Please make sure to upload the ID for '
              + this.applicantFullName + ' please try again.',
            type: 'warning',
            confirmButtonText: 'Retry'
          });
        } else {
          this.update();
        }

      } else {
        this.update();
      }

    }
  }

  update() {
    const idDocument = this.applicantData.documentId;
    this.applicantData = this.childForm.value;
    this.applicantData.documentId = idDocument;
    this.callServiceVerifyDocument();
  }

  /**
   * Mark controls as touched to know where the error is.
   */
  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }


  callServiceVerifyDocument() {

    let updateDoc = this.httpService.verifyIdDocument(this.applicantData);
    if (!this.checkFirstStep) {
      const mobileUpload: MobileIdVerification = {
        applicantInfoDTO: this.applicantData,
        documentId: this.applicantData.documentId,
        token: this.token
      };

      updateDoc = this.httpService.verifyIdFromMobile(mobileUpload);
    }

    updateDoc.pipe(
      catchError(error => {
        this.uiService
          .showError({
            message: `There was a problem uploading the file`
          });
        return of(error);
      })
    )
      .subscribe(data => {
        if (data == null || data.status === HttpStatusCode.OK) {
          this.dataSent.emit('finish');
        }
      });

  }

  getError(formControl: string) {
    const {errors} = this.childForm.controls[formControl];

    return this.uiService.getControlError(errors);
  }

  removeAccents(event: any, control: string) {
    this.childForm.controls[control].setValue(accents.remove(event.target.value));
    this.childForm.controls[control].updateValueAndValidity();
  }

  onChange(event: Event, mat: string) {

    if (mat === 'firstName' && this.childForm.controls['firstName'].value !== '') {
      this.removeAccents(event, mat);
      this.iconFirstNameDisabled = false;
    }
    if (mat === 'lastName' && this.childForm.controls['lastName'].value !== '') {
      this.removeAccents(event, mat);
      this.iconLastNameDisabled = false;
    }

  }

  onChangeDate(dob: string) {
    if (dob === 'dob' && this.childForm.controls['dob'].value !== '') {
      this.iconDobDisabled = false;
    }
  }

  retryUpload() {
    this.dataSent.emit('retry');
  }
}
