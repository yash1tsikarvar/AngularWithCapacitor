
import {filter, catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../ui/ui.service';
import {ProfileForm, ProfileFormControlNames} from '../../shared/definitions/forms/profile-form/profile-form.interface';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApplicationSubType} from '../../shared/definitions/types/application-sub-type';
import {CoApplicantType} from '../../shared/definitions/types/co-applicant.type';
import {Router} from '@angular/router';
import {PropertyInfoResponse} from '../../shared/definitions/responses/property-info.response';
import {HttpService} from '../../core/services/http.service';
import {ProfileFormFactoryService} from './profile-form-factory.service';
import {TenantPaymentDetails} from '../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import {SetupResponse} from '../../shared/definitions/responses/setup.response';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {ApplicationRequest} from '../../shared/definitions/requests/application.request';
import {ApplicationParams} from '../../shared/definitions/forms/profile-form/application-params.interface';
import {
  getMaxAgeDate,
  getMaxEmploymentDate,
  getMaxMovingDate,
  getMaxMovingOutDate,
  getMinAgeDate,
  getMinEmploymentDate,
  getMinMovingDate
} from '../../shared/definitions/constants/dates-min-max-utils';
import {FeesAndDocsResponse} from '../../shared/definitions/responses/fees-and-docs.response';
import {Applicant} from '../../shared/definitions/models/applicant.model';
import {ProfileAccordionButton} from '../../shared/definitions/viewparams/profile-accordion-button.interface';
import {profileSteps} from '../../shared/definitions/constants/profile-steps';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '../../shared/definitions/responses/error.response';
import {AuthService} from '../../core/services/auth.service';
import {DecodeTokenModel} from '../../shared/definitions/models/decode-token.model';


@Injectable()
export class ProfileFormService {

  private formSteps: Record<string, string> = {};

  applicationParams: ApplicationParams;

  profileForm: FormGroup;
  formValues$: BehaviorSubject<ProfileForm> = new BehaviorSubject<ProfileForm>(null);
  storageKey: string;
  pendingApplicationId: number;

  profileSteps: ProfileAccordionButton[] = profileSteps;
  private profileStepsSubject: BehaviorSubject<ProfileAccordionButton[]> = new BehaviorSubject<ProfileAccordionButton[]>(profileSteps);
  profileSteps$: Observable<ProfileAccordionButton[]> = this.profileStepsSubject.asObservable();

  private currentStepSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentStep$: Observable<number> = this.currentStepSubject.asObservable();

  private validateFormSubject: Subject<boolean> = new Subject<boolean>();
  validateForm$: Observable<boolean> = this.validateFormSubject.asObservable();

  private applicationRequestSubject: BehaviorSubject<ApplicationRequest> = new BehaviorSubject<ApplicationRequest>(null);
  applicationRequest$: Observable<ApplicationRequest> = this.applicationRequestSubject.asObservable();

  private applicationParamsSubject: BehaviorSubject<ApplicationParams> = new BehaviorSubject<ApplicationParams>(null);
  applicationParams$: Observable<ApplicationParams> = this.applicationParamsSubject.asObservable();

  propertyInfo: PropertyInfoResponse;
  private propertyInfoSubject: BehaviorSubject<PropertyInfoResponse> = new BehaviorSubject<PropertyInfoResponse>(null);
  propertyInfo$: Observable<PropertyInfoResponse> = this.propertyInfoSubject.asObservable();

  feesAndDocs: FeesAndDocsResponse;
  private feesAndDocUploadRequirementsSubject: BehaviorSubject<FeesAndDocsResponse> = new BehaviorSubject<FeesAndDocsResponse>(null);
  feesAndDocUploadRequirements$: Observable<FeesAndDocsResponse> = this.feesAndDocUploadRequirementsSubject.asObservable();

  setup: SetupResponse;
  private setupSubject: BehaviorSubject<SetupResponse> = new BehaviorSubject<SetupResponse>(null);
  setup$: Observable<SetupResponse> = this.setupSubject.asObservable();

  private emailsUsed: Record<string, string> = {
    'mainApplicant': null,
    'coApplicant': null,
  };

  private emailsUsedSubject: BehaviorSubject<Record<string, string>> = new BehaviorSubject<Record<string, string>>(this.emailsUsed);
  emailsUsed$: Observable<Record<string, string>> = this.emailsUsedSubject.asObservable();

