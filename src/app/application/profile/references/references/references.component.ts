import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { StepForm } from '../../step-form-interface';
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type';
import { ProfileForm } from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationSubType } from '../../../../shared/definitions/types/application-sub-type';
import { BehaviorSubject ,  Subject } from 'rxjs';
import {
  ApplicantReferences,
  EmergencyContactInformation,
  ProofOfIncomeStep1,
  References
} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import { ProfileFormService } from '../../profile-form.service';
import { filter, first, takeUntil } from 'rxjs/operators';
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response';
import { Location } from '@angular/common';
import { UiService } from '../../../../ui/ui.service';

@Component({
  selector: 'tev-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit, StepForm, OnDestroy {

  coApplicantType: CoApplicantType;
  type: ApplicationSubType;
  code: string;

  mainFormValues: ProfileForm;

  primaryApplicantInfo$: BehaviorSubject<ApplicantReferences> = new BehaviorSubject<ApplicantReferences>(null);
  secondaryApplicantInfo$: BehaviorSubject<ApplicantReferences> = new BehaviorSubject<ApplicantReferences>(null);
  emergencyContactInfo$: BehaviorSubject<EmergencyContactInformation> = new BehaviorSubject<EmergencyContactInformation>(null);
  primaryApplicantPoi$: BehaviorSubject<ProofOfIncomeStep1> = new BehaviorSubject<ProofOfIncomeStep1>(null);
  secondaryApplicantPoi$: BehaviorSubject<ProofOfIncomeStep1> = new BehaviorSubject<ProofOfIncomeStep1>(null);

  stepForm: FormGroup;

  setup: SetupResponse;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  smallLogo: string;

  propertyInfo: PropertyInfoResponse;

  @Input() viewType: string = 'normal';

  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private location: Location,
    private uiService: UiService,
  ) {
    this.listenToApplicationParams();
    this.listenToSetup();
    this.listenToThemeValues();
    this.listenToPropertyInformation();
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  ngOnInit() {
    this.initForm();
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

  listenToPropertyInformation() {
    this.profileFormService
      .propertyInfo$
      .pipe(
        filter(info => !!info),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => this.propertyInfo = info);
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup => this.setup = setup);
  }

  emitMainFormValues(): void {
    const {references} = this.mainFormValues;
    if (references) {
      const {primaryApplicant, secondaryApplicant, emergencyContact} = references;

      if (primaryApplicant) {
        this.primaryApplicantInfo$.next(primaryApplicant);
      }


      if (primaryApplicant && primaryApplicant.proofOfIncomeStep1) {
        this.primaryApplicantPoi$.next(primaryApplicant.proofOfIncomeStep1);
      }

      if (secondaryApplicant) {
        this.secondaryApplicantInfo$.next(secondaryApplicant);
      }

      if (secondaryApplicant && secondaryApplicant.proofOfIncomeStep1) {
        this.secondaryApplicantPoi$.next(secondaryApplicant.proofOfIncomeStep1);
      }

      if (emergencyContact) {
        this.emergencyContactInfo$.next(emergencyContact);
      }

    }
  }

  initForm() {
    const infoValidator = this.setup.employmentRequired || this.setup.referenceRequired
      ? Validators.required : null;

    const coApplicantValidator = this.hasCoApplicant() ? infoValidator : null;

    const primaryApplicantPoiValidator = this.propertyInfo.shortApplication == 'LONG' && this.propertyInfo.incomeRequired ? Validators.required : null;
    const secondaryApplicantPoiValidator = this.propertyInfo.shortApplication == 'LONG' && this.propertyInfo.incomeRequired ? coApplicantValidator : null;


    this.stepForm = this.formBuilder
      .group({
        primaryApplicant: [null, infoValidator],
        primaryApplicantPoi: [null, primaryApplicantPoiValidator],
        secondaryApplicant: [null, coApplicantValidator],
        secondaryApplicantPoi: [null, secondaryApplicantPoiValidator],
        emergencyContact: [null, Validators.required],
      });

    this.subscribeToMainFormChanges();
  }

  hasCoApplicant(): boolean {
    return !!this.coApplicantType && this.coApplicantType !== 'W';
  }

  primaryApplicantInfoChanged(data: ApplicantReferences) {
    this.saveData<ApplicantReferences>('primaryApplicant', data);
  }

  primaryApplicantPoiInfoChanged(data: ProofOfIncomeStep1) {
    this.saveData<ProofOfIncomeStep1>('primaryApplicantPoi', data);
  }
  secondaryApplicantInfoChanged(data: ApplicantReferences) {
    this.saveData<ApplicantReferences>('secondaryApplicant', data);
  }

  secondaryApplicantPoiInfoChanged(data: ProofOfIncomeStep1) {
    this.saveData<ProofOfIncomeStep1>('secondaryApplicantPoi', data);
  }

  emergencyContactInfoChanged(data: EmergencyContactInformation) {
    this.saveData<EmergencyContactInformation>('emergencyContact', data);
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  submit() {

    if (this.stepForm.valid) {
      this.scapeMaskedValues();

      this.profileFormService
        .saveData<References>('references', this.stepForm.value);

      this.profileFormService
        .savePartialApplication()
        .subscribe(() => {
          if (this.viewType === 'review-edit')
            this.viewType = 'review';
          else
            this.profileFormService.goToNextStep();
        })

    } else
      this.profileFormService.validateForm();
  }

  cancel() {
    this.profileFormService
      .cancelPartialApplication()
      .subscribe(() => {
        this.viewType = 'review';
      });
  }

  subscribeToMainFormChanges() {
    this.profileFormService
      .formValues$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(data => {
        if (this.mainFormValues = data) {
          this.emitMainFormValues();
        }
      });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  viewTypeChanged(data: string) {
    this.viewType = data;
  }

  reviewEdit(){
    this.viewType = 'review-edit';
  }

    scapeMaskedValues() {
        if(this.stepForm.value){
            const regex = /-/ig;
            if(this.stepForm.value.emergencyContact && this.stepForm.value.emergencyContact.phone) {
                this.stepForm.value.emergencyContact.phone = this.stepForm.value.emergencyContact.phone.replace(regex, '');
            }
            if(this.stepForm.value.primaryApplicant){
                if(this.stepForm.value.primaryApplicant.employment) {
                    if(this.stepForm.value.primaryApplicant.employment.supervisorInfo && this.stepForm.value.primaryApplicant.employment.supervisorInfo.phone){
                        this.stepForm.value.primaryApplicant.employment.supervisorInfo.phone = this.stepForm.value.primaryApplicant.employment.supervisorInfo.phone.replace(regex, '');
                    }
                    if(this.stepForm.value.primaryApplicant.employment.companyInfo && this.stepForm.value.primaryApplicant.employment.companyInfo.phone){
                        this.stepForm.value.primaryApplicant.employment.companyInfo.phone = this.stepForm.value.primaryApplicant.employment.companyInfo.phone.replace(regex, '');
                    }
                }
                if(this.stepForm.value.primaryApplicant.references) {
                    if(this.stepForm.value.primaryApplicant.references.firstReference && this.stepForm.value.primaryApplicant.references.firstReference.phone){
                        this.stepForm.value.primaryApplicant.references.firstReference.phone = this.stepForm.value.primaryApplicant.references.firstReference.phone.replace(regex, '');
                    }
                    if(this.stepForm.value.primaryApplicant.references.secondReference && this.stepForm.value.primaryApplicant.references.secondReference.phone){
                        this.stepForm.value.primaryApplicant.references.secondReference.phone = this.stepForm.value.primaryApplicant.references.secondReference.phone.replace(regex, '');
                    }
                }
            }
            if(this.stepForm.value.secondaryApplicant){
                if(this.stepForm.value.secondaryApplicant.employment) {
                    if(this.stepForm.value.secondaryApplicant.employment.supervisorInfo && this.stepForm.value.secondaryApplicant.employment.supervisorInfo.phone){
                        this.stepForm.value.secondaryApplicant.employment.supervisorInfo.phone = this.stepForm.value.secondaryApplicant.employment.supervisorInfo.phone.replace(regex, '');
                    }
                    if(this.stepForm.value.secondaryApplicant.employment.companyInfo && this.stepForm.value.secondaryApplicant.employment.companyInfo.phone){
                        this.stepForm.value.secondaryApplicant.employment.companyInfo.phone = this.stepForm.value.secondaryApplicant.employment.companyInfo.phone.replace(regex, '');
                    }
                }
                if(this.stepForm.value.secondaryApplicant.references) {
                    if(this.stepForm.value.secondaryApplicant.references.firstReference && this.stepForm.value.secondaryApplicant.references.firstReference.phone){
                        this.stepForm.value.secondaryApplicant.references.firstReference.phone = this.stepForm.value.secondaryApplicant.references.firstReference.phone.replace(regex, '');
                    }
                    if(this.stepForm.value.secondaryApplicant.references.secondReference && this.stepForm.value.secondaryApplicant.references.secondReference.phone){
                        this.stepForm.value.secondaryApplicant.references.secondReference.phone = this.stepForm.value.secondaryApplicant.references.secondReference.phone.replace(regex, '');
                    }
                }
            }
        }
    }
}
