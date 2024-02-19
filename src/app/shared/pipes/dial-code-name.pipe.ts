import { Pipe, PipeTransform } from '@angular/core';
import {PhoneCode} from '../definitions/constants/phone_codes';

@Pipe({
  name: 'dialCodeName'
})
export class DialCodeNamePipe implements PipeTransform {

  transform(value: PhoneCode, args?: any): any {
    return `(${value.dial_code}) ${value.name}`;
  }

}
