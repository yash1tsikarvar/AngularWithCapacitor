import {AddressInfo} from './address-info.interface';
import {RealEstateAgentInfo} from './real-estate-agent-info.interface';
import {OwnerInfo} from './owner-info.interface';

export interface AddressDetails {
  addressInfo: AddressInfo;
  realEstateInfo: RealEstateAgentInfo
  ownerInfo: OwnerInfo;
}
