import {ApplicantEmployment} from '../forms/profile-form/references/references.interface';

export interface EmploymentReferenceVerification {

  personalVerificationId: number;
  idReference: number;
  applicationId: number;
  applicantId: number;
  rejectReason?: string;
  title: string;
  hideEmailLink: boolean;

  applicantEmployment: ApplicantEmployment;

}
