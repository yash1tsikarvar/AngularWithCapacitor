import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraPaymentComponent } from './extra-payment/extra-payment.component';
import { ExtraPaymentGuard } from './extra-payment.guard';
import { EpThankYouComponent } from './ep-thank-you/ep-thank-you.component';

const routes: Routes = [
  {
    path: 'thanks',
    component: EpThankYouComponent,
  },
  {
    path: ':paymentId',
    component: ExtraPaymentComponent,
    canActivate: [ExtraPaymentGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ExtraPaymentGuard,
  ]
})
export class ExtraPaymentRoutingModule {
}
