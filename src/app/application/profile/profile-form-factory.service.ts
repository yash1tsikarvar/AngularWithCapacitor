import { Injectable } from '@angular/core';
import { ProfileForm } from '../../shared/definitions/forms/profile-form/profile-form.interface';
import {
  ApplicationPaymentData,
  ApplicationRequest,
  EmergencyInfoRequest,
  OwnerInfoRequest,
  PropertyInfoRequest,
  RealEstateInfoRequest,
  SignatureInfoRequest,
} from '../../shared/definitions/requests/application.request';
import { PropertyInfoResponse } from '../../shared/definitions/responses/property-info.response';
import { ApplicationSubType } from '../../shared/definitions/types/application-sub-type';
import { CoApplicantType } from '../../shared/definitions/types/co-applicant.type';
import { OwnerInfo } from '../../shared/definitions/forms/profile-form/address-details/owner-info.interface';
import { RealEstateAgentInfo } from '../../shared/definitions/forms/profile-form/address-details/real-estate-agent-info.interface';
import { AddressInfo } from '../../shared/definitions/forms/profile-form/address-details/address-info.interface';
import { ApplicantInfo } from '../../shared/definitions/forms/profile-form/personal-info/applicant-info.interface';
import { PersonalInfo } from '../../shared/definitions/forms/profile-form/personal-info/personal-info.interface';
import {
  Applicant,
  ApplicantCompanyInfo,
  ApplicantCurrentResidence,
  ApplicantEmployedInfo,
  ApplicantEmploymentInfo,
  ApplicantPersonalInfo,
  ApplicantRemarks,
  ApplicantResidenceFamilyInfo,
  ApplicantResidenceRentalInfo,
  ApplicantSupervisorInfo,
  BankInformation
} from '../../shared/definitions/models/applicant.model';
import { MilitaryInfo } from '../../shared/definitions/forms/profile-form/personal-info/military-info.interface';
import {
  ArrestedInfo,
  RemarksInfo,
  remarksQuestions
} from '../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import { AuthService } from '../../core/services/auth.service';
import {
  ApplicantEmployment,
  ApplicantPersonalReference,
  ApplicantPersonalReferences,
  ApplicantReferences,
  CompanyInformation,
  EmergencyContactInformation,
  JobInformation, ProofOfIncomeStep1,
  References,
  SupervisorInformation
} from '../../shared/definitions/forms/profile-form/references/references.interface';
import {
  ApplicantResidenceInfo,
  CoApplicantResidenceInfo,
  CurrentResidence,
  FamilyInfo,
  LandlordInfo,
  ResidenceInfo
} from '../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import { ApplicantReference } from '../../shared/definitions/models/applicant-reference.model';
import { OtherOccupant } from '../../shared/definitions/models/other-occupant.interface';
import {
  AdditionalInfo,
  PetInfo,
  TenantPet,
  TenantVehicle,
  UnderAgeInfo,
  UnderAgeOccupant,
  VehicleInfo
} from '../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {
  ReviewInfo
} from '../../shared/definitions/forms/profile-form/review-info/review-info.interface';

import { Vehicle } from '../../shared/definitions/models/vehicle.interface';
import { Pet } from '../../shared/definitions/models/pet.interface';
import { FeesAndDocsRequest } from '../../shared/definitions/requests/fees-and-docs.request';
import { SetupRequest } from '../../shared/definitions/requests/setup.request';
import {
  DefaultAddress,
  TenantPaymentDetails
} from '../../shared/definitions/forms/profile-form/payment-details/payment-details.interface';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddressDetails } from '../../shared/definitions/forms/profile-form/address-details/address-details.interface';
import { ProfileFormUtils } from './profile-form.utils';

import * as moment from 'moment';
import {DatePipe} from '@angular/common';
import {isNumeric} from 'rxjs/internal-compatibility';

@Injectable()
export class ProfileFormFactoryService {

  private readonly userEmail: string;
  private readonly defaultAddress = DefaultAddress;
  private readonly remarksQuestions = remarksQuestions;

  constructor(
    private authService: AuthService,
  ) {
    this.userEmail = this.authService.email;
  }

  /**
   *
   * @param {ProfileForm} formData
   * @param {PropertyInfoResponse} propertyInfo
   * @param {ApplicationSubType} applicationSubType
   * @param {CoApplicantType} coApplicantType
   * @returns {FeesAndDocsRequest}
   */
  createFeesAndDocsRequest(formData: ProfileForm,
                           propertyInfo: PropertyInfoResponse,
                           applicationSubType: ApplicationSubType,
                           coApplicantType?: CoApplicantType
  ): FeesAndDocsRequest {

    const hasCoApplicant = this.hasCoApplicant(coApplicantType);

    let request: FeesAndDocsRequest = {
      propertyId: propertyInfo.propertyId,
      applicationType: applicationSubType,
      numberOfApplicants: hasCoApplicant ? 2 : 1
    };

    if (hasCoApplicant) {
      request = {...request, relationship: coApplicantType};
    }

    if (!!formData.additionalInfo) {

      if (
        typeof formData.additionalInfo.vehicleInfo !== 'undefined'
        && formData.additionalInfo.vehicleInfo.anyVehicle === 'yes'
      ) {
        request = {
          ...request,
          numberOfVehicles: formData.additionalInfo.vehicleInfo.vehicles.length
        };
      }

      if (
        typeof formData.additionalInfo.petInfo !== 'undefined'
        && formData.additionalInfo.petInfo.anyPet === 'yes'
      ) {
        request = {...request, numberOfPets: formData.additionalInfo.petInfo.pets.length};
      }
    } else {
      request = {...request, numberOfVehicles: 0, numberOfPets: 0};
    }

    return request;
  }

  /**
   *
   * @param {ProfileForm} formData
   * @param {PropertyInfoResponse} propertyInfo
   * @param {ApplicationSubType} applicationSubType
   * @param {CoApplicantType} coApplicantType
   * @returns {SetupRequest}
   */
  createSetupRequest(formData: ProfileForm,
                     propertyInfo: PropertyInfoResponse,
                     applicationSubType: ApplicationSubType,
                     coApplicantType?: CoApplicantType
  ): SetupRequest {

    const hasCoApplicant = this.hasCoApplicant(coApplicantType);

    let request: SetupRequest = {
      propertyId: propertyInfo.propertyId,
      applicationSubType: applicationSubType,
      numberOfApplicants: hasCoApplicant ? 2 : 1,
      numberOfPets: 0
    };

    if (hasCoApplicant) {
      request = Object.assign({
        relationship: coApplicantType
      }, request);
    }

    if (!!formData.additionalInfo) {
      if (
        typeof formData.additionalInfo.petInfo !== 'undefined'
        && formData.additionalInfo.petInfo.anyPet === 'yes'
      ) {
        request = Object.assign({
          numberOfPets: formData.additionalInfo.petInfo.pets.length
        }, request);
      }
    }


    return request;
  }

  /**
   * We will only send on the request the information that has being filled that why it can be used to save partial information.
   *
   * @param {ProfileForm} formData
   * @param {PropertyInfoResponse} propertyInfo
   * @param {ApplicationSubType} applicationSubType
   * @param {CoApplicantType} coApplicantType
   * @param {TenantPaymentDetails} paymentDetails
   * @returns {ApplicationRequest}
   */
  createApplicationRequestFromProfileFormData(formData: ProfileForm,
                                              propertyInfo: PropertyInfoResponse,
                                              applicationSubType: ApplicationSubType,
                                              coApplicantType?: CoApplicantType,
                                              paymentDetails?: TenantPaymentDetails
  ): ApplicationRequest {

    const {addressDetails, references, additionalInfo, personalInfo} = formData;

    const basicInfo = this.getBasicInfo(propertyInfo, applicationSubType, coApplicantType);

    // if (personalInfo){
    //   adults = this.getAdults(formData, coApplicantType);
    // } else {
    //   adults = [{}]
    // }

    let applicationRequest: ApplicationRequest = Object.assign({}, basicInfo);

    applicationRequest.adults = [{}]


    if (personalInfo) {
      applicationRequest = Object.assign(applicationRequest, this.getAdults(formData, coApplicantType));

    if (coApplicantType && coApplicantType !=='W'){
      if (formData.personalInfo.coApplicantInfo.coApplicantType !== undefined) {
        applicationRequest.coApplicantType = formData.personalInfo.coApplicantInfo.coApplicantType
      }
    }

      // if (coApplicantType.length > 0 && coApplicantType !== 'W' && formData.personalInfo.coApplicantInfo.coApplicantType !== undefined) {
      //   applicationRequest.coApplicantType = formData.personalInfo.coApplicantInfo.coApplicantType
      // }

    }

    if (addressDetails) {
      const {addressInfo, realEstateInfo, ownerInfo} = addressDetails;

      const addressReqInfo = addressInfo
        ? this.getAddressInfo(addressDetails.addressInfo, propertyInfo)
        : {};

      const realtorReqInfo = realEstateInfo
        ? this.getRealtorInformation(addressDetails.realEstateInfo)
        : {};

      const ownerReqInfo = ownerInfo
        ? this.getOwnerInformation(addressDetails.ownerInfo, propertyInfo)
        : {};

      applicationRequest = Object.assign(applicationRequest, addressReqInfo, realtorReqInfo, ownerReqInfo);
    } else {
      /**
       * If we are not yet on the address details steps let fill the address info with the property info received from the API
       */
      if (propertyInfo.prefillAddress) {
        const defaultAddress = this.getDefaultAddressInfo(propertyInfo);
        applicationRequest = Object.assign(applicationRequest, defaultAddress);
      }
    }

    if (references) {
      const emergencyInfo = this.getEmergencyInfo(references.emergencyContact);
      applicationRequest = Object.assign(applicationRequest, emergencyInfo);
    }


    if (additionalInfo) {
      const {underAgeInfo, vehicleInfo, petInfo} = additionalInfo;
      const otherOccupants = underAgeInfo ? this.getOtherOccupants(underAgeInfo) : {};
      const vehicles = vehicleInfo ? this.getVehicles(vehicleInfo) : {};
      const pets = petInfo ? this.getPets(petInfo) : {};
      applicationRequest = Object.assign(applicationRequest, otherOccupants, vehicles, pets);
    }

    if (paymentDetails) {
      const paymentData = this.getPaymentData(paymentDetails);
      applicationRequest = Object.assign(applicationRequest, paymentData);

      const signatureData = this.getSignatureData(paymentDetails);
      applicationRequest = Object.assign(applicationRequest, signatureData);
    }

    return applicationRequest;
  }

