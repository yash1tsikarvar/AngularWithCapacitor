import {Pipe, PipeTransform} from '@angular/core';
import {ApplicationResponse} from '../../definitions/responses/application.response';

@Pipe({
  name: 'applicationAddress'
})
export class ApplicationAddressPipe implements PipeTransform {

  /**
   * @param value
   * @param args
   */
  transform(value: ApplicationResponse, args?: any): any {
    return value.address || '';
  }

}
