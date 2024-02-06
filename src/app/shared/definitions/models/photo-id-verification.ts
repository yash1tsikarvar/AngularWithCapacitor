export interface PhotoIdVerification {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  documentId: number;
  step1Name: string;
  step1Lastname: string;
  step1dob: Date;
}

export interface MobileIdVerification {

  documentId: number;
  applicantInfoDTO: PhotoIdVerification;
  token?: String;
}