  /**
   * Prepare the information that comes from the API to be visible on the Profile Form
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {ProfileForm}
   */
  createProfileFormDataFromApplicationRequest(applicationRequest: ApplicationRequest): ProfileForm {

    return {
      personalInfo: this.getPersonalInfoFromApplicationRequest(applicationRequest),
      addressDetails: this.getAddressDetailsFromApplicationRequest(applicationRequest),
      currentResidence: this.getCurrentResidenceFromApplicationRequest(applicationRequest),
      references: this.getReferencesFromApplicationRequest(applicationRequest),
      additionalInfo: this.getAdditionalInfoFromApplicationRequest(applicationRequest),
      reviewInfo: this.getReviewInfoFromApplicationRequest(applicationRequest),
      paymentDetails: null
    };
  }

  /**
   * Get the information for the Step 1. Personal Info
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {PersonalInfo | null}
   */
  private getPersonalInfoFromApplicationRequest(applicationRequest: ApplicationRequest): PersonalInfo | null {

    if (applicationRequest.adults.length > 0 && this.checkIfPersonalInformationExists(applicationRequest)) {

      const personalInfo: PersonalInfo = {
        applicantInfo: null,
        coApplicantInfo: null,
        militaryInfo: null,
        remarksInfo: null
      };

      const [primaryApplicant, secondaryApplicant] =  applicationRequest.adults;

      const mainApplicantInfo = this.getApplicantInfoFromApplicantRequest(primaryApplicant);
      const secondApplicantInfo = secondaryApplicant ? this.getApplicantInfoFromApplicantRequest(secondaryApplicant) : null;

      personalInfo.applicantInfo = mainApplicantInfo;
      personalInfo.coApplicantInfo = secondApplicantInfo;
      personalInfo.militaryInfo = this.getMilitaryInfoFromApplicantsInfo(primaryApplicant, secondaryApplicant);
      personalInfo.remarksInfo = this.getRemarksInfoFromApplicantsInfo(primaryApplicant, secondaryApplicant);

      return personalInfo;
    }

    return null;
  }

  private checkIfPersonalInformationExists(applicationRequest: ApplicationRequest): boolean {
    const [applicant] = applicationRequest.adults;
    const adultFields = [
      applicant.firstName,
      applicant.middleInitial || '',
      applicant.lastName,
      applicant.maternalName || '',
      applicant.aka || [],
      applicant.email,
      applicant.cellPhone,
      applicant.aka || []
    ];
    return adultFields.every(field => typeof field !== 'undefined');
  }

  /**
   * Format the Applicant Information that comes from the Application Request to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ApplicantInfo}
   */
  private getApplicantInfoFromApplicantRequest(applicant: Applicant): ApplicantInfo {
    const applicantPhone = this.parsePhoneNumber(applicant.cellPhone);

    applicant.dob = this.parseDate(applicant.dob);

    return {
      firstName: applicant.firstName,
      middleInitial: applicant.middleInitial,
      lastName: applicant.lastName,
      maternalName: applicant.maternalName,
      aka: applicant.aka,
      dateOfBirth: applicant.dob ? applicant.dob.replace('T00:00:00.000Z', '') : null,
      country: applicant.country,
      dialCode: applicantPhone.dialCode,
      cellPhone: applicantPhone.phoneNumber,
      email: applicant.email,
      ssn: applicant.ssn || null,
      passport: applicant.passportNumber || null,
      passportCountry: applicant.passportCountry || null,
      receiveTextMessages: applicant.allowTextMessages,
      missingSnn: !applicant.ssn,
      hasUsBank: applicant.hasUsBank,
      bankName: applicant.bankName,
    };
  }

  /**
   * Format the Applicant Military Information that comes from the Application Request to work with the Profile Form.
   * @param {Applicant} primaryApplicant
   * @param {Applicant} secondaryApplicant
   * @returns {MilitaryInfo}
   */
  private getMilitaryInfoFromApplicantsInfo(
    primaryApplicant: Applicant,
    secondaryApplicant?: Applicant): MilitaryInfo {

    const primaryMilitary = primaryApplicant.actDutyMilitary;
    const secondaryMilitary = secondaryApplicant ? secondaryApplicant.actDutyMilitary : false;

    const militaryInfo: MilitaryInfo = {
      activeMilitary: (primaryMilitary || secondaryMilitary) ? 'yes' : 'no',
      activeMilitaryAnswers: {
        primaryApplicant: primaryMilitary
      }
    };

    if (secondaryApplicant) {
      militaryInfo.activeMilitaryAnswers['secondaryApplicant'] = secondaryMilitary;
    }

    return militaryInfo;
  }

  /**
   * Format the Applicant Remarks Information that comes from the Application Request to work with the Profile Form.
   *
   * @param {Applicant} primaryApplicant
   * @param {Applicant} secondaryApplicant
   * @returns {RemarksInfo}
   */
  private getRemarksInfoFromApplicantsInfo(
    primaryApplicant: Applicant,
    secondaryApplicant?: Applicant): RemarksInfo {

    const remarksInfo: RemarksInfo  = {
        applicant_explanation: primaryApplicant.remarks,
        arrests: primaryApplicant.detailsArrestDTOList,
        co_applicant_explanation: secondaryApplicant
        ? secondaryApplicant.remarks : '',
        co_applicant_arrests: secondaryApplicant ? secondaryApplicant.detailsArrestDTOList : []
    };

    const questions = secondaryApplicant ? this.remarksQuestions.withCoApplicant : this.remarksQuestions.applicantOnly;

    questions.forEach(question => {
      const remarkAnswerPrimary = primaryApplicant[question.remoteField];
      const remarkAnswerSecondary = secondaryApplicant ? secondaryApplicant[question.remoteField] : false;

      remarksInfo[question.mainField] = (remarkAnswerPrimary || remarkAnswerSecondary) ? 'yes' : 'no';
      remarksInfo[`${question.mainField}Answers`] = {
        primaryApplicant: remarkAnswerPrimary
      };

      if (secondaryApplicant) {
        remarksInfo[`${question.mainField}Answers`]['secondaryApplicant'] = remarkAnswerSecondary;
      }

    });

    return remarksInfo;

  }

  /**
   * Format the Address Information that comes from the Application Request to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {AddressDetails | null}
   */
  private getAddressDetailsFromApplicationRequest(applicationRequest: ApplicationRequest): AddressDetails | null {

    if (this.checkIfAddressDetailsInformationExists(applicationRequest)) {
      return {
        addressInfo: this.getAddressInfoFromApplicationRequest(applicationRequest),
        realEstateInfo: this.getRealEstateInfoFromApplicationRequest(applicationRequest),
        ownerInfo: this.getOwnerInfoFromApplicationRequest(applicationRequest),
      };
    }

    return null;
  }

  /**
   * Check if the Application Request has all needed fields that the Step 2. Address Details requires.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {boolean}
   */
  private checkIfAddressDetailsInformationExists(applicationRequest: ApplicationRequest): boolean {

    /**
     * Real Estate Agent and Owner Information is not verified as that information is options when filling the form.
     */
    const addressDetailsFields = [
      applicationRequest.street,
      applicationRequest.houseNumber,
      applicationRequest.city,
      applicationRequest.state,
      applicationRequest.unit,
      applicationRequest.zipcode,
      applicationRequest.moveInDate,
    ];

    return addressDetailsFields.every(field => typeof field !== 'undefined');
  }

  private parseDate(date: string) {
    if (!moment(date, 'YYYY-MM-DD').isValid()) {
      if (isNumeric(date)) {
        return moment.unix(Number(date) / 1000).format('YYYY-MM-DD');
      } else {
        const myDate = moment(date, 'MM/DD/YYYY');
        return  myDate.format('YYYY-MM-DD');
      }
    }
    return moment(date.replace('T00:00:00.000Z', '') ).format('YYYY-MM-DD');
  }

