import {Definition} from '../models/definition.model';

export type CurrentResidenceType = 'R' | 'O' | 'D';

export const CurrentResidenceTypeValues: Definition[] = [
  {
    value: 'O',
    name: 'Own home'
  },
  {
    value: 'R',
    name: 'Rents'
  },
  {
    value: 'D',
    name: 'Lives with family/friend'
  }
];

