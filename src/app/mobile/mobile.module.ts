import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload/upload.component';
import {MobileComponent} from './mobile/mobile.component';
import {MobileRoutingModule} from './mobile-routing.module';
import {ComponentsModule} from '../shared/components/components.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import { MessageWithIconComponent } from './upload/message-with-icon/message-with-icon.component';


@NgModule({
    declarations: [UploadComponent, MobileComponent, MessageWithIconComponent],
    imports: [
        CommonModule,
        MobileRoutingModule,
        ComponentsModule,
        DashboardModule
    ],
    exports: [
        MessageWithIconComponent
    ]
})
export class MobileModule {
}
