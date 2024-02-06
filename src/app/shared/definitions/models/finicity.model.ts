export interface GenerateConnectURLResponse {
  link: string;
}

export interface CloseProofIncomeRequest {
  applicationId: number;
  applicantId: number;
  reportId: string;
}

export interface ProofOfIncomeRenew {
  applicationId: number;
  applicantId: number;
  decline: boolean;
  renew: boolean;
}

export interface JournalRequest {
  applicationId: number;
  applicantId: number;
  action: string;
  institutionId: number;
}
