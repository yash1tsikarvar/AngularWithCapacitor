import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadsComponent} from './uploads/upload.component';
import {UploadIdDocumentComponent} from './id/upload-id-document.component';
import {UploadsGuard} from './uploads.guard';
import {UploadMobileV2Component} from './id/upload-mobile/upload-mobile-v2.component';

const routes: Routes = [
  {
    path: '',
    component: UploadsComponent,
    children: [
      {path: ':applicationId/id/:documentTaskId', component: UploadIdDocumentComponent, canActivate: [UploadsGuard]},
      {path: ':applicationId/upload-mobile/:documentTaskId', component: UploadMobileV2Component, canActivate: [UploadsGuard]},
    ],

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    UploadsGuard
  ]
})
export class UploadRoutingModule {
}
