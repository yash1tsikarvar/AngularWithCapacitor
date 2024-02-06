import {Directive, ElementRef, HostListener} from '@angular/core';
import {SPECIAL_KEY_CODES} from '../definitions/constants/special-key-codes';

@Directive({
  selector: '[tevNumbersOnly]'
})
export class NumbersOnlyDirective {

  /**
   * Allow decimal numbers and negative values
   */
  private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*)?$/g);

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {

    const pressedKeyCode = window.event ? event.keyCode : event.which;
    const pressedKey = pressedKeyCode >= 96 && pressedKeyCode <= 105
      ? String.fromCharCode(pressedKeyCode - 48)
      : String.fromCharCode(pressedKeyCode);

    /**
     * Allow Backspace, tab, end, and home keys
     */
    if (SPECIAL_KEY_CODES.indexOf(pressedKeyCode) !== -1) {
      return;
    }

    const current = this.el.nativeElement.value;
    const next = current.concat(pressedKey);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}
