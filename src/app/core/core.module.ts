import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import.guard';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {HttpService} from './services/http.service';
import {TokenInterceptor} from './services/token.interceptor';
import {UserLoggedInGuard} from './guards/user-logged-in.guard';
import {UserNotLoggedInGuard} from './guards/user-not-logged-in.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JwtInterceptor} from './services/jwt.interceptor';
import {ApplicationRequestInterceptor} from './services/application-request.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      timeOut: 2000
    }),
    NgIdleKeepaliveModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  declarations: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationRequestInterceptor,
      multi: true
    },
    UserLoggedInGuard,
    UserNotLoggedInGuard,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
