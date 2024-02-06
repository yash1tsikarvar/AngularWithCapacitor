import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { StepForm } from '../../step-form-interface';
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type';
import { ProfileForm } from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationSubType } from '../../../../shared/definitions/types/application-sub-type';
import { Subject ,  BehaviorSubject } from 'rxjs';
import { ProfileFormService } from '../../profile-form.service';
import {
  AdditionalInfo,
  PetInfo,
  UnderAgeInfo,
  VehicleInfo
} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import { first, takeUntil } from 'rxjs/operators';
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response';
import { Location } from '@angular/common';
import { UiService } from '../../../../ui/ui.service';

@Component({
  selector: 'tev-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit, StepForm, OnDestroy {

  coApplicantType: CoApplicantType;
  code: string;
  type: ApplicationSubType;

  mainFormValues: ProfileForm;
  underAgeInfo$: BehaviorSubject<UnderAgeInfo> = new BehaviorSubject<UnderAgeInfo>(null);
  vehicleInfo$: BehaviorSubject<VehicleInfo> = new BehaviorSubject<VehicleInfo>(null);
  petInfo$: BehaviorSubject<PetInfo> = new BehaviorSubject<PetInfo>(null);

  stepForm: FormGroup;
  formReady$: Subject<boolean> = new Subject<boolean>();

  setup: SetupResponse;
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
      .subscribe(setup => this.setup = setup);
  }

  initForm() {
    this.stepForm = this.formBuilder
      .group({
        underAgeInfo: [null, this.setup.numberOfOthersAllowed !== 0 ? Validators.required : null],
        vehicleInfo: [null, this.setup.numberOfCarsAllowed !== 0 ? Validators.required : null],
        petInfo: [null, Validators.required],
      });

    this.subscribeToMainFormChanges();
    this.formReady$.next(true);
  }

  underAgeInfoChanged(info: UnderAgeInfo) {
    this.saveData<UnderAgeInfo>('underAgeInfo', info);
  }

  vehicleInfoChanged(info: VehicleInfo) {
    this.saveData<VehicleInfo>('vehicleInfo', info);
  }

  petInfoChanged(info: PetInfo) {
    this.saveData<PetInfo>('petInfo', info);
  }

  emitMainFormValues(): void {
    const {additionalInfo} = this.mainFormValues;

    if (additionalInfo) {
      const {underAgeInfo, vehicleInfo, petInfo} = additionalInfo;

      if (underAgeInfo) {
        this.underAgeInfo$.next(underAgeInfo);
      }

      if (vehicleInfo) {
        this.vehicleInfo$.next(vehicleInfo);
      }

      if (petInfo) {
        this.petInfo$.next(petInfo);
      }
    }
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
  }

  submit() {
    if (this.stepForm.valid) {
      this.profileFormService
        .saveData<AdditionalInfo>('additionalInfo', this.stepForm.value);

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
}
