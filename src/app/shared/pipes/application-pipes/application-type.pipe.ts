import {Pipe, PipeTransform} from '@angular/core';
import {ApplicationSubType} from '../../definitions/types/application-sub-type';

@Pipe({
  name: 'applicationType'
})
export class ApplicationTypePipe implements PipeTransform {

  transform(value: ApplicationSubType, args?: any): any {
    switch (value) {
      case 'T':
        return 'Rent/Lease';
      case 'O':
        return 'Purchase';
      case 'G':
        return 'Guest/Additional Resident';
    }
    return null;
  }

}
