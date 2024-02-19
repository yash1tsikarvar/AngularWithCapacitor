import { Pipe, PipeTransform } from '@angular/core';
import {CoApplicantType} from '../definitions/types/co-applicant.type';


@Pipe({
  name: 'coApplicantTitle'
})
export class CoApplicantTitlePipe implements PipeTransform {

  transform(value: CoApplicantType, args?: any): any {

    switch (value) {
      case 'S':
        return 'Legal Spouse, Husband, Wife';
      case 'O':
        return 'Roommate Details';
      case 'W':
        return 'Tenant Details';
    }

    return null;
  }

}
