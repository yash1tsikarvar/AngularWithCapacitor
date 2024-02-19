import {CoApplicantType} from '../types/co-applicant.type';

export interface InviteApplicantRequest {
  applicationId: number;
  email: string;
  firstName: string;
  lastName: string;
  coApplicantType: CoApplicantType;
}
