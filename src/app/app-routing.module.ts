import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RedirectShortComponent } from './redirect-short/redirect-short.component';
import { LegacyUrlGuardGuard } from './legacy-url-guard.guard';
import { IncompatibleBrowserComponent } from './incompatible-browser/incompatible-browser.component';
import { IncompatibleBrowserGuard } from './shared/guards/incompatible-browser.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./begin/begin.module').then(m => m.BeginModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'r/:shorturl',
    component: RedirectShortComponent,

    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'agreement/:applicationId',
    loadChildren: () => import('./agreement/agreement.module').then(m => m.AgreementModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'application-list',
    loadChildren: () => import('./application-list/application-list.module').then(m => m.ApplicationListModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'dashboard/:applicationId',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'dashboard/:applicationId/proof-income/:applicantId',
    loadChildren: () => import('./dashboard/finicity/finicity.module').then(m => m.FinicityModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'page',
    loadChildren: () => import('./common-page/common-page.module').then(m => m.CommonPageModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'activate/:activationCode',
    loadChildren: () => import('./activate/activate.module').then(m => m.ActivateModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'complete-signature/:applicationId',
    loadChildren: () => import('./complete-signature/complete-signature.module').then(m => m.CompleteSignatureModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'owner-complete-signature/:applicationId',
    loadChildren: () => import('./owner-complete-signature/owner-complete-signature.module').then(m => m.OwnerCompleteSignatureModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./extra-payment/extra-payment.module').then(m => m.ExtraPaymentModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'upload-mobile',
    loadChildren: () => import('./upload-mobile/mobile.module').then(m => m.MobileModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {
    path: 'verifications',
    loadChildren: () => import('./verifications/verifications.module').then(m => m.VerificationsModule),
  },
  {
    path: 'uploads',
    loadChildren: () => import('./uploads/upload.module').then(m => m.UploadModule),
    //canActivate: [IncompatibleBrowserGuard]
  },
  {path: 'showAppStatus.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},
  {path: 'myAppStatus.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},
  {path: 'tenAppResume.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},
  {path: 'tenapp.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},
  {path: 'index.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},
  {path: 'Index.htm', canActivate: [IncompatibleBrowserGuard, LegacyUrlGuardGuard], component: NotFoundComponent},

  {path: 'myAppStatus', redirectTo: 'application-list'},

  {path: 'incompatible-browser', component: IncompatibleBrowserComponent},
  {
    path: '**',
    component: NotFoundComponent,
    //canActivate: [IncompatibleBrowserGuard]
  },
];


/**
 * The params inheritance strategy must be 'always' so they can be accessed on child routes.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule],
  providers: [
    LegacyUrlGuardGuard,
    IncompatibleBrowserGuard,
  ]
})
export class AppRoutingModule { }
