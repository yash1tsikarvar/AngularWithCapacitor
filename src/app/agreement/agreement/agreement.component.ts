import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../core/services/http.service';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import SignaturePad from 'signature_pad';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, combineLatest} from 'rxjs';
import {SignApplicationRequest} from '../../shared/definitions/requests/sign-application.request';
import {UiService} from '../../ui/ui.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '../../shared/definitions/responses/error.response';
import {CustomValidators} from '../../shared/custom-validators';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit, AfterViewInit {

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  mainApplication: ApplicationResponse;

  @ViewChild('signaturePad', {static: false}) signaturePadRef: ElementRef;
  @ViewChild('signatureText', {static: false}) signatureTextRef: ElementRef;

  signatureCanvas: HTMLCanvasElement;
  signatureTextCanvas: HTMLCanvasElement;
  signaturePad: SignaturePad;

  signatureForm: FormGroup;
  processing = false;

  smallLogo: string;
  private destroyed$: Subject<any> = new Subject<any>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCanvasSize();
  }

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private uiService: UiService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.defaultValues();
    this.listenToApplicationInformation();
    this.listenToThemeValues();
  }

  ngOnInit() {
    this.initForm();
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  initForm() {
    this.signatureForm = this.formBuilder
      .group({
        applicationId: [null, [Validators.required, CustomValidators.asciiValidator()]],
        acknowledgerName: [null, [Validators.required, CustomValidators.asciiValidator()]],
        noticeSignature: [null, [Validators.required, CustomValidators.asciiValidator()]],
        signatureText: [''],
      });

    this.listenToSignatureText();
    this.formReady$.next(true);
  }

  listenToSignatureText() {
    this.signatureForm
      .controls['signatureText']
      .valueChanges
      .subscribe(value => {
        const canvasContext: CanvasRenderingContext2D = this.signatureTextCanvas.getContext('2d');
        canvasContext.clearRect(0, 0, this.signatureTextCanvas.width, this.signatureTextCanvas.height);
        canvasContext.font = "italic 60px 'Herr Von Muellerhoff";
        canvasContext.fillText(value, 10, 110);

        const dataUrl = this.signatureTextCanvas.toDataURL();

        this.signaturePad.clear();
        this.signaturePad.fromDataURL(dataUrl);

      });
  }

  listenToApplicationInformation() {
    this.httpService
      .mainApplication$
      .subscribe(application => {
        if (this.mainApplication = application) {
          this.dataReady$.next(true);
        }
      });
  }

  defaultValues() {

    combineLatest([this.formReady$, this.dataReady$])
      .subscribe(() => {

        const {applicationId, payerName} = this.mainApplication;
        this.signatureForm.controls['applicationId'].setValue(applicationId);
        this.signatureForm.controls['acknowledgerName'].setValue(payerName);
      });
  }

  submit() {

    if (!this.signaturePad.isEmpty()) {

      this.processing = true;
      this.uiService
        .showInfo({
          message: 'Processing your request',
          keepOpen: true
        });

      this.signatureForm.controls['noticeSignature'].setValue(this.signaturePad.toDataURL('image/png'));
      const request: SignApplicationRequest = this.signatureForm.value;

      this.httpService
        .signApplication(request)
        .subscribe(
          (response: ApplicationResponse) => {

            this.uiService
              .showSuccess({
                message: 'Authorization Signed',
                removeCurrent: true
              });


            this.router
              .navigate(['/dashboard', response.applicationId])
              .catch(console.log);
          },
          (httpError: HttpErrorResponse) => {
            this.processing = false;
            const error: ErrorResponse = httpError.error;
            this.uiService.showError({
              message: error.title,
              removeCurrent: true
            });
          }
        );

    } else {
      this.processing = false;
      this.uiService
        .showError({
          message: 'Please Sign the Application'
        });
    }
  }

  logOut(mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();

    this.authService
      .logOut()
      .subscribe(() => {
        this.router
          .navigate(['/'])
          .catch(console.log);
      });
  }

  ngAfterViewInit() {
    this.initSignature();
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  private initSignature() {
    this.signatureCanvas = this.signaturePadRef.nativeElement;
    this.signatureTextCanvas = this.signatureTextRef.nativeElement;
    this.setCanvasSize();
    this.signaturePad = new SignaturePad(this.signatureCanvas);
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

}
