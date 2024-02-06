import {CoApplicantType} from '../types/co-applicant.type';

export interface InviteReplaceRequest {
  pendingApplicationId: number;
  email: string;
  firstName: string;
  lastName: string;
  coApplicantType: CoApplicantType;
}
