import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {getMaxAgeDate, getMinAgeDate} from '../../../shared/definitions/constants/dates-min-max-utils';
import {UiService} from '../../../ui/ui.service';
import {catchError, takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';
import HttpStatusCode from '../../../shared/utils/HTTPStatusCode';
import {AmericanDatePipe} from '../../../shared/pipes/american-date.pipe';
import {ApplicationListItem} from '../../../shared/definitions/responses/application-list.response';
import {PhotoSsnVerification} from '../../../shared/definitions/models/photo-sn-verification';
import {CustomValidators} from '../../../shared/custom-validators';


@Component({
  selector: 'tev-update-ssn-applicant',
  templateUrl: './update-ssn-applicant.component.html',
  styleUrls: ['./update-ssn-applicant.component.scss'],
  providers: [AmericanDatePipe],
  encapsulation: ViewEncapsulation.None
})
export class UpdateSsnApplicantComponent implements OnInit {

  childForm: FormGroup;

  firstNameDisabled = false;
  ssnDisabled = false;

  iconFirstNameDisabled = true;
  iconSsnDisabled = true;


  enableSend: boolean;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  @Input() application: ApplicationListItem;
  @Input() applicantFullName: string;


  data: PhotoSsnVerification;
  @Output()
  dataSent = new EventEmitter<string>();
  retry: boolean;

  @Input()
  set info(info: PhotoSsnVerification) {
    this.data = info;
  }

  constructor(private formBuilder: FormBuilder,
              private uiService: UiService,
              private httpService: HttpService,
  ) {
  }

  initForm() {

    this.childForm = this.formBuilder
      .group({
        id: [this.data.id],
        firstName: [this.data.firstName, [Validators.required, Validators.maxLength(30), CustomValidators.firstName()]],
        ssn: [this.data.ssn, [Validators.maxLength(4), CustomValidators.numberValidator()]],
      });

    this.firstNameDisabled = (this.data.firstName && this.data.firstName !== '') ? true : false;
    this.ssnDisabled = (this.data.ssn) ? true : false;

    if (this.data.firstName && this.data.firstName !== '') {
      this.childForm.controls['firstName'].disable();
      this.iconFirstNameDisabled = false;
    }
    if (this.data.ssn) {
      this.childForm.controls['ssn'].disable();
      this.iconSsnDisabled = false;
    }

  }

  ngOnInit() {

    this.initForm();

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID'
          && this.childForm.controls['ssn'].value.length === 4) {
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
      const nameCoincidence = (this.firstNameDisabled
        || this.childForm.controls['firstName'].value.toUpperCase() === this.data.step1Name.toUpperCase());
      const ssnCoincidence = (this.ssnDisabled
        || this.childForm.controls['ssn'].value === this.data.step1Ssn.substring(this.data.step1Ssn.length - 4));

      if (!this.retry && (!nameCoincidence || !ssnCoincidence)) {
        this.retry = true;
        this.uiService.confirmAction({
          showCancel: false,
          message: 'The information doesn\'t match with the application. ' +
            'Please make sure to upload the Socical Security Card for ' + this.applicantFullName +
            ' please try again.',
          type: 'warning',
          confirmButtonText: 'Retry'
        });

      } else {
        const idDocument = this.data.documentId;
        this.data = this.childForm.value;
        this.data.documentId = idDocument;
        this.callServiceVerifyDocument();
      }

    }
  }

  /**
   * Mark controls as touched to know where the error is.
   */
  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }


  callServiceVerifyDocument() {

    this.httpService
      .verifySsnDocument(this.data)
      .pipe(
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


  onChange(event: Event, mat: string) {

    if (mat === 'firstName' && this.childForm.controls['firstName'].value !== '') {
      this.iconFirstNameDisabled = false;
    }

    if (mat === 'ssn' && this.childForm.controls['ssn'].value.length !== 4) {
      this.childForm.controls['sss'].setErrors({ incorrect: true, message: 'Please enter a 4 digit value'});
      this.iconSsnDisabled = true;
    } else {
      this.iconSsnDisabled = false;
    }

  }

  retryUpload() {
    this.dataSent.emit('retry');
  }
}
