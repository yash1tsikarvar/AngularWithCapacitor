
import {tap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';



@Injectable()
export class UserLoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  /**
   * Only users logged can access this area.
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean>}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.authService
      .authStatus$.pipe(
      map(token => !!token),
      tap(canContinue => {
        if (!canContinue) {
          this.router.navigate(['/'])
            .catch(console.log);
        }
      }),);
  }
}
