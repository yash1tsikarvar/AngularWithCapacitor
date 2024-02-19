export interface DecodeTokenModel {
  auth: string;// Roles
  em: string;// Email
  exp: number;// Expiration Date as Timestamp
  sub: string;// Username
  fn: string;// First Name
  ln: string;// Last Name
  pn: string;// Phone Number
}
