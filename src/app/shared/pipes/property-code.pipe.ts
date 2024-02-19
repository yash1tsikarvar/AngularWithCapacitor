import { Pipe, PipeTransform } from '@angular/core';
import {PropertyInfoResponse} from '../definitions/responses/property-info.response';

@Pipe({
  name: 'propertyCode'
})
export class PropertyCodePipe implements PipeTransform {

  transform(value: PropertyInfoResponse, args?: any): any {
    return value.propertyCode;
  }
}
