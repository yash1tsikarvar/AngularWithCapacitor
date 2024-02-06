import {ApplicationSubType} from '../types/application-sub-type';
import {Applicant} from '../models/applicant.model';
import {CoApplicantType} from '../types/co-applicant.type';
import {OtherOccupant} from '../models/other-occupant.interface';
import {Vehicle} from '../models/vehicle.interface';
import {Pet} from '../models/pet.interface';

export interface RealEstateInfoRequest {
  useRealtor?: boolean;
  realtorName?: string;
  realtorEmail?: string;
  realtorPhone?: string;
  allowRealtorNotice?: boolean;
  /**
   * @deprecated
   */
  realtorCountryCode?: string;
}

export interface SignatureInfoRequest {
  acknowledgerName?: string;
  noticeSignature?: string;
  agree?: boolean; // This field is when the user agrees and sign the document
  dateSigned?: Date;
  /**
   * @deprecated
   */
  acceptAssnDocuments?: boolean;
}

export interface OwnerInfoRequest {
  ownerInfoRequired?: boolean;
  ownerName?: string;
  ownerEmail?: string;
  ownerPhone?: string;
}

export interface PropertyInfoRequest {
  buildingName?: string;
  houseNumber?: string;
  street?: string;
  unit?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  monthlyRent?: number;
  purchasePrice?: number;
  moveInDate?: string;
  leaseTypeDayMonth?: string;
  leaseDaysMonths?: number;
  moveOutDate?: string;
}

export interface EmergencyInfoRequest {
  ecName?: string;
  ecRelationship?: string;
  ecCell?: string;
  ecEmail?: string;
  /**
   * @deprecated
   */
  ecAddress?: string;
  /**
   * @deprecated
   */
  ecCountry?: string;
  /**
   * @deprecated
   */
  ecCity?: string;
  /**
   * @deprecated
   */
  ecState?: string;
  /**
   * @deprecated
   */
  ecHome?: string;

}

export interface ApplicationPaymentData {
  paymentAmount?: number; // This is only for the response, not for the request
  billingName?: string;
  billingStreet1?: string;
  billingStreet2?: string;
  billingCity?: string;
  billingState?: string;
  billingZipcode?: string;
  internationalBillingAddress?: boolean;
  cardExp?: string;
  cardCvv2?: string;
  cardNumber?: string;
  rush?: boolean;
  squareToken?: string;
}

export interface ApplicationRequest extends
  RealEstateInfoRequest,
  SignatureInfoRequest,
  OwnerInfoRequest,
  PropertyInfoRequest,
  EmergencyInfoRequest,
  ApplicationPaymentData {
  propertyId: number;
  applicationSubType: ApplicationSubType;
  propertyCode?: number;
  /**
   * @param mainApplicationId only used if it is a CoApplicant invitation
   */
  mainApplicationId?: number;
  /**
   * pendingApplicationId received with saving partial applications
   */
  pendingApplicationId?: number;
  coApplicantType?: CoApplicantType;

  adults?: Applicant[];
  others?: OtherOccupant[];
  vehicles?: Vehicle[];
  pets?: Pet[];
  applicantsFilled?: boolean;
  propertyFilled?: boolean;
  agreementPropertyRequirements?: number;
}
