import { ApplicationStatus } from './application-list.response';
import { DocumentTask } from '../models/document-task.model';
import { VerificationTask } from '../models/verification-task.model';
import { SignatureCompletionStatus } from '../models/signature-completion-status.model';
import { OwnerSigningStatusType } from '../types/owner-signing-status.type';
import { ThemeModel } from '../models/theme.model';
import { FrozenCredit } from '../models/frozen-credit.model';
import { PendingPayment } from '../models/pending-payment.model';
import { Payment } from '../models/payment.model';
import {PersonalReferenceVerification} from '../models/personal-reference-verification.model';
import {EmploymentReferenceVerification} from '../models/employment-reference-verification.model';
import {LandlordReferenceVerification} from '../models/landlord-reference-verification.model';
import {UpdateOwnerInformationRequest} from '../requests/update-owner-information.request';
import {ProofOfIncome} from '../models/proof-of-income';

interface Applicant {
  name: string;
  email: string;
  employmentType: string;
}

interface RealtorPhone {
  id: number;
  countryCode: string;
  phoneNumber: string;
  rawPhoneNumber: string;
  e164PhoneNumber?: string;
}

export interface ApplicationResponse {
  applicationId: number;
  status: ApplicationStatus;
  payerName: string;
  account: string;
  transactionId: string;
  amountPaid: number;
  paymentDate: Date;
  pendingDocumentTasks: DocumentTask[];
  workingDocumentTasks: DocumentTask[];
  completedDocumentTasks: DocumentTask[];
  pendingVerifications: VerificationTask[];
  completedVerifications: VerificationTask[];
  address?: string;
  buildingName?: string;
  signingStatus: SignatureCompletionStatus;
  waitingForOwnerSignature: boolean;
  signatureMissing: boolean;
  allowNewApplicant: boolean;
  invitationEmail?: string;
  invitationLastName?: string;
  invitationFirstName?: string;
  invitationCoapplicantType?: number;
  supplementalPendingApplicationId?: number;
  supplementalApplicationId?: number;
  supplementalApplicationStatus?: string;
  workingReferenceTasks: string[];
  completedReferenceTasks: string[];
  applicants: Applicant[];
  ownerSigningStatus: OwnerSigningStatusType;
  finalReportUrl: string;
  theme?: ThemeModel;
  frozenCreditDTOs?: FrozenCredit[];
  pendingPayments?: PendingPayment[];
  refundEligible?: boolean;
  refundAvailable?: number;
  refundFee?: number;
  paymentAmount?: number;
  refundReceiptUrl?: string;
  signedDocumentUrl?: string;
  propertyCode?: number;
  payments?: Payment[];
  rush?: boolean;
  ownerInfo?: UpdateOwnerInformationRequest;
  personalReferenceVerification?: PersonalReferenceVerification [];
  employmentReferenceVerification?: EmploymentReferenceVerification[];
  landlordReferenceVerification?: LandlordReferenceVerification[];
  proofOfIncome?: ProofOfIncome[];
  proofOfIncomeManual?: ProofOfIncome[];
  realtorName?: string;
  realtorEmail?: string;
  realtorPhone?: RealtorPhone;
  propertyPhone?: string;
  signingDate?: string;
  releasedToCommunity?: string;
  applicationSubType?: string;
  employmentType?: string;
  shortApplication?: string;

  abandoned: boolean;
  /**
   * @deprecated
   */
  ownerInfoMissing: boolean;
  /**
   * @deprecated
   */
  signingStatuses: SignatureCompletionStatus[];
  paymentReceiptUrl: string;
}
