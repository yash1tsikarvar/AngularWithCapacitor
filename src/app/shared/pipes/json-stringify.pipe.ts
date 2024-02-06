import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonStringify'
})
export class JsonStringifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return JSON.stringify(value, null, '\t');
  }

}
