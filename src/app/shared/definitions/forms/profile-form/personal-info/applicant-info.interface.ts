import { CoApplicantType } from '../../../../../shared/definitions/types/co-applicant.type';

export interface ApplicantInfo {
  firstName: string;
  middleInitial: string;
  lastName: string;
  maternalName: string;
  dateOfBirth: string;
  country: string;
  dialCode: string;
  cellPhone: string;
  email: string;
  ssn?: string;
  passport?: string;
  passportCountry?: string;
  receiveTextMessages: boolean;
  missingSnn: boolean;
  aka?: [];
  hasUsBank: boolean;
  bankName: string;
  coApplicantType?: CoApplicantType;
}
