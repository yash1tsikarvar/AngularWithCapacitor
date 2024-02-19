import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepForm} from '../../step-form-interface';
import {CoApplicantType} from '../../../../shared/definitions/types/co-applicant.type';
import {ProfileForm} from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationSubType} from '../../../../shared/definitions/types/application-sub-type';
import {Router} from '@angular/router';
import {ProfileFormService} from '../../profile-form.service';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {
  PaymentAddExpedite,
  PaymentAgree,
  PaymentExpedite,
  PaymentInfo
} from '../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';
import {ApplicationResponse} from '../../../../shared/definitions/responses/application.response';
import {first, takeUntil} from 'rxjs/operators';
import {ApplicationParams} from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import {UiService} from '../../../../ui/ui.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '../../../../shared/definitions/responses/error.response';
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'tev-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit, StepForm, OnDestroy {


  coApplicantType: CoApplicantType;
  code: string;
  type: ApplicationSubType;

  stepForm: FormGroup;

  mainFormValues: ProfileForm;
  paymentInfo$: BehaviorSubject<PaymentInfo> = new BehaviorSubject<PaymentInfo>(null);
  paymentInfo: PaymentInfo = null;
  paymentAgree$: BehaviorSubject<PaymentAgree> = new BehaviorSubject<PaymentAgree>(null);

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  expediteApplication = false;
  processing = false;

  expediteSelected = false;
  activeMilitary = false;
  addExpediteApplication = false;

  setup: SetupResponse;
  billingName = '';
  paymentProcessor: string;

  propertyInfoReady$: Subject<boolean> = new Subject<boolean>();

  addExpediteApplication$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.addExpediteApplication);

  expediteApplication$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.expediteApplication);
  applicationTotal$: Subject<number> = new Subject<number>();
  applicationTotal: number;

  propertyInfo: PropertyInfoResponse;
  smallLogo: string;
  errorMessage: string;
  errorTitle: string;

  squareCard: any;
  loading_text = 'Processing your payment....';

  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private router: Router,
    private uiService: UiService,
    private location: Location,
    public dialog: MatDialog,
  ) {
    this.listenToApplicationParams();
    this.listenToSetup();
    this.calculateApplicationTotal();
    this.listenToPropertyInfo();
    this.listenToThemeValues();
  }

  ngOnInit() {
    this.paymentProcessor = this.setup.paymentProcessor;
    this.initForm();
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  openDialog() {
    this.processing = false;
    const dialogRef = this.dialog.open(PaymentDetailsDialog, {panelClass: 'fit-dialog'});
    const instance = dialogRef.componentInstance;
    instance['dialogTitle'] = this.errorTitle;
    instance['dialogText'] = this.errorMessage;
    dialogRef.afterClosed().subscribe(() => {
      this.uiService.clearCurrentToastr();
    });
  }

  listenToApplicationParams() {
    this.profileFormService
      .applicationParams$
      .pipe(
        first(params => !!params),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((params: ApplicationParams) => {
        const {coApplicantType, code, applicationType} = params;
        this.code = code;
        this.type = applicationType;
        this.coApplicantType = coApplicantType;
      });
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup => this.setup = setup);
  }

  initForm() {
    this.stepForm = this.formBuilder
      .group({
        paymentInfo: [null, Validators.required],
        paymentExpedite: [null, Validators.required],
        paymentAgree: [null, Validators.required],
      });

    this.subscribeToMainFormChanges();
  }

  billingNameChanged(name: string) {
    this.billingName = name;
  }

  paymentInfoChanged(data: PaymentInfo) {
    this.paymentInfo = data;
    this.saveData<PaymentInfo>('paymentInfo', data);
  }

  paymentAgreeChanged(data: PaymentAgree) {
    this.saveData<PaymentAgree>('paymentAgree', data);
  }

  paymentAddExpediteChanged(data: PaymentAddExpedite) {

    if (!!data) {
      this.expediteSelected = true;
      this.addExpediteApplication = data.addExpediteApplication === 'yes';
      this.addExpediteApplication$.next(this.addExpediteApplication);
    }

    //this.saveData<PaymentAddExpedite>('paymentExpedite', data);
  }

  paymentExpediteChanged(data: PaymentExpedite) {

    if (!!data) {
      this.expediteApplication = data.expediteApplication === 'yes';
      this.expediteApplication$.next(this.expediteApplication);
    }

    this.saveData<PaymentExpedite>('paymentExpedite', data);
  }

  emitMainFormValues() {
    const {paymentDetails} = this.mainFormValues;

    if (paymentDetails) {
      const {paymentAgree, paymentInfo} = paymentDetails;

      if (paymentInfo) {
        this.paymentInfo$.next(paymentInfo);
      }

      if (paymentAgree) {
        this.paymentAgree$.next(paymentAgree);
      }
    }
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  async submit() {
    let tokenResult;
    if (this.stepForm.valid) {
      this.processing = true;
      if (this.squareCard) {
        // @ts-ignore
        tokenResult = await this.squareCard.tokenize();
        if (tokenResult && tokenResult.status === 'OK') {
          if (this.paymentInfo) {
            this.paymentInfo.squareToken = tokenResult.token;
          } else {
            this.paymentInfo = {
              address1: '',
              addressNotInUsa: false,
              city: '',
              creditCard: '',
              creditCardCvv: '',
              creditCardExp: '',
              name: '',
              state: '',
              zip: '',
              squareToken: tokenResult.token
            };
          }
        } else {
          this.processing = false;
          if (this.applicationTotal && this.applicationTotal > 0 ) {
            this.uiService.showError({
              title: 'Invalid data',
              message: 'Missing credit card details',
              removeCurrent: true
            });
          }
        }
      }
      if ((!this.squareCard || tokenResult && tokenResult.status === 'OK') || (this.applicationTotal == 0)) {
        this.profileFormService
          .makeApplicationRequest(this.stepForm.value)
          .subscribe(
            (applicationResponse: ApplicationResponse) => {


              this.uiService.showSuccess({
                title: 'Success',
                message: 'Payment Successful',
                removeCurrent: true
              });

              var nextFullPath  = '';

              switch (this.propertyInfo.shortApplication) {
                case 'SHORT':
                  nextFullPath = `/dashboard/${applicationResponse.applicationId}/profile-success-dashboard`;
                  break
                default:
                  nextFullPath = `/dashboard/${applicationResponse.applicationId}/profile-success`;                 
              }

             
              this.router
                .navigate([nextFullPath])
                .catch(console.log);
            },
            (httpError: HttpErrorResponse) => {
              const error: ErrorResponse = httpError.error;
              this.errorTitle = 'Payment failed';
              this.errorMessage = error.title === 'Do not honor' ?
                'Do not honor, payment not approved. Please try with another credit card or contact your financial institution.'
                : error.title;
              switch (this.setup.paymentProcessor) {
                case('SquareTransfirst'):
                  this.paymentProcessor = 'Transfirst';
                  break;
                case('TransfirstSquare'):
                  this.paymentProcessor = 'Square';
                  break;
              }
              this.openDialog();
            },
          );
      }
    } else {
      this.processing = false;
      this.profileFormService.validateForm();
    }
  }

  subscribeToMainFormChanges() {
    this.profileFormService
      .formValues$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(data => {

        // Disable Expedite
        if (data.personalInfo.militaryInfo.activeMilitary == 'yes') {
          this.activeMilitary = true;
        }

        if (this.mainFormValues = data) {
          this.emitMainFormValues();
        }
      });
  }

  listenToPropertyInfo() {
    this.profileFormService
      .propertyInfo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(propertyInfo => {

        this.propertyInfo = propertyInfo;
        this.propertyInfoReady$.next(true);
      });
  }

  getApplicationTotalValue(): number {
    let total = 0;
    if (this.setup) {
      total += this.setup.applicationFee;
    }

    if (this.expediteApplication) {
      total += this.propertyInfo.rushProcessingPrice;
    }

    return total;
  }

  calculateApplicationTotal() {
    combineLatest([this.expediteApplication$, this.propertyInfoReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.applicationTotal = this.getApplicationTotalValue();
        this.applicationTotal$.next(this.applicationTotal);
      });
  }

  goBack() {
    this.location.back();
  }


  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  inputSquareCard(squareCard: any) {
    this.squareCard = squareCard;
  }
}

@Component({
  selector: 'payment-details-dialog',
  templateUrl: './payment-details.dialog.html'
})
export class PaymentDetailsDialog {

  dialogTitle: String;
  dialogText: String;

  constructor() {
    this.dialogTitle = '';
    this.dialogText = '';
  }

}
