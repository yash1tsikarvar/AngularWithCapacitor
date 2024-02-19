import {Pipe, PipeTransform} from '@angular/core';
import {DocumentTask} from '../../definitions/models/document-task.model';

@Pipe({
  name: 'documentMimeTypes'
})
export class DocumentMimeTypesPipe implements PipeTransform {

  transform(value: DocumentTask, args?: any): string {
    return value.acceptedMimeTypes
      .filter(type => type.split('/').length === 2)
      .map(type => type.split('/')[1].toUpperCase())
      .reduce((acc, current, index) => {
        return acc
          ? (index + 1) !== value.acceptedMimeTypes.length ? `${acc}, ${current}` : `${acc} or ${current}`
          : current;
      }, '');
  }

}
