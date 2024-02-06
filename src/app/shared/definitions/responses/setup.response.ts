export interface SetupResponse {
  applicationFee: number;
  currentAddressRequired: boolean;
  employmentRequired: boolean;
  financialRequired: boolean;
  referenceRequired: boolean;
  contactRequired: boolean;
  ssnRequired: boolean;
  numberOfPetsAllowed: number;
  maxPetWeight: number;
  numberOfCarsAllowed: number;
  numberOfOthersAllowed: number;
  paymentProcessor: string;
}
