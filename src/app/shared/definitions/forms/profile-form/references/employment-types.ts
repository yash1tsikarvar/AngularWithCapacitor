import {EmploymentType} from '../../../types/employment.type';


interface EmploymentTypeValue {
  key: EmploymentType;
  name: string;
}

export const EmploymentTypeValues: EmploymentTypeValue[] = [
  {
    key: 'D',
    name: 'On Disability'
  },
  {
    key: 'E',
    name: 'Employed'
  },
  {
    key: 'F',
    name: 'Full Time Student'
  },
  {
    key: 'R',
    name: 'Retired'
  },
  {
    key: 'S',
    name: 'Self Employed'
  },
  {
    key: 'U',
    name: 'Unemployed'
  },
  {
    key: 'W',
    name: 'Homemaker'
  }
];
