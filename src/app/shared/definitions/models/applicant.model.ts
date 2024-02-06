import {CurrentResidenceType} from '../types/current-residence.type';
import {EmploymentType} from '../types/employment.type';
import {SalaryPeriodType} from '../types/salaray-period.type';
import {ApplicantReference} from './applicant-reference.model';
import {ArrestedInfo} from '../forms/profile-form/personal-info/remarks-info.interface'

export interface ApplicantPersonalInfo {
  firstName?: string;
  lastName?: string;
  maternalName?: string;
  dob?: string;
  cellPhone?: string;
  email?: string;
  ssn?: string;
  passportNumber?: string;
  passportCountry?: string;
  allowTextMessages?: boolean;
  aka?: [];
  /**
   * @deprecated
   */
  initials?: string;
  /**
   * @deprecated
   */
  middleInitial?: string;
  /**
   * @deprecated
   */
  licenseNumber?: string;
  /**
   * @deprecated
   */
  citizen?: boolean;
  /**
   * @deprecated
   */
  citizenship?: string;
  /**
   * @deprecated
   */
  licenseName?: string;
  /**
   * @deprecated
   */
  licenseState?: string;
  /**
   * @deprecated
   */
  cellPhoneCC?: string;
  /**
   * @deprecated
   */
  otherPhoneCC?: string;
}

export interface ApplicantRemarks {
  beenArrested?: boolean;
  beenConvicted?: boolean;
  beenEvicted?: boolean;
  actDutyMilitary?: boolean;
  remarks?: string;
  detailsArrestDTOList ?: ArrestedInfo[];
  //applicant_explanation?: string;
  //co_applicant_explanation?: string;
  /**
   * @deprecated
   */
  beenSued?: boolean;
  /**
   * @deprecated
   */
  filedBankruptcy?: boolean;
  /**
   * @deprecated
   */
  brokenLease?: boolean;
  /**
   * @deprecated
   */
  litigationPending?: boolean;
}

export interface ApplicantCurrentResidence extends
  ApplicantResidenceRentalInfo,
  ApplicantResidenceFamilyInfo {
  currentResidentType?: CurrentResidenceType;
  houseNumber?: string;
  street?: string;
  apartmentNo?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  country?: string;
  years?: number;
  months?: number;
}

export interface ApplicantResidenceRentalInfo {
  landlordName?: string;
  landlordPhone?: string;
  landlordEmail?: string;
  beenVacated?: boolean;
  /**
   * @deprecated
   */
  gaveAdequateNotice?: boolean;
}

export interface ApplicantResidenceFamilyInfo {
  familyName?: string;
  familyPhone?: string;
  familyRelationship?: string;
}

export interface ApplicantEmploymentInfo extends
  ApplicantEmployedInfo {
  employmentType?: EmploymentType;
}

export interface ApplicantEmployedInfo extends
  ApplicantCompanyInfo,
  ApplicantSupervisorInfo {
  empAmount?: number;
  salaryPeriod?: SalaryPeriodType;
  empFirm?: string;
  empCountry?: string;
  empAddress?: string;
  empZipcode?: string;
  empState?: string;
  empCity?: string;
  empTitle?: string;
  empStart?: string;
}

/**
 * This is used if employment type is Self Employed
 */
export interface ApplicantCompanyInfo {
  busType?: string;
  busYears?: string;
  busPhone?: string;
  busName?: string;
}

/**
 * This is used if employment type is Employed
 */
export interface ApplicantSupervisorInfo {
  supName?: string;
  supTitle?: string;
  supPhone?: string;
  supEmail?: string;
  employerContactAllowed?: boolean;
}

export interface Applicant extends
  ApplicantPersonalInfo,
  ApplicantRemarks,
  ApplicantCurrentResidence,
  ApplicantEmploymentInfo,
  BankInformation {
  reference1?: ApplicantReference;
  reference2?: ApplicantReference;
}

export interface BankInformation {
  hasUsBank?: boolean;
  bankName?: string;
}
