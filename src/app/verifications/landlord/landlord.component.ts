import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LandlordAnswer} from '../../shared/definitions/models/landlord.answers.model';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {LandlordVerificationRequestDTO, ViewLandlordVerificationDTO} from '../../shared/definitions/models/landlord-verification.model';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import {UiService} from '../../ui/ui.service';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'tev-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss'],
})
export class LandlordComponent implements OnInit, AfterViewInit {

  id: string;
  hash: string;
  landlord: ViewLandlordVerificationDTO;

  status = '';
  errorData = '';

  title = 'Residence / Landlord Verification Form';
  type = 'Landlord';
  form: FormGroup;
  know: boolean = Boolean(0);
  data: LandlordAnswer [];
  showError: boolean;

  signatureCanvas: HTMLCanvasElement;
  signatureTextCanvas: HTMLCanvasElement;
  signaturePad: SignaturePad;

  @ViewChild('signaturePad2', {static: false}) signaturePadRef2: ElementRef;
  @ViewChild('signatureText2', {static: false}) signatureTextRef2: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCanvasSize();
  }

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private activeRoute: ActivatedRoute,
              private uiService: UiService,
              private route: Router) {
    this.listenToUrlParams();
  }

  ngAfterViewInit() {

  }

  initSignature() {
    if (this.signaturePadRef2 && this.signaturePadRef2.nativeElement) {
      this.signatureCanvas = this.signaturePadRef2.nativeElement;
      this.signatureTextCanvas = this.signatureTextRef2.nativeElement;
      this.setCanvasSize();
      this.signaturePad = new SignaturePad(this.signatureCanvas);

      this.signaturePad.onEnd = () => {
        const signature = this.signaturePad.toDataURL('image/png');

        this.form
          .patchValue({
            signature: signature
          });

      };
    }
  }

  setCanvasSize() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    if (this.signatureCanvas) {
      this.signatureCanvas.width = this.signatureCanvas.offsetWidth * ratio;
      this.signatureCanvas.height = this.signatureCanvas.offsetHeight * ratio;
      this.signatureCanvas.getContext('2d').scale(ratio, ratio);

      if (this.signaturePad) {
        this.signaturePad.clear();
      }
    }

    if (this.signatureTextCanvas) {
      this.signatureTextCanvas.width = this.signatureTextCanvas.offsetWidth * ratio;
      this.signatureTextCanvas.height = this.signatureTextCanvas.offsetHeight * ratio;
      this.signatureTextCanvas.getContext('2d').scale(ratio, ratio);
    }

  }

  clearSignature() {
    this.signaturePad.clear();
    this.form
      .patchValue({
        signature: null
      });
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe(params => {
        this.id = params.id;
        this.hash = params.hash;
        this.getDataFromService(this.id, this.hash);
      });
  }

  ngOnInit() {
    this.form = this.fb.group({
      knows: ['', Validators.required],
      remarks: ['', null],
      verifierName: ['', Validators.required],
      verifierEmail: ['', Validators.email],
      verifierPosition: ['', Validators.required],
      sendResult: [],
      signature: [],
      agreeAndAuthorize: []
    });

  }

  initData() {
    this.data = [
      {
        formGroup: 'moveInCorrect',
        formName: 'result',
        questionHtmlText: 'Has <strong>' + this.landlord.applicantName + '<strong> rented this property for <strong>'
          + this.landlord.strMonthYear + '</strong>?',
        answers: [
          {
            id: 'Yes',
            value: 'Y',
            txtResponse: []
          },
          {
            id: 'No',
            value: 'N',
            txtResponse: [{
              text: 'Year',
              fieldName: 'years',
              type: 'number',
              validators: [Validators.required, Validators.max(9999), Validators.min(-1)]
            }, {
              text: 'Months',
              fieldName: 'months',
              type: 'number',
              validators: [Validators.required, Validators.max(9999), Validators.min(-1)]
            }]
          },
        ]
      },
      {
        formGroup: 'latePayment',
        formName: 'result',
        questionHtmlText: 'Has there been any late payments?',
        answers: [
          {
            id: 'Yes',
            value: 'Y',
            txtResponse: [{
              text: 'How many late payments were made? Enter amount',
              fieldName: 'lateCount',
              type: 'number',
              validators: [Validators.required, Validators.max(9999), Validators.min(0)]
            }
            ]
          },
          {
            id: 'No',
            value: 'N',
            txtResponse: []
          },
          {
            id: 'N/A',
            value: 'K',
            txtResponse: [{
              text: 'Write below the reason why you cannot release this information',
              fieldName: 'latePaymentsNoAnswer',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          }
        ]
      },
      {
        formGroup: 'properNotice',
        formName: 'result',
        questionHtmlText: 'Was Proper notice to vacate given?',
        answers: [
          {
            id: 'Yes',
            value: 'Y',
            txtResponse: []
          },
          {
            id: 'No',
            value: 'N',
            txtResponse: [{
              text: 'Please explain',
              fieldName: 'properNoticeRemarks',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          },

        ]
      },
      {
        formGroup: 'litigation',
        formName: 'result',
        questionHtmlText: 'Has there been any form of litigations or violations against <strong>'
          + this.landlord.applicantName + '</strong> ? ' ,
        answers: [
          {
            id: 'Yes',
            value: 'Y',
            txtResponse: [{
              text: 'Please explain',
              fieldName: 'litigationRemarks',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          },
          {
            id: 'No',
            value: 'N',
            txtResponse: []
          },
          {
            id: 'N/A',
            value: 'K',
            txtResponse: [{
              text: 'Write below the reason why you cannot release this information',
              fieldName: 'litigationNoAnswer',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          },
        ]
      },
      {
        formGroup: 'propertyCondition',
        formName: 'result',
        questionHtmlText: 'Has the property been kept in good conditions?',
        answers: [
          {
            id: 'Yes',
            value: 'G',
            txtResponse: []
          },
          {
            id: 'No',
            value: 'B',
            txtResponse: []
          },
          {
            id: 'N/A',
            value: 'K',
            txtResponse: [{
              text: 'Write below the reason why you cannot release this information',
              fieldName: 'propertyConditionNoAnswer',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          },
        ]
      },
      {
        formGroup: 'wouldRent',
        formName: 'result',
        questionHtmlText: 'Would you be willing to re-rent to <strong>' + this.landlord.applicantName + '</strong> in the future?',
        answers: [
          {
            id: 'Yes',
            value: 'Y',
            txtResponse: []
          },
          {
            id: 'No',
            value: 'N',
            txtResponse: []
          },
          {
            id: 'N/A',
            value: 'K',
            txtResponse: [{
              text: 'Write below the reason why you cannot release this information',
              fieldName: 'wouldRentNoAnswer',
              type: 'text',
              maxLength: 255,
              validators: [Validators.required, Validators.maxLength(255)]
            }]
          },
        ]
      }
    ];
  }

  getDataFromService(id: string, hash: string) {

    this.httpService.getLandLordVerification(id, hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorLandlord(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  correctResponse(res: ViewLandlordVerificationDTO) {
    if (res) {
      this.landlord = res;
      if (res.status === 'Complete') {
        this.status = 'Complete';
        return;
      }
      this.initData();
      this.initForm();
      this.status = this.landlord.status;
      return;
    }

    this.errorData = 'Can´t Parse Object';
    return;
  }

  errorLandlord(error: HttpErrorResponse) {
    switch (error.status) {
      case HttpStatusCode.NOT_FOUND:
        this.errorData = 'Verification Not Found';
        break;
      default:
        this.errorData = error.message;
        break;
    }
    this.status = 'Complete';
  }

  initForm() {

    this.data.forEach((value) => {
      const newFormGroup = new FormGroup({});

      newFormGroup.addControl(value.formName, new FormControl(''));
      value.answers.forEach((answer) => {
        answer.txtResponse.forEach((control) => {
          newFormGroup.addControl(control.fieldName, new FormControl(''));
        });
      });
      this.form.addControl(value.formGroup, newFormGroup);
    });
    this.form.get('knows').valueChanges.subscribe(val => {
      this.changeKnows(val);
    });
    this.form.get('sendResult').valueChanges.subscribe(val => {
      if (val) {
        this.form.get('verifierEmail').setValidators(Validators.required);
      } else {
        this.form.get('verifierEmail').clearValidators();
      }
      this.form.get('verifierEmail').updateValueAndValidity();
    });

  }

  changeKnows(val: string) {
    this.know = (val && val === 'Y');
    if (this.know) {
      setTimeout(() => {
        this.initSignature();
      }, 1000);
      for (const item of this.data) {
        this.addValidators(this.form.get(item.formGroup).get(item.formName), Validators.required);
      }
      this.addValidators(this.form.get('signature'), Validators.required);
      this.addValidators(this.form.get('agreeAndAuthorize'), Validators.requiredTrue);
    } else {
      for (const questionItem of this.data) {
        this.cleanAndClearValidators(this.form.get(questionItem.formGroup), questionItem.formName, false);
      }
      this.cleanAndClearValidators(this.form, 'signature', false);
      this.cleanAndClearValidators(this.form, 'agreeAndAuthorize', false);
    }

  }

  addValidators(parentGroup: AbstractControl, validators: any) {
    parentGroup.setValidators(validators);
    parentGroup.updateValueAndValidity({emitEvent: true});
  }

  cleanAndClearValidators(parentGroup: AbstractControl, name: string, emitEvent = false) {
    parentGroup.get(name).reset();
    parentGroup.get(name).setValue(null, {emitEvent: emitEvent});
    parentGroup.get(name).clearValidators();
    parentGroup.get(name).updateValueAndValidity({emitEvent: false});
  }

  getDescription() {
    if (this.landlord.applicantName) {
      return '<strong> ' + this.landlord.applicantName +
        ' </strong> has applied to a new residence. You are receiving this email because <strong>' + this.landlord.applicantName +
        '</strong> entered your contact information as his/her current landlord. As part of the application process, ' +
        'we need to verify the applicant’s current residence. ' +
        'Please take a moment to complete the following online residence verification form. ' +
        'As per FCRA regulations, please only disclose information on the last 7 years.';
    }
  }

  submitEvent() {
    this.form.markAllAsTouched();
    this.showError = true;
    if (this.form.valid) {
      const dto = this.getDTOFromForm();
      this.httpService.saveLandlordVerification(this.id, this.hash, dto)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.errorLandlord(error);
            return of(error);
          })
        )
        .subscribe((res) => {

          if (res && !(res instanceof HttpErrorResponse)) {
            this.correctResponse(res);
          }
        });
    }
  }

  getDTOFromForm(): LandlordVerificationRequestDTO {
    const dto = this.form.value;
    return {
      isKnown: dto.knows,
      remarks: dto.remarks,
      verifierName: dto.verifierName,
      verifierEmail: dto.verifierEmail,
      verifierPosition: dto.verifierPosition,
      sendResult: dto.sendResult,
      moveInCorrect: dto.moveInCorrect.result,
      years: dto.moveInCorrect.years,
      months: dto.moveInCorrect.months,
      latePayment: dto.latePayment.result,
      lateCount: dto.latePayment.lateCount,
      latePaymentsNoAnswer: dto.latePayment.latePaymentsNoAnswer,
      properNotice: dto.properNotice.result,
      properNoticeRemarks: dto.properNotice.properNoticeRemarks,
      litigation: dto.litigation.result,
      litigationNoAnswer: dto.litigation.litigationNoAnswer,
      litigationRemarks: dto.litigation.litigationRemarks,
      propertyCondition: dto.propertyCondition.result,
      propertyConditionNoAnswer: dto.propertyCondition.propertyConditionNoAnswer,
      // violation: dto.violation.result,
      // violationNoAnswer: dto.violation.violationNoAnswer,
      // violationRemarks: dto.violation.violationRemarks,
      wouldRent: dto.wouldRent.result,
      wouldRentNoAnswer: dto.wouldRent.wouldRentNoAnswer,
      signature: dto.signature
    };
  }

  getClassRow(i: number) {
    return (i % 2 !== 0) ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
  }

  declineEvent() {
    this.httpService.declineLandlordVerification(this.id, this.hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorLandlord(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  getError(controlName: string): string {
    if (this.form.get(controlName) && this.form.get(controlName).errors != null) {
      const {errors} = this.form.get(controlName);
      return this.uiService.getControlError(errors);
    }
    return '';
  }

  getErrorAgreeAndAuthorize(): string {
    if (this.know) {
      return this.form.get('agreeAndAuthorize').value ? '' : 'This field is required';
    } else {
      return '';
    }
  }
}
