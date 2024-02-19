import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../shared/components/components.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import { AdaIcon } from './adaIcon/adaIcon.component';
import { AdaComponent } from './ada.component';


@NgModule({
    declarations: [AdaIcon, AdaComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        DashboardModule
    ],
    exports: [
      AdaIcon,
      AdaComponent
    ]
})
export class AdaModule {
}
