export interface PaymentRequest {
  pendingApplicationId?: number;
  name: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipcode: string;
  internationalBillingAddress: boolean;
  exp: string;
  cvv2: string;
  cardNumber: string;
  rush: boolean;
}
