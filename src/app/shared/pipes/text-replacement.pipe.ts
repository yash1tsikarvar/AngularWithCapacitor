import {Pipe, PipeTransform} from '@angular/core';
import {textReplacements} from '../definitions/constants/text_replacements';

@Pipe({
  name: 'textReplacement'
})
export class TextReplacementPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(textReplacements)
      .reduce((acc: string, key) => {
        return acc.replace(key, textReplacements[key]);
      }, value);
  }

}