  /**
   * Format the Address Information received from the API to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {AddressInfo}
   */
  private getAddressInfoFromApplicationRequest(applicationRequest: ApplicationRequest): AddressInfo {

    /**
     * Street come as a unique text that have Street Name and Street Type.
     * We have to break the information and properly fill our form.
     */
    const spaceSplit = applicationRequest.street
      ? applicationRequest.street.split(' ')
      : [];

    const streetType = spaceSplit.length > 0
      ? spaceSplit.splice(spaceSplit.length - 1, 1).join('') : '';
    const streetName = spaceSplit.length > 0 ? spaceSplit.join(' ') : '';

    return {
      houseNumber: applicationRequest.houseNumber || '',
      streetName: streetName || '',
      streetType: streetType || '',
      city: applicationRequest.city || '',
      state: applicationRequest.state || '',
      aptUnit: applicationRequest.unit || '',
      zipCode: applicationRequest.zipcode || '',
      purchasePrice: applicationRequest.purchasePrice || null,
      monthlyRent: applicationRequest.monthlyRent || null,
      moveDate: applicationRequest.moveInDate  ? this.parseDate(applicationRequest.moveInDate) : null,
      howLongDayOrMonth: applicationRequest.leaseTypeDayMonth || null,
      howLong: applicationRequest.leaseDaysMonths || null,
      moveOutDate: applicationRequest.moveOutDate  ? this.parseDate(applicationRequest.moveOutDate) : null
    };
  }

  /**
   * Format the Real Estate Information received from the API to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {RealEstateAgentInfo | null}
   */
  private getRealEstateInfoFromApplicationRequest(applicationRequest: ApplicationRequest): RealEstateAgentInfo | null {

    /**
     * Check manually for the existence of the required values of the real estate agent information.
     * When saving the information these fields are sent even is the user chose not to work with a Real Estate Agent
     *
     * Even though it exists a field called `useRealtor`, the resume endpoint is not returning that field.
     * That's why are making this trick.
     *
     * If the fields exists in the API response but are empty we will know the user chose not to work with an agent,
     * otherwise it means the user hasn't filled the information yet.
     */
    const realtorInfoValues = [
      applicationRequest.realtorName,
      applicationRequest.realtorEmail,
      applicationRequest.realtorPhone,
      applicationRequest.allowRealtorNotice,
    ];

    const informationExists = realtorInfoValues.every(info => typeof info !== 'undefined');

    if (informationExists) {

      /**
       * If the information exists but the values are empty, it means the user chose not to work with an agent.
       */
      const applicantPhone = this.parsePhoneNumber(applicationRequest.realtorPhone);

      const anyRealtorInfo = realtorInfoValues.some(info => !!info);
      return {
        workingWithARealEstateAgent: anyRealtorInfo ? 'yes' : 'no',
        realEstateAgent: anyRealtorInfo
          ? {
            name: applicationRequest.realtorName || '',
            email: applicationRequest.realtorEmail || '',
            cellphone: applicantPhone.phoneNumber || '',
            dialCode: applicantPhone.dialCode || '',
            receiveNotification: applicationRequest.allowRealtorNotice || false
          }
          : null
      };
    }

    return null;
  }

  /**
   * Format the Owner Information received from the API to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {OwnerInfo | null}
   */
  private getOwnerInfoFromApplicationRequest(applicationRequest: ApplicationRequest): OwnerInfo | null {

    /**
     * As there is no field to know if the users knows the owner information or not,
     * when making the request we sent empty string values if that is the case.
     *
     * If the fields exists on the API response but are empty we will know the user chose he didn't know the info,
     * otherwise it means the user hasn't filled the information yet.
     */
    const ownerInfoValues = [
      applicationRequest.ownerName,
      applicationRequest.ownerEmail,
      applicationRequest.ownerPhone
    ];

    const informationExists = ownerInfoValues.every(info => typeof info !== 'undefined');

    if (informationExists) {
      const anyOwnerInfo = ownerInfoValues.some(info => !!info);
      const phone = this.parsePhoneNumber(applicationRequest.ownerPhone);
      return {
        knowOwnerInformation: anyOwnerInfo ? 'yes' : 'no',
        owner: anyOwnerInfo
          ? {
            fullName: applicationRequest.ownerName || '',
            phone: phone.phoneNumber || '',
            dialCode: phone.dialCode || '',
            email: applicationRequest.ownerEmail || ''
          }
          : null
      };
    }

    return null;
  }

  private getCurrentResidenceFromApplicationRequest(applicationRequest: ApplicationRequest): CurrentResidence | null {


    if (applicationRequest.adults.length > 0) {
      const currentResidence: CurrentResidence = {
        primaryApplicant: null,
        secondaryApplicant: null
      };

      const [primaryApplicant, secondaryApplicant] =  applicationRequest.adults;

      const mainApplicantInfo = this.getApplicantResidenceFromApplicantRequest(primaryApplicant);
      const secondApplicantInfo = secondaryApplicant
        ? this.getCoApplicantResidenceFromApplicantRequest(secondaryApplicant, primaryApplicant)
        : null;

      if (mainApplicantInfo || secondApplicantInfo) {

        currentResidence.primaryApplicant = mainApplicantInfo;
        currentResidence.secondaryApplicant = secondApplicantInfo;

        return currentResidence;
      }
    }

    return  null;
  }

  /**
   * Format the Applicant Residence received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ApplicantResidenceInfo | null}
   */
  private getApplicantResidenceFromApplicantRequest(applicant: Applicant): ApplicantResidenceInfo | null {

    if (this.checkIfResidenceInfoExistsInApplicantRequest(applicant)) {

      return {
        residenceInfo: this.getApplicantResidenceInfoFromApplicantRequest(applicant),
        landLord: applicant.currentResidentType === 'R'
          ? this.getLandLordInfoFromApplicantRequest(applicant) : null,
        familyInfo: applicant.currentResidentType === 'D'
          ? this.getFamilyResidenceInfoFromApplicantRequest(applicant) : null
      };
    }

    return null;
  }

  /**
   * Check if the Application Request has all needed fieds that the Step 3. Current Residence requires.
   *
   * @param {Applicant} applicant
   * @returns {boolean}
   */
  checkIfResidenceInfoExistsInApplicantRequest(applicant: Applicant) {

    /**
     * We don't check Land Lord Information or Family Information as those fields are options when filling the form.
     */
    const residenceInfoFields = [
      applicant.currentResidentType,
      applicant.houseNumber,
      applicant.street,
      applicant.country,
      applicant.city,
    ];

    return residenceInfoFields.every(field => typeof field !== 'undefined');
  }

  /**
   * Format the Applicant Current Residence received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ResidenceInfo}
   */
  private getApplicantResidenceInfoFromApplicantRequest(applicant: Applicant): ResidenceInfo {

    return {
      type: applicant.currentResidentType || null,
      number: applicant.houseNumber || null,
      streetName: applicant.street || null,
      apt: applicant.apartmentNo || null,
      country: applicant.country || '',
      zip: applicant.zipcode || null,
      city: applicant.city || null,
      state: applicant.state || '',
      years: applicant.years || 0,
      months: applicant.months || 0,
    };
  }

  /**
   * Get a NgDate relative to the current date by subtracting years and months.
   *
   * @param {number} years
   * @param {number} months
   * @returns {NgbDateStruct}
   */
  private getNgDateFromYearsMonthsAgo(years: number, months: number): NgbDateStruct {
    const date = moment().subtract(years, 'years').subtract(months - 1 , 'months');

    return {
      year: date.year(),
      month: date.month(),
      day: 1
    };
  }

  /**
   * Format the Land Lord Information received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {LandlordInfo}
   */
  private getLandLordInfoFromApplicantRequest(applicant: Applicant): LandlordInfo {
    const landlordPhone = this.parsePhoneNumber(applicant.landlordPhone);
    return {
      name: applicant.landlordName,
      dialCode: landlordPhone.dialCode,
      phone: landlordPhone.phoneNumber,
      email: applicant.landlordEmail,
      vacate: applicant.beenVacated ? 'yes' : 'no'
    };
  }

  /**
   * Format the Family Residence Info received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {FamilyInfo}
   */
  private getFamilyResidenceInfoFromApplicantRequest(applicant: Applicant): FamilyInfo {
    const familyPhone = this.parsePhoneNumber(applicant.familyPhone);
    return {
      name: applicant.familyName,
      dialCode: familyPhone.dialCode,
      phone: familyPhone.phoneNumber,
      relationship: applicant.familyRelationship
    };
  }

