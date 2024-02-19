import {RelationshipType} from '../types/relationship.type';

export interface ApplicantReference {
  name: string;
  relationship: RelationshipType;
  country: string;
  cellPhone: string;
  email: string;
  /**
   * @deprecated
   */
  homePhone?: string;
}
