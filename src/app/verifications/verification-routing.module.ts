import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandlordComponent} from './landlord/landlord.component';
import {EmploymentComponent} from './employment/employment.component';
import {VerificationsComponent} from './verifications-router/verifications.component';
import {CharacterComponent} from './character/character.component';


const routes: Routes = [
  {
    path: '',
    component: VerificationsComponent,
    children: [
      {path: 'landlord/:id/:hash', component: LandlordComponent},
      {path: 'employment/:id/:hash', component: EmploymentComponent},
      {path: 'character/:id/:hash', component: CharacterComponent},
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class VerificationRoutingModule {
}
