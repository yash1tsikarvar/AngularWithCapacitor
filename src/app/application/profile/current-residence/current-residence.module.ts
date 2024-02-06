import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {CurrentResidenceComponent} from './current-residence/current-residence.component';
import {ResidenceInfoComponent} from './residence-info/residence-info.component';
import {SecondaryApplicantInfoComponent} from './secondary-applicant-info/secondary-applicant-info.component';
import {FamilyFriendInfoComponent} from './family-friend-info/family-friend-info.component';
import {TypeOfResidenceComponent} from './type-of-residence/type-of-residence.component';
import {PrimaryApplicantInfoComponent} from './primary-applicant-info/primary-applicant-info.component';
import {LandlordInfoComponent} from './landlord-info/landlord-info.component';

@NgModule({
  imports: [
    SharedModule,

  ],
  declarations: [
    CurrentResidenceComponent,

    ResidenceInfoComponent,
    LandlordInfoComponent,
    FamilyFriendInfoComponent,
    TypeOfResidenceComponent,
    PrimaryApplicantInfoComponent,
    SecondaryApplicantInfoComponent,
  ],
  exports: [
    CurrentResidenceComponent,
    LandlordInfoComponent,
  ]
})
export class CurrentResidenceModule {

}
