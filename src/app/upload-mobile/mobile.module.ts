import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadMobileComponent} from './upload/upload-mobile.component';
import {MobileRootComponent} from './mobile/mobile-root.component';
import {MobileRoutingModule} from './mobile-routing.module';
import {ComponentsModule} from '../shared/components/components.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import { MessageWithIconComponent } from './upload/message-with-icon/message-with-icon.component';


@NgModule({
    declarations: [UploadMobileComponent, MobileRootComponent, MessageWithIconComponent],
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
