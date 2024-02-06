import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../core/services/http.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class OwnerInfoGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {
  }


  isEditable(ownerInfoLastEditDate) {
    const lastEdit24h = new Date(ownerInfoLastEditDate);
    const now = new Date();
    lastEdit24h.setDate(lastEdit24h.getDate() + 1);

    return (ownerInfoLastEditDate == null || lastEdit24h < now);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const {applicationId} = next.params;

    return this.httpService
      .mainApplication$
      .pipe(
        map(mainApplication => {

          if (mainApplication.ownerSigningStatus !== 'COMPLETE' && this.isEditable(mainApplication.ownerInfo.ownerInfoLastEdit)) {
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
