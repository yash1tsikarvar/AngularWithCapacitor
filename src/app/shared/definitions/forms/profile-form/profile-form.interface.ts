import {PersonalInfo} from './personal-info/personal-info.interface';
import {AddressDetails} from './address-details/address-details.interface';
import {CurrentResidence} from './current-residence/current-residence.interface';
import {References} from './references/references.interface';
import {AdditionalInfo} from './additional-info/additional-info.interface';
import {ReviewInfo} from './review-info/review-info.interface';
import {TenantPaymentDetails} from './payment-details/payment-details.interface';

export type ProfileFormControlNames = 'addressDetails'
  | 'personalInfo'
  | 'currentResidence'
  | 'references'
  | 'additionalInfo'
  | 'reviewInfo'
  | 'paymentDetails';

export interface ProfileForm {
  addressDetails: AddressDetails | null;
  personalInfo: PersonalInfo | null;
  currentResidence: CurrentResidence | null;
  references: References | null;
  additionalInfo: AdditionalInfo | null;
  reviewInfo: ReviewInfo | null;
  paymentDetails: TenantPaymentDetails | null;
}
