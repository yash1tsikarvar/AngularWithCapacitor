import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../core/services/http.service';
import { map, tap } from 'rxjs/operators';
import { ApplicationListResponse } from '../shared/definitions/responses/application-list.response';
import { UiService } from '../ui/ui.service';

import swal, {SweetAlertResult} from 'sweetalert2';

@Injectable()
export class ApplicationListGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) { }

  noAppsPopup() {
    let htmlText = `<p>You don't have any applications. To start a new one, please click the button below:</p>`;
    swal(
      {
        title: 'No applications!',
        html: htmlText,
        type: 'warning',
        customClass: 'notify-optional-file',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Start new application',
        allowOutsideClick: false,
        focusConfirm: false,
        animation: false
      })
      .then(() => {
        this.router
          .navigate(['/community/enter-code'])
      });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let role = "";
    try {
      role = JSON.parse(localStorage.getItem('decodedToken')).auth;
    } catch (e) {
      console.log(e);
    }
    this.uiService.showInfo({
      title: 'Please Wait',
      message: role.includes('ROLE_CALL_CENTER_L1') ?
        'Getting applications' :
        'Getting your applications',
      keepOpen: false,
    });

    if (role.includes('ROLE_CALL_CENTER_L1')) {
      if (localStorage.getItem('callCenterL1Verified') === 'true') {
        return true;
      }
      this.router
        .navigate(['/verification-code'])
        .catch(console.log);
      return false;
    }

    return this.httpService
      .getApplicationList(false)
      .pipe(
        map((response: ApplicationListResponse) => (response ? response.applications.length > 0 : false)),
        tap(hasApplications => {
          if (!hasApplications) {
            this.noAppsPopup();
          } else {
            if (this.router.url === '/') {
              this.router
                .navigate(['/community/home'])
                .catch(console.log);
            }
          }
        })
      );
  }
}
