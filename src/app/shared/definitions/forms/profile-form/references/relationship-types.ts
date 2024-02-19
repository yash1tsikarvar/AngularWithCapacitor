import {RelationshipType} from '../../../types/relationship.type';


interface RelationshipTypeValue {
  key: RelationshipType;
  name: string;
}

export const RelationshipTypeValues: RelationshipTypeValue[] = [
  {
    key: '12',
    name: 'Friend'
  },
  {
    key: '15',
    name: 'Co-Worker'
  },
  {
    key: '16',
    name: 'Business Partner'
  },
  {
    key: '18',
    name: 'Colleague'
  }
];
