export type ApplicationStatus =
    'P' // Pending
  | 'S' // Saved
  | 'W' // In Process
  | 'C' // Closed
  | 'X' // Cancelled
  | 'R' // Cancelled and Refund Requested
  | 'V' // Cancelled and Payment Voided
  ;

export interface ApplicationListItem {
  applicationId: number;
  pendingApplicationId: number;
  buildingName: string;
  address: string;
  status: ApplicationStatus;
  signatureMissing: boolean;
  abandoned: boolean;
  lastActivity: Date;
  notificationChecked: boolean;
  signingStatus: SigningStatus;
  applicantFullName: string;
}

export interface ApplicationListResponse {
  applications: ApplicationListItem[];
}


export interface SigningStatus {
  name: string;
  url: string;
  signingStatus: string;
  signedApplicationUrl: string;

}

export interface ApplicationListFilterResponse {
  source: ApplicationListItem[];
  pageList: ApplicationListItem[];
  page: number;
  pageSize: number;
  pageCount: number;
  lastPage: boolean;
  firstPage: boolean;
  nrOfElements: number;
}
