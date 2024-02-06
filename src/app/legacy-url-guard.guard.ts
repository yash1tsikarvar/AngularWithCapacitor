import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class LegacyUrlGuardGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(next);

    const {queryParams} = next;

    if (queryParams.appId) {
      this.router
        .navigate(['/dashboard', queryParams.appId])
        .catch(console.log);
    } else {
      this.router
        .navigate(['/application-list'])
        .catch(console.log);
    }

    return false;
  }
}
