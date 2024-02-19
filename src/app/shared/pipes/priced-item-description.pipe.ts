import {Pipe, PipeTransform} from '@angular/core';
import {PricedItem} from '../definitions/models/priced-item.interface';

@Pipe({
  name: 'pricedItemDescription'
})
export class PricedItemDescriptionPipe implements PipeTransform {

  transform(value: PricedItem, args?: any): any {
    return value.description;
  }

}
