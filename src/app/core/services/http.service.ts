import {filter, map, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {environment} from '../../../environments/environment';
import {apiEndpoints} from './endpoints';
import {ApplicationSubType} from '../../shared/definitions/types/application-sub-type';
import {NewTenantApplicantRequest} from '../../shared/definitions/requests/new-tenant-applicant.request';
import {LoginVmRequest} from '../../shared/definitions/requests/login-vm.request';

import {PropertyInfoResponse} from '../../shared/definitions/responses/property-info.response';
import {FeesAndDocsRequest} from '../../shared/definitions/requests/fees-and-docs.request';
import {FeesAndDocsResponse} from '../../shared/definitions/responses/fees-and-docs.response';
import {SetupRequest} from '../../shared/definitions/requests/setup.request';
import {SetupResponse} from '../../shared/definitions/responses/setup.response';
import {ApplicationRequest} from '../../shared/definitions/requests/application.request';
import {PaymentRequest} from '../../shared/definitions/requests/payment.request';
import {PaymentResponse} from '../../shared/definitions/responses/payment.response';
import {ApplicationListFilterResponse, ApplicationListResponse} from '../../shared/definitions/responses/application-list.response';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {SignApplicationRequest} from '../../shared/definitions/requests/sign-application.request';
import {UploadDocumentRequest} from '../../shared/definitions/requests/upload-document.request';
import {UpdateOwnerInformationRequest} from '../../shared/definitions/requests/update-owner-information.request';
import {InviteApplicantRequest} from '../../shared/definitions/requests/invite-applicant.request';
import {InviteReplaceRequest} from '../../shared/definitions/requests/invite-replace.request';
import {ResetPasswordInitRequest} from '../../shared/definitions/requests/reset-password-init.request';
import {ResetPasswordFinishRequest} from '../../shared/definitions/requests/reset-password-finish.request';
import {PasswordChangeRequest} from '../../shared/definitions/requests/password-change.request';
import {UiService} from '../../ui/ui.service';
import {ExtraPaymentDetailResponse} from '../../shared/definitions/responses/extra-payment-detail.response';
import {ExtraPaymentRequest} from '../../shared/definitions/requests/extra-payment.request';
import {RefundRequest} from '../../shared/definitions/requests/refund.request';
import {SendEmailReferenceVerification} from '../../shared/definitions/requests/send-email-referece-verification.request';
import {CharacterVerificationRequestDTO,PersonalReferenceVerification,
  ViewCharacterVerificationDTO
} from '../../shared/definitions/models/personal-reference-verification.model';
import {EmploymentReferenceVerification} from '../../shared/definitions/models/employment-reference-verification.model';
import {MobileIdVerification, PhotoIdVerification} from '../../shared/definitions/models/photo-id-verification';
import {LandlordReferenceVerification} from '../../shared/definitions/models/landlord-reference-verification.model';
import {PhotoSsnVerification} from '../../shared/definitions/models/photo-sn-verification';
import {PhotoVehicleRegistrationVerification} from '../../shared/definitions/models/photo-tag-registration-verification';
import {TokenUploadResponse} from '../../shared/definitions/responses/token.upload.response';
import {UploadIdResponse} from '../../shared/definitions/responses/upload-id.response';
import * as url from 'url';
import {
  CloseProofIncomeRequest,
  GenerateConnectURLResponse,
  JournalRequest,
  ProofOfIncomeRenew
} from '../../shared/definitions/models/finicity.model';
import {LandlordVerificationRequestDTO, ViewLandlordVerificationDTO} from '../../shared/definitions/models/landlord-verification.model';
import {ResendCodeRequest, VerifyCodeRequest} from '../../shared/definitions/requests/send-sms.request';
import {
  EmploymentVerificationRequestDTO,
  ViewEmploymentVerificationDTO
} from '../../shared/definitions/models/employment-verification.model';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import swal from 'sweetalert2';
import { FullUrlResponse } from '../../shared/definitions/models/full-url.model';
import { NoticePlatformResponse } from '../../shared/definitions/models/notice-platform';


@Injectable()
export class HttpService {
  readonly apiUrl = environment.api_url;
  endpoints: { [endpoint: string]: string };

  private propertyInfoSubject: BehaviorSubject<PropertyInfoResponse> =
    new BehaviorSubject<PropertyInfoResponse>(null);
  propertyInfo$: Observable<PropertyInfoResponse> =
    this.propertyInfoSubject.asObservable();

  private applicationRequestSubject: BehaviorSubject<ApplicationRequest> =
    new BehaviorSubject<ApplicationRequest>(null);
  applicationRequest$: Observable<ApplicationRequest> =
    this.applicationRequestSubject.asObservable();

  private feesAndDocUploadRequirementsSubject: BehaviorSubject<FeesAndDocsResponse> =
    new BehaviorSubject<FeesAndDocsResponse>(null);
  feesAndDocUploadRequirements$: Observable<FeesAndDocsResponse> =
    this.feesAndDocUploadRequirementsSubject.asObservable();

  private setupSubject: BehaviorSubject<SetupResponse> =
    new BehaviorSubject<SetupResponse>(null);
  setup$: Observable<SetupResponse> = this.setupSubject.asObservable();

  private mainApplicationSubject: BehaviorSubject<ApplicationResponse> =
    new BehaviorSubject<ApplicationResponse>(null);
  mainApplication$: Observable<ApplicationResponse> =
    this.mainApplicationSubject.asObservable();

  private extraPaymentSubject: BehaviorSubject<ExtraPaymentDetailResponse> =
    new BehaviorSubject<ExtraPaymentDetailResponse>(null);
  extraPayment$: Observable<ExtraPaymentDetailResponse> =
    this.extraPaymentSubject.asObservable();

  constructor(private httpClient: HttpClient, private uiService: UiService) {
    this.setEndpoints();
    this.listenToMainApplication();
  }

  setEndpoints() {
    this.endpoints = Object.keys(apiEndpoints)
      .map((endpoint) => {
        return {[endpoint]: `${this.apiUrl}/${apiEndpoints[endpoint]}`};
      })
      .reduce((accumulator, currentValue) => {
        return Object.assign(accumulator, currentValue);
      }, {});
  }

  listenToMainApplication() {
    this.mainApplication$
      .pipe(filter((application) => !!application))
      .subscribe((application) => {
        if (application.theme) {
          this.uiService.setThemeValues(application.theme.values);
        } else {
          this.uiService.setThemeDefaultValues();
        }
      });
  }

  /**
   * Login an applicant with the provided credentials.
   *
   * @param data
   * @returns {Observable<any>}
   */
  login(data: LoginVmRequest): Observable<any> {
    const endpoint = this.endpoints['authenticate'];
    return this.postRequest(endpoint, data, null, {
      responseType: 'text',
    });
  }

  /**
   * Register a new applicant.
   *
   * @param {NewTenantApplicant} data
   * @returns {Observable<string>}
   */
  register(data: NewTenantApplicantRequest): Observable<string> {
    const endpoint = this.endpoints['registerNewUser'];
    return this.postRequest(endpoint, data, null, {
      responseType: 'text',
    });
  }

  /**
   * Get Property info.
   *
   * @param {string} code
   * @param {ApplicationSubType} type
   * @returns {Observable<PropertyInfoResponse>}
   */
  getPropertyInfo(
    code: string,
    type: ApplicationSubType,
    getFromCache: boolean = true
  ): Observable<PropertyInfoResponse> {
    const endpoint = `${this.endpoints['getPropertyInfo']}/${code}/${type}`;

    return this.getRequest(endpoint, getFromCache).pipe(
      switchMap((propertyInfo: PropertyInfoResponse) => {
        this.propertyInfoSubject.next(propertyInfo);

        if (propertyInfo.theme) {
          this.uiService.setThemeValues(propertyInfo.theme.values);
        } else {
          this.uiService.setThemeDefaultValues();
        }

        return of(propertyInfo);
      })
    );
  }

  getPropertyInfoByCode(
    code: string,
    getFromCache: boolean = true
  ): Observable<PropertyInfoResponse> {
    const endpoint = `${this.endpoints['getPropertyInfo']}/${code}`;

    return this.getRequest(endpoint, getFromCache).pipe(
      switchMap((propertyInfo: PropertyInfoResponse) => {
        this.propertyInfoSubject.next(propertyInfo);

        if (propertyInfo.theme) {
          this.uiService.setThemeValues(propertyInfo.theme.values);
        } else {
          this.uiService.setThemeDefaultValues();
        }

        return of(propertyInfo);
      })
    );
  }

  getApplicationSetupData(
    data: SetupRequest,
    cacheKey?: string
  ): Observable<SetupResponse> {
    return this.postRequest(this.endpoints['setup'], data, cacheKey).pipe(
      switchMap((info: SetupResponse) => {
        this.setupSubject.next(info);
        return of(info);
      })
    );
  }

  /**
   * Get Fees and Document required.
   *
   * @param {FeesAndDocsRequest} data
   * @returns {Observable<FeesAndDocsResponse>}
   */
  getFeesAndDocUploadRequirements(
    data: FeesAndDocsRequest,
    cacheKey?: string
  ): Observable<FeesAndDocsResponse> {
    return this.postRequest(this.endpoints['fees'], data, cacheKey).pipe(
      switchMap((info: FeesAndDocsResponse) => {
        this.feesAndDocUploadRequirementsSubject.next(info);
        return of(info);
      })
    );
  }

  /**
   * Submit Application
   *
   * @param {ApplicationRequest} request
   * @returns {Observable<string>}
   */
  submitApplication(
    request: ApplicationRequest
  ): Observable<ApplicationResponse> {
    return this.postRequest(this.endpoints['newApplication'], request);
  }

  /**
   * Save Partial Application
   *
   * @param {ApplicationRequest} request
   * @returns {Observable<string>}
   */
  savePartialApplication(
    request: ApplicationRequest
  ): Observable<ApplicationRequest> {
    return this.postRequest(this.endpoints['saveApplication'], request).pipe(
      tap((applicationRequest) => {
        this.applicationRequestSubject.next(applicationRequest);
      })
    );
  }

  /**
   * Retrieve Partial Application to Resume
   *
   * @param {string} id
   * @returns {Observable<ApplicationRequest>}
   */
  resumeApplication(id: string): Observable<ApplicationRequest> {
    const endpoint = `${this.endpoints['resumeApplication']}/${id}`;

    return this.getRequest<ApplicationRequest>(endpoint, false).pipe(
      tap((applicationRequest) => {
        applicationRequest.pendingApplicationId = Number(id);
        this.applicationRequestSubject.next(applicationRequest);
      })
    );
  }

  /**
   * Submit Payment
   *
   * @param {PaymentRequest} request
   * @returns {Observable<PaymentResponse>}
   */
  submitPayment(request: PaymentRequest): Observable<PaymentResponse> {
    return this.postRequest(this.endpoints['submitPayment'], request);
  }

  /**
   * Get Applications list
   *
   * @param {boolean} getFromCache
   * @returns {Observable<ApplicationListResponse>}
   */
  getApplicationList(
    getFromCache: boolean = true
  ): Observable<ApplicationListResponse> {
    return this.getRequest(this.endpoints['getApplicationList'], getFromCache);
  }

  getApplicationsByFilter(searchValue: string, page: number, size: number): Observable<ApplicationListFilterResponse> {
    if (searchValue) {
      const endpoint = `${this.endpoints['getApplicationsByFilter']}/${searchValue}?page=${page}&size=${size}`;
      return this.getRequest(endpoint, false);
    }
  }

  /**
   * Get Application By Id
   *
   * @param applicationId
   */
  getApplicationById(applicationId: string): Observable<ApplicationResponse> {
    const endpoint = `${this.endpoints['getSingleApplication']}/${applicationId}`;
    return this.getRequest<ApplicationResponse>(endpoint, false).pipe(
      tap((application) => {
        this.mainApplicationSubject.next(application);
      })
    );
  }

  reRunCreditById(creditReportId: string): Observable<ApplicationResponse> {
    const endpoint = `${this.endpoints['reRunCredit']}/${creditReportId}`;

    return this.getRequest<ApplicationResponse>(endpoint, false).pipe(
      tap((application) => {
        this.mainApplicationSubject.next(application);
      })
    );
  }

  /**
   * Sign Application
   *
   * @param request
   */
  signApplication(
    request: SignApplicationRequest
  ): Observable<ApplicationResponse> {
    return this.postRequest(this.endpoints['signApplication'], request);
  }

  /**
   * Cancel Application By Id
   */
  cancelApplicationById(applicationId: string): Observable<any> {
    const endpoint = `${this.endpoints['cancelApplication']}/${applicationId}`;
    return this.getRequest(endpoint, false);
  }

  /**
   * Upload document
   *
   * @param {UploadDocumentRequest} uploadRequest
   * @return {Observable<any>}
   */
  uploadDocument(uploadRequest: UploadDocumentRequest): Observable<any> {
    const request = new HttpRequest(
      'POST',
      this.endpoints['uploadDocument'],
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  /**
   * Upload document
   *
   * @param {UploadDocumentRequest} uploadRequest
   * @return {Observable<any>}
   */
  uploadDocumentId(uploadRequest: UploadDocumentRequest): Observable<any> {

    let endPoint = this.endpoints['uploadDocumentId'];
    if (uploadRequest.uploadCode && uploadRequest.uploadCode === 'id-v2') {
      endPoint = this.endpoints['uploadDocumentIdV2'];
    }


    const request = new HttpRequest(
      'POST',
      endPoint,
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  /**
   * Upload document
   *
   * @param {UploadDocumentRequest} uploadRequest
   * @return {Observable<any>}
   */
  uploadDocumentSsn(uploadRequest: UploadDocumentRequest): Observable<any> {
    const request = new HttpRequest(
      'POST',
      this.endpoints['uploadDocumentSsn'],
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  /**
   * Upload document
   *
   * @param {UploadDocumentRequest} uploadRequest
   * @return {Observable<any>}
   */
  uploadDocumentPet(uploadRequest: UploadDocumentRequest): Observable<any> {
    const request = new HttpRequest(
      'POST',
      this.endpoints['uploadDocumentPet'],
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  uploadDocumentTagRegistration(
    uploadRequest: UploadDocumentRequest
  ): Observable<any> {
    const request = new HttpRequest(
      'POST',
      this.endpoints['uploadVehicleRegistration'],
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  removeDocument(documentId: string): Observable<any> {
    const endpoint = `${this.endpoints['removeDocument']}/${documentId}`;
    return this.getRequest(endpoint, false);
  }

  finishUploads(
    applicationId: string,
    taskId: any
  ): Observable<ApplicationResponse> {
    const endpoint = `${this.endpoints['finishUploads']}/${applicationId}/${taskId}`;
    return this.getRequest<ApplicationResponse>(endpoint, false);
  }

  /**
   * Activate new account
   *
   * @param {string} activationKey
   * @return {Observable<any>}
   */
  activateAccount(activationCode: string): Observable<any> {
    const endpoint = `${this.endpoints['activateAccount']}?key=${activationCode}`;
    return this.getRequest(endpoint, false);
  }

  /**
   * Complete Signature
   *
   * @param {string} applicationId
   * @return {Observable<any>}
   */
  completeSignature(applicationId: string): Observable<any> {
    const endpoint = `${this.endpoints['completeSignature']}/${applicationId}`;
    return this.getRequest(endpoint, false);
  }

  /**
   * Update Owner Information
   *
   * @param {UpdateOwnerInformationRequest} request
   * @return {Observable<any>}
   */
  updateOwnerInformation(
    request: UpdateOwnerInformationRequest
  ): Observable<any> {
    return this.postRequest(this.endpoints['updateOwnerInformation'], request);
  }

  /**
   * Update Personal Reference Information
   *
   * @param {updateReferenceInformation} request
   * @return {Observable<any>}
   */
  updateReferenceInformation(
    request: PersonalReferenceVerification
  ): Observable<any> {
    return this.postRequest(
      this.endpoints['updateReferenceInformation'],
      request
    );
  }

  /**
   * Update Employment Verification Information
   *
   * @param {EmploymentReferenceVerification} request
   * @return {Observable<any>}
   */
  updateEmploymentInformation(
    request: EmploymentReferenceVerification
  ): Observable<any> {
    return this.postRequest(
      this.endpoints['updateEmploymentInformation'],
      request
    );
  }

  /**
   * Update Employment Verification Information
   *
   * @param {EmploymentReferenceVerification} request
   * @return {Observable<any>}
   */
  updateLandlordInformation(
    request: LandlordReferenceVerification
  ): Observable<any> {
    return this.postRequest(
      this.endpoints['updateLandlordInformation'],
      request
    );
  }

  /**
   * Send Email to reference
   *
   * @param {SendEmailReferenceVerification} request
   * @return {Observable<any>}
   */
  resendEmailToReferenceInformation(
    request: SendEmailReferenceVerification
  ): Observable<any> {
    return this.postRequest(
      this.endpoints['resendEmailToReferenceInformation'],
      request
    );
  }

  /**
   * Invite Co Applicant
   *
   * @param {InviteApplicantRequest} request
   * @return {Observable<any>}
   */
  inviteCoApplicant(request: InviteApplicantRequest): Observable<any> {
    return this.postRequest(
      this.endpoints['inviteAdditionalApplicant'],
      request
    );
  }

  /**
   * Resend invitation to Co Applicant
   *
   * @param {string} pendingApplicationId
   * @return {Observable<any>}
   */
  resendCoApplicant(pendingApplicationId: string): Observable<any> {
    const endpoint = `${this.endpoints['inviteResendApplicant']}/${pendingApplicationId}`;
    return this.getRequest<any>(endpoint, false).pipe(tap((response) => {
    }));
  }

  /**
   * Resplace Co Applicant data
   *
   * @param {InviteReplaceRequest} request
   * @return {Observable<any>}
   */
  replaceCoApplicant(request: InviteReplaceRequest): Observable<any> {
    return this.postRequest(this.endpoints['inviteReplaceApplicant'], request);
  }

  /**
   * Reset password init
   *
   * @param {ResetPasswordInitRequest} request
   * @return {Observable<any>}
   */
  resetPasswordInit(request: string): Observable<any> {
    return this.postRequest(this.endpoints['resetPasswordInit'], request);
  }

  /**
   * Reset password finish
   *
   * @param {ResetPasswordFinishRequest} request
   * @return {Observable<any>}
   */
  resetPasswordFinish(request: ResetPasswordFinishRequest): Observable<any> {
    return this.postRequest(this.endpoints['resetPasswordFinish'], request);
  }

  /**
   * Change logged in user password
   *
   * @param {PasswordChangeRequest} request
   * @return {Observable<any>}
   */
  changePassword(request: PasswordChangeRequest): Observable<any> {
    return this.postRequest(this.endpoints['changePassword'], request);
  }

  /**
   * @param {string} paymentId
   * @return {Observable<ExtraPaymentDetailResponse>}
   */
  getExtraPayment(paymentId: string): Observable<ExtraPaymentDetailResponse> {
    const endpoint = `${this.endpoints['getAdditionalPayment']}/${paymentId}`;
    return this.getRequest<ExtraPaymentDetailResponse>(endpoint, false).pipe(
      tap((response) => {
        this.extraPaymentSubject.next(response);
      })
    );
  }

  /**
   * @param {ExtraPaymentRequest} request
   * @return {Observable<any>}
   */
  makeExtraPayment(request: ExtraPaymentRequest): Observable<any> {
    return this.postRequest(this.endpoints['makeAdditionalPayment'], request);
  }

  /**
   * @param {RefundRequest} request
   * @return {Observable<any>}
   */
  requestRefund(request: RefundRequest): Observable<any> {
    return this.postRequest(this.endpoints['requestRefund'], request);
  }

  /**
   * Get information saved on the session storage.
   *
   * @param key
   * @return {T | null}
   */
  private getInfoFromLocalStorage<T>(key: string): T | null {
    const info = localStorage.getItem(key);
    return info ? JSON.parse(info) : null;
  }

  /**
   * Save information in the session storage.
   *
   * @param {string} key
   * @param data
   */
  private saveInfoInLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Make a GET request to the given endpoint.
   *
   * @param {string} endpoint
   * @param {boolean} getFromCache
   * @returns {Observable<any>}
   */
  private getRequest<T>(
    endpoint: string,
    getFromCache: boolean = true
  ): Observable<T> {
    /**
     * Check if a previous request to the same endpoint has already been done.
     * If the information is on the Session let's return that instead of making a new HTTP request.
     */
    const getFromSession = this.getInfoFromLocalStorage<T>(endpoint);
    if (getFromSession && getFromCache) {
      return of(getFromSession);
    } else {
      return this.httpClient.get(endpoint).pipe(
        tap((response) => {
          this.saveInfoInLocalStorage(endpoint, response);
        }),
        map((response) => <T>response)
      );
    }
  }

  /**
   * Make a POST request to the given endpoint.
   *
   * @param {string} endpoint
   * @param data
   * @param {string} cacheKey
   * @param {any} options
   * @return {Observable<any>}
   */
  private postRequest(
    endpoint: string,
    data: any,
    cacheKey?: string,
    options?: any
  ): Observable<any> {
    const getFromSession = cacheKey
      ? this.getInfoFromLocalStorage(cacheKey)
      : false;
    if (getFromSession) {
      return of(getFromSession);
    } else {
      return this.httpClient.post(endpoint, data, options).pipe(
        tap((response) => {
          if (cacheKey) {
            this.saveInfoInLocalStorage(cacheKey, response);
          }
        })
      );
    }
  }

  /**
   * verify Id Document
   *
   * @param {PhotoIdVerification} photoIdVerification
   * @return {Observable<any>}
   */
  verifyIdDocument(
    photoIdVerification: PhotoIdVerification
  ): Observable<Response> {
    const endpoint = `${this.endpoints['verifyUploadedId']}/${photoIdVerification.documentId}`;
    return this.postRequest(endpoint, photoIdVerification);
  }

  /**
   * verify ssn Document
   *
   * @param {PhotoSsnVerification} PhotoSsnVerification
   * @return {Observable<any>}
   */
  verifySsnDocument(
    photoSsnVerification: PhotoSsnVerification
  ): Observable<Response> {
    const endpoint = `${this.endpoints['verifyUploadedSsn']}/${photoSsnVerification.documentId}`;
    return this.postRequest(endpoint, photoSsnVerification);
  }

  /**
   * verify ssn Document
   *
   * @param {PhotoSsnVerification} PhotoSsnVerification
   * @return {Observable<any>}
   */
  verifyVehicleRegistrationDocument(
    id: number,
    vehRegInfoDTO: PhotoVehicleRegistrationVerification
  ): Observable<Response> {
    const endpoint = `${this.endpoints['verifyUploadedVehicleRegistration']}/${id}`;

    return this.postRequest(endpoint, vehRegInfoDTO);
  }



  createUploadInPhone(documentTaskId: any): Observable<TokenUploadResponse> {
    const endpoint = `${this.endpoints['generateTokenUpload']}`;

    return this.postRequest(endpoint, documentTaskId);
  }

  createUploadInPhoneV2(documentTaskId: any): Observable<TokenUploadResponse> {
    const endpoint = `${this.endpoints['generateTokenUploadV2']}`;

    return this.postRequest(endpoint, documentTaskId);
  }

  checkTokenUpload(token: string): Observable<any> {
    const endpoint = `${this.endpoints['checkTokenUpload']}/${token}`;
    return this.getRequest(endpoint, false);
  }

  checkTokenUploadV2(token: string): Observable<any> {
    const endpoint = `${this.endpoints['checkTokenUploadV2']}/${token}`;
    return this.getRequest(endpoint, false);
  }


  uploadDocumentFromMobile(uploadRequest: any): Observable<any> {
    return this.postRequest(
      this.endpoints['uploadDocumentFromMobile'],
      uploadRequest,
      null,
      {
        reportProgress: true,
      }
    );
  }

  uploadDocumentFromMobileV2(uploadRequest: any): Observable<any> {
    return this.postRequest(
      this.endpoints['uploadDocumentFromMobileV2'],
      uploadRequest,
      null,
      {
        reportProgress: true,
      }
    );
  }

  uploadBackId(uploadRequest: UploadDocumentRequest): Observable<any> {
    const request = new HttpRequest(
      'POST',
      this.endpoints['uploadBackId'],
      uploadRequest,
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(request);
  }

  /**
   * verify Id Document from mobile
   *
   * @param {PhotoIdVerification} photoIdVerification
   * @return {Observable<any>}
   */
  verifyIdFromMobile(
    photoIdVerification: MobileIdVerification
  ): Observable<Response> {
    const endpoint = `${this.endpoints['verifyIdFromMobile']}/${photoIdVerification.token}`;
    return this.postRequest(endpoint, photoIdVerification);
  }

  confirmExpired(taskId: any): Observable<ApplicationResponse> {
    const endpoint = `${this.endpoints['confirmExpired']}/${taskId}`;
    return this.getRequest<ApplicationResponse>(endpoint, false);
  }

  confirmExpiredMobile(taskId: any): Observable<ApplicationResponse> {
    const endpoint = `${this.endpoints['confirmExpiredMobile']}/${taskId}`;
    return this.getRequest<ApplicationResponse>(endpoint, false);
  }

  /**
   * Get Application By Id
   *
   * @param applicationId
   */
  generateUrl(applicationId: number, applicantId: number): Observable<GenerateConnectURLResponse> {
    const endpoint = `${this.endpoints['generateUrl']}/${applicationId}/${applicantId}`;
    return this.getRequest<GenerateConnectURLResponse>(endpoint, false);
  }

  journalLogIn(applicationId: number, applicantId: number, action: string, institutionId: number): Observable<any> {
    const endpoint = `${this.endpoints['journalLogIn']}`;
    const obj: JournalRequest = {applicationId: applicationId, applicantId: applicantId, action: action, institutionId: institutionId};
    return this.postRequest(endpoint, obj);
  }

  closeProofOfIncome(applicationId: number, applicantId: number, reportId: string): Observable<any> {
    const endpoint = `${this.endpoints['closeProofOfIncome']}`;
    const obj: CloseProofIncomeRequest = {applicationId: applicationId, applicantId: applicantId, reportId: reportId};
    return this.postRequest(endpoint, obj);
  }

  proofOfIncomeDecline(applicationId: number, applicantId: number): Observable<any> {
    const endpoint = `${this.endpoints['proofOfIncomeChangeStatus']}`;
    const obj: ProofOfIncomeRenew = {applicationId: applicationId, applicantId: applicantId, decline: true, renew: false};
    return this.postRequest(endpoint, obj);
  }

  proofOfIncomeChangeStatus(applicationId: number, applicantId: number, clearReport: boolean): Observable<any> {
    const endpoint = `${this.endpoints['proofOfIncomeChangeStatus']}`;
    const obj: ProofOfIncomeRenew = {applicationId: applicationId, applicantId: applicantId, decline: false, renew: clearReport};
    return this.postRequest(endpoint, obj);
  }

  /**
   * @param {string} id
   * @param {string} hash
   * @return {Observable<>}
   */
  getLandLordVerification(id: string, hash: string): Observable<ViewLandlordVerificationDTO> {
    const endpoint = `${this.endpoints['getLandLordVerification']}/${id}/${hash}`;
    return this.getRequest<ViewLandlordVerificationDTO>(endpoint, false);
  }

  declineLandlordVerification(id: string, hash: string): Observable<ViewLandlordVerificationDTO> {
    const endpoint = `${this.endpoints['declineLandlordVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, id);
  }

  saveLandlordVerification(id: string, hash: string, data: LandlordVerificationRequestDTO): Observable<ViewLandlordVerificationDTO> {
    const endpoint = `${this.endpoints['saveLandlordVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, data);
  }

  checkExpiredToken(key: string): Observable<any> {
    const endpoint = `${this.endpoints['expiredToken']}/${key}`;
    return this.postRequest(endpoint, key);
  }

  /**
   * Verify Code
   *
   * @param {VerifyCodeRequest} request
   * @return {Observable<any>}
   */
  verifyCode(
    request: VerifyCodeRequest
  ): Observable<any> {

    const endpoint = `${this.endpoints['verifyCode']}`;
    return this.postRequest(endpoint, request);
  }


  /**
   * Resend code verification
   *
   * @param {ResendRequest} request
   * @return {Observable<any>}
   */
  resendCode(
    request: ResendCodeRequest
  ): Observable<any> {
    const endpoint = `${this.endpoints['resendCode']}`;
    return this.postRequest(endpoint, request);
  }

  getEmploymentVerification(id: string, hash: string): Observable<ViewEmploymentVerificationDTO> {
    const endpoint = `${this.endpoints['getEmploymentVerification']}/${id}/${hash}`;
    return this.getRequest<ViewEmploymentVerificationDTO>(endpoint, false);
  }

  declineEmploymentVerification(id: string, hash: string): Observable<ViewEmploymentVerificationDTO> {
    const endpoint = `${this.endpoints['declineEmploymentVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, id);
  }

  saveEmploymentVerification(id: string, hash: string, data: EmploymentVerificationRequestDTO): Observable<ViewEmploymentVerificationDTO> {
    const endpoint = `${this.endpoints['saveEmploymentVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, data);
  }

  getCountiesOfStates(state: string): Observable<any> {
    const endpoint = `${this.endpoints['getCountiesOfStates']}/${state}`;
    return this.getRequest(endpoint, true);
  }

  getAppTaskJournal(idTask: string): Observable<any> {
    const endpoint = `${this.endpoints['getAppTaskJournal']}/${idTask}`;
    return this.getRequest(endpoint, false);
  }

  getFinicityJournal(applicationId: string, applicantId: string): Observable<any> {
    const endpoint = `${this.endpoints['getFinicityJournal']}/${applicationId}/${applicantId}`;
    return this.getRequest(endpoint, false);
  }

  /**
   * Get Application By Id
   *
   * @param applicationId
   */
  getUploadsId(applicationId: string, taskID: string): Observable<DocumentTask> {
    const endpoint = `${this.endpoints['getUploadTask']}/${applicationId}/${taskID}`;
    return this.getRequest<DocumentTask>(endpoint, false);
  }

  getCharacterVerification(id: string, hash: string): Observable<ViewCharacterVerificationDTO> {
    const endpoint = `${this.endpoints['getCharacterVerification']}/${id}/${hash}`;
    return this.getRequest<ViewCharacterVerificationDTO>(endpoint, false);
  }

  declineCharacterVerification(id: string, hash: string): Observable<ViewCharacterVerificationDTO> {
    const endpoint = `${this.endpoints['declineCharacterVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, id);
  }

  saveCharacterVerification(id: string, hash: string, data: CharacterVerificationRequestDTO): Observable<ViewCharacterVerificationDTO> {
    const endpoint = `${this.endpoints['saveCharacterVerification']}/${id}/${hash}`;
    return this.postRequest(endpoint, data);
  }

  getFullLinkByAlias(alias: string): Observable<FullUrlResponse> {
    const endpoint = `${this.endpoints['getFullLinkByAlias']}/${alias}`;
    return this.getRequest<FullUrlResponse>(endpoint, false);
  }

  getNoticePlatform(): Observable<NoticePlatformResponse> {
    const endpoint = `${this.endpoints['getNoticePlatform']}`;
    return this.getRequest<NoticePlatformResponse>(endpoint, false);
  }

  showJournalTask(taskId: any) {
    this.getAppTaskJournal(taskId)
    .subscribe((res) => {
      let text = '';
      res.forEach(value => text += '<p class="journal_text small">' + value + '</p>');
      swal(
        {
          title: 'Lastest events',
          html: text,
          customClass: 'journal-log',
          focusConfirm: false,
          confirmButtonText: 'Close',
          animation: false,
        });
      },
      (httpError: HttpErrorResponse) => {
        console.log(httpError);
      });
  }

  showJournalFinicity(applicationId: string, applicantId: string) {
    this.getFinicityJournal(applicationId, applicantId)
    .subscribe((res) => {
      let text = '';
      if (res.length < 1) {
        text = '<p class="journal_text small">No events found</p>';
        swal(
          {
            title: 'Lastest events',
            html: text,
            customClass: 'journal-log',
            focusConfirm: false,
            confirmButtonText: 'Close',
            animation: false,
          });
      } else {
        res.forEach(value => text += '<p class="journal_text small">' + value + '</p>');
        swal(
          {
            title: 'Lastest events',
            html: text,
            customClass: 'journal-log',
            focusConfirm: false,
            confirmButtonText: 'Close',
            animation: false,
          });
      }
      },
      (httpError: HttpErrorResponse) => {
        console.log(httpError);
      });  }


}
