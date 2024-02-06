
export interface ViewEmploymentVerificationDTO {
  status: EmploymentVerificationStatus;
  applicantName: string;
  companyName: string;
  authForm: string;
}

export interface EmploymentVerificationRequestDTO {
  name: string;
  position: string;
  beginWork: string;
  companyNane: string;
  currentPosition: string;
  currentSalary: string;
  often: string;
  fullPart: string;
}

export type EmploymentVerificationStatus = 'Complete' | 'Pending';
