import { I } from '@angular/cdk/keycodes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileMask'
})
export class MobileMaskPipe implements PipeTransform {
  transform(mobile: string, visibleDigits: number = 4): string {
    //const visibleDigits = 4;
    if (mobile) {
      let maskedSection = mobile.slice(0, -visibleDigits);
      let visibleSection = mobile.slice(-visibleDigits);
      return maskedSection.replace(/./g, 'x') + visibleSection;
    }
    return "";
  }
}