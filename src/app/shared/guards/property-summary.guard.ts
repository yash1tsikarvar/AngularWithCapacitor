import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {EnterCodeForm} from '../definitions/forms/enter-code/enter-code-form-interface';
import {catchError, map, tap} from 'rxjs/operators';
import {UiService} from '../../ui/ui.service';

@Injectable()
export class PropertySummaryGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {}

  /**
   * The activation of this path depends on the result of the property information.
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean>}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const {code, type} = <EnterCodeForm>next.params;

    return this.httpService
      .getPropertyInfo(code, type)
      .pipe(
        map(propertyInfo => !!propertyInfo),
        tap(propertyExists => {
          if (!propertyExists) {

            this.router
              .navigate(['/community'])
              .catch(() => {
                this.uiService.showError({
                  message: 'Property Not Found'
                });
              });
          } else {
            this.uiService.clearCurrentToastr();
          }
        }),
        catchError(() => {
          this.router
            .navigate(['/community'])
            .catch(console.log);

          return of(false);
        })
      );
  }
}
