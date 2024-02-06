import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropzoneDirective} from './dropzone.directive';
import {NumbersOnlyDirective} from './numbers-only.directive';
import {AsciiOnlyDirective} from './ascii-only.directive';
import {MonthYearDirective} from './month-year.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropzoneDirective,
    NumbersOnlyDirective,
    AsciiOnlyDirective,
    MonthYearDirective
  ],
  exports: [
    DropzoneDirective,
    NumbersOnlyDirective,
    AsciiOnlyDirective,
    MonthYearDirective
  ],
})
export class DirectivesModule { }
