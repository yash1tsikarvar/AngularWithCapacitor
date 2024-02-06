export interface DataVerificationCode {
  email: string;
  phoneNumber: string;
  sentType: SentType;
  userId: number;
  dialCode: string;
}

/**
 * Defines the delivery destination of the verification code.
 */
 export enum SentType {       
    None = 0,
    SMS = 1,
    Mail = 2,
}