import {Pipe, PipeTransform} from '@angular/core';
import {PricedItem} from '../definitions/models/priced-item.interface';
import * as numeral from 'numeral';

@Pipe({
  name: 'pricedItemFee'
})
export class PricedItemFeePipe implements PipeTransform {

  transform(value: PricedItem, args?: any): any {
    return numeral(value.amount).format('$0,0.00');
  }

}
