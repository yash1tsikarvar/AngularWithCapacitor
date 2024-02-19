import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompleteSignatureRoutingModule} from './complete-signature-routing.module';
import {CompleteSignatureComponent} from './complete-signature/complete-signature.component';

@NgModule({
  imports: [
    CommonModule,
    CompleteSignatureRoutingModule
  ],
  declarations: [CompleteSignatureComponent]
})
export class CompleteSignatureModule { }
