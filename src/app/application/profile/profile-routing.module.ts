import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {PersonalInfoComponent} from './personal-info/personal-info/personal-info.component';
import {AddressDetailsComponent} from './address-details/address-details/address-details.component';
import {CurrentResidenceComponent} from './current-residence/current-residence/current-residence.component';
import {ReferencesComponent} from './references/references/references.component';
import {AdditionalInfoComponent} from './additional-info/additional-info/additional-info.component';
import {ReviewInfoComponent} from './review-info/review-info/review-info.component';
import {PaymentDetailsComponent} from './payment-details/payment-details/payment-details.component';
import {ProfileStepGuard} from './profile-step.guard';
import {PaymentStepGuard} from './payment-step.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      // {path: '', component: PersonalInfoComponent, data: {stepName: 'personalInfo'}},
      {path: '', component: AddressDetailsComponent, data: {stepName: 'addressDetails'}},
      {path: 'address-details', component: AddressDetailsComponent, data: {stepName: 'addressDetails'}},
      {path: 'personal-info', component: PersonalInfoComponent, canDeactivate:[CanDeactivateGuard], data: {stepName: 'personalInfo'}},
      {path: 'current-residence', component: CurrentResidenceComponent, data: {stepName: 'currentResidence'}},
      {path: 'references', component: ReferencesComponent, data: {stepName: 'references'}},
      {path: 'additional-info', component: AdditionalInfoComponent, data: {stepName: 'additionalInfo'}},
      {path: 'review-info', component: ReviewInfoComponent, canDeactivate:[CanDeactivateGuard], data: {stepName: 'reviewInfo'}},
      {
        path: 'payment-details',
        component: PaymentDetailsComponent,
        data: {stepName: 'paymentDetails'},
        canActivate: [PaymentStepGuard]
      },
    ],
    canActivateChild: [ProfileStepGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProfileStepGuard,
    PaymentStepGuard,
  ]
})
export class ProfileRoutingModule { }
