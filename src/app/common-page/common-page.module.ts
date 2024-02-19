import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RefundAppComponent } from './refund-app/refund-app.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CommonPageRoutingModule
  ],
  declarations: [TermsAndConditionsComponent, RefundAppComponent]
})
export class CommonPageModule { }
