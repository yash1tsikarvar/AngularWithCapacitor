import { Pipe, PipeTransform } from '@angular/core';
import {PropertyInfoResponse} from '../definitions/responses/property-info.response';

@Pipe({
  name: 'propertyAddress'
})
export class PropertyAddressPipe implements PipeTransform {

  transform(value: PropertyInfoResponse, args?: any): any {
    return value.address;
  }

}
