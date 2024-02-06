import {AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {LandlordAnswer, LandlordAnswerOptions} from '../../../shared/definitions/models/landlord.answers.model';
import {UiService} from '../../../ui/ui.service';

@Component({
  selector: 'tev-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerComponent implements OnInit, AfterContentChecked {

  @Input() answer: LandlordAnswer;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() showErrors: boolean;

  selectedItem: string;
  validateRequired: string;
  group: AbstractControl;
  formGroupAnswer: any;


  constructor(private uiService: UiService, private ref: ChangeDetectorRef) {


  }

  ngAfterContentChecked(): void {
    this.formGroupAnswer = this.formGroup.get(this.answer.formGroup);
    this.formGroup.get(this.answer.formGroup).valueChanges.subscribe((val) => {
      this.selectedItem = val[this.answer.formName];

      if (this.validateRequired !== this.selectedItem) {
        this.changeValueRadioButton();
      }

    });
    this.group = this.formGroup.get(this.answer.formGroup);
  }


  ngOnInit() {

  }

  changeValueRadioButton() {
    for (const txtResponse of this.answer.answers) {
      if (txtResponse.value === this.selectedItem) {
        this.setElementsRequired2(txtResponse);
      } else {
        this.restoreElement(txtResponse);
      }
    }
  }

  setElementsRequired2(txtResponse: LandlordAnswerOptions) {
    for (const txtRe of txtResponse.txtResponse) {
      this.validateRequired = this.selectedItem;
      this.group.get(txtRe.fieldName).setValidators(txtRe.validators);
    }
  }

  restoreElement(txtResponse: LandlordAnswerOptions) {
    for (const txtRe of txtResponse.txtResponse) {
      this.group.get(txtRe.fieldName).setValue(null, {emitEvent: false});
      this.group.get(txtRe.fieldName).clearValidators();
      this.group.get(txtRe.fieldName).updateValueAndValidity({emitEvent: false});
      this.validateRequired = this.selectedItem;
    }
  }


  getWidth(number: number) {
    return (number) ? (12 / number) : '12';
  }

  getErrorMessage(fieldName: string) {

    if (this.group.get(fieldName) && this.group.get(fieldName).errors != null) {
      const {errors} = this.group.get(fieldName);
      return this.uiService.getControlError(errors);
    }
    return '';

  }

  getError(fieldName: string) {
    return this.group.get(fieldName).errors != null;
  }

  onInputFocus(event) {
    const target = event.currentTarget;
    target.type = 'text';
    target.setSelectionRange(0, target.value.length);
    target.type = 'number';
  }


}
