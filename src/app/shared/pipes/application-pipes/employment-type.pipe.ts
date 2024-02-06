import { Pipe, PipeTransform } from '@angular/core';
import { EmploymentType } from '../../definitions/types/employment.type';

@Pipe({
  name: 'employmentType'
})
export class EmploymentTypePipe implements PipeTransform {

  transform(value: EmploymentType, ...args: any[]): any {
    switch (value) {
      case 'D':
        return 'On Disability';
      case 'E':
        return 'Employed';
      case 'F':
        return 'Full Time Student';
      case 'R':
        return 'Retired';
      case 'S':
        return 'Self Employed';
      case 'U':
        return 'Unemployed';
      case 'W':
        return 'Homemaker';
    }
    return null;
  }

}
