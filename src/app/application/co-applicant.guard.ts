import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CoApplicantType} from '../shared/definitions/types/co-applicant.type';

@Injectable()
export class CoApplicantGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}

  /**
   * This path can be activated if the "coApplicantType" param value
   * is valid.
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const coApplicantType: CoApplicantType = next.params.coApplicantType;
    const validType = ['A', 'S', 'O', 'W'].indexOf(coApplicantType) >= 0;

    if (!validType) {
      this.router
        .navigate(['/'])
        .catch(console.log);
      return false;
    }

    return true;
  }
}
