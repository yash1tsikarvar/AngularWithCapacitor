import {YesNoType} from '../../../types/yes-no.type';

export interface Owner {
  fullName: string;
  phone: string;
  dialCode: string;
  email: string;
}

export interface OwnerInfo {
  knowOwnerInformation: YesNoType;
  owner?: Owner;
}
