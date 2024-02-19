import {Pipe, PipeTransform} from '@angular/core';
import {DecodeTokenModel} from '../definitions/models/decode-token.model';

@Pipe({
  name: 'loggedInUserName'
})
export class LoggedInUserNamePipe implements PipeTransform {

  transform(value: DecodeTokenModel, args?: any): any {
    return value.fn && value.ln
      ? `${value.fn} ${value.ln}`
      : value.sub;
  }

}
