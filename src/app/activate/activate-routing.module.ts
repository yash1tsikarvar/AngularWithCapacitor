import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivateComponent} from './activate/activate.component';
import {ActivateGuard} from './activate.guard';

const routes: Routes = [
  {
    path: '',
    component: ActivateComponent,
    canActivate: [ActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ActivateGuard
  ]
})
export class ActivateRoutingModule { }
