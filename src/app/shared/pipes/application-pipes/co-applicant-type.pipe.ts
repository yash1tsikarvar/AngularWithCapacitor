import { Pipe, PipeTransform } from '@angular/core';
import {CoApplicantType} from '../../definitions/types/co-applicant.type';

@Pipe({
  name: 'coApplicantType'
})
export class CoApplicantTypePipe implements PipeTransform {

  transform(value: CoApplicantType, args?: any): any {
    switch (value) {
      case 'S':
        return 'Married Couple';
      case 'O':
        return 'Roommates/Friends/Relatives';
    }
    return null;
  }
}
