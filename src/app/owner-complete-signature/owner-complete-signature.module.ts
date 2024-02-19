import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnerCompleteSignatureComponent} from './owner-complete-signature/owner-complete-signature.component';
import {OwnerCompleteSignatureRoutingModule} from './owner-complete-signature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OwnerCompleteSignatureRoutingModule,
  ],
  declarations: [OwnerCompleteSignatureComponent]
})
export class OwnerCompleteSignatureModule { }
