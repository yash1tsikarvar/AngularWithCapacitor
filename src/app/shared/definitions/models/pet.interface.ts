import {AnimalType} from '../types/animal.type';
import {SexType} from '../types/sex.type';
import { YesNoType } from '../types/yes-no.type';

export interface Pet {
  esa: boolean;
  name: string;
  breed: string;
  age: number;
  weight: number;
  petType: AnimalType;
  petSex: SexType;
  license: string;
  description: string;
}
