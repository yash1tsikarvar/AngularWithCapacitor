import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadMobileComponent} from './upload/upload-mobile.component';
import {MobileRootComponent} from './mobile/mobile-root.component';

const routes: Routes = [
  {
    path: '',
    component: MobileRootComponent,
    children: [
      {path: 'upload/:token', component: UploadMobileComponent},
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
