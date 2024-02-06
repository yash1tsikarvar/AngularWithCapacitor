import {ApplicationSubType} from '../../types/application-sub-type';
import {CoApplicantType} from '../../types/co-applicant.type';

export interface ApplicationParams {

  code: string;
  applicationType: ApplicationSubType;
  coApplicantType?: CoApplicantType;
}
