import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {UiService} from '../ui/ui.service';
import {ErrorResponse} from '../shared/definitions/responses/error.response';

@Injectable()
export class ActivateGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const {activationCode} = next.params;

    return this.httpService
      .activateAccount(activationCode)
      .pipe(
        map(response => !response),
        catchError((httpError: HttpErrorResponse) => {
          const error: ErrorResponse = httpError.error;
          this.uiService
            .showError({
              message: error.title
            });

          return of(false);
        }),
        tap(canActivate => {

          if (canActivate) {
            this.uiService
              .showInfo({
                title: 'Account Activated',
                message: 'Please Login with your credentials'
              });
          }

          this.router
            .navigate(['/login'])
            .catch(console.log);

        })
      );
  }
}
