import {Injectable, Injector} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  apiPrefix = environment.api_prefix;
  authService: AuthService;

  constructor(
    private injector: Injector,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);

    if (this.isSecureEndpoint(request.url)) {
      const token = this.authService.getUserIdToken();

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }

  isSecureEndpoint(url: string) {

    return [`${this.apiPrefix}/authenticate`, `${this.apiPrefix}/register`]
      .some(api => {
        return url.indexOf(api) === -1;
      });

  }

}
