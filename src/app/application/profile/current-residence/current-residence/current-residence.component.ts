import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { StepForm } from '../../step-form-interface';
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type';
import { ProfileForm } from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationSubType } from '../../../../shared/definitions/types/application-sub-type';
import { ProfileFormService } from '../../profile-form.service';
import { BehaviorSubject ,  Subject } from 'rxjs';
import {
  ApplicantResidenceInfo,
  CoApplicantResidenceInfo,
  CurrentResidence,
} from '../../../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import { first, takeUntil } from 'rxjs/operators';
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import { Location } from '@angular/common';
import { UiService } from '../../../../ui/ui.service';

@Component({
  selector: 'tev-current-residence',
  templateUrl: './current-residence.component.html',
  styleUrls: ['./current-residence.component.scss']
})
export class CurrentResidenceComponent implements OnInit, StepForm, OnDestroy {


  coApplicantType: CoApplicantType;
  type: ApplicationSubType;
  code: string;

  stepForm: FormGroup;

  mainFormValues: ProfileForm;
  primaryApplicantInfo$: BehaviorSubject<ApplicantResidenceInfo> = new BehaviorSubject<ApplicantResidenceInfo>(null);
  secondaryApplicantInfo$: BehaviorSubject<CoApplicantResidenceInfo> = new BehaviorSubject<CoApplicantResidenceInfo>(null);

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  smallLogo: string;

  @Input() viewType: string = 'normal';

  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private location: Location,
    private uiService: UiService,
  ) {
    this.listenToApplicationParams();
    this.listenToThemeValues();
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

  initForm() {
    const coApplicantValidator = this.hasCoApplicant() ? Validators.required : null;

    this.stepForm = this.formBuilder
      .group({
        primaryApplicant: [null, Validators.required],
        secondaryApplicant: [null, coApplicantValidator],
      });

    this.subscribeToMainFormChanges();
  }

  hasCoApplicant(): boolean {
    return !!this.coApplicantType && this.coApplicantType !== 'W';
  }

  primaryApplicantInfoChanged(data: ApplicantResidenceInfo) {
    this.saveData<ApplicantResidenceInfo>('primaryApplicant', data);
  }

  secondaryApplicantInfoChanged(data: CoApplicantResidenceInfo) {
    this.saveData<CoApplicantResidenceInfo>('secondaryApplicant', data);
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  submit() {
    if (this.stepForm.valid) {
      this.scapeMaskedValues();

      this.profileFormService
        .saveData<CurrentResidence>('currentResidence', this.stepForm.value);

      this.profileFormService
        .savePartialApplication()
        .subscribe(() => {
          if (this.viewType === 'review-edit')
            this.viewType = 'review';
          else
            this.profileFormService.goToNextStep();
        });

    } else {
      this.profileFormService.validateForm();
    }
  }

  cancel() {
    this.profileFormService
      .cancelPartialApplication()
      .subscribe(() => {
        this.viewType = 'review';
      });
  }

  emitMainFormValues() {
    const {currentResidence} = this.mainFormValues;

    if (currentResidence) {
      const {primaryApplicant, secondaryApplicant} = currentResidence;

      if (primaryApplicant) {
        this.primaryApplicantInfo$.next(primaryApplicant);
      }

      if (secondaryApplicant) {
        this.secondaryApplicantInfo$.next(secondaryApplicant);
      }
    }
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

  /**
   * Show applicant form depending on the URL params
   *
   * @returns {boolean}
   */
  showCoApplicantDetails(): boolean {
    return this.hasCoApplicant();
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
            const regex = /-/ig
            if(this.stepForm.value.primaryApplicant){
                if(this.stepForm.value.primaryApplicant.landLord && this.stepForm.value.primaryApplicant.landLord.phone) {
                    this.stepForm.value.primaryApplicant.landLord.phone = this.stepForm.value.primaryApplicant.landLord.phone.replace(regex, '');
                }
                if(this.stepForm.value.primaryApplicant.familyInfo && this.stepForm.value.primaryApplicant.familyInfo.phone) {
                    this.stepForm.value.primaryApplicant.familyInfo.phone = this.stepForm.value.primaryApplicant.familyInfo.phone.replace(regex, '');
                }
            }
            if(this.stepForm.value.secondaryApplicant){
                if(this.stepForm.value.secondaryApplicant.landLord && this.stepForm.value.secondaryApplicant.landLord.phone) {
                    this.stepForm.value.secondaryApplicant.landLord.phone = this.stepForm.value.secondaryApplicant.landLord.phone.replace(regex, '');
                }
                if(this.stepForm.value.secondaryApplicant.familyInfo && this.stepForm.value.secondaryApplicant.familyInfo.phone) {
                    this.stepForm.value.secondaryApplicant.familyInfo.phone = this.stepForm.value.secondaryApplicant.familyInfo.phone.replace(regex, '');
                }
            }
        }
    }
}
