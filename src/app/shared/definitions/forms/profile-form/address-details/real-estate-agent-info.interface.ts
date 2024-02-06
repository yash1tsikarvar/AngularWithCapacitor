import {YesNoType} from '../../../types/yes-no.type';

export interface RealEstateAgent {
  name: string;
  email: string;
  cellphone: string;
  dialCode: string;
  receiveNotification: boolean;
}
export interface RealEstateAgentInfo {
  workingWithARealEstateAgent: YesNoType;
  realEstateAgent?: RealEstateAgent;
}
