import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AllowCoApplicantGuard implements CanActivate {
  constructor(

    private httpService: HttpService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const {applicationId} = next.params;

    return this.httpService.mainApplication$
      .pipe(
        map((mainApplication) => {
          return (mainApplication.allowNewApplicant || mainApplication.supplementalPendingApplicationId!=null);
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