  /**
   * Format the CoApplicant Residence Information Received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {CoApplicantResidenceInfo | null}
   */
  private getCoApplicantResidenceFromApplicantRequest(coApplicant: Applicant, applicant: Applicant): CoApplicantResidenceInfo | null {
    const coApplicantResidenceInfo = this.getApplicantResidenceFromApplicantRequest(coApplicant);

    if (coApplicantResidenceInfo && coApplicantResidenceInfo.residenceInfo) {

      const applicantResidenceInfo = this.getApplicantResidenceFromApplicantRequest(applicant);

      /**
       * When saving the application we sent the same information for the co-applicant if the user choose that option.
       *
       * The only way to know if the user chose that option is by checking field by field that the information is the same.
       */
      if (this.checkIfInformationIsTheSame(coApplicantResidenceInfo.residenceInfo, applicantResidenceInfo.residenceInfo)) {
        return Object.assign({
          sameAsPrimaryApplicant: true
        });
      }

      return Object.assign({
        sameAsPrimaryApplicant: false

      }, coApplicantResidenceInfo);
    }

    return null;
  }

  /**
   * Basic function to check if two objects are equal.
   *
   * This does not check for arrays inside object and will return false if there is one inside.
   *
   * @param object1
   * @param object2
   * @returns {boolean}
   */
  private checkIfInformationIsTheSame(object1: any, object2: any): boolean {

    return (typeof object1 !== 'undefined' && typeof object2 !== 'undefined')
      && (object1 && object2)
      ? Object.keys(object1)
        .every(key => {

          if (typeof object2[key] !== 'undefined') {

            if (
              typeof object2[key] === 'string'
              || typeof object2[key] === 'number'
              || object2[key] === null
            ) {
              return object1[key] === object2[key];
            }

            if (typeof object2[key] === 'object' && object2[key] !== null) {
              return this.checkIfInformationIsTheSame(object1[key], object2[key]);
            }

            return false;
          }

          return false;
        })
      : false;
  }

  /**
   * Format the References Information received from the API to work with the Profile Form.
   *
   * By References Information we mean the information from the
   * Step 4. References that include the applicant and co-applicant employment and emergency information.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {References | null}
   */
  private getReferencesFromApplicationRequest(applicationRequest: ApplicationRequest): References | null {

    /**
     * We only check for the emergency info to exists as that information is required to save the Step 4. References information.
     *
     * By just checking that we will know the users filled the Employment and References Information.
     */
    if (
      this.checkIfEmergencyInfoExistsInApplicationRequest(applicationRequest)
    ) {

      const [primaryApplicant, secondaryApplicant] =  applicationRequest.adults;

      const mainApplicantInfo = this.getApplicantReferencesFromApplicantRequest(primaryApplicant);
      const secondApplicantInfo = secondaryApplicant
        ? this.getCoApplicantReferencesFromApplicantRequest(secondaryApplicant, primaryApplicant)
        : null;

      if (mainApplicantInfo || secondApplicantInfo) {
        return {
          primaryApplicant: mainApplicantInfo,
          secondaryApplicant: secondApplicantInfo,
          emergencyContact: this.getEmergencyInfoFromApplicationRequest(applicationRequest)
        };
      } else {
        return {
          emergencyContact: this.getEmergencyInfoFromApplicationRequest(applicationRequest)
        };
      }

    }
    return null;
  }

  /**
   * Check if the Application Request has all needed fields that the Step 3. References requires.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {boolean}
   */
  private checkIfEmergencyInfoExistsInApplicationRequest(applicationRequest: ApplicationRequest) {

    /**
     * As commented on {@link getReferencesFromApplicationRequest}
     * this is the only information we check to know the other information is filled.
     */
    const emergencyFields = [
      applicationRequest.ecName,
      applicationRequest.ecRelationship,
      applicationRequest.ecCell,
      applicationRequest.ecEmail,
    ];

    return emergencyFields.every(field => typeof field !== 'undefined');
  }

  /**
   * Format the Emergency Info received from the API to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {EmergencyContactInformation}
   */
  private getEmergencyInfoFromApplicationRequest(applicationRequest: ApplicationRequest): EmergencyContactInformation {
    const emergencyPhone = this.parsePhoneNumber(applicationRequest.ecCell);
    return {
      name: applicationRequest.ecName,
      relationship: applicationRequest.ecRelationship,
      dialCode: emergencyPhone.dialCode,
      phone: emergencyPhone.phoneNumber,
      email: applicationRequest.ecEmail
    };
  }

  /**
   * Format the Employment and References Info received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ApplicantReferences | null}
   */
  private getApplicantReferencesFromApplicantRequest(applicant: Applicant): ApplicantReferences | null {

    if (this.checkIfReferencesInfoExistsInApplicantRequest(applicant)) {
      return {
        employment: this.checkIfEmploymentReferencesInfoExistsInApplicantRequest(applicant) ? this.getEmploymentInfoFromApplicantRequest(applicant) : null,
        references: this.getReferencesFromApplicantRequest(applicant),
        proofOfIncomeStep1: this.getApplicantBankInformationFromApplicant(applicant)
      };
    }

    return null;
  }


  private getApplicantBankInformationFromApplicant(applicant: Applicant): ProofOfIncomeStep1{
    return {
      hasUsBank: applicant.hasUsBank ? 'yes' : 'no',
      notAllowedBank: applicant.bankName === 'notAllowedBank' ? 'yes' : 'no',
      bankName: applicant.bankName
    };
  }

  private getCoApplicantReferencesFromApplicantRequest(coApplicant: Applicant, applicant: Applicant): ApplicantReferences | null {

    if (this.checkIfReferencesInfoExistsInApplicantRequest(coApplicant)) {
      const coApplicantReferences = this.getApplicantReferencesFromApplicantRequest(coApplicant);


      if (coApplicantReferences && coApplicantReferences.references) {

        const applicantReferences = this.getApplicantReferencesFromApplicantRequest(applicant);

        /**
         * When saving the application we sent the same information for the co-applicant if the user choose that option.
         *
         * The only way to know if the user chose that option is by checking field by field that the information is the same.
         */
        if (applicantReferences.references
          && this.checkIfInformationIsTheSame(coApplicantReferences.references, applicantReferences.references)) {

          return Object.assign({
            sameReferencesAsPrimaryApplicant: true,
            employment:  this.checkIfEmploymentReferencesInfoExistsInApplicantRequest(coApplicant) ? coApplicantReferences.employment : null,
            proofOfIncomeStep1: this.getApplicantBankInformationFromApplicant(coApplicant)
          });

        }

        return Object.assign({
          sameReferencesAsPrimaryApplicant: false
        }, coApplicantReferences);
      }
    }

    return null;
  }

  /**
   *  Check if the Application Request has needed fields to fill the Employment, the income verification and References Form Groups Found in the Step. 4 References.
   *
   * @param {Applicant} applicant
   * @returns {boolean}
   */
  private checkIfReferencesInfoExistsInApplicantRequest(applicant: Applicant): boolean {
    const employmentInfoFields = [
      applicant.employmentType,
    ];

    const bankInfoFields = [
      applicant.hasUsBank,
    ];

    return employmentInfoFields.every(field => typeof field !== 'undefined') || bankInfoFields.every(field => typeof field !== 'undefined');
  }

    /**
   *  Check if the Application Request has needed fields to fill the Employment in the step 4 References.
   *
   * @param {Applicant} applicant
   * @returns {boolean}
   */
     private checkIfEmploymentReferencesInfoExistsInApplicantRequest(applicant: Applicant): boolean {
      const employmentInfoFields = [
        applicant.employmentType,
      ];
      return employmentInfoFields.every(field => typeof field !== 'undefined');
    }

  /**
   * Format the Applicant Employment Information received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ApplicantEmployment}
   */
  private getEmploymentInfoFromApplicantRequest(applicant: Applicant): ApplicantEmployment {
    const employment: ApplicantEmployment = {
      employmentType: applicant.employmentType,
      jobInfo: null,
      supervisorInfo: null,
      companyInfo: null
    };

    if (applicant.employmentType === 'E' || applicant.employmentType === 'S') {

      employment.jobInfo = this.getJobInfoFromApplicantRequest(applicant);

      employment.supervisorInfo = applicant.employmentType === 'E'
        ? this.getSupervisorInfoFromApplicantRequest(applicant) : null;

      employment.companyInfo = applicant.employmentType === 'S'
        ? this.getCompanyInfoFromApplicantRequest(applicant) : null;
    }


    return employment;
  }

  /**
   * Format the Applicant Job Information received from the API to work the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {JobInformation}
   */
  private getJobInfoFromApplicantRequest(applicant: Applicant): JobInformation {
    return {
      companyName: applicant.empFirm,
      country: applicant.empCountry,
      address: applicant.empAddress,
      zip: applicant.empZipcode,
      city: applicant.empCity,
      state: applicant.empState,
      jobTitle: applicant.empTitle,
      startDate: moment(applicant.empStart).toDate(),
      amount: applicant.empAmount,
      period: applicant.salaryPeriod
    };
  }

  /**
   * Format the Applicant Supervisor received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {SupervisorInformation}
   */
  private getSupervisorInfoFromApplicantRequest(applicant: Applicant): SupervisorInformation {
    const supervisorPhone = this.parsePhoneNumber(applicant.supPhone);
    return {
      name: applicant.supName,
      title: applicant.supTitle,
      dialCode: supervisorPhone.dialCode,
      phone: supervisorPhone.phoneNumber,
      email: applicant.supEmail,
      contact: !applicant.employerContactAllowed || false
    };
  }

