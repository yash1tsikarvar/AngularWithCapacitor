import {VehRegInfoDTO} from './vehicle-registration.interface';

export interface PhotoVehicleRegistrationVerification {
  id: number;
  plate: string;
  documentId: number;
  step1Plate: String;
  vehRegInfoDTO?: VehRegInfoDTO;
}
