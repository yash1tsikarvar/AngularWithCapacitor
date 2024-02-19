import {ApplicationSubType} from '../types/application-sub-type';
import {CoApplicantType} from '../types/co-applicant.type';

export interface SetupRequest {
  propertyId: number;
  applicationSubType: ApplicationSubType;
  numberOfApplicants: number;
  numberOfPets: number;
  mainApplicationId?: number;
  relationship?: CoApplicantType;
}
