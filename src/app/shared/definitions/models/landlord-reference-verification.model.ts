import {LandlordInfo} from '../forms/profile-form/current-residence/current-residence.interface';

export interface LandlordReferenceVerification {

  id: number;
  applicationId: number;
  applicantId: number;
  rejectReason?: string;
  title: string;
  hideEmailLink: boolean;

  landlordInfo: LandlordInfo;

}
