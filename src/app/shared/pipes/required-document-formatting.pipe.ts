import { Pipe, PipeTransform } from '@angular/core';
import {specialKeys} from '../definitions/constants/special_keys';

@Pipe({
  name: 'requiredDocumentFormatting'
})
export class RequiredDocumentFormattingPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    return Object.keys(specialKeys)
      .reduce((acc: string, key) => {
        return acc.replace(key, specialKeys[key]);
      }, value);
  }

}
