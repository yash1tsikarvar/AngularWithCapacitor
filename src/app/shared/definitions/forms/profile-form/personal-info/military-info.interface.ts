import {Questions} from './remarks-info.interface';
import {YesNoType} from '../../../types/yes-no.type';

export const militaryQuestions: Questions = {
  applicantOnly: [
    {
      question: 'Is the applicant a United States active duty military?',
      mainField: 'activeMilitary',
      remoteField: 'actDutyMilitary',
      fields: [
        {
          name: 'Primary Applicant',
          key: 'primaryApplicant'
        }
      ]
    }
  ],
  withCoApplicant: [
    {
      question: 'Is primary or secondary applicant a United States active duty military?',
      mainField: 'activeMilitary',
      remoteField: 'actDutyMilitary',
      fields: [
        {
          name: 'Primary Applicant',
          key: 'primaryApplicant'
        },
        {
          name: 'Secondary Applicant',
          key: 'secondaryApplicant'
        }
      ]
    }
  ]
};

export interface InfoAnswer {
  [key: string]: boolean;
}

export interface MilitaryInfo {
  activeMilitary?: YesNoType;
  activeMilitaryAnswers?: InfoAnswer;
  shortApplication?: string;
}
