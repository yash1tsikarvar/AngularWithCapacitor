import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {PaymentDetailsComponent, PaymentDetailsDialog} from './payment-details/payment-details.component';
import {CreditCardInfoComponent} from './credit-card-info/credit-card-info.component';
import {PaymentSummaryComponent} from './payment-summary/payment-summary.component';
import { AgreementSignatureComponent } from './agreement-signature/agreement-signature.component';
import { PaymentAddExpediteComponent } from './payment-add-expedite/payment-add-expedite.component';
import { ExpediteReviewsComponent } from './expedite-reviews/expedite-reviews.component';
import {ScriptService} from '../../../shared/services/script.service';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    PaymentDetailsComponent,
    CreditCardInfoComponent,
    PaymentSummaryComponent,
    AgreementSignatureComponent,
    PaymentAddExpediteComponent,
    PaymentDetailsDialog,
    ExpediteReviewsComponent
  ],
  exports: [
    PaymentDetailsComponent
  ],
  providers: [ScriptService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    PaymentDetailsDialog
  ]
})
export class PaymentDetailsModule {

}