  /**
   * Format the Applicant Company Information received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {CompanyInformation}
   */
  private getCompanyInfoFromApplicantRequest(applicant: Applicant): CompanyInformation {
    const businessPhone = this.parsePhoneNumber(applicant.busPhone);
    return {
      businessType: applicant.busType,
      dialCode: businessPhone.dialCode,
      phone: businessPhone.phoneNumber
    };
  }

  /**
   * Format the Applicant Employment References received from the API to work with the Profile Form.
   *
   * @param {Applicant} applicant
   * @returns {ApplicantPersonalReferences}
   */
  private getReferencesFromApplicantRequest(applicant: Applicant): ApplicantPersonalReferences {
    return {
      firstReference: applicant.reference1 ? this.getReferenceInfoFromReferenceRequest(applicant.reference1) : null,
      secondReference: applicant.reference2 ? this.getReferenceInfoFromReferenceRequest(applicant.reference2) : null
    };
  }

  /**
   * Format the Single Applicant Reference received from the API to work with the Profile Form.
   *
   * @param {ApplicantReference} reference
   * @returns {ApplicantPersonalReference}
   */
  private getReferenceInfoFromReferenceRequest(reference: ApplicantReference): ApplicantPersonalReference {
    const referencePhone = this.parsePhoneNumber(reference.cellPhone);
    return {
      name: reference.name,
      relationship: reference.relationship,
      country: reference.country,
      dialCode: referencePhone.dialCode,
      phone: referencePhone.phoneNumber,
      email: reference.email
    };
  }

  /**
   * Format the Additional Info received from the API to work with the Profile Form.
   *
   * By additional information we mean the Other Occupants (we called Under Age), Vehicles and Pets.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {AdditionalInfo | null}
   */
  private getAdditionalInfoFromApplicationRequest(applicationRequest: ApplicationRequest): AdditionalInfo | null {

    const additionalInfo: AdditionalInfo = {};

    if (typeof applicationRequest.others !== 'undefined') {
      additionalInfo.underAgeInfo = this.getUnderAgeInfoFromApplicationRequest(applicationRequest);
    }

    if (typeof applicationRequest.vehicles !== 'undefined') {
      additionalInfo.vehicleInfo = this.getVehicleInfoFromApplicationRequest(applicationRequest);
    }

    if (typeof applicationRequest.pets !== 'undefined') {
      additionalInfo.petInfo = this.getPetsInfoFromApplicationRequest(applicationRequest);
    }

    return Object.keys(additionalInfo).length > 0 ? additionalInfo : null;
  }

  /**
   * Format the Review Info received from the API to work with the Profile Form.
   *
   * By review information we mean all information to review.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {ReviewInfo | null}
   */
  private getReviewInfoFromApplicationRequest(applicationRequest: ApplicationRequest): ReviewInfo | null {

    const reviewInfo: ReviewInfo = {};
/*
    if (typeof applicationRequest.personalInfo !== 'undefined') {
      reviewInfo.personalInfo = this.getUnderAgeInfoFromApplicationRequest(applicationRequest);
    }
*/
    return Object.keys(reviewInfo).length > 0 ? reviewInfo : null;
  }

  /**
   * Check if the Application Request has all needed fields that the Step 5. Additional Info requires.
   *
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {boolean}
   */
  private checkIfAdditionalInfoExistsInApplicationRequest(applicationRequest: ApplicationRequest): boolean {
    /**
     * We don't check for pets as some properties do not allow them a for that cases we don't send the information.
     */
    const additionalFields = [
      applicationRequest.others,
      applicationRequest.vehicles
    ];

    return additionalFields.every(field => typeof field !== 'undefined');
  }

  /**
   * Format the Under Age Info received from the API to work with the Profile Form.
   *
   * The field for the Under Age in the API is called `others`.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {UnderAgeInfo}
   */
  private getUnderAgeInfoFromApplicationRequest(applicationRequest: ApplicationRequest): UnderAgeInfo {

    return {
      anyUnderAge: applicationRequest.others.length
        ? 'yes' : 'no',
      underAgeOccupants: this.getUnderAgeOccupantsFromOthersRequest(applicationRequest.others)
    };
  }

  /**
   * Format the Vehicle Info received from the API to work with the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {VehicleInfo}
   */
  private getVehicleInfoFromApplicationRequest(applicationRequest: ApplicationRequest): VehicleInfo {

    return {
      anyVehicle: applicationRequest.vehicles.length ? 'yes' : 'no',
      vehicles: this.getVehiclesFromVehiclesRequest(applicationRequest.vehicles)
    };
  }

  /**
   * Format the Pet Info received from the API to work the Profile Form.
   *
   * @param {ApplicationRequest} applicationRequest
   * @returns {PetInfo}
   */
  private getPetsInfoFromApplicationRequest(applicationRequest: ApplicationRequest): PetInfo {

    return {
      anyPet: applicationRequest.pets.length ? 'yes' : 'no',
      pets: this.getPetsFromPetsRequest(applicationRequest.pets)
    };
  }

  /**
   * Format the Single Pet Info received from the API to work with the Profile Form.
   *
   * @param {Pet[]} pets
   * @returns {TenantPet[] | null}
   */
  private getPetsFromPetsRequest(pets: Pet[]): TenantPet[] | null {
    return pets.length
      ? pets.map(pet => {
        let esaPet = pet.esa !!= undefined ? pet.esa : false;
        return <TenantPet>{
          esa: esaPet  ? 'yes' : 'no',
          name: pet.name,
          animalType: pet.petType,
          breed: pet.breed,
          description: pet.description,
          age: pet.age,
          weight: pet.weight,
          sex: pet.petSex,
          licenseTag: pet.license
        };
      })
      : null;
  }

  /**
   * Format the Single Vehicle Info received from the API to work with the Profile Form.
   *
   * @param {Vehicle[]} vehicles
   * @returns {TenantVehicle[] | null}
   */
  private getVehiclesFromVehiclesRequest(vehicles: Vehicle[]): TenantVehicle[] | null {
    return vehicles.length
      ? vehicles.map(vehicle => {

        if (this.isVehicleRented(vehicle)) {
          return <TenantVehicle>{
            make: null,
            model: null,
            color: null,
            year: null,
            tag: null,
            state: '',
            insureBy: null,
            isElectric: null,
            rented: true,
          };
        } else {
          const isElectric = vehicle.isElectric === null ? null : vehicle.isElectric ? 'yes' : 'no';
          return <TenantVehicle>{
            make: vehicle.make,
            model: vehicle.model,
            color: vehicle.color,
            year: vehicle.year,
            tag: vehicle.tag,
            state: vehicle.state,
            insureBy: vehicle.insuranceCompany,
            isElectric,
            rented: false,
          };
        }

      })
      : null;
  }

  /**
   * When saving the information we sent `tbd` (To be Defined) for text values and 9999 for the year to indicate the vehicle will be rented.
   *
   * We will check that the information on the vehicle has exactly that information to know the vehicle is rented.
   *
   * @param {Vehicle} vehicle
   * @returns {boolean}
   */
  private isVehicleRented(vehicle: Vehicle) {
    return Object.keys(vehicle).every(key => {
      switch (key) {
        case 'vin':
          return vehicle[key] === null || vehicle[key] === '';
        case 'year':
          return vehicle[key] === 9999;
        case 'state':
          return vehicle[key] === '' || vehicle[key] === 'tbd' || vehicle[key] === 'FL';
        case 'isElectric':
          return vehicle[key] === null;
        default:
          return vehicle[key] === 'tbd';

      }
    });
  }

  /**
   * Format the Under Age Info received from the API to work with the Profile Form.
   *
   * @param {OtherOccupant[]} others
   * @returns {UnderAgeOccupant[] | null}
   */
  private getUnderAgeOccupantsFromOthersRequest(others: OtherOccupant[]): UnderAgeOccupant[] | null {
    return others.length
      ? others.map(occupant => {
        return <UnderAgeOccupant>{
          name: occupant.name,
          relationship: occupant.relationship,
          age: occupant.age
        };
      })
      : null;
  }

  /**
   * Get the Default Address for the Application Request.
   *
   * This is used when the users hasn't filled the information from the Step 2. Address Details.
   *
   * @param {PropertyInfoResponse} propertyInfo
   * @returns {PropertyInfoRequest}
   */
  private getDefaultAddressInfo(propertyInfo: PropertyInfoResponse): PropertyInfoRequest {

    const addressInformation = propertyInfo.address
      ? ProfileFormUtils.getSpecificAddressInfoFromAddressResponse(propertyInfo.address)
      : null;

    return {
      buildingName: propertyInfo.buildingName || '',
      houseNumber: addressInformation ? addressInformation.houseNumber || '' : '',
      street: addressInformation
        ? `${addressInformation.streetName} ${addressInformation.streetType}`
        : '',
      unit: propertyInfo.unit || '',
      zipcode: propertyInfo.zipcode || '',
      city: propertyInfo.city || '',
      state: propertyInfo.state || '',
      leaseTypeDayMonth: propertyInfo.leaseTypeMonthDay || 'MONTH',
      leaseDaysMonths: propertyInfo.minLease || 0,
    };
  }

