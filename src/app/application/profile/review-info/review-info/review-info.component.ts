import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { StepForm } from '../../step-form-interface';
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type';
import { ProfileForm } from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationSubType } from '../../../../shared/definitions/types/application-sub-type';
import { Subject ,  BehaviorSubject } from 'rxjs';
import { ProfileFormService } from '../../profile-form.service';
import { ReviewInfo }   from '../../../../shared/definitions/forms/profile-form/review-info/review-info.interface';
import { PersonalInfo } from '../../../../shared/definitions/forms/profile-form/personal-info/personal-info.interface';
import { AddressDetails } from '../../../../shared/definitions/forms/profile-form/address-details/address-details.interface';
import { CurrentResidence } from '../../../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import { References}    from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import { AdditionalInfo } from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import { first, takeUntil } from 'rxjs/operators';
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import { Location } from '@angular/common';
import { UiService } from '../../../../ui/ui.service';
import { Router } from '@angular/router'
import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'tev-review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.scss']
})
export class ReviewInfoComponent implements OnInit, StepForm, OnDestroy {

  coApplicantType: CoApplicantType;
  code: string;
  type: ApplicationSubType;

  mainFormValues: ProfileForm;

  personalInfo$: BehaviorSubject<PersonalInfo> = new BehaviorSubject<PersonalInfo>(null);
  addressDetails$: BehaviorSubject<AddressDetails> = new BehaviorSubject<AddressDetails>(null);
  currentResidence$: BehaviorSubject<CurrentResidence> = new BehaviorSubject<CurrentResidence>(null);
  referencesInfo$: BehaviorSubject<References> = new BehaviorSubject<References>(null);
  additionalInfo$: BehaviorSubject<AdditionalInfo> = new BehaviorSubject<AdditionalInfo>(null);

  stepForm: FormGroup;
  formReady$: Subject<boolean> = new Subject<boolean>();

  setup: SetupResponse;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  smallLogo: string;

  showCurrentResidence: boolean;
  // showAdditionalInfo: boolean;

  remarksIsChanged: boolean = false;
  remarksIsValid: boolean = true;
  personalInfoOnSubmit: boolean = false;
  personalInfoOnCancel: boolean = false;

  /**
   * viewType define the types of view for all application forms:
   * viewType = 'normal' Normal view in any other section.
   * viewType = 'review' In review info section.
   * viewType = 'review-edit' In review info section after edit button clicked.
   */
  @Input() viewType: string;

  @Input() formChanged: string;


  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private location: Location,
    private uiService: UiService,
    private router: Router,
    public authService: AuthService,
  ) {
    this.listenToApplicationParams();
    this.listenToSetup();
    this.listenToThemeValues();
  }

  ngOnInit() {
    this.initForm();
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
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

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((setup: SetupResponse) => {
        this.setup = setup;

        this.showCurrentResidence = this.setup.currentAddressRequired;
        // this.showAdditionalInfo = [
        //   this.setup.numberOfCarsAllowed,
        //   this.setup.numberOfOthersAllowed,
        //   this.setup.numberOfPetsAllowed
        // ].some(value => value !== 0);
      });
  }

  initForm() {
    this.stepForm = this.formBuilder
      .group({
        reviewInfo: [null]
      });

    this.subscribeToMainFormChanges();
    this.formReady$.next(true);
  }

  emitMainFormValues(): void {
    const {reviewInfo} = this.mainFormValues;

    if (reviewInfo) {
      /*
      const {personalInfo} = reviewInfo;

      if (personalInfo) {
        this.personalInfo$.next(personalInfo);
      }*/
    }
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  submit() {
    if (this.stepForm.valid) {
      this.profileFormService
        .saveData<ReviewInfo>('reviewInfo', this.stepForm.value);

      this.profileFormService
        .savePartialApplication()
        .subscribe((response) => {
          // this.profileFormService.goToNextStep();
          this.router.navigate([`/application/resume/${response.pendingApplicationId}/payment-details`]).catch(console.log)
        });

    } else {
      this.profileFormService.validateForm();
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

  goBack() {
    this.location.back();
  }


  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  canDeactivate() {
    const message = 'We noticed you’ve made changes. In order to proceed and save the changes, please click Continue!';
    if(this.personalInfoOnSubmit || !this.authService.isAuthenticated() || this.personalInfoOnCancel) {
      return true;
    } else {
      if(this.remarksIsChanged) {
        if(this.remarksIsValid) {
          this.uiService.showError({
            message,
            removeCurrent: false
          });
        } else {
          this.profileFormService.validateForm();
        }
        return false;
      }
      return true;
    }
  }

  checkIfOnSubmit(event) {
    if (event === true){
      this.personalInfoOnSubmit = true;
    } else if (event === false){
      this.personalInfoOnSubmit = false;
    }
  }

  checkIfOnCancel(event) {
    if (event === true){
      this.personalInfoOnCancel = true;
    } else if (event === false){
      this.personalInfoOnCancel = false;
    }
  }

  checkIfOnChange(event) {
    if (event === true){
      this.remarksIsChanged = true;
    } else if (event === false){
      this.remarksIsChanged = false;
    }
  }

  checkIfRemarksIsValid(event) {
    if (event === true){
      this.remarksIsValid = true;
    } else if (event === false){
      this.remarksIsValid = false;
    }
  }



}
