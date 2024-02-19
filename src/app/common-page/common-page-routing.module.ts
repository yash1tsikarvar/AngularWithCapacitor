import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {RefundAppComponent} from './refund-app/refund-app.component';

const routes: Routes = [
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'refund-app', component: RefundAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPageRoutingModule { }
