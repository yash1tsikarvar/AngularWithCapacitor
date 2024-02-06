import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import { ReviewInfoComponent } from './review-info/review-info.component';
import { PersonalInfoModule } from './../personal-info/personal-info.module';
import { AddressDetailsModule } from './../address-details/address-details.module';
import { CurrentResidenceModule } from './../current-residence/current-residence.module';
import { ReferencesModule } from './../references/references.module';
import { AdditionalInfoModule } from './../additional-info/additional-info.module';

@NgModule({
  imports: [
    SharedModule,
    PersonalInfoModule,
    AddressDetailsModule,
    CurrentResidenceModule,
    ReferencesModule,
    AdditionalInfoModule
  ],
  declarations: [
    ReviewInfoComponent
  ],
  exports: [
    ReviewInfoComponent,
  ]
})
export class ReviewInfoModule {

}