  /**
   * Format the minimum information required to make a Save Application request.
   *
   * @param {PropertyInfoResponse} propertyInfo
   * @param {ApplicationSubType} applicationSubType
   * @param {CoApplicantType} coApplicantType
   * @returns {{propertyId: number; applicationSubType: ApplicationSubType; coApplicantType?: CoApplicantType}}
   */
  private getBasicInfo(propertyInfo: PropertyInfoResponse,
                       applicationSubType: ApplicationSubType,
                       coApplicantType?: CoApplicantType): {
    propertyId: number,
    applicationSubType: ApplicationSubType,
    coApplicantType?: CoApplicantType} {
    let basicInfo = {
      propertyId: propertyInfo.propertyId,
      applicationSubType: applicationSubType,
    };

    if (coApplicantType) {
      basicInfo = Object.assign({
        coApplicantType: coApplicantType
      }, basicInfo);
    }

    return basicInfo;
  }

  private getSignatureData(paymentDetails: TenantPaymentDetails): SignatureInfoRequest {
    const {paymentAgree, paymentInfo} = paymentDetails;

    return {
      acknowledgerName: paymentInfo.name,
      noticeSignature: paymentAgree.noticeSignature,
      agree: paymentAgree.agreeAndAuthorize,
      dateSigned: moment().toDate(),
    };
  }

  /**
   * Format the Profile Form Payment Date to make the Payment Request.
   *
   * @param {TenantPaymentDetails} paymentDetails
   * @return {ApplicationPaymentData}
   */
  private getPaymentData(paymentDetails: TenantPaymentDetails): ApplicationPaymentData {
    const {paymentInfo, paymentExpedite} = paymentDetails;

    let data: ApplicationPaymentData = {
      internationalBillingAddress: paymentInfo.addressNotInUsa,
      cardExp: paymentInfo.creditCardExp || '',
      cardCvv2: paymentInfo.creditCardCvv || '',
      cardNumber: paymentInfo.creditCard || '',
      rush: paymentExpedite.expediteApplication === 'yes',
      squareToken: paymentInfo.squareToken || ''
    };

    if (paymentInfo.addressNotInUsa) {
      data = Object.assign({
        billingName: paymentInfo.name || '',
        billingStreet1: this.defaultAddress.address1,
        billingStreet2: '',
        billingCity: this.defaultAddress.city,
        billingState: this.defaultAddress.state,
        billingZipcode: this.defaultAddress.zip,
      }, data);
    } else {
      data = Object.assign({
        billingName: paymentInfo.name || '',
        billingStreet1: paymentInfo.address1 || '',
        billingStreet2: paymentInfo.address2 || '',
        billingCity: paymentInfo.city || '',
        billingState: paymentInfo.state || '',
        billingZipcode: paymentInfo.zip || '',
      }, data);
    }

    return data;
  }

  /**
   * Format the Profile Form Pet Info to make the Save Application Request.
   *
   * @param {PetInfo} petInfo
   * @returns {{pets: Pet[]} | {}}
   */
  private getPets(petInfo: PetInfo): {pets: Pet[]} {

    if (petInfo.anyPet === 'yes') {
      const pets: Pet[] = petInfo.pets
        .map(pet => {
          let esaAnimal = pet.esa === null ? 'yes' : pet.esa;
          return {
            esa: esaAnimal === 'yes' ? true : false,
            name: pet.name,
            breed: pet.breed,
            age: pet.age,
            weight: pet.weight,
            petType: pet.animalType,
            petSex: pet.sex,
            license: pet.licenseTag,
            description: pet.description
          };
        });

      return {
        pets: pets
      };
    }

    return {
      pets: []
    };
  }

  /**
   * Format the Profile Form Vehicle Info to make the Save Application Request.
   * @param {VehicleInfo} vehicleInfo
   * @returns {{vehicles: Vehicle[]} | {}}
   */
  private getVehicles(vehicleInfo: VehicleInfo): {vehicles: Vehicle[]} {

    if (vehicleInfo.anyVehicle === 'yes') {
      const vehicles = vehicleInfo.vehicles
        .map(vehicle => {
          if (!vehicle.rented) {
            const isElectric = vehicle.isElectric === null ? null : vehicle.isElectric === 'yes';
            return {
              make: vehicle.make,
              model: vehicle.model,
              year: vehicle.year,
              tag: vehicle.tag,
              state: vehicle.state,
              insuranceCompany: vehicle.insureBy,
              color: vehicle.color,
              isElectric,
            };
          } else {
            return {
              make: 'tbd',
              model: 'tbd',
              year: 9999,
              tag: 'tbd',
              state: 'FL',
              insuranceCompany: 'tbd',
              color: 'tbd',
              isElectric: null,
            };
          }

        });

      return {
        vehicles: vehicles
      };
    }

    return {
      vehicles: []
    };
  }

  /**
   * Format the Profile Form Under Age Info to make the Save Application Request.
   * @param {UnderAgeInfo} underAgeInfo
   * @returns {{others: OtherOccupant[]} | {}}
   */
  private getOtherOccupants(underAgeInfo: UnderAgeInfo): {others: OtherOccupant[]} {

    if (underAgeInfo.anyUnderAge === 'yes') {
      const otherOccupants: OtherOccupant[] = underAgeInfo.underAgeOccupants
        .map(occupant => {
          return {
            name: occupant.name,
            age: occupant.age,
            relationship: occupant.relationship
          };
        });

      return {
        others: otherOccupants
      };
    }

    return {
      others: []
    };
  }

  /**
   * Format the Profile Form Applicants Info to make the Save Application Request.
   *
   * @param {ProfileForm} formData
   * @param {CoApplicantType} coApplicantType
   * @returns {{adults: Applicant[]}}
   */
  private getAdults(formData: ProfileForm, coApplicantType?: CoApplicantType): {adults: Applicant[]} {
    const {personalInfo, currentResidence, references} = formData;
    const people: Applicant[] = [];
    const primaryApplicant = this.getApplicantInfo(personalInfo, currentResidence, references);

    people.push(primaryApplicant);


    if (this.hasCoApplicant(coApplicantType)) {
      const secondaryApplicant = this.getCoApplicantInfo(personalInfo, currentResidence, references);
      people.push(secondaryApplicant);
    }

    return {
      adults: people
    };
  }

  /**
   * Check is the the application has co-applicant.Co applicant type 'W' (With Existing Tenant) does not count as co applicant.
   * @param {CoApplicantType} coApplicantType
   * @returns {boolean}
   */
  private hasCoApplicant(coApplicantType: CoApplicantType) {
    return !!coApplicantType && coApplicantType !== 'W';
  }

  /**
   * Get primary applicant information
   *
   * @param {PersonalInfo} personalInfo
   * @param {CurrentResidence} currentResidence
   * @param {References} references
   * @returns {Applicant}
   */
  private getApplicantInfo(personalInfo: PersonalInfo, currentResidence?: CurrentResidence, references?: References): Applicant {

    const {applicantInfo, militaryInfo, remarksInfo} = personalInfo;
    const personalInformation = this.getApplicantPersonalInfo(applicantInfo);
    const remarksInformation = this.getApplicantRemarks(militaryInfo, remarksInfo, 'primaryApplicant');

    let applicant: Applicant = Object.assign({}, personalInformation, remarksInformation);

    if (currentResidence) {
      const currentResidenceInformation = this.getApplicantCurrentResidence(currentResidence, 'primaryApplicant');
      applicant = Object.assign(applicant, currentResidenceInformation);
    }

    if (references) {
      const {primaryApplicant} = references;
      const employmentInformation = this.getApplicantEmployment(references, 'primaryApplicant');
      const applicantReferences = primaryApplicant ? {
        reference1: primaryApplicant.references && primaryApplicant.references.firstReference
          ? this.getApplicantReferenceInformation(primaryApplicant.references.firstReference)
          : null,
        reference2: primaryApplicant.references && primaryApplicant.references.secondReference
          ? this.getApplicantReferenceInformation(primaryApplicant.references.secondReference)
          : null,
      } : {};

      const bankInformation = this.getApplicantBankInformation(references, 'primaryApplicant');
      applicant = Object.assign(applicant, applicantReferences, employmentInformation, bankInformation || {});


    }

    return applicant;
  }

