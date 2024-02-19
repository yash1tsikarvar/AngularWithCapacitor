import {VerificationItemType} from '../types/verification-item.type';

export interface VerificationTask {
  itemId: number;
  type: VerificationItemType;
  name: string;
  description: string;
  status: string;
  referenceName: String;
  referenceEmail: String;
  errorUpdateMessage: String;

}
