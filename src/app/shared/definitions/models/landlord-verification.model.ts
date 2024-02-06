export interface ViewLandlordVerificationDTO {
  status: LandlordVerificationStatus;
  applicantName: string;
  address: string;
  strMonthYear: string;
  authForm: string;
}

export interface LandlordVerificationRequestDTO {

  isKnown: boolean;
  // rented this property for 3 years and 5 months?
  moveInCorrect: LandlordResponseItem;
  years: number;
  months: number;
  // Has there been any late payment in the past 7 years?
  latePayment: LandlordResponseItem;
  lateCount: number;
  latePaymentsNoAnswer: string;
  // Was Proper notice to vacate given?
  properNotice: LandlordResponseItem;
  properNoticeRemarks: string;
  // Has there been any form of litigation or violations against
  litigation: LandlordResponseItem;
  litigationNoAnswer: string;
  litigationRemarks: string;
  // Has the property been kept in good conditions?
  propertyCondition: LandlordResponseItem;
  propertyConditionNoAnswer: string;
  // violations policy
  // violation: LandlordResponseItem;
  // violationNoAnswer: string;
  // violationRemarks: string;
  // Would you be willing to re-rent to XXX in the future?
  wouldRent: string;
  wouldRentNoAnswer: string;


  remarks: string;

  verifierName: string;
  verifierEmail: string;
  verifierPosition: string;
  sendResult: boolean;
  signature: string;
}

export type LandlordResponseItem = 'Y' | 'N' | 'K';

export type LandlordVerificationStatus = 'Complete' | 'Pending';
