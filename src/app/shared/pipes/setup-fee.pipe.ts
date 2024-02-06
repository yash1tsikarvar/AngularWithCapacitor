import {Pipe, PipeTransform} from '@angular/core';
import {SetupResponse} from '../definitions/responses/setup.response';
import * as numeral from 'numeral';

@Pipe({
  name: 'setupFee'
})
export class SetupFeePipe implements PipeTransform {

  transform(value: SetupResponse, args?: any): any {
    return numeral(value.applicationFee).format('$0,0.00');
  }

}
