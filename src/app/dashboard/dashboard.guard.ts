import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {UiService} from '../ui/ui.service';
import {ApplicationResponse} from '../shared/definitions/responses/application.response';
import {AuthService} from '../core/services/auth.service';

@Injectable()
export class DashboardGuard implements CanActivate {


  private application: ApplicationResponse;

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    // this.authService.redirectUrl = state.url;
    const {applicationId} = next.params;

    if (this.authService.isCallCenterL1() && localStorage.getItem('callCenterL1Verified') !== 'true') {
      this.router
        .navigate(['/verification-code'])
        .catch(console.log);
    }

    this.uiService
      .showInfo({
        title: 'Please Wait',
        message: 'Getting Application Information',
      });

    const info = localStorage.getItem('end-' + applicationId);
    const exit = JSON.parse(info);
    if (exit) {
      localStorage.setItem('end-' + applicationId, String(false));
      window.location.reload();
    } else {
      const result = this.httpService
        .getApplicationById(applicationId)
        .pipe(
          map(response => {
            this.application = response;
            return response.status !== 'P' && !response.signatureMissing;
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(false);
          }),
          tap(applicationExists => {
            if (!applicationExists) {

              if (this.application && this.application.signatureMissing) {
                this.router
                  .navigate(['/agreement', applicationId])
                  .catch(console.log);
              } else {
                this.router
                  .navigate(['/application-list'])
                  .catch(console.log);
              }

            }
          })
        );

      return result;
    }
  }

}
