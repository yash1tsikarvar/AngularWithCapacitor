import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommunityComponent } from './community/community.component'
import { EnterCodeComponent } from './enter-code/enter-code.component'
import { EnterTypeComponent } from './enter-type/enter-type.component'
import { UserLoggedInGuard } from '../core/guards/user-logged-in.guard'
import { UserInfoComponent } from './user-info/user-info.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [UserLoggedInGuard],
      },
      {
        path: 'enter-code',
        component: EnterCodeComponent,
      },
      {
        path: 'video-info/:code',
        component: UserInfoComponent
      },
      {
        path: ':code',
        component: EnterTypeComponent,
        canActivate: [UserLoggedInGuard],
      },
    ],
    canActivate: [UserLoggedInGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {}
