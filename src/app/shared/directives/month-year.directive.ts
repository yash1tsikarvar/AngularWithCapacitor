import {Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';
import {SPECIAL_KEY_CODES} from '../definitions/constants/special-key-codes';

@Directive({
  selector: '[tevMonthYear]'
})
export class MonthYearDirective {
  @Output() onMonthYearChanged = new EventEmitter<any>();

  element: ElementRef;

  constructor(private el: ElementRef) {
    this.element = el;
  }

  @HostListener('keyup', [ '$event' ])
  onKeyUp(event: KeyboardEvent) {

    // Delete key discard
    if (event.keyCode==8)
      return;

    if (this.element && this.element.nativeElement){
      let value = this.element.nativeElement.value;
      if (value && value.length==2 && value.indexOf('/')==-1){
        this.onMonthYearChanged.emit(value + '/');
      }
    }
  }

}
