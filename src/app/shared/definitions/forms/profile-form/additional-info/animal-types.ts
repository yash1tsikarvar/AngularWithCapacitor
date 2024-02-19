import {AnimalType} from '../../../types/animal.type';

interface AnimalTypeValue {
  key: AnimalType;
  name: string;
}

export const AnimalTypeValues: AnimalTypeValue[] = [
  {
    key: 'C',
    name: 'Cat'
  },
  {
    key: 'D',
    name: 'Dog'
  },
  {
    key: 'O',
    name: 'Other Please Describe'
  }
];
