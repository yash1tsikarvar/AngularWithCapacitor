import { NgModule } from '@angular/core';

import { ExtraPaymentRoutingModule } from './extra-payment-routing.module';
import { ExtraPaymentComponent } from './extra-payment/extra-payment.component';
import { SharedModule } from '../shared/shared.module';
import { EpCreditCardInfoComponent } from './ep-credit-card-info/ep-credit-card-info.component';
import { EpAgreementSignatureComponent } from './ep-agreement-signature/ep-agreement-signature.component';
import { ExtraPaymentSummaryComponent } from './extra-payment-summary/extra-payment-summary.component';
import { EpThankYouComponent } from './ep-thank-you/ep-thank-you.component';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
    imports: [
        SharedModule,
        ExtraPaymentRoutingModule,
        MatProgressSpinnerModule
    ],
  declarations: [
    ExtraPaymentComponent,
    EpCreditCardInfoComponent,
    EpAgreementSignatureComponent,
    ExtraPaymentSummaryComponent,
    EpThankYouComponent,
  ]
})
export class ExtraPaymentModule {
}
