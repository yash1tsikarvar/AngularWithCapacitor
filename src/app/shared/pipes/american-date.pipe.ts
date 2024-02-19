import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'americanDate'
})
export class AmericanDatePipe implements PipeTransform {

  transform(value: string | Date, args?: any): any {
    return moment(value).format('MM/DD/YYYY');
  }

}
