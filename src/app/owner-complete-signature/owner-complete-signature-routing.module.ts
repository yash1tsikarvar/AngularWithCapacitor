import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerCompleteSignatureComponent} from './owner-complete-signature/owner-complete-signature.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerCompleteSignatureComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class OwnerCompleteSignatureRoutingModule { }
