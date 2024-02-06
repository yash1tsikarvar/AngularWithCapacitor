import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UiService} from '../../ui/ui.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {ApplicantEmployment, ApplicantReferences} from '../../shared/definitions/forms/profile-form/references/references.interface';
import {SetupResponse} from '../../shared/definitions/responses/setup.response';
import {ProfileFormService} from '../../application/profile/profile-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../core/services/http.service';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {EmploymentReferenceVerification} from '../../shared/definitions/models/employment-reference-verification.model';

@Component({
  selector: 'tev-employment-reference-verification',
  templateUrl: './employment-reference-verification.component.html',
  styleUrls: ['./employment-reference-verification.component.scss']
})
export class EmploymentReferenceVerificationComponent implements OnInit, OnDestroy {

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  employmentInfo$: BehaviorSubject<ApplicantEmployment> = new BehaviorSubject<ApplicantEmployment>(null);

  setup: SetupResponse;

  data: ApplicantEmployment;

  idReference: number;
  mainApplication: ApplicationResponse;
  employmentReferenceVerification: EmploymentReferenceVerification;


  @Input()
  set info(info$: Observable<ApplicantEmployment>) {
    info$.subscribe(referencesInfo => {
      if (this.data = referencesInfo) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<ApplicantReferences> = new EventEmitter<ApplicantReferences>();

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
    this.idReference = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {
        this.mainApplication = application;

        this.employmentReferenceVerification = application.employmentReferenceVerification.find(x => x.idReference === this.idReference);

        if (!this.employmentReferenceVerification) {
          this.router
            .navigate(['/dashboard', this.mainApplication.applicationId])
            .catch(console.log);
        }

        this.employmentInfo$ = new BehaviorSubject<ApplicantEmployment>
        (this.employmentReferenceVerification.applicantEmployment);

        this.employmentInfo$.asObservable();

        const request = this.mainApplication.employmentReferenceVerification
          .find(x => x.idReference === this.idReference);

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
        employment: [this.employmentInfo$.value, Validators.required],
      });
  }

  employmentChange(data: ApplicantEmployment) {
    this.saveData<ApplicantEmployment>('employment', data);
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
                case 'employment':
                  this.employmentInfo$.next(data);
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
    this.childForm.controls.employment.updateValueAndValidity();
    this.markControlsAsTouched();
    if (this.childForm.controls.employment.status === 'INVALID') {
      this.profileFormService.validateForm();
    }
    if (this.childForm.controls.employment.status === 'VALID') {

      this.mainApplication.employmentReferenceVerification
        .find(x => x.idReference === this.idReference).applicantEmployment = this.childForm.controls.employment.value;

      const request = this.mainApplication.employmentReferenceVerification
        .find(x => x.idReference === this.idReference);

      if (this.childForm.controls.employment.value.employmentType != 'S') {
        request.applicantEmployment.companyInfo = null;
      }
      if (this.childForm.controls.employment.value.employmentType != 'E') {
        request.applicantEmployment.supervisorInfo = null;
      }

      this.uiService
        .showInfo({
          message: 'Processing your request'
        });

      this.httpService
        .updateEmploymentInformation(request)
        .subscribe(() => {

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {

              const message = (request.applicantEmployment.supervisorInfo.contact) ? 'Updated' : 'Update and resend';

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
      (this.employmentReferenceVerification.hideEmailLink
        && !this.employmentReferenceVerification.rejectReason);
  }

  showSubmitButton() {
    return !this.showSubmited();
  }
}
