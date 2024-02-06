import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, combineLatest, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {FeesAndDocsRequest} from '../shared/definitions/requests/fees-and-docs.request';
import {PropertyInfoResponse} from '../shared/definitions/responses/property-info.response';
import {SetupRequest} from '../shared/definitions/requests/setup.request';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {UiService} from '../ui/ui.service';
import {CoApplicantType} from '../shared/definitions/types/co-applicant.type';

@Injectable()
export class FeesGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {}

  /**
   * The activation of this path depends on whether or not the "Fees and Docs"
   * and "Setup Request" for the given property is available.
   *
   * At this point the PropertyInfo must exists as it was verified before
   * by the PropertySummaryGuard
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean>}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const { type, coApplicantType } = next.params;

    this.uiService.showInfo({
      title: 'Please Wait',
      message: 'Getting Property Fees',
      keepOpen: true
    });

    return this.httpService
      .propertyInfo$
      .pipe(
        switchMap((info: PropertyInfoResponse) => {

          const hasCoApplicant = this.hasCoApplicant(coApplicantType);
          const cacheKey = hasCoApplicant ?  `${info.propertyId}-${type}-${coApplicantType}` : `${info.propertyId}-${type}`;
          const feesRequest: FeesAndDocsRequest = {
            propertyId: info.propertyId,
            applicationType: type,
            numberOfApplicants: hasCoApplicant ? 2 : 1
          };

          const setupRequest: SetupRequest = {
            propertyId: info.propertyId,
            applicationSubType: type,
            numberOfApplicants: hasCoApplicant ? 2 : 1,
            numberOfPets: null
          };

          if (hasCoApplicant) {
            feesRequest.relationship = coApplicantType;
            setupRequest.relationship = coApplicantType;
          }

          const feesAndDocs = this.httpService
            .getFeesAndDocUploadRequirements(feesRequest, `fees-${cacheKey}`);

          const setup = this.httpService
            .getApplicationSetupData(setupRequest, `setup-${cacheKey}`);

          return combineLatest([feesAndDocs, setup]);
        }),
        catchError(() => {
          return of([null, null]);
        }),
        map(([fees, setup]) => {
          return !!fees && !! setup;
        }),
        tap(infoExists => {
          if (!infoExists) {
            this.router
              .navigate(['/application-list'])
              .then(() => {
                this.uiService.showError({
                  message: 'Information not found about the property',
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
