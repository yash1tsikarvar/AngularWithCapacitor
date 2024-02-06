import {CurrentResidenceType} from '../types/current-residence.type';

export interface ResidenceCountry {
  applicantNumber: number;
  countryOfResidence: string;
  residenceType: CurrentResidenceType;
}
