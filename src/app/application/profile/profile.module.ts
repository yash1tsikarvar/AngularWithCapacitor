import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {SharedModule} from '../../shared/shared.module';
import {ProfileFormService} from './profile-form.service';
import {CurrentResidenceModule} from './current-residence/current-residence.module';
import {ReferencesModule} from './references/references.module';
import {AdditionalInfoModule} from './additional-info/additional-info.module';
import {ReviewInfoModule} from './review-info/review-info.module';
import {AddressDetailsModule} from './address-details/address-details.module';
import {PersonalInfoModule} from './personal-info/personal-info.module';
import {PaymentDetailsModule} from './payment-details/payment-details.module';
import {ProfileFormFactoryService} from './profile-form-factory.service';
import { CanDeactivateGuard } from './can-deactivate.guard';


@NgModule({
  imports: [
    SharedModule,
    CurrentResidenceModule,
    ReferencesModule,
    AdditionalInfoModule,
    ReviewInfoModule,
    AddressDetailsModule,
    PersonalInfoModule,
    PaymentDetailsModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    ProfileFormService,
    ProfileFormFactoryService,
    CanDeactivateGuard
  ]
})
export class ProfileModule { }
