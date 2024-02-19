export interface UpdateOwnerInformationRequest {

  applicationId: number;
  fullName: string;
  phone: string;
  email: string;
  ownerInfoLastEdit: string;
  hideEmailLink?: boolean;
}
