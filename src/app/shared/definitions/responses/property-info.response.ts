import { ThemeModel } from '../models/theme.model';

export interface PropertyUnitList {
  label: string;
  value: string;
}

export interface PropertyInfoResponse {
  address: string; // Composite Address
  propertyCode: string;
  buildingName: string;
  city: string;
  houseNumber: string;
  leaseTypeMonthDay: string;
  minLease: number;
  ownerInfoRequired: boolean;
  prefillAddress: boolean;
  propertyId: number;
  propertyNotice: string;
  rushProcessingPrice: number;
  state: string;
  street: string;
  streetType: string;
  unit: string;
  unitList: PropertyUnitList[];
  zipcode: string;
  shortApplication: string;
  theme?: ThemeModel;
  incomeRequired: boolean;
  /**
   * @deprecated
   */
  maxPetWeight: number;
  /**
   * @deprecated
   */
  allowPets: boolean;
  /**
   * @deprecated
   */
  allowLease: boolean;
  /**
   * @deprecated
   */
  allowPetsLease: boolean;
  /**
   * @deprecated
   */
  maxPetWeightLease: number;
  /**
   * @deprecated
   */
  allowPurchase: boolean;
  /**
   * @deprecated
   */
  allowPetsPurchase: boolean;
  /**
   * @deprecated
   */
  maxPetWeightPurchase: number;
  /**
   * @deprecated
   */
  allowGuest: boolean;
}
