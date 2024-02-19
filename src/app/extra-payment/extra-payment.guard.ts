import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable ,  of } from 'rxjs';
import { HttpService } from '../core/services/http.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ExtraPaymentGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const {paymentId} = next.params;

    return this.httpService
      .getExtraPayment(paymentId)
      .pipe(
        catchError(() => of(false)),
        map(response => !!response),
        tap(exists => {
          if (!exists) {
            this.router
              .navigate(['/not-found'])
              .then(console.log);
          }
        })
      );
  }
}
