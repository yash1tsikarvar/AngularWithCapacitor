import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { CurrencyPipe, Location } from '@angular/common';
import { HttpService } from '../../core/services/http.service';
import { UiService } from '../../ui/ui.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject ,  combineLatest } from 'rxjs';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/custom-validators';
import { RefundRequest } from '../../shared/definitions/requests/refund.request';
import { Router } from '@angular/router';
import { nodeListToArray } from '../../shared/utils/dom';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../../shared/definitions/responses/error.response';
import { ConfirmDataInterface } from '../../shared/definitions/viewparams/confirm-data.interface';

@Component({
  selector: 'tev-refund-application',
  templateUrl: './refund-application.component.html',
  styleUrls: ['./refund-application.component.scss']
})
export class RefundApplicationComponent implements OnInit, AfterViewInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  dataReady$: Subject<any> = new Subject<any>();
  formReady$: Subject<any> = new Subject<any>();

  mainApplication: ApplicationResponse;

  signatureCanvas: HTMLCanvasElement;
  signatureTextCanvas: HTMLCanvasElement;
  signaturePad: SignaturePad;

  currentDate = moment().format('MM/DD/YYYY');

  signatureForm: FormGroup;
  sending = false;

  @ViewChild('signaturePad', {static: false}) signaturePadRef: ElementRef;
  @ViewChild('signatureText', {static: false}) signatureTextRef: ElementRef;
  @ViewChild('formContent', {static: false}) formContent: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCanvasSize();
  }

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe,
  ) {
    this.defaultValues();

    this.listenToApplicationInfo();
  }

  ngOnInit() {
    this.initForm();
    this.formReady$.next();
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        const {payerName} = this.mainApplication;
        this.signatureForm.patchValue({
          signatureText: payerName
        });
      });
  }

  initForm() {
    this.signatureForm = this.formBuilder
      .group({
        agreeAndAuthorize: [false, CustomValidators.agreeValidator()],
        signature: [null, Validators.required],
        signatureText: ['', Validators.required],
      });
  }

  getError(controlName: string) {
    const {errors} = this.signatureForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  clearSignature() {
    this.signaturePad.clear();
    this.signatureForm
      .patchValue({
        signature: null
      });
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => {
        this.mainApplication = application;
        this.dataReady$.next();
      });
  }

  ngAfterViewInit() {
    this.initSignature();
  }

  private initSignature() {
    this.signatureCanvas = this.signaturePadRef.nativeElement;
    this.signatureTextCanvas = this.signatureTextRef.nativeElement;
    this.setCanvasSize();
    this.signaturePad = new SignaturePad(this.signatureCanvas);

    this.signaturePad.onEnd = () => {
      const signature = this.signaturePad.toDataURL('image/png');

      this.signatureForm
        .patchValue({
          signature: signature
        });

    };
  }

  private setCanvasSize() {
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

  refundApplication() {
    this.sending = true;

    this.uiService.showInfo({
      title: 'Please Wait',
      message: 'Processing your Request',
      keepOpen: true,
    });

    const {applicationId} = this.mainApplication;
    const refundRequest: RefundRequest = {
      applicationId: applicationId,
      signature: this.signatureForm.value['signature'],
    };

    this.httpService
      .requestRefund(refundRequest)
      .pipe(
        switchMap(() => {
          return this.httpService.getApplicationById(String(applicationId));
        })
      )
      .subscribe(
        () => {

          this.router.navigate(['/dashboard', applicationId])
            .catch(console.log);

          this.sending = false;
          this.uiService.showSuccess({
            title: 'Success',
            message: 'Application Refunded',
            removeCurrent: true
          });

        },
        (httpError: HttpErrorResponse) => {

          this.sending = false;
          const error: ErrorResponse = httpError.error;

          this.uiService.showError({
            title: error.title,
            message: error.detail,
            removeCurrent: true
          });
        },
      );
  }

  submit() {
    if (this.signatureForm.valid) {

      const confirmData: ConfirmDataInterface = {
        title: 'THIS CANNOT BE UNDONE',
      message: 'I understand that the refund will be the total amount paid minus the 10% convenience fee?',
        confirmButtonText: `Refund ${this.currencyPipe.transform(this.mainApplication.refundAvailable)}`,
      };

      this.uiService
        .confirmAction(confirmData)
        .subscribe(confirm => {
          if (confirm) {
            this.refundApplication();
          }
        });

    } else {
      this.markControlsAsTouched();
      this.focusOnFirstInvalidField();
    }
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.signatureForm);
  }

  focusOnFirstInvalidField() {
    const invalidElementsList = (<HTMLElement>this.formContent.nativeElement).getElementsByClassName('ng-invalid');

    nodeListToArray(invalidElementsList)
      .some((element: HTMLElement) => {
        return ['FORM', 'MAT-FORM-FIELD'].indexOf(element.tagName.toLocaleUpperCase()) === -1 ? (() => {
          element.focus();
          return true;
        })() : false;
      });
  }

  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
