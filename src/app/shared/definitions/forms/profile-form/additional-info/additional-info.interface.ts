import {AnimalType} from '../../../types/animal.type';
import {SexType} from '../../../types/sex.type';
import {YesNoType} from '../../../types/yes-no.type';

export interface UnderAgeOccupant {
  name: string;
  relationship: string;
  age: number;
  /**
   * @deprecated
   */
  occupation?: string;
}

export interface TenantVehicle {
  make: string;
  model: string;
  color: string;
  year: number;
  tag: string;
  state: string;
  insureBy: string;
  rented: boolean;
  isElectric: YesNoType;
}

export interface TenantPet {
  esa: YesNoType;
  name: string;
  animalType: AnimalType;
  breed: string;
  description: string;
  age: number;
  weight: number;
  sex: SexType;
  licenseTag: string;
}

export interface UnderAgeInfo {
  anyUnderAge: YesNoType;
  underAgeOccupants: UnderAgeOccupant[];
}


export interface VehicleInfo {
  anyVehicle: YesNoType;
  vehicles: TenantVehicle[];
}

export interface PetInfo {
  anyPet: YesNoType;
  pets: TenantPet[]
}
export interface AdditionalInfo {
  underAgeInfo?: UnderAgeInfo;
  vehicleInfo?: VehicleInfo;
  petInfo?: PetInfo;
}
