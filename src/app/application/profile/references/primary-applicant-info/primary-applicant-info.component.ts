import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {
  ApplicantEmployment,
  ApplicantPersonalReference,
  ApplicantPersonalReferences,
  ApplicantReferences
} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-primary-applicant-info',
  templateUrl: './primary-applicant-info.component.html',
  styleUrls: ['./primary-applicant-info.component.scss']
})
export class PrimaryApplicantInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  employmentInfo$: BehaviorSubject<ApplicantEmployment> = new BehaviorSubject<ApplicantEmployment>(null);
  referencesInfo$: BehaviorSubject<ApplicantPersonalReference[]> = new BehaviorSubject<ApplicantPersonalReference[]>(null);

  setup: SetupResponse;

  data: ApplicantReferences;
  @Input()
  set info (info$: Observable<ApplicantReferences>) {
    info$.subscribe(referencesInfo => {
      if (this.data = referencesInfo) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<ApplicantReferences> = new EventEmitter<ApplicantReferences>();

  @Input() viewType: string = 'normal';  
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();
    
  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
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
        employment: [null, this.setup.employmentRequired ? Validators.required : null],
        references: [null, this.setup.referenceRequired ? Validators.required : null],
      });
  }

  employmentChange(data: ApplicantEmployment) {
    this.saveData<ApplicantEmployment>('employment', data);
  }

  referencesChange(data: ApplicantPersonalReferences) {
    this.saveData<ApplicantPersonalReferences>('references', data);
  }

  saveData<T>(controlName: string, data: T) {
    if(data && data['employmentType']){  
        if (data['employmentType'] != 'S') {
            data['companyInfo'] = null;
        }
        if (data['employmentType'] != 'E') {
            data['supervisorInfo'] = null;
        }
    }  
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
                case 'references':
                  this.referencesInfo$.next(data);
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
      })
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

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }    
}
