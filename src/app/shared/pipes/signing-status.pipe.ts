import {Pipe, PipeTransform} from '@angular/core';
import {SigningStatus} from '../definitions/models/signature-completion-status.model';

@Pipe({
  name: 'signingStatus'
})
export class SigningStatusPipe implements PipeTransform {

  transform(value: SigningStatus, args?: any): string {

    switch (value) {
      case 'NOT_REQUIRED':
      case 'UNKNOWN':
        return '';
      case 'SIGNED':
        return 'Signed.';
      case 'PARTIALLY_SIGNED':
        return 'Partially Signed.';
      case 'DECLINED':
        return 'Applicant Declined to Sign.';
      case 'EXPIRED':
        return 'Document has expired. Please contact support.';
      case 'ERROR':
        return 'There was a problem with you document. Please contact support.';
    }

    return '';
  }

}
