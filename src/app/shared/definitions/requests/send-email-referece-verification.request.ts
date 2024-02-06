import {VerificationItemType} from '../types/verification-item.type';

export interface SendEmailReferenceVerification {
  id: number;
  applicationId: number;
  applicantId: number;
  type: VerificationItemType;
}