  /**
   *  Get Secondary Applicant Information
   *
   * @param {PersonalInfo} personalInfo
   * @param {CurrentResidence} currentResidence
   * @param {References} references
   * @returns {Applicant}
   */
  private getCoApplicantInfo(personalInfo: PersonalInfo, currentResidence: CurrentResidence, references: References): Applicant {

    const {coApplicantInfo, militaryInfo, remarksInfo} = personalInfo;
    const personalInformation = this.getApplicantPersonalInfo(coApplicantInfo);
    const remarksInformation = this.getApplicantRemarks(militaryInfo, remarksInfo, 'secondaryApplicant');


    let applicant: Applicant = Object.assign({}, personalInformation, remarksInformation);

    if (currentResidence) {
      const {secondaryApplicant} = currentResidence;
      const currentResidenceApplicant = secondaryApplicant.sameAsPrimaryApplicant ? 'primaryApplicant' : 'secondaryApplicant';
      const currentResidenceInformation = this.getApplicantCurrentResidence(currentResidence, currentResidenceApplicant);

      applicant = Object.assign(applicant, currentResidenceInformation);
    }

    if (references) {
      const employmentInformation = this.getApplicantEmployment(references, 'secondaryApplicant');

      let applicantReferences = {};

      if (references.secondaryApplicant) {
        const samePrimaryApplicantReferences = references.secondaryApplicant.sameReferencesAsPrimaryApplicant;
        if (samePrimaryApplicantReferences) {
          applicantReferences = references.primaryApplicant.references
          && references.primaryApplicant.references.firstReference
          && references.primaryApplicant.references.secondReference
            ? {
            reference1: this.getApplicantReferenceInformation(references.primaryApplicant.references.firstReference),
            reference2: this.getApplicantReferenceInformation(references.primaryApplicant.references.secondReference),
          } : {};
        } else {
          applicantReferences = references.secondaryApplicant.references
          && references.secondaryApplicant.references.firstReference
          && references.secondaryApplicant.references.secondReference
            ? {
            reference1: this.getApplicantReferenceInformation(references.secondaryApplicant.references.firstReference),
            reference2: this.getApplicantReferenceInformation(references.secondaryApplicant.references.secondReference),
          } : {};
        }

      }
      const bankInformation = this.getApplicantBankInformation(references, 'secondaryApplicant');
      applicant = Object.assign(applicant, applicantReferences, employmentInformation, bankInformation || {});
    }


    return applicant;
  }

  /**
   * Format the Profile Form Reference Info to make the Save Application Request.
   *
   * @param {ApplicantPersonalReference} reference
   * @returns {ApplicantReference}
   */
  private getApplicantReferenceInformation(reference: ApplicantPersonalReference): ApplicantReference {
    const {name, country, email, dialCode, phone, relationship} = reference;

    return {
      name: name,
      relationship: relationship,
      country: country,
      cellPhone: `${dialCode} ${phone}`,
      email: email
    };
  }

  /**
   * Format the Profile Form Applicant Info to make the Save Application Request.
   *
   * @param {ApplicantInfo} applicantInfo
   * @returns {ApplicantPersonalInfo}
   */
  private getApplicantPersonalInfo(applicantInfo: ApplicantInfo): ApplicantPersonalInfo {

    let personalInfo: ApplicantPersonalInfo =  {
      firstName: applicantInfo.firstName,
      middleInitial: applicantInfo.middleInitial,
      lastName: applicantInfo.lastName,
      maternalName: applicantInfo.maternalName,
      aka: applicantInfo.aka,
      cellPhone: `${applicantInfo.dialCode} ${applicantInfo.cellPhone}`,
      email: applicantInfo.email,
      dob: applicantInfo.dateOfBirth,
      allowTextMessages: applicantInfo.receiveTextMessages,
    };

    if (applicantInfo.missingSnn) {
      personalInfo = Object.assign({
        passportNumber: applicantInfo.passport,
        passportCountry: applicantInfo.passportCountry,
      }, personalInfo);
    } else {
      personalInfo = Object.assign({
        ssn: applicantInfo.ssn
      }, personalInfo);
    }

    return personalInfo;
  }

  /**
   * Convert a NgDate to JS Date.
   *
   * @param {NgbDateStruct} date
   * @returns {Date}
   */
  private getJsDate(date: NgbDateStruct) {
    const jsDate = new Date();
    jsDate.setHours(0, 0, 0, 0);
    jsDate.setMonth(date.month - 1);
    jsDate.setDate(date.day);
    jsDate.setFullYear(date.year);

    return jsDate;
  }

  /**
   * Format the Profile Form Employment Info to make the Save Application Request.
   *
   * @param {References} references
   * @param {string} applicantType
   * @returns {ApplicantEmploymentInfo}
   */
  private getApplicantEmployment(references: References,
                                 applicantType: string = 'primaryApplicant'): ApplicantEmploymentInfo {
    const employment = (applicantType === 'primaryApplicant')
      ? references.primaryApplicant ? references.primaryApplicant.employment : null
      : references.secondaryApplicant ? references.secondaryApplicant.employment : null;

    if (!employment) {
      return null;
    }

    let employedInfo: ApplicantEmployedInfo = {};

    if (employment.employmentType === 'E' || employment.employmentType === 'S') {
      employedInfo = this.getEmployedInfo(employment);
    }

    return <ApplicantEmploymentInfo>Object.assign({
      employmentType: employment.employmentType
    }, employedInfo);
  }

  /**
   * Format the Profile Form Applicant Employment Info to make the Save Application Request.
   *
   * @param {ApplicantEmployment} employment
   * @returns {ApplicantEmployedInfo}
   */
  private getEmployedInfo(employment: ApplicantEmployment): ApplicantEmployedInfo {

    const {jobInfo, companyInfo, supervisorInfo} = employment;
    const {startDate, amount, period, companyName, country, address, zip, state, city, jobTitle} = jobInfo;

    let companyInformation: ApplicantCompanyInfo = {};
    let supervisorInformation: ApplicantSupervisorInfo = {};

    switch (employment.employmentType) {
      case 'E':
        supervisorInformation = this.getSupervisorInfo(supervisorInfo);
        break;
      case 'S':
        companyInformation = this.getCompanyInfo(companyInfo);
        break;
    }
    return Object.assign({
      empAmount: amount,
      salaryPeriod: period,
      empFirm: companyName,
      empCountry: country,
      empAddress: address,
      empZipcode: zip,
      empState: state,
      empCity: city,
      empTitle: jobTitle,
      empStart: moment(startDate).toISOString()
    }, companyInformation, supervisorInformation);
  }

  /**
   * Format the Profile Form Applicant Company Info to make the Save Application Request.
   *
   * This is used if the applicant is Self-Employed.
   *
   * @param {CompanyInformation} companyInfo
   * @returns {ApplicantCompanyInfo}
   */
  private getCompanyInfo(companyInfo: CompanyInformation): ApplicantCompanyInfo {
    const {businessType, dialCode, phone} = companyInfo;
    return {
      busType: businessType,
      busPhone: `${dialCode} ${phone}`,
    };
  }

  /**
   * Format the Profile Form Supervidor Info to make the Save Application Request.
   *
   * This is used if the applicant is an Employee of a Company.
   *
   * @param {SupervisorInformation} supervisorInfo
   * @returns {ApplicantSupervisorInfo}
   */
  private getSupervisorInfo(supervisorInfo: SupervisorInformation): ApplicantSupervisorInfo {
    const {name, title, phone, dialCode, email, contact} = supervisorInfo;
    return {
      supName: name,
      supTitle: title,
      supPhone: `${dialCode} ${phone}`,
      supEmail: email,
      employerContactAllowed: (contact == null || !contact)
    };
  }

  /**
   * Format the Profile Form Applicant Current Residence Info to make the Save Application Request.
   *
   * @param {CurrentResidence} currentResidenceInfo
   * @param {string} applicantType
   * @returns {ApplicantCurrentResidence}
   */
  private getApplicantCurrentResidence(currentResidenceInfo: CurrentResidence,
                                       applicantType: string = 'primaryApplicant'): ApplicantCurrentResidence {
    let residenceInfo: ResidenceInfo;
    let landLordInfo: LandlordInfo;
    let familyInfo: FamilyInfo;

    residenceInfo = currentResidenceInfo.primaryApplicant.residenceInfo;
    landLordInfo = residenceInfo.type === 'R'
      ? currentResidenceInfo.primaryApplicant.landLord : null;

    familyInfo = residenceInfo.type === 'D'
      ? currentResidenceInfo.primaryApplicant.familyInfo : null;

    if (applicantType !== 'primaryApplicant') {

      if (!currentResidenceInfo.secondaryApplicant.sameAsPrimaryApplicant) {

        residenceInfo = currentResidenceInfo.secondaryApplicant.residenceInfo;

        landLordInfo = residenceInfo.type === 'R'
          ? currentResidenceInfo.secondaryApplicant.landLord : null;

        familyInfo = residenceInfo.type === 'D'
          ? currentResidenceInfo.secondaryApplicant.familyInfo : null;
      }
    }

    const residenceRentalInformation = residenceInfo.type === 'R'
      ? this.getApplicantResidenceRentalInformation(landLordInfo) : {};

    const residenceFamilyInformation = residenceInfo.type === 'D'
      ? this.getApplicantResidenceFamilyInformation(familyInfo) : {};

    return Object.assign({
      currentResidentType: residenceInfo.type,
      houseNumber: residenceInfo.number,
      street: residenceInfo.streetName,
      apartmentNo: residenceInfo.apt,
      country: residenceInfo.country,
      city: residenceInfo.city,
      years: residenceInfo.years,
      months: residenceInfo.months,
      state: residenceInfo.state,
      zipcode: residenceInfo.zip,
    }, residenceRentalInformation, residenceFamilyInformation);
  }

  /**
   * Get difference in months between two dates.
   *
   * @param {Date} dt2
   * @param {Date} dt1
   * @returns {number}
   */
  private getDiffInMonthsBetweenTwoDates(dt2: Date, dt1: Date): number {
    return moment(dt2).diff(moment(dt1), 'months', true);
  }

