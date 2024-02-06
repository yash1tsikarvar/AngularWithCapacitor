import {Pipe, PipeTransform} from '@angular/core';
import {ApplicationListItem} from '../../definitions/responses/application-list.response';
import {ApplicationResponse} from '../../definitions/responses/application.response';

@Pipe({
  name: 'applicationStatus'
})
export class ApplicationStatusPipe implements PipeTransform {

  transform(value: ApplicationListItem | ApplicationResponse, args?: any): any {

    switch (value.status) {
      case 'P':
        return 'Pending';
      case 'W':
      case 'S':
        return 'In Progress';
      case 'C':
        return 'Released to the Community for review'; // Closed/Completed
      case 'X':
        return 'Cancelled';
      case 'R':
        return 'Cancelled and Refund Requested';
      case 'V':
        return 'Cancelled and Payment Voided';
    }

    return '';
  }

}
