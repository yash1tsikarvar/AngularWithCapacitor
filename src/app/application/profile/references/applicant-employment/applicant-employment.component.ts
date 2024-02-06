import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {
  ApplicantEmployment,
  CompanyInformation,
  JobInformation,
  SupervisorInformation
} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {EmploymentTypeValues} from '../../../../shared/definitions/forms/profile-form/references/employment-types';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-applicant-employment',
  templateUrl: './applicant-employment.component.html',
  styleUrls: ['./applicant-employment.component.scss']
})
export class ApplicantEmploymentComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  jobInfo$: BehaviorSubject<JobInformation> = new BehaviorSubject<JobInformation>(null);
  supervisorInfo$: BehaviorSubject<SupervisorInformation> = new BehaviorSubject<SupervisorInformation>(null);
  companyInfo$: BehaviorSubject<CompanyInformation> = new BehaviorSubject<CompanyInformation>(null);

  data: ApplicantEmployment;

  @Input()
  set info (info$: Observable<ApplicantEmployment>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Input() defaultEmploymentInit: string;
  @Input() editableEmploymentType: true;
  @Input() applicantType: string;
  @Output() formChanged: EventEmitter<ApplicantEmployment> = new EventEmitter<ApplicantEmployment>();

  employmentTypes = EmploymentTypeValues;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
    this.defaultValues();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        editableEmploymentType: [ this.editableEmploymentType, null],
        employmentType: [this.defaultEmploymentInit, Validators.required],
        jobInfo: [this.jobInfo$],
        supervisorInfo: [this.supervisorInfo$],
        companyInfo: [this.companyInfo$],
      });

    this.childForm
      .controls['jobInfo']
      .setValidators(
        [
          CustomValidators.requiredIfControlEqualsTo(this.childForm, 'employmentType', 'E'),
          CustomValidators.requiredIfControlEqualsTo(this.childForm, 'employmentType', 'S')
        ]);

    this.childForm
      .controls['supervisorInfo']
      .setValidators(CustomValidators.requiredIfControlEqualsTo(this.childForm, 'employmentType', 'E'));

    this.childForm
      .controls['companyInfo']
      .setValidators(CustomValidators.requiredIfControlEqualsTo(this.childForm, 'employmentType', 'S'));
  }

  jobInfoChanged(data: JobInformation) {
    this.saveData<JobInformation>('jobInfo', data);
  }

  supervisorInfoChanged(data: SupervisorInformation) {
    this.saveData<SupervisorInformation>('supervisorInfo', data);
  }

  companyInfoChanged(data: CompanyInformation) {
    this.saveData<CompanyInformation>('companyInfo', data);
  }

  saveData<T>(controlName: string, data: T) {
    this.childForm.controls[controlName].setValue(data);
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
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
                case 'jobInfo':
                  this.jobInfo$.next(this.data[controlName]);
                  break;
                case 'supervisorInfo':
                  this.supervisorInfo$.next(this.data[controlName]);
                  break;
                case 'companyInfo':
                  this.companyInfo$.next(this.data[controlName]);
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

  subscribeToFormChanges() {
    this.childForm
      .controls['employmentType']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        this.childForm.controls['jobInfo'].updateValueAndValidity();
        this.childForm.controls['supervisorInfo'].updateValueAndValidity();
        this.childForm.controls['companyInfo'].updateValueAndValidity();
      });

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

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
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

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
