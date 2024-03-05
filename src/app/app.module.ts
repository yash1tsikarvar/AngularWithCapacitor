import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {NotFoundComponent} from './not-found/not-found.component';
import {CoreModule} from './core/core.module';
import {UiModule} from './ui/ui.module';
import {IncompatibleBrowserComponent} from './incompatible-browser/incompatible-browser.component';
import { RedirectShortComponent } from './redirect-short/redirect-short.component';
import { AdaModule } from './ada/ada.module';
import { ChatBotModule } from './chatbot/chatbot.module';
import { WebviewComponent } from './webView/webview/webview.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RedirectShortComponent,
    IncompatibleBrowserComponent,
    WebviewComponent,
  ],
  imports: [
    CoreModule,
    UiModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AdaModule,
    ChatBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
