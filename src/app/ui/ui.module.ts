import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiService} from './ui.service';
import {AmericanDatePipe} from '../shared/pipes/american-date.pipe';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    UiService,
    AmericanDatePipe
  ]
})
export class UiModule { }
