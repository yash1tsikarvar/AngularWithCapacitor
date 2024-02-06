import {Pipe, PipeTransform} from '@angular/core';
import {ApplicationSubType} from '../definitions/types/application-sub-type';

@Pipe({
  name: 'profileApplyTitle'
})
export class ProfileApplyTitlePipe implements PipeTransform {

  transform(buildingName: string, applicationSubType?: ApplicationSubType): any {

    switch (applicationSubType) {
      case 'T':
        return `Rent/Lease - ${buildingName}`;
      case 'O':
        return `Purchase - ${buildingName}`;
      case 'G':
        return `Guest/Additional Resident - ${buildingName}`;
    }

    return null;
  }

}
