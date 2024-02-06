import {Component, Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

interface RadioOption {
  name: string;
  text: string;
}

/**
 * @todo implement this component
 */
@Component({
  selector: 'tev-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements ControlValueAccessor {

  @Input() options: RadioOption[];
  @Input() id: string;

  constructor() { }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

}
