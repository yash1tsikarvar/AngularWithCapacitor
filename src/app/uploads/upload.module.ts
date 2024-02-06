import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadRoutingModule} from './upload-routing.module';
import {ComponentsModule} from '../shared/components/components.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {UploadIdDocumentComponent} from './id/upload-id-document.component';
import {UploadsComponent} from './uploads/upload.component';
import {CssGifComponent} from './css-gif/css-gif.component';
import {SharedModule} from '../shared/shared.module';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {UploadFinishMessageComponent} from './upload-finish-message/upload-finish-message.component';
import {UploadMobileV2Component} from './id/upload-mobile/upload-mobile-v2.component';
import {QRCodeModule} from 'angularx-qrcode';


@NgModule({
  declarations: [
    UploadIdDocumentComponent,
    UploadsComponent,
    CssGifComponent,
    UploadFinishMessageComponent,
    UploadMobileV2Component],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ComponentsModule,
    DashboardModule,
    SharedModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    MatCardModule,
    QRCodeModule,
  ],
  exports: []
})
export class UploadModule {
}
