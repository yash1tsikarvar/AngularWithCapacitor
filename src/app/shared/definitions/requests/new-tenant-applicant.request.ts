import { PhoneNumber } from "../models/phone-number.model";

export interface NewTenantApplicantRequest {
  login: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  langKey?: string;
  phoneNumber: PhoneNumber;
}
