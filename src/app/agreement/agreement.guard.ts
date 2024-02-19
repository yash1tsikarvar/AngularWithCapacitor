import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AgreementGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {}

  /**
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @return {Observable<boolean>}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const {applicationId} = next.params;



    return this.httpService
      .getApplicationById(applicationId)
      .pipe(
        switchMap(response => {

          if (!!response && response.signatureMissing) {
            return of(true);
          } else {
            return of(false);
          }
        }),
        catchError((httpError: HttpErrorResponse) => {
          console.log(httpError);
          return of(false);
        }),
        tap(canNavigate => {
          if (!canNavigate) {
            this.router
              .navigate(['/application-list'])
              .catch(console.log);
          } else {

          }
        })
      );
  }
}
