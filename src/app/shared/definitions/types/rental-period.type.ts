import {Definition} from '../models/definition.model';

export type RentalPeriodType = '1' | '2' | '3' | '4' | '5';

export const RentalPeriodTypeValues: Definition[] = [
  {
    value: '2',
    name: 'Daily'
  },
  {
    value: '3',
    name: 'Weekly'
  },
  {
    value: '1',
    name: 'Monthly'
  },
  {
    value: '4',
    name: 'Quarterly'
  },
  {
    value: '5',
    name: 'Yearly'
  }
];
