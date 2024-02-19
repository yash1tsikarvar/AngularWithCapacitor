import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpService} from '../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProofIncomeGuardGuard implements CanActivate, CanActivateChild {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const {applicationId, applicantId} = next.params;

    return this.httpService.mainApplication$
      .pipe(
        map(mainApplication => {
           if (mainApplication.proofOfIncome.find(x => x.applicantId == applicantId)) {
             return true;
           }
           return false;
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
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {applicationId, applicantId} = next.params;

    return this.httpService.mainApplication$
      .pipe(
        map(mainApplication => {
          if (mainApplication.proofOfIncome.find(x => x.applicantId === applicantId)) {
            return true;
          }
          return false;
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
