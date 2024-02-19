import { Definition } from "../models/definition.model";

export type ApplicationSubType = "T" | "O" | "G";

export const ApplicationSubTypeValues: Definition[] = [
  {
    name: "Rent/Lease",
    value: "T",
  },
  {
    name: "Purchase",
    value: "O",
  },
  {
    name: "Guest/Additional Resident",
    value: "G",
  },
];

export const ApplicationSubTypeAccess: Definition[] = [
  {
    name: "leasing/renting",
    value: "T",
  },
  {
    name: "buying",
    value: "O",
  },
  {
    name: "moving into",
    value: "G",
  },
];
