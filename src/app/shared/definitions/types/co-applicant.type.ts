import { Definition } from "../models/definition.model";

export type CoApplicantType = "A" | "S" | "O" | "W";

export const CoApplicantTypeValues: Definition[] = [
  /*{
    value: 'W',
    name: 'With Existing Tenant / Resident'
  },*/
  {
    value: "S",
    name: "Legal Spouse / Husband / Wife",
  },
  {
    value: "O",
    name: "Roommate / Family Members / Friends / Co-signers",
  },
];

export const CoApplicantInviteValues: Definition[] = [
  {
    value: "S",
    name: "Spouse",
  },
  {
    value: "O",
    name: "Other (Friend, Roommate etc...)",
  },
];
