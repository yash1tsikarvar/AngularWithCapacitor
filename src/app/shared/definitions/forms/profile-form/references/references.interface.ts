import {RelationshipType} from '../../../types/relationship.type';
import {EmploymentType} from '../../../types/employment.type';
import {SalaryPeriodType} from '../../../types/salaray-period.type';
import {InfoAnswer} from '../personal-info/military-info.interface';
import {YesNoType} from '../../../types/yes-no.type';

export interface JobInformation {
  companyName: string;
  country: string;
  address: string;
  zip: string;
  city: string;
  state: string;
  jobTitle: string;
  startDate: Date;
  amount: number;
  period: SalaryPeriodType;
}

export interface SupervisorInformation {
  name: string;
  title: string;
  dialCode: string;
  phone: string;
  email: string;
  contact: boolean;
}

export interface CompanyInformation {
  businessType: string;
  dialCode: string;
  phone: string;
  /**
   * @deprecated
   */
  businessName?: string;
  /**
   * @deprecated
   */
  years?: number;
}

export interface ApplicantPersonalReference {
  name: string;
  relationship: RelationshipType;
  country: string;
  dialCode: string;
  phone: string;
  email: string;
}

export interface EmergencyContactInformation {
  name: string;
  relationship: string;
  dialCode: string;
  phone: string;
  email: string;
}
export interface ApplicantEmployment {
  employmentType: EmploymentType;
  jobInfo?: JobInformation;
  supervisorInfo?: SupervisorInformation;
  companyInfo?: CompanyInformation;
}

export interface ApplicantPersonalReferences {
  firstReference: ApplicantPersonalReference;
  secondReference: ApplicantPersonalReference;
}

export interface ApplicantReferences {
  employment: ApplicantEmployment;
  references?: ApplicantPersonalReferences;
  sameReferencesAsPrimaryApplicant?: boolean;
  proofOfIncomeStep1?: ProofOfIncomeStep1;
}

export interface References {
  primaryApplicant?: ApplicantReferences;
  primaryApplicantPoi?: ProofOfIncomeStep1;
  secondaryApplicant?: ApplicantReferences;
  secondaryApplicantPoi?: ProofOfIncomeStep1;
  emergencyContact?: EmergencyContactInformation;
}

export interface ProofOfIncomeStep1 {
  hasUsBank: YesNoType;
  notAllowedBank?: YesNoType;
  bankName?: string;
}
