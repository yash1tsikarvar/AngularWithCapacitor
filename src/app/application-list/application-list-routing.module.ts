import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationListComponent} from './application-list/application-list.component';
import {UserLoggedInGuard} from '../core/guards/user-logged-in.guard';
import {ApplicationListGuard} from './application-list.guard';

const routes: Routes = [
  {
    path: '',
    component: ApplicationListComponent,
    canActivate: [
      UserLoggedInGuard,
      ApplicationListGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ApplicationListGuard
  ]
})
export class ApplicationListRoutingModule { }
