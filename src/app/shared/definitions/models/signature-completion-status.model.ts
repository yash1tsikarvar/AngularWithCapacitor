export type SigningStatus = 'UNKNOWN'
  | 'UNSIGNED'
  | 'SIGNED'
  | 'PARTIALLY_SIGNED'
  | 'DECLINED'
  | 'EXPIRED'
  | 'NOT_REQUIRED'
  | 'ERROR'
  ;
export interface SignatureCompletionStatus {
  name: string;
  url: string;
  signingStatus: SigningStatus;
  signedApplicationUrl: string;
}
