import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ProfileFormService } from '../../profile-form.service';
import { Subject ,  combineLatest ,  Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalInfo } from '../../../../shared/definitions/forms/profile-form/personal-info/personal-info.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationResponse } from '../../../../shared/definitions/responses/application.response';
import { CustomValidators } from '../../../../shared/custom-validators';
import { PaymentAgree } from '../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import { UiService } from '../../../../ui/ui.service';
import { ChildForm } from '../../child-form.interface';

@Component({
  selector: 'tev-agreement-signature',
  templateUrl: './agreement-signature.component.html',
  styleUrls: ['./agreement-signature.component.scss']
})
export class AgreementSignatureComponent implements OnInit, OnDestroy, AfterViewInit, ChildForm {

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();
  billingName$: Subject<string> = new Subject<string>();
  viewInit$: Subject<any> = new Subject<any>();

  unsubscribeSubject: Subject<any> = new Subject<any>();
  personalInfo: PersonalInfo | null;

  mainApplication: ApplicationResponse;
  setup: SetupResponse;

  @ViewChild('teSignaturePad', {static: false}) teSignaturePad: ElementRef;

  childForm: FormGroup;

  data: any;
  @Input()
  set info(info$: Observable<PaymentAgree>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  _billingName: string;
  @Input()
  set billingName(billingName: string) {
    this._billingName = billingName;
    this.billingName$.next(billingName);
  }

  get billingName(): string {
    return this._billingName;
  }

  @Output() formChanged: EventEmitter<PaymentAgree> = new EventEmitter<PaymentAgree>();

  constructor(
    private profileFormService: ProfileFormService,
    private uiService: UiService,
    private formBuilder: FormBuilder,
  ) {
    this.listenToMainForm();
    this.listenToBillingNameChange();
    this.listenToSetup();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    const agreeValidator = this.setupHasFee()
      ? CustomValidators.agreeValidator() : null;

    this.childForm = this.formBuilder
      .group({
        agreeAndAuthorize: [false, agreeValidator],
        noticeSignature: [null, Validators.required],
        signatureText: [''],
      });

  }

  subscribeToFormChanges() {
    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm.updateValueAndValidity();
  }

  listenToMainForm() {
    this.profileFormService
      .formValues$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(values => {
        this.personalInfo = values.personalInfo;
      });
  }

  listenToBillingNameChange() {
    combineLatest([this.formReady$, this.billingName$, this.viewInit$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(([formReady, name]) => {
        const element = document.getElementById('my_signature');
        element.setAttribute('signaturetext', name);      
      });
  }

  ngAfterViewInit() {
    this.viewInit$.next();

    this.teSignaturePad.nativeElement.addEventListener('signaturechange', (event) => {
      //console.log('event.detail[0].isEmpty ' + event.detail[0].isEmpty); // base64 image data

      let noticeSignature = null;
      let signatureText = '';

      if (!event.detail[0].isEmpty) {
        noticeSignature = event.detail[0].data;
        const signature_input = <HTMLInputElement>document.getElementsByClassName('signature-input')[0];
        if (signature_input){
          signatureText = signature_input.value;
        }          
      }

      this.childForm
        .patchValue({
          noticeSignature: noticeSignature,
          signatureText: signatureText
        });
    });
  }


  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  setupHasFee(): boolean {
    return this.setup.applicationFee > 0;
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => {
        this.setup = info;
      });
  }

  getError(controlName: string) {
    const {errors} = this.childForm.controls[controlName];    
    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  listenForFormValidation() {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => this.markControlsAsTouched());
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

}
