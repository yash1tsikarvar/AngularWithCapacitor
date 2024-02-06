import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, combineLatest, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ApplicationRequest} from '../shared/definitions/requests/application.request';
import {HttpErrorResponse} from '@angular/common/http';
import {UiService} from '../ui/ui.service';
import {CoApplicantType} from '../shared/definitions/types/co-applicant.type';
import {SetupRequest} from '../shared/definitions/requests/setup.request';

@Injectable()
export class ResumeApplicationGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const {pendingApplicationId} = next.params;

    this.uiService.showInfo({
      title: 'Please Wait',
      message: 'Getting Application Information',
      keepOpen: true,
    });

    return this.httpService
      .resumeApplication(pendingApplicationId)
      .pipe(
        switchMap((applicationRequest: ApplicationRequest) => {

          const {propertyCode, applicationSubType, coApplicantType, propertyId} = applicationRequest;
          const hasCoApplicant = this.hasCoApplicant(coApplicantType);
          const cacheKey = hasCoApplicant
            ? `${propertyId}-${applicationSubType}-${coApplicantType}`
            : `${propertyId}-${applicationSubType}`;

          const setupRequest: SetupRequest = {
            propertyId,
            applicationSubType,
            numberOfApplicants: hasCoApplicant ? 2 : 1,
            numberOfPets: null
          };

          if (applicationRequest.mainApplicationId) {
            setupRequest.mainApplicationId = applicationRequest.mainApplicationId;
          }

          if (applicationRequest.coApplicantType) {
            setupRequest.relationship = applicationRequest.coApplicantType;
          }

          if (hasCoApplicant) {
            setupRequest.relationship = coApplicantType;
          }

          const setup = this.httpService
            .getApplicationSetupData(setupRequest, `setup-${cacheKey}`);

          const propertyInfo = this.httpService
            .getPropertyInfo(String(propertyCode), applicationSubType, false);

          return combineLatest([setup, propertyInfo]);
        }),
        catchError((httpError: HttpErrorResponse) => {
          if (httpError.status === 403) {
            throw httpError;
          } else {
            return of(false);
          }
        }),
   
        map((propertyInfo) => {
          return !!propertyInfo;
        }),
        tap((canGo) => {
          if (!canGo) {

            this.router
              .navigate(['/application-list'])
              .catch(() => {
                this.uiService.showError({
                  message: 'Invalid Property',
                  removeCurrent: true
                })
              });

          } else {
            this.uiService.clearCurrentToastr();
          }
        })
      );
  }

  private hasCoApplicant(coApplicantType: CoApplicantType): boolean {
    return !!coApplicantType && coApplicantType !== 'W';
  }
}
