import { Pipe, PipeTransform } from '@angular/core';
import {PropertyInfoResponse} from '../definitions/responses/property-info.response';

@Pipe({
  name: 'propertyName'
})
export class PropertyNamePipe implements PipeTransform {

  transform(value: PropertyInfoResponse, args?: any): any {
    return value.buildingName;
  }

}
