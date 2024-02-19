
import {tap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';



@Injectable()
export class UserNotLoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}


  /**
   * If there is token saved the user will be redirected to a logged access area.
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
      map(token => !token || this.authService.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1')),
      tap(canContinue => {
        if (!canContinue) {
          this.router
            .navigate(['/application-list'])
            .catch(console.log);
        }
      }),);
  }
}
