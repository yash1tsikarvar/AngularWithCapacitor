import {NgModule} from '@angular/core';

import {AgreementRoutingModule} from './agreement-routing.module';
import {AgreementComponent} from './agreement/agreement.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AgreementRoutingModule
  ],
  declarations: [
    AgreementComponent
  ]
})
export class AgreementModule { }
