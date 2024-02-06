import { YesNoType } from '../../../types/yes-no.type';


export interface ExtraPaymentAddress {
  billingStreet1: string;
  billingStreet2?: string;
  billingZipcode: string;
  billingCity: string;
  billingState: string;
}

export const ExtraPaymentDefaultAddress: ExtraPaymentAddress = {
  billingStreet1: '11606 City hall promenade',
  billingCity: 'Miramar',
  billingState: 'FL',
  billingZipcode: '33025'
};

export interface PaymentAddress {
  address1: string;
  address2?: string;
  zip: string;
  city: string;
  state: string;
}

export const DefaultAddress: PaymentAddress = {
  address1: '11606 City hall promenade',
  city: 'Miramar',
  state: 'FL',
  zip: '33025'
};

export interface PaymentInfo extends PaymentAddress {
  name: string;
  creditCard: string;
  creditCardExp: string;
  creditCardCvv: string;
  addressNotInUsa: boolean;
  squareToken: string;
}

export interface PaymentAddExpedite {
  addExpediteApplication: YesNoType;
}

export interface PaymentExpedite {
  expediteApplication: YesNoType;
}

export interface PaymentAgree {
  agreeAndAuthorize: boolean;
  noticeSignature: string;
  signatureText: string;
}
export interface TenantPaymentDetails {
  paymentInfo: PaymentInfo;
  paymentAgree: PaymentAgree;
  paymentExpedite: PaymentExpedite;
}
