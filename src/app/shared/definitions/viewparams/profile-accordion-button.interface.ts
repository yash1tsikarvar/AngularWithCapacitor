import {ProfileFormControlNames} from '../forms/profile-form/profile-form.interface';

export interface ProfileAccordionButton {
  title: string;
  url: string[];
  collapsed: boolean;
  controlName: ProfileFormControlNames;
}
