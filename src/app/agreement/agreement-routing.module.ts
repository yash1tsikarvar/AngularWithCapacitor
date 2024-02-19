import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgreementComponent} from './agreement/agreement.component';
import {AgreementGuard} from './agreement.guard';

const routes: Routes = [
  {
    path: '',
    component: AgreementComponent,
    canActivate: [AgreementGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AgreementGuard,
  ]
})
export class AgreementRoutingModule { }
