import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {CoApplicantType} from '../../../../shared/definitions/types/co-applicant.type';
import {ApplicationSubType} from '../../../../shared/definitions/types/application-sub-type';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileForm} from '../../../../shared/definitions/forms/profile-form/profile-form.interface';
import {BehaviorSubject, Subject} from 'rxjs';
import {AddressInfo} from '../../../../shared/definitions/forms/profile-form/address-details/address-info.interface';
import {OwnerInfo} from '../../../../shared/definitions/forms/profile-form/address-details/owner-info.interface';
import {RealEstateAgentInfo} from '../../../../shared/definitions/forms/profile-form/address-details/real-estate-agent-info.interface';
import {ProfileFormService} from '../../profile-form.service';
import {AddressDetails} from '../../../../shared/definitions/forms/profile-form/address-details/address-details.interface';
import {StepForm} from '../../step-form-interface';
import {filter, first, takeUntil} from 'rxjs/operators';
import {ApplicationParams} from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response';
import {Location} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'tev-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit, StepForm, OnDestroy {

  coApplicantType: CoApplicantType;
  type: ApplicationSubType;
  code: string;


  applicationType: string

  stepForm: FormGroup;
  showForms: boolean = false;

  mainFormValues: ProfileForm;
  addressInfo$: BehaviorSubject<AddressInfo> = new BehaviorSubject<AddressInfo>(null);
  realEstateInfo$: BehaviorSubject<RealEstateAgentInfo> = new BehaviorSubject<RealEstateAgentInfo>(null);
  ownerInfo$: BehaviorSubject<OwnerInfo> = new BehaviorSubject<OwnerInfo>(null);

  propertyInfo: PropertyInfoResponse;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  @Input() viewType: string = 'normal';

  constructor(
    private formBuilder: FormBuilder,
    private profileFormService: ProfileFormService,
    private location: Location,
    private route: ActivatedRoute,

  ) {
    this.listenToApplicationParams();
    this.listenToPropertyInformation();
  }

  ngOnInit() {
    this.route
    .params
    .subscribe((params) => {
      const {code, type} = params;
      this.code = code;
      this.type = type;
      if (params.pendingApplicationId !== undefined){
        this.showForms = true
      }
    });
    this.initForm();
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
        this.showApplicationType(this.type)
      });
  }

  showApplicationType(type) {
    switch (type) {
      case 'T':
          this.applicationType = "Rent/Lease"
        break;
      case 'O':
        this.applicationType = "Purchase"
        break;
      case 'G':
        this.applicationType = "Guest/Additional Resident"
        break;
    }
  }

  initForm() {
    const ownerInfoValidator = this.propertyInfo.ownerInfoRequired
      ? Validators.required : null;

    const realEstateInfoValidator = this.propertyInfo.shortApplication == 'LONG'
      ? Validators.required : null;

    this.stepForm = this.formBuilder
      .group({
        addressInfo: [null, Validators.required],
        realEstateInfo: [null, realEstateInfoValidator],
        ownerInfo: [null, ownerInfoValidator],
      });

    this.subscribeToMainFormChanges();
  }

  addressInfoChanged(info: AddressInfo) {
    this.saveData<AddressInfo>('addressInfo', info);
  }

  realEstateInfoChanged(info: RealEstateAgentInfo) {
    this.saveData<RealEstateAgentInfo>('realEstateInfo', info);
  }

  ownerInfoChanged(info: OwnerInfo) {
    this.saveData<OwnerInfo>('ownerInfo', info);
  }


  /**
   * Submit will call the profile form service to save the information in the session storage but only if the form is valid.
   *
   * In that case it will emit a boolean to the validate subject so the child forms are marked as touched and the user can see what information is missing.
   */
  submit() {
    if (this.stepForm.valid) {

      this.scapeMaskedValues();

      this.profileFormService.saveData<AddressDetails>('addressDetails', this.stepForm.value);

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
        if (this.mainFormValues = data) {
          this.emitMainFormValues();
        }
      });
  }

  /**
   * Emit to the child forms the saved values if any.
   */
  emitMainFormValues() {

    const {addressDetails} = this.mainFormValues;

    if (addressDetails) {
      const {addressInfo, realEstateInfo, ownerInfo} = addressDetails;

      if (addressInfo) {
        this.addressInfo$.next(addressInfo);
      }

      if (realEstateInfo) {
        this.realEstateInfo$.next(realEstateInfo);
      }

      if (ownerInfo) {
        this.ownerInfo$.next(ownerInfo);
      }
    }
  }

  saveData<T>(controlName: string, data: T) {
    this.stepForm.controls[controlName].setValue(data);
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

  scapeMaskedValues() {
    if(this.stepForm.value){
        const regex = /-/ig;
        if(this.stepForm.value.ownerInfo && this.stepForm.value.ownerInfo.phone) {
            this.stepForm.value.ownerInfo.phone = this.stepForm.value.ownerInfo.phone.replace(regex, '');
        }
        if(this.stepForm.value.realEstateInfo && this.stepForm.value.realEstateInfo.cellphone) {
            this.stepForm.value.realEstateInfo.cellphone = this.stepForm.value.realEstateInfo.cellphone.replace(regex, '');
        }
    }
}
}
