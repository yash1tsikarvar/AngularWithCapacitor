import {Directive, ElementRef, HostListener} from '@angular/core';
import {SPECIAL_KEY_CODES} from '../definitions/constants/special-key-codes';

@Directive({
  selector: '[tevAsciiOnly]'
})
export class AsciiOnlyDirective {

  private regex: RegExp = new RegExp(/^[\x00-\x7F]*$/g);

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {

    let pressedKeyCode = window.event ? event.keyCode : event.which;
    if (pressedKeyCode === 173) pressedKeyCode = 189; // Firefox fix
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
