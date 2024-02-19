import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from './application/application.component';
import {FeesComponent} from './fees/fees.component';
import {CoApplicantsComponent} from './co-applicants/co-applicants.component';
import {CoApplicantSelectionComponent} from './co-applicant-selection/co-applicant-selection.component';
import {CoApplicantAddedComponent} from './co-applicant-added/co-applicant-added.component';

import {UserLoggedInGuard} from '../core/guards/user-logged-in.guard';
import {PropertySummaryGuard} from '../shared/guards/property-summary.guard';
import {FeesGuard} from './fees.guard';
import {CoApplicantGuard} from './co-applicant.guard';
import {ResumeApplicationGuard} from './resume-application.guard';


const routes: Routes = [
  {
    path: 'new/:code/:type',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: CoApplicantsComponent,
        children: [
          {path: '', component: CoApplicantSelectionComponent},
          {
            path: ':coApplicantType/added',
            component: CoApplicantAddedComponent,
            canActivate: [CoApplicantGuard]
          },
        ]
      },
      {path: 'fees', component: FeesComponent, canActivate: [FeesGuard]},
      {path: 'fees/:coApplicantType', component: FeesComponent, canActivate: [CoApplicantGuard, FeesGuard]},
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [FeesGuard]
      },
      {
        path: 'profile/:coApplicantType',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [CoApplicantGuard, FeesGuard]
      }
    ],
    canActivate: [
      UserLoggedInGuard,
      PropertySummaryGuard,
    ],
  },
  {
    path: 'resume/:pendingApplicationId',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ],
    canActivate: [
      UserLoggedInGuard,
      ResumeApplicationGuard,
    ]
  }




];

/**
 * In order to activate the paths of this module the user must be logged in,
 * the property information must exist exists according to the code and type
 * of route params and the Fees requests must succeed.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PropertySummaryGuard,
    FeesGuard,
    CoApplicantGuard,
    ResumeApplicationGuard,
  ]
})
export class ApplicationRoutingModule { }
