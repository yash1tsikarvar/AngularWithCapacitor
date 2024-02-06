import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload/upload.component';
import {MobileComponent} from './mobile/mobile.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    children: [
      {path: 'upload/:token', component: UploadComponent},
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
