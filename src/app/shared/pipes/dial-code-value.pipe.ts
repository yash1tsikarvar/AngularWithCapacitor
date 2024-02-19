import { Pipe, PipeTransform } from '@angular/core';
import {PhoneCode} from '../definitions/constants/phone_codes';

@Pipe({
  name: 'dialCodeValue'
})
export class DialCodeValuePipe implements PipeTransform {

  transform(value: PhoneCode, args?: any): any {
    return `${value.dial_code}`;
  }

}
