import {EmploymentTimeType} from '../../../types/employment-time.type';

interface EmploymentTime {
  key: EmploymentTimeType;
  name: string;
}

export const EmploymentTimePeriods: EmploymentTime[] = [
  {
    key: '1',
    name: 'Part Time'
  },
  {
    key: '2',
    name: 'Full Time'
  }
  ];
