import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../shared/components/components.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import { ChatBotComponent } from './chatbot.component';


@NgModule({
    declarations: [ChatBotComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        DashboardModule
    ],
    exports: [
      ChatBotComponent
    ]
})
export class ChatBotModule {
}
