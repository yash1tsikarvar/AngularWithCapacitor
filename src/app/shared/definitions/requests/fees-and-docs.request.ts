import {ApplicationSubType} from '../types/application-sub-type';
import {CoApplicantType} from '../types/co-applicant.type';
import {ResidenceCountry} from '../models/residence-country.interface';

export interface FeesAndDocsRequest {
  propertyId: number;
  applicationType: ApplicationSubType;
  numberOfApplicants: number;
  relationship?: CoApplicantType;
  numberOfVehicles?: number;
  numberOfPets?: number;
  mainApplicationId?: number;
  residenceCountries?: ResidenceCountry[];
}
