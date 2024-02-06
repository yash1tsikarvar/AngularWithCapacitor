import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {ExtraPaymentDetailResponse} from '../../shared/definitions/responses/extra-payment-detail.response';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {nodeListToArray} from '../../shared/utils/dom';
import {ExtraPaymentCreditCard, ExtraPaymentSignature} from '../../shared/definitions/requests/extra-payment.request';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '../../shared/definitions/responses/error.response';

@Component({
  selector: 'tev-extra-payment',
  templateUrl: './extra-payment.component.html',
  styleUrls: ['./extra-payment.component.scss']
})
export class ExtraPaymentComponent implements OnInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  validate$: Subject<any> = new Subject<any>();

  extraPayment: ExtraPaymentDetailResponse;
  processing = false;

  paymentForm: FormGroup;

  billingName: string;
  paymentId: number;

  squareCard: any;
  @ViewChild('formContent', {static: false}) formContent: ElementRef;
  loading_text = 'Processing your payment....';

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.listenToRouteParams();
  }

  ngOnInit() {
    this.listenToExtraPaymentDetails();
    this.initForm();
  }

  listenToRouteParams() {
    this.activatedRoute
      .params
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(params => {
        const {paymentId} = params;
        this.paymentId = Number(paymentId);
      });
  }

  initForm() {
    this.paymentForm = this.formBuilder
      .group({
        creditCardInfo: [null, Validators.required],
        paymentAgree: [null, Validators.required],
      });
  }

  listenToExtraPaymentDetails() {
    this.httpService
      .extraPayment$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(response => {
        this.extraPayment = response;
      });
  }

  async submit() {

    let tokenResult;

    if (this.paymentForm.valid) {
      this.processing = true;

      if (this.squareCard) {
        // @ts-ignore
        tokenResult = await this.squareCard.tokenize();
      }

      if ((!this.squareCard && this.paymentForm.valid) ||
        (this.squareCard && tokenResult && tokenResult.status === 'OK')) {

        const {
          creditCardInfo,
          paymentAgree
        }: { creditCardInfo: ExtraPaymentCreditCard, paymentAgree: ExtraPaymentSignature } = this.paymentForm.value;

        if (this.squareCard && tokenResult && tokenResult.token) {
          creditCardInfo.squareToken = tokenResult.token;
        }

        this.httpService
          .makeExtraPayment({...creditCardInfo, ...paymentAgree, extraPaymentId: this.paymentId})
          .subscribe(
            () => {


              this.uiService.showSuccess({
                title: 'Success',
                message: 'Payment Successful',
                removeCurrent: true
              });

              this.router
                .navigate(['/payment/thanks'])
                .catch(console.log);

            },
            (httpError: HttpErrorResponse) => {
              const error: ErrorResponse = httpError.error;
              this.uiService.showError({
                message: error.title,
                removeCurrent: true,
              });
              this.processing = false;
            },
          );

      } else {
        this.processing = false;

        this.uiService.showError({
          title: 'Invalid data',
          message: 'Missing credit card details',
          removeCurrent: true
        });

      }
    } else {
      this.processing = false;
      this.uiService.showError({
        title: 'Invalid Form Fields',
        message: 'Please verify all needed values are complete'
      });
      this.validate$.next();
      this.focusOnFirstInvalidField();
    }

  }

  billingNameChanged(name: string) {
    this.billingName = name;
  }

  paymentInfoChanged(data: ExtraPaymentCreditCard) {
    this.paymentForm
      .patchValue({
        creditCardInfo: data
      });
  }

  paymentAgreeChanged(data: ExtraPaymentSignature) {
    this.paymentForm
      .patchValue({
        paymentAgree: data
      });
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  inputSquareCard(squareCard: any) {
    this.squareCard = squareCard;
  }

}
