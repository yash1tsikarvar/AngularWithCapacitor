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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../ui/ui.service';
import { Subject ,  Observable ,  combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExtraPaymentSignature } from '../../shared/definitions/requests/extra-payment.request';
import SignaturePad from 'signature_pad';
import { CustomValidators } from '../../shared/custom-validators';

@Component({
  selector: 'tev-ep-agreement-signature',
  templateUrl: './ep-agreement-signature.component.html',
  styleUrls: ['./ep-agreement-signature.component.scss']
})
export class EpAgreementSignatureComponent implements OnInit, OnDestroy, AfterViewInit {

  destroyed$: Subject<any> = new Subject<any>();
  formReady$: Subject<any> = new Subject<any>();
  billingName$: Subject<string> = new Subject<string>();
  viewInit$: Subject<any> = new Subject<any>();
  signatureForm: FormGroup;

  @ViewChild('signaturePad', {static: false}) signaturePadRef: ElementRef;
  @ViewChild('signatureText', {static: false}) signatureTextRef: ElementRef;

  signatureCanvas: HTMLCanvasElement;
  signatureTextCanvas: HTMLCanvasElement;
  signaturePad: SignaturePad;

  @Input()
  set validate(validate$: Observable<any>) {
    validate$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
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

  @Output() formChanged: EventEmitter<ExtraPaymentSignature> = new EventEmitter<ExtraPaymentSignature>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCanvasSize();
  }

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
  ) {
    this.listenToBillingNameChange();
  }

  ngOnInit() {
    this.initForm();
    this.listenToFormChanges();
    this.formReady$.next();
  }

  initForm() {
    this.signatureForm = this.formBuilder
      .group({
        agreeAndAuthorize: [false, CustomValidators.agreeValidator()],
        noticeSignature: [null, Validators.required],
        signatureText: [''],
      });
  }

  listenToFormChanges() {
    this.signatureForm
      .statusChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          const {noticeSignature} = this.signatureForm.value;
          this.formChanged.emit({signature: noticeSignature});
        } else {
          this.formChanged.emit(null);
        }
      });

    this.signatureForm
      .controls['signatureText']
      .valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        let dataUrl = null;

        if (value) {
          const canvasContext: CanvasRenderingContext2D = this.signatureTextCanvas.getContext('2d');
          canvasContext.clearRect(0, 0, this.signatureTextCanvas.width, this.signatureTextCanvas.height);
          canvasContext.font = 'italic 60px \'Herr Von Muellerhoff\'';
          canvasContext.fillText(value, 10, 110);

          dataUrl = this.signatureTextCanvas.toDataURL();

          this.signaturePad.clear();
          this.signaturePad.fromDataURL(dataUrl);
        }

        this.signatureForm
          .patchValue({
            noticeSignature: dataUrl
          });
      });

    this.signatureForm.updateValueAndValidity();
  }

  listenToBillingNameChange() {
    combineLatest([this.formReady$, this.billingName$, this.viewInit$])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(([formReady, name]) => {
        this.signatureForm
          .patchValue({
            signatureText: name
          });
      });
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.signatureForm);
  }

  private setCanvasSize() {
    const ratio =  Math.max(window.devicePixelRatio || 1, 1);

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

    if (this.signatureForm && this.signaturePad) {
      this.signatureForm
        .controls['signatureText']
        .updateValueAndValidity();
    }
  }

  getError(controlName: string) {
    const {errors} = this.signatureForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    this.initSignature();
    this.viewInit$.next();
  }

  clearSignature() {
    this.signaturePad.clear();
    this.signatureForm
      .patchValue({
        noticeSignature: null
      });
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
          noticeSignature: signature
        });
    };
  }

}
