import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from '../core/services/http.service';

@Injectable()
export class RefundApplicationGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const {applicationId} = next.params;

    return this.httpService
      .mainApplication$
      .pipe(
        map(mainApplication => {
          return !!mainApplication.refundEligible;
        }),
        tap(canGo => {
          if (!canGo) {
            this.router
              .navigate(['/dashboard', applicationId])
              .catch(console.log);
          }
        })
      );
  }
}
