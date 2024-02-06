import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: FormGroup, args?: any): any {
    return this.getErrors(value);
  }

  getErrors(form: FormGroup): string {

    const errors = Object.keys(form.controls)
      .reduce((previous, current) => Object.assign({[current]: form.controls[current].errors}, previous), {});

    return JSON.stringify(errors, null, '\t');
  }

}
