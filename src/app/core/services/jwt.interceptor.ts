import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  authService: AuthService;

  constructor(
    private injector: Injector,
    private router: Router,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.authService = this.injector.get(AuthService);

    return next.handle(req)
      .pipe(
        tap(
          () => {},
          (error: any) => {

            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case 403:
                  this.logOut();
                  break;
              }
            }

          }
        )
      );
  }


  logOut() {
    this.authService
      .logOut()
      .subscribe(() => this.goHome());
  }

  goHome() {
    this.router
      .navigate(['/'])
      .catch(console.log);
  }

}
