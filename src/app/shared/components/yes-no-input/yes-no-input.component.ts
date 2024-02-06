import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tev-yes-no-input',
  templateUrl: './yes-no-input.component.html',
  styleUrls: ['./yes-no-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesNoInputComponent),
      multi: true
    }
  ]
})
export class YesNoInputComponent implements OnInit, ControlValueAccessor {

  _value: string;
  @Input()
  set value(val: string) {
    this._value = val;
    this.propagateChange(val);
  }

  get value(): string {
    return this._value;
  }

  propagateChange = (_:any) => {};

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  inputClass() {
    return {
      yes: this.value === 'closed-question__input--yes',
      no: this.value === 'closed-question__input--no'
    };
  }

  setValue(value: string) {
    this.value = value;
    this.change.emit(value);
  }

  getValue() {
    return this.value || 'no';
  }

}
