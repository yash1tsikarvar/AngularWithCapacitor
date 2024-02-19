import {SalaryPeriodType} from '../../../types/salaray-period.type';


interface SalaryPeriodValue {
  key: SalaryPeriodType;
  name: string;
}

export const SalaryPeriods: SalaryPeriodValue[] = [
  {
    key: '1',
    name: 'Monthly'
  },
  {
    key: '2',
    name: 'Semi Monthly'
  },
  {
    key: '3',
    name: 'Bi-Weekly'
  },
  {
    key: '4',
    name: 'Weekly'
  },
  {
    key: '5',
    name: 'Annually'
  }
];