  /**
   * Format the Land Lord Info to make the Save Application Request.
   *
   * @param {LandlordInfo} landLordInfo
   * @returns {ApplicantResidenceRentalInfo}
   */
  private getApplicantResidenceRentalInformation(landLordInfo: LandlordInfo): ApplicantResidenceRentalInfo {
    return {
      landlordName: landLordInfo.name,
      landlordPhone: `${landLordInfo.dialCode} ${landLordInfo.phone}`,
      landlordEmail: landLordInfo.email,
      beenVacated: landLordInfo.vacate === 'yes'
    };
  }

  /**
   * Format the Applicant Family Residence Info to make the Save Application Request.
   *
   * @param {FamilyInfo} familyInfo
   * @returns {ApplicantResidenceFamilyInfo}
   */
  private getApplicantResidenceFamilyInformation(familyInfo: FamilyInfo): ApplicantResidenceFamilyInfo {

    return {
      familyName: familyInfo.name,
      familyPhone: `${familyInfo.dialCode} ${familyInfo.phone}`,
      familyRelationship: familyInfo.relationship
    };
  }

  /**
   * Format the Profile Form Remakrs Info to make the Save Application Request.
   *
   * @param {MilitaryInfo} militaryInfo
   * @param {RemarksInfo} remarksInfo
   * @param {string} applicantType
   * @returns {ApplicantRemarks}
   */
  private getApplicantRemarks(militaryInfo: MilitaryInfo,
                              remarksInfo: RemarksInfo,
                              applicantType: string = 'primaryApplicant'): ApplicantRemarks {

    if ((null == remarksInfo['shortApplication'])?  false: remarksInfo.shortApplication == 'SHORT'){
      return {
        beenArrested: false,
        beenConvicted: false,
        beenEvicted: false,
        actDutyMilitary: false,
        //remarks: remarksInfo.arrests,
        //applicant_explanation: remarksInfo.applicant_explanation,
        detailsArrestDTOList: null,
        remarks: ''
      };

    } else{

      const anyAffirmative = remarksInfo.arrestedAnswers[applicantType]
        || remarksInfo.convictedAnswers[applicantType]
        || remarksInfo.evictedAnswers[applicantType];
      if (remarksInfo.arrests) {
        remarksInfo.arrests.forEach((arrest: ArrestedInfo) => {
            if (arrest && arrest.state === 'FL' && arrest.countyDropdown) {
              arrest.county = arrest.countyDropdown;
              delete arrest.countyDropdown;
            }
        });
      }
      if (remarksInfo.co_applicant_arrests) {
        remarksInfo.co_applicant_arrests.forEach((arrest: ArrestedInfo) => {
          if (arrest && arrest.state === 'FL' && arrest.countyDropdown) {
            arrest.county = arrest.countyDropdown;
            delete arrest.countyDropdown;
          }
        });
      }
      return {
        beenArrested: remarksInfo.arrestedAnswers[applicantType],
        beenConvicted: remarksInfo.convictedAnswers[applicantType],
        beenEvicted: remarksInfo.evictedAnswers[applicantType],
        actDutyMilitary: militaryInfo.activeMilitaryAnswers[applicantType],
        //remarks: remarksInfo.arrests,
        //applicant_explanation: remarksInfo.applicant_explanation,
        detailsArrestDTOList: applicantType === 'primaryApplicant' ? remarksInfo.arrests : remarksInfo.co_applicant_arrests,
        remarks: anyAffirmative
          ? applicantType === 'primaryApplicant'
            ? remarksInfo.applicant_explanation : remarksInfo.co_applicant_explanation
          : ''
      };
    }
  }

  private getApplicantBankInformation(references: References, applicantType: string): BankInformation {
    if (references.primaryApplicantPoi) {
      return {
        hasUsBank: applicantType === 'primaryApplicant' ? references.primaryApplicantPoi.hasUsBank === 'yes'
          : references.secondaryApplicantPoi.hasUsBank === 'yes',
        bankName: applicantType === 'primaryApplicant' ? references.primaryApplicantPoi.bankName : references.secondaryApplicantPoi.bankName
      };
    }
    if (references.primaryApplicant && references.primaryApplicant.proofOfIncomeStep1) {
      return {
        hasUsBank: applicantType === 'primaryApplicant' ? references.primaryApplicant.proofOfIncomeStep1.hasUsBank === 'yes'
          : references.secondaryApplicant.proofOfIncomeStep1.hasUsBank === 'yes',
        bankName: applicantType === 'primaryApplicant' ? references.primaryApplicant.proofOfIncomeStep1.bankName
          : references.secondaryApplicant.proofOfIncomeStep1.bankName
      };
    }
  }

  /**
   * Format the Profile Form Address Details Info to make the Save Application Request.
   * @param {AddressInfo} addressInfo
   * @param {PropertyInfoResponse} propertyInfo
   * @returns {PropertyInfoRequest}
   */
  private getAddressInfo(addressInfo: AddressInfo, propertyInfo: PropertyInfoResponse): PropertyInfoRequest {

    return {
      buildingName: propertyInfo.buildingName,
      houseNumber: addressInfo.houseNumber,
      street: `${addressInfo.streetName} ${addressInfo.streetType}`,
      unit: addressInfo.aptUnit,
      zipcode: addressInfo.zipCode,
      city: addressInfo.city,
      state: addressInfo.state,
      monthlyRent: addressInfo.monthlyRent,
      purchasePrice: addressInfo.purchasePrice,
      moveInDate: addressInfo.moveDate ? this.formatDateToRequest(addressInfo.moveDate) : null,
      moveOutDate: addressInfo.moveOutDate ? this.formatDateToRequest(addressInfo.moveOutDate) : null,
      leaseDaysMonths: addressInfo.howLong,
      leaseTypeDayMonth: addressInfo.howLongDayOrMonth,
    };
  }

  /**
   * Format the Profile Form Emergency Info to make the Save Application Request.
   *
   * @param {EmergencyContactInformation} emergencyInfo
   * @returns {EmergencyInfoRequest}
   */
  private getEmergencyInfo(emergencyInfo: EmergencyContactInformation): EmergencyInfoRequest {
    return {
      ecName: emergencyInfo.name,
      ecRelationship: emergencyInfo.relationship,
      ecCell: `${emergencyInfo.dialCode} ${emergencyInfo.phone}`,
      ecEmail: emergencyInfo.email,
    };
  }

  /**
   * Format the Profile Form Owner Info to make the Save Application Request.
   *
   * @param {OwnerInfo} ownerInfo
   * @param {PropertyInfoResponse} propertyInfo
   * @returns {OwnerInfoRequest}
   */
  private getOwnerInformation(ownerInfo: OwnerInfo, propertyInfo: PropertyInfoResponse): OwnerInfoRequest {
    const {owner} = ownerInfo;
    if (ownerInfo.knowOwnerInformation === 'yes') {
      return {
        ownerInfoRequired: propertyInfo.ownerInfoRequired,
        ownerName: owner.fullName,
        ownerEmail: owner.email,
        ownerPhone: `${owner.dialCode} ${owner.phone}`,
      };
    } else {
      /**
       * Send empty values to know the next time the user don't know the user information but the fields exists.
       */
      return {
        ownerInfoRequired: propertyInfo.ownerInfoRequired,
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
      };
    }
  }

  /**
   * Format the Profile Form Real Estate Agent Info to make the Save Application Request.
   *
   * @param {RealEstateAgentInfo} realEstateInfo
   * @returns {RealEstateInfoRequest}
   */
  private getRealtorInformation(realEstateInfo: RealEstateAgentInfo): RealEstateInfoRequest {
    if (realEstateInfo.workingWithARealEstateAgent === 'yes') {
      const {realEstateAgent} = realEstateInfo;
      return {
        useRealtor: true,
        realtorName: realEstateAgent.name,
        realtorEmail: realEstateAgent.email,
        realtorPhone: `${realEstateAgent.dialCode} ${realEstateAgent.cellphone}`,
        allowRealtorNotice: realEstateAgent.receiveNotification
      };
    } else {
      /**
       * Send empty values to know the next time the user don't know the user information but the fields exists.
       */
      return {
        useRealtor: false,
        realtorName: '',
        realtorEmail: '',
        realtorPhone: '',
        allowRealtorNotice: false
      };
    }

  }

  /**
   * Break the phone number received from the API to work with the Profile Form.
   *
   * @param {string} phoneNumber
   * @returns {{dialCode: string; phoneNumber: string}}
   */
  private parsePhoneNumber(phoneNumber: string): {dialCode: string, phoneNumber: string} {
    const splitPhone = !!phoneNumber ? phoneNumber.split(' ') : ['', ''];
    return {
      dialCode: splitPhone.length > 1 ? splitPhone[0] : '+1',
      phoneNumber: splitPhone.length > 1 ? splitPhone[1] : splitPhone[0]
    };
  }

  private formatDateToRequest(elemDate: any) {
    if(typeof elemDate != "string" && elemDate._isAMomentObject) {
        elemDate = elemDate.toISOString().replace('T00:00:00.000Z', '');
    }
    return elemDate;
  }


}
