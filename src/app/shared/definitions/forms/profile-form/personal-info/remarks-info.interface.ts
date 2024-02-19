import {InfoAnswer, MilitaryInfo} from './military-info.interface';

export interface Answer {
  name: string;
  key: string;
}
export interface Question {
  question: string;
  mainField: string;
  remoteField?: string;
  fields: Answer[];
}

export interface Questions {
  applicantOnly: Question[];
  withCoApplicant: Question[];
}

export const remarksQuestions: Questions = {
  applicantOnly: [
    {
      question: 'Has the applicant ever been arrested?',
      mainField: 'arrested',
      remoteField: 'beenArrested',
      fields: [
        {
          name: 'Primary Applicant',
          key: 'primaryApplicant'
        }
      ]
    },
    {
      question: 'Has the applicant ever been convicted of any crime? (including misdemeanors, DUI, etc.)',
      mainField: 'convicted',
      remoteField: 'beenConvicted',
      fields: [
        {
          name: 'Primary Applicant',
          key: 'primaryApplicant'
        }
      ]
    },
    {
      question: 'Has the applicant ever been evicted?',
      mainField: 'evicted',
      remoteField: 'beenEvicted',
      fields: [
        {
          name: 'Primary Applicant',
          key: 'primaryApplicant'
        }
      ]
    },
  ],
  withCoApplicant: [
    {
      question: 'Has the primary or secondary applicant ever been arrested?',
      mainField: 'arrested',
      remoteField: 'beenArrested',
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
    },
    {
      question: 'Has the primary or secondary applicant ever been convicted of any crime? (including misdemeanors, DUI, etc.)',
      mainField: 'convicted',
      remoteField: 'beenConvicted',
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
    },
    {
      question: 'Has the primary or secondary applicant ever been evicted?',
      mainField: 'evicted',
      remoteField: 'beenEvicted',
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
    },
  ],
};

export interface RemarksInfo extends MilitaryInfo {
  arrested?: string;
  arrestedAnswers?: InfoAnswer;
  convicted?: string;
  convictedAnswers?: InfoAnswer;
  evicted?: string;
  evictedAnswers?: InfoAnswer;
  applicant_explanation?: string;
  co_applicant_explanation?: string;
  arrests?: ArrestedInfo[];
  co_applicant_arrests?: ArrestedInfo[];
}

export interface ArrestedInfo extends MilitaryInfo {
    caseArrest?: string;
    state?: string;
    county?: string;
    countyDropdown?: string;
    typeOffense?: string;
    dateArrest?: string;
}
