import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompleteSignatureComponent} from './complete-signature/complete-signature.component';
import {CompleteSignatureGuard} from './complete-signature.guard';

const routes: Routes = [{
  path: '',
  component: CompleteSignatureComponent,
  canActivate: [CompleteSignatureGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CompleteSignatureGuard],
})
export class CompleteSignatureRoutingModule { }
