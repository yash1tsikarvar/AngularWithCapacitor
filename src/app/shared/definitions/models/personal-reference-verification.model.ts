import {ApplicantReference} from './applicant-reference.model';

export interface PersonalReferenceVerification extends ApplicantReference {


  personalVerificationId: number;
  idReference: number;
  applicationId: number;
  applicantId: number;
  rejectReason?: string;
  title: string;
  hideEmailLink: boolean;
  journal: string[];

}

export interface CharacterVerificationRequestDTO {
  isKnown: boolean;
  relationship: RelationshipOptions;
  knowAgoYears: number;
  knowAgoMonths: number;
  goodTenant: boolean;
  remarks: string;
  name: string;
}

export interface ViewCharacterVerificationDTO {
  status: CharacterVerificationStatus;
  applicantName: string;
}
interface KnowAgoOptions {
  key: number;
  name: string;
}
interface RelationshipOptions {
  key: number;
  name: string;
}

export const KnowAgoCharacter: KnowAgoOptions[] = [
  {
    key: 0,
    name: 'Less than 1 year'
  },
  {
    key: 1,
    name: '1-2 years'
  },
  {
    key: 2,
    name: '3-5 years'
  },
  {
    key: 3,
    name: '5-10 years'
  },
  {
    key: 4,
    name: 'more than 10 years'
  }
];

export const RelationshipCharacter: RelationshipOptions[] = [
  {
    key: 16,
    name: 'Business Partner'
  },
  {
    key: 15,
    name: 'Co-Worker'
  },
  {
    key: 18,
    name: 'Colleague'
  },
  {
    key: 12,
    name: 'Friend'
  }
];

// export type RelationshipTypeCharacter = 'Business Partner' | 'Co-Worker' | 'Colleague' | 'Friend';
// export type KnowAgoOptionsType  = 'Less than 1 year' | '1-2 years' | '3-5 years' | '5-10 years' | 'more than 10 years';
export type CharacterVerificationStatus = 'Complete' | 'Pending';

