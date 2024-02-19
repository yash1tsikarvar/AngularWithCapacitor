import {Component, EventEmitter, OnDestroy, OnInit, Input, Output, ViewChild} from '@angular/core';
import {CoApplicantType} from '../../../../shared/definitions/types/co-applicant.type';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileFormService} from '../../profile-form.service';
import {ApplicantInfo} from '../../../../shared/definitions/forms/profile-form/personal-info/applicant-info.interface';
import {ProfileForm} from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import {MilitaryInfo} from '../../../../shared/definitions/forms/profile-form/personal-info/military-info.interface';
import {ArrestedInfo, RemarksInfo} from '../../../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import {ApplicationSubType} from '../../../../shared/definitions/types/application-sub-type';
import {BehaviorSubject, Subject} from 'rxjs';
import {PersonalInfo} from '../../../../shared/definitions/forms/profile-form/personal-info/personal-info.interface';
import {StepForm} from '../../step-form-interface';
import {filter, first, takeUntil} from 'rxjs/operators';
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response';
import {ApplicationParams} from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import {Location} from '@angular/common';
import { UiService } from '../../../../ui/ui.service';
import { AuthService } from '../../../../core/services/auth.service';
import { RemarksInfoComponent } from '../remarks-info/remarks-info.component';

@Component({
  selector: 'tev-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, StepForm, OnDestroy {

  coApplicantType: CoApplicantType;
  type: ApplicationSubType;
  code: string;

  stepForm: FormGroup;

  mainFormValues: ProfileForm;
  applicantInfo$: BehaviorSubject<ApplicantInfo> = new BehaviorSubject<ApplicantInfo>(null);
  coApplicantInfo$: BehaviorSubject<ApplicantInfo> = new BehaviorSubject<ApplicantInfo>(null);
  militaryInfo$: BehaviorSubject<MilitaryInfo> = new BehaviorSubject<MilitaryInfo>(null);
  remarksInfo$: BehaviorSubject<RemarksInfo> = new BehaviorSubject<RemarksInfo>(null);

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  propertyInfo: PropertyInfoResponse;

  remarksApplicantChanged: boolean = false;
  remarksCoApplicantChanged: boolean = false;

  remarksIsChanged: boolean = false;
  remarksIsValid: boolean = true;

  submitForm: boolean = false;
  cancelFromReviewInfo: boolean = false;

  @Output() public hasChangeInRemarks = new EventEmitter();
  @Output() public formRemarksIsValid = new EventEmitter();
  @Output() public onSubmit = new EventEmitter();
  @Output() public onCancel = new EventEmitter();


  @Input() viewType: string = 'normal';

  @ViewChild('remarksInfoComponent', {static: false}) remarksInfoComponent: RemarksInfoComponent;


  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private router: Router,
    private location: Location,
    private uiService: UiService,
    public authService: AuthService,

  ) {
    this.listenToApplicationParams();
    this.listenToPropertyInformation();

  }

  ngOnInit() {
    this.initForm();
  }

  checkIfOnChange(event) {
    if (event === true){
      this.remarksIsChanged = true;
      this.hasChangeInRemarks.emit(true);
    } else if (event === false){
      this.remarksIsChanged = false;
      this.hasChangeInRemarks.emit(false);
    }
  }

  checkIfRemarksIsValid(event) {
    if (event === true){
      this.remarksIsValid = true;
      this.formRemarksIsValid.emit(true);
    } else if (event === false){
      this.remarksIsValid = false;
      this.formRemarksIsValid.emit(false);
    }
  }

  canDeactivate() {
    const message = 'We noticed you’ve made changes. In order to proceed and save the changes, please click Continue!';
    if (this.submitForm || !this.authService.isAuthenticated() || this.cancelFromReviewInfo) {
      return true
    } else {
      if (this.remarksIsChanged){
        if (this.remarksIsValid){
        this.uiService.showError({
          message,
          removeCurrent: false
        })
        } else {
          this.profileFormService.validateForm();
        }
        return false;
      } else {
        return true
      }
    }
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

  initForm() {
    const coApplicantValidator = this.hasCoApplicant() ? Validators.required : null;
    const militaryInfoValidator = this.propertyInfo.shortApplication == 'LONG' ? Validators.required : null;
    const remarksInfoValidator = this.propertyInfo.shortApplication == 'LONG' ? Validators.required : null;

    this.stepForm = this.formBuilder
      .group({
        applicantInfo: [null, Validators.required],
        coApplicantInfo: [null, coApplicantValidator],
        militaryInfo: [null, militaryInfoValidator],
        remarksInfo: [null, remarksInfoValidator],
      });

    this.subscribeToMainFormChanges();

    if(this.propertyInfo.shortApplication == 'SHORT' ){
      this.saveData<MilitaryInfo>('militaryInfo', {shortApplication : this.propertyInfo.shortApplication} );
      this.saveData<RemarksInfo>('remarksInfo', {shortApplication:this.propertyInfo.shortApplication });
    }

  }

  hasCoApplicant(): boolean {
    return !!this.coApplicantType && this.coApplicantType !== 'W';
  }

  /**
   * Submit will save the partial information in the remote server and once done in the local storage.
   */
  submit() {
    if (this.stepForm.valid) {
      this.onSubmit.emit(true);
      this.submitForm = true;
      this.scapeMaskedValues();

      this.profileFormService
        .saveData<PersonalInfo>('personalInfo', this.stepForm.value);

      this.profileFormService
        .savePartialApplication()
        .subscribe(applicationRequest => {

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
    // this.profileFormService
    //   .cancelPartialApplication()
    //   .subscribe(() => {
    //     this.viewType = 'review';
    //   });
    this.viewType = 'review';
    this.cancelFromReviewInfo = true;
    this.onCancel.emit(true);
    this.remarksInfoComponent.restoreInitialData();
  }

  goBack() {
    this.location.back();
  }

  /**
   * Show applicant form depending on the URL params
   *
   * @returns {boolean}
   */
  showCoApplicantDetails(): boolean {
    return this.coApplicantType && this.coApplicantType !== 'W';
  }

  /**
   * Save the data coming from the child form.
   *
   * @param {ApplicantInfo} data
   */
  applicantInfoChanged(data: ApplicantInfo) {
    this.saveData<ApplicantInfo>('applicantInfo', data);
  }

  /**
   * Save the data coming from the child form.
   *
   * @param {CoApplicantInfo} data
   */
  coApplicantInfoChanged(data: ApplicantInfo) {
    this.saveData<ApplicantInfo>('coApplicantInfo', data);
  }

  /**
   * Save the data coming from the child form.
   *
   * @param {MilitaryInfo} data
   */
  militaryInfoChanged(data: MilitaryInfo) {
    this.saveData<MilitaryInfo>('militaryInfo', data);
  }

  /**
   * Save the data coming from the child form.
   *
   * @param {RemarksInfo} data
   */
  remarksInfoChanged(data: RemarksInfo) {
    // this.formRemarksIsValid.emit(true);
    this.saveData<RemarksInfo>('remarksInfo', data);
  }

  /**
   * Subscribe to the  information received from the profile form service.
   */
  subscribeToMainFormChanges() {
    this.profileFormService
      .formValues$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(data => {
        this.mainFormValues = data;
        if (data) {
          this.emitMainFormValues();
        }
      });
  }

  /**
   * Emit to the child forms the saved values if any.
   */
  emitMainFormValues() {
    const {personalInfo} = this.mainFormValues;

    if (personalInfo) {

      const {applicantInfo, coApplicantInfo, militaryInfo, remarksInfo} = personalInfo;
      if (applicantInfo) {
        this.applicantInfo$.next(applicantInfo);
      }

      if (coApplicantInfo) {
        this.coApplicantInfo$.next(coApplicantInfo);
      }

      if (militaryInfo) {
        this.militaryInfo$.next(militaryInfo);
      }

      if (remarksInfo) {
        this.remarksInfo$.next(remarksInfo);
      }
    }
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  viewTypeChanged(data: string) {
    this.viewType = data;
    if (this.viewType = 'review-edit'){
    this.cancelFromReviewInfo = false;
    this.onCancel.emit(false);
    }
  }

  scapeMaskedValues() {
        if(this.stepForm.value){
            const regex = /-/ig;
            if(this.stepForm.value.applicantInfo.cellPhone) {
                this.stepForm.value.applicantInfo.cellPhone = this.stepForm.value.applicantInfo.cellPhone.replace(regex, '');
            }
            if(this.stepForm.value.coApplicantInfo){
                if(this.stepForm.value.coApplicantInfo.cellPhone) {
                    this.stepForm.value.coApplicantInfo.cellPhone = this.stepForm.value.coApplicantInfo.cellPhone.replace(regex, '');
                }
            }
        }
  }
}
