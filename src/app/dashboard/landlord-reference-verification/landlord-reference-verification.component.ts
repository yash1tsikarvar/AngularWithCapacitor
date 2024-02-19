import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {SetupResponse} from '../../shared/definitions/responses/setup.response';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {HttpService} from '../../core/services/http.service';
import {UiService} from '../../ui/ui.service';
import {ProfileFormService} from '../../application/profile/profile-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {LandlordReferenceVerification} from '../../shared/definitions/models/landlord-reference-verification.model';
import {LandlordInfo} from '../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';

@Component({
  selector: 'tev-landlord-reference-verification',
  templateUrl: './landlord-reference-verification.component.html',
  styleUrls: ['./landlord-reference-verification.component.scss']
})
export class LandlordReferenceVerificationComponent implements OnInit, OnDestroy {

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  landlordInfo$: BehaviorSubject<LandlordInfo> = new BehaviorSubject<LandlordInfo>(null);

  setup: SetupResponse;

  data: LandlordInfo;

  id: number;
  mainApplication: ApplicationResponse;
  landlordReferenceVerification: LandlordReferenceVerification;


  @Input()
  set info(info$: Observable<LandlordInfo>) {
    info$.subscribe(referencesInfo => {
      if (this.data = referencesInfo) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<LandlordInfo> = new EventEmitter<LandlordInfo>();

  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  resended: boolean;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {
        this.mainApplication = application;

        this.landlordReferenceVerification = application.landlordReferenceVerification.find(x => x.id === this.id);

        if (!this.landlordReferenceVerification) {
          this.router
            .navigate(['/dashboard', this.mainApplication.applicationId])
            .catch(console.log);
        }

        this.landlordInfo$ = new BehaviorSubject<LandlordInfo>
        (this.landlordReferenceVerification.landlordInfo);

        this.landlordInfo$.asObservable();

        const request = this.mainApplication.landlordReferenceVerification
          .find(x => x.id === this.id);

      });
    this.defaultValues();
    this.listenForFormValidation();
    this.listenToSetup();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        landLord: [this.landlordInfo$.value, Validators.required],
      });
  }

  landLordChange(data: LandlordInfo) {
    this.saveData<LandlordInfo>('landLord', data);
  }


  saveData<T>(controlName: string, data: T) {
    this.childForm.controls[controlName].setValue(data);
  }

  defaultValues() {

    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {

            const data = this.data[controlName];

            if (!!data) {
              switch (controlName) {
                case 'landLord':
                  this.landlordInfo$.next(data);
                  break;
                default:
                  this.childForm.controls[controlName].setValue(data);
                  break;
              }

            }
          });

        this.childForm.updateValueAndValidity();
      });
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
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

  listenForFormValidation(): void {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
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

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  save() {
    this.childForm.controls.landLord.updateValueAndValidity();
    this.markControlsAsTouched();
    if (this.childForm.controls.landLord.status === 'INVALID') {
      this.profileFormService.validateForm();
    }
    if (this.childForm.controls.landLord.status === 'VALID') {

      const request: LandlordReferenceVerification = this.mainApplication.landlordReferenceVerification
        .find(x => x.id === this.id);
      request.landlordInfo = this.childForm.controls.landLord.value;

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });


      this.httpService
        .updateLandlordInformation(request)
        .subscribe(() => {

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {

              const message = 'Update and resend';

              this.uiService
                .showSuccess({
                  message: message
                });

              this.resended = true;
            });


        });

    }
  }

  showSubmited() {
    return this.resended ||
      (this.landlordReferenceVerification.hideEmailLink
        && !this.landlordReferenceVerification.rejectReason);
  }

  showSubmitButton() {
    return !this.showSubmited();
  }
}
