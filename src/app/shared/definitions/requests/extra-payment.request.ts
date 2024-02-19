export interface ExtraPaymentCreditCard {
  billingName: string;
  billingStreet1: string;
  billingStreet2: string;
  billingCity: string;
  billingState: string;
  billingZipcode: string;
  internationalBillingAddress: boolean;
  cardExp: string;
  cardCvv2: string;
  cardNumber: string;
  squareToken: string;
}

export interface ExtraPaymentSignature {
  signature: string;
}

export interface ExtraPaymentRequest extends ExtraPaymentCreditCard,
  ExtraPaymentSignature {
  extraPaymentId: number;
}