  private validationFinishedSubject: Subject<boolean> = new Subject<boolean>();
  validationFinished$: Observable<boolean> = this.validationFinishedSubject.asObservable();

  minAgeDate: Date = getMinAgeDate();
  maxAgeDate: Date = getMaxAgeDate();

  minMovingDate: Date = getMinMovingDate();
  maxMovingDate: Date = getMaxMovingDate();

  maxMovingOutDate: Date = getMaxMovingOutDate();


  minEmployDate: Date = getMinEmploymentDate();
  maxEmployDate: Date = getMaxEmploymentDate();

  private newApplicationSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  newApplication$: Observable<boolean> = this.newApplicationSubject.asObservable();

  private decodedTokenSubject: BehaviorSubject<DecodeTokenModel> = new BehaviorSubject<DecodeTokenModel>(null);
  decodedToken$: Observable<DecodeTokenModel> = this.decodedTokenSubject.asObservable();

  mainApplicationId: number;
  coApplicantType: CoApplicantType;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private router: Router,
    private profileFormFactoryService: ProfileFormFactoryService,
  ) {

    this.setupForm();
    this.listenToFormChanges();

    this.listenToPropertyInformation();
    this.listenToApplicationRequest();
    this.listenForFormValidation();
    this.listenToFeesAndDocs();
    this.listenToSetup();
    this.getDecodedToken();
  }

  initForm(pendingApplicationId: number) {
    this.pendingApplicationId = pendingApplicationId;
    this.storageKey = `pending-application-${pendingApplicationId}`;
    this.defaultValues();
  }

  getDecodedToken() {
    const token = this.authService.getDecodedToken();
    this.decodedTokenSubject.next(token);
  }

  setApplicationParams(
    code: string,
    applicationType: ApplicationSubType,
    coApplicantType: CoApplicantType) {

    this.coApplicantType = coApplicantType;

    this.applicationParams = {
      code: code,
      applicationType: applicationType,
      coApplicantType: this.mainApplicationId ? null : coApplicantType || null
    };

    this.applicationParamsSubject.next(this.applicationParams);

  }

  setupForm() {
    this.formValues$.next(null);

    this.profileForm = this.formBuilder.group({
      personalInfo: [null, Validators.required],
      addressDetails: [null, Validators.required],
      currentResidence: [null, Validators.required],
      references: [null, Validators.required],
      additionalInfo: [null, Validators.required],
      reviewInfo: [null, Validators.required],
      paymentDetails: [null, Validators.required],
    });
  }

  listenToPropertyInformation() {

    this.httpService
      .propertyInfo$.pipe(
      filter(info => !!info))
      .subscribe(info => {
        this.propertyInfo = info;
        this.propertyInfoSubject.next(info);
      });
  }

  listenToApplicationRequest() {

    this.httpService
      .applicationRequest$.pipe(
      filter(applicationRequest => !!applicationRequest))
      .subscribe((applicationRequest: ApplicationRequest) => {

        this.newApplicationSubject.next(false);
        const {propertyId, applicationSubType, coApplicantType, mainApplicationId} = applicationRequest;

        this.resetEmailsUsed();
        this.setDefaultEmailsUsed(applicationRequest);

        this.mainApplicationId = mainApplicationId || null;
        this.setApplicationParams(String(propertyId), applicationSubType, coApplicantType);
        this.initForm(applicationRequest.pendingApplicationId);

        const formValues: ProfileForm = this.profileFormFactoryService
          .createProfileFormDataFromApplicationRequest(applicationRequest);

        this.saveRemoteDataInLocalStorage(formValues);

        this.applicationRequestSubject.next(applicationRequest);

      })

  }

  private setDefaultEmailsUsed(applicationRequest: ApplicationRequest) {

    if (applicationRequest.adults) {
      this.setDefaultsApplicantEmails(applicationRequest.adults);
    }
  }

  private setDefaultsApplicantEmails(adults: Applicant[]) {

    const mainApplicant = adults[0];
    const coApplicant = adults[1];

    if (mainApplicant) {
      this.setEmailUsed('mainApplicant', mainApplicant.email);
    }

    if (coApplicant) {
      this.setEmailUsed('coApplicant', coApplicant.email);
    }
  }

  listenToFeesAndDocs() {
    this.httpService
      .feesAndDocUploadRequirements$
      .subscribe(info => {
        this.feesAndDocs = info;
        this.feesAndDocUploadRequirementsSubject.next(info);
      });
  }

  listenToSetup() {
    this.httpService
      .setup$
      .subscribe(info => {
        this.setup = info;
        this.setupSubject.next(info);
        this.hideShowSteps();
      });
  }

  hideShowSteps() {

    if (this.setup != null) {
    const showCurrentResidence = this.setup.currentAddressRequired;
    // const showAdditionalInfo = [
    //   this.setup.numberOfCarsAllowed,
    //   this.setup.numberOfOthersAllowed,
    //   this.setup.numberOfPetsAllowed
    // ].some(value => value !== 0);

    const steps = this.profileSteps
      .filter(step => {
        const [url] = step.url;

        if (url === 'current-residence') {
          return showCurrentResidence;
        }

        // if (url === 'additional-info') {
        //   return showAdditionalInfo;
        // }

        return true;
      });

    this.formSteps = steps
      .reduce((acc, current, index) => {
        return {...acc, [index+1]: current.url[0]};
      }, {});

    this.profileStepsSubject.next(steps);

    }

  }

  saveRemoteDataInLocalStorage(formValues: ProfileForm) {
    Object.keys(formValues)
      .forEach((key: ProfileFormControlNames) => {
        if (formValues[key]) {
          this.saveData(key, formValues[key]);
        } else {
          this.saveData(key, null);
        }
      });
  }

  /**
   * Subscribe to any value changes on the form and emit it to the subject.
   */
  listenToFormChanges() {
    this.profileForm
      .valueChanges
      .subscribe(data => {
        this.formValues$.next(data);
      });
  }

  /**
   * Fill the form with previously stored values.
   */
  defaultValues() {
    Object.keys(this.profileForm.controls)
      .forEach((controlName: ProfileFormControlNames) => {
        const data = this.getSavedDataByControlName(controlName);
        if (data) {
          this.profileForm.controls[controlName].setValue(data);
        }
      });
  }

  /**
   * Save data of a given control.
   *
   * @param {string} controlName
   * @param data
   */
  saveData<T>(controlName: ProfileFormControlNames, data: T) {
    this.profileForm.controls[controlName].setValue(data);

    if (this.storageKey) {
      this.uiService.saveInfoInLocalStorage(this.storageKey, this.profileForm.value);
    }
  }

  /**
   * Get data stored in the form.
   *
   * @param {ProfileFormControlNames} controlName
   * @returns {T}
   */
  getData<T>(controlName: ProfileFormControlNames): T {
    return this.profileForm.value[controlName];
  }

  setCurrentStep(step: number) {
    // console.log('step', step)
    // if (step > 2) {
    //   step -= 1;
    // }
    this.currentStepSubject.next(step);
  }

  resetInformation() {

    if (this.storageKey) {
      this.uiService.deleteInfoFromLocalStorage(this.storageKey);
    }

    this.resetFormValues();
    this.resetEmailsUsed();

    this.emailsUsedSubject.next(this.emailsUsed);

    this.storageKey = null;
    this.coApplicantType = null;
    this.mainApplicationId = null;
    this.pendingApplicationId = null;
    this.formValues$.next(null);
  }

  resetEmailsUsed() {
    Object.keys(this.emailsUsed)
      .forEach(key => this.emailsUsed[key] = null);
  }

  resetFormValues() {
    Object.keys(this.profileForm.controls)
      .forEach(controlName => this.profileForm.controls[controlName].reset(null));
  }

  setEmailUsed(key: string, value: string) {
    this.emailsUsed = {...this.emailsUsed, [key]: value};
    this.emailsUsedSubject.next(this.emailsUsed);
  }

  /**
   *
   * @returns {Observable<ApplicationRequest>}
   */
  savePartialApplication(): Observable<ApplicationRequest> {

    this.uiService.showInfo({
      message: 'Saving the information',
    });

    const {applicationType} = this.applicationParams;

    const saveRequest = this.profileFormFactoryService
      .createApplicationRequestFromProfileFormData(
        this.profileForm.value,
        this.propertyInfo,
        applicationType,
        this.mainApplicationId ? null : this.coApplicantType);

    if (this.pendingApplicationId) {
      saveRequest.pendingApplicationId = this.pendingApplicationId;
    }

    if (this.mainApplicationId) {
      saveRequest.mainApplicationId = this.mainApplicationId;
      saveRequest.coApplicantType = this.coApplicantType;
    }

    return this.httpService
      .savePartialApplication(saveRequest)
      .pipe(
        tap((response: any) => {
          this.uiService.showSuccess({
            message: 'Information Saved',
            removeCurrent: true
          });
        }),
        catchError((httpError: HttpErrorResponse) => {
          const error: ErrorResponse = httpError.error;

          this.uiService
            .confirmAction({
              message: error.title,
              title: 'Error',
              showCancel: false,
              type: 'error'
            });

          throw error;
        })
      );
  }

  /**
   *
   * @returns {Observable<ApplicationRequest>}
   */
  cancelPartialApplication(): Observable<ApplicationRequest> {

    const {applicationType} = this.applicationParams;

    const saveRequest = this.profileFormFactoryService
      .createApplicationRequestFromProfileFormData(
        this.profileForm.value,
        this.propertyInfo,
        applicationType,
        this.mainApplicationId ? null : this.coApplicantType);

    if (this.pendingApplicationId) {
      saveRequest.pendingApplicationId = this.pendingApplicationId;
    }

    if (this.mainApplicationId) {
      saveRequest.mainApplicationId = this.mainApplicationId;
      saveRequest.coApplicantType = this.coApplicantType;
    }

    return this.httpService
      .savePartialApplication(saveRequest)
      .pipe(
        tap((response: any) => {

        }),
        catchError((httpError: HttpErrorResponse) => {
          const error: ErrorResponse = httpError.error;

          this.uiService
            .confirmAction({
              message: error.title,
              title: 'Error',
              showCancel: false,
              type: 'error'
            });

          throw error;
        })
      );
  }

  saveAndContinue<T>(controlName: ProfileFormControlNames, data: T) {
    this.saveData<T>(controlName, data);
    this.goToNextStep();
  }

  goToNextStep() {
    let nextPath = this.getPathByStep(this.currentStepSubject.getValue() + 1);
    let nextFullPath = `/application/resume/${this.pendingApplicationId}/${nextPath}`;

    // if ( (nextFullPath.includes('/address-details'))
    // // || (nextFullPath.includes('/references'))
    // ) {
    //   // nextFullPath = `/application/resume/${this.pendingApplicationId}/current-residence`;
    //   nextPath = this.getPathByStep(this.currentStepSubject.getValue() + 2);
    //   nextFullPath = `/application/resume/${this.pendingApplicationId}/${nextPath}`;
    // }

    this.router
      .navigate([nextFullPath])
      .catch(console.log);
  }

  makeApplicationRequest(paymentData: TenantPaymentDetails): Observable<ApplicationResponse> {
    const {applicationType, coApplicantType} = this.applicationParams;
    const request = this.profileFormFactoryService
      .createApplicationRequestFromProfileFormData(
        this.profileForm.value,
        this.propertyInfo,
        applicationType,
        coApplicantType,
        paymentData);

    request.pendingApplicationId = this.pendingApplicationId;

    if (this.mainApplicationId) {
      request.mainApplicationId = this.mainApplicationId;
      request.coApplicantType = this.coApplicantType;
    }

    return this.httpService
      .submitApplication(request);
  }

  validateForm() {
    this.validateFormSubject.next(true);
  }

  listenForFormValidation() {
    this.validateForm$
      .pipe(
        tap(() => {
          this.uiService.showError({
            title: 'Invalid Form Fields',
            message: 'Please verify all needed values are complete',
          });
          this.validationFinishedSubject.next(true);
        })
      )
      .subscribe();
  }

  private getPathByStep(step: number): string {
    return this.formSteps[(step.toString(10))];
  }

  getFormFieldByStepNumber(step: number): string {
    return Object.keys(this.profileForm.controls)[step - 1];
  }

  getFieldControlNames(): string[] {
    return Object.keys(this.profileForm.controls);
  }

  dataExistsOnFormControl(control: string): boolean {
    return !!this.profileForm.value[control];
  }

  /**
   * Get previously stored data in the localStorage of the form.
   *
   * @param {string} controlName
   * @returns {any}
   */
  private getSavedDataByControlName(controlName: ProfileFormControlNames): any {
    const data = this.uiService.getInfoFromLocalStorage(this.storageKey);
    if (data) {
      return data[controlName] ? data[controlName] : null;
    }

    return null;
  }

}
