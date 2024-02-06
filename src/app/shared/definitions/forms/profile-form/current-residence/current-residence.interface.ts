import {CurrentResidenceType} from '../../../types/current-residence.type';
import {YesNoType} from '../../../types/yes-no.type';

export interface FamilyInfo {
  name: string;
  relationship: string;
  dialCode: string;
  phone: string;
}

export interface LandlordInfo {
  name: string;
  dialCode: string;
  phone: string;
  email: string;
  vacate: YesNoType;
}

export interface ResidenceInfo {
  type: CurrentResidenceType;
  number: string;
  streetName: string;
  apt: string;
  country: string;
  zip: string;
  city: string;
  state: string;
  years: number;
  months: number
}

export interface ApplicantResidenceInfo {
  residenceInfo: ResidenceInfo;
  landLord?: LandlordInfo;
  familyInfo?: FamilyInfo;
}

export interface CoApplicantResidenceInfo extends ApplicantResidenceInfo {
  sameAsPrimaryApplicant: boolean;
}

export interface CurrentResidence {
  primaryApplicant: ApplicantResidenceInfo;
  secondaryApplicant?: CoApplicantResidenceInfo;
}
