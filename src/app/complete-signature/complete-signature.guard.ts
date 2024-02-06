import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../core/services/http.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CompleteSignatureGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const {applicationId} = next.params;

    return this.httpService
      .completeSignature(applicationId)
      .pipe(
        map(() => false),
        tap(() => {

          this.router
            .navigate([`/dashboard/${applicationId}`])
            .catch(console.log);
        })
      );
  }
}
