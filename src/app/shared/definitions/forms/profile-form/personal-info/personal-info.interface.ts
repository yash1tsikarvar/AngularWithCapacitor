import {ApplicantInfo} from './applicant-info.interface';
import {MilitaryInfo} from './military-info.interface';
import {RemarksInfo} from './remarks-info.interface';

export interface PersonalInfo {
  applicantInfo: ApplicantInfo;
  coApplicantInfo: ApplicantInfo;
  militaryInfo: MilitaryInfo;
  remarksInfo: RemarksInfo;
}
