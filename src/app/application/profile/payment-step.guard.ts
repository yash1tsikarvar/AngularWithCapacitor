import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, combineLatest} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {FeesAndDocsRequest} from '../../shared/definitions/requests/fees-and-docs.request';
import {SetupRequest} from '../../shared/definitions/requests/setup.request';
import {map, switchMap, tap} from 'rxjs/operators';
import {ProfileFormService} from './profile-form.service';
import {ProfileForm} from '../../shared/definitions/forms/profile-form/profile-form.interface';
import {ProfileFormFactoryService} from './profile-form-factory.service';
import {UiService} from '../../ui/ui.service';

@Injectable()
export class PaymentStepGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    private profileFormFactoryService: ProfileFormFactoryService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    this.uiService.showInfo({
      title: 'Please Wait',
      message: 'Getting Application Fees',
      keepOpen: true,
      removeCurrent: true,
    });

    /**
     * We have to make a new request to get the fees with the information provided on the forms
     */
    return this.profileFormService
      .formValues$
      .pipe(
        switchMap((formValues: ProfileForm) => {
          const {propertyInfo, applicationParams, mainApplicationId, coApplicantType: applicantType} = this.profileFormService;
          const {applicationType, coApplicantType} = applicationParams;

          const feesRequest: FeesAndDocsRequest = this.profileFormFactoryService
            .createFeesAndDocsRequest(formValues, propertyInfo, applicationType, coApplicantType);

          const setupRequest: SetupRequest = this.profileFormFactoryService
            .createSetupRequest(formValues, propertyInfo, applicationType, coApplicantType);

          if (mainApplicationId) {
            feesRequest.mainApplicationId = mainApplicationId;
            setupRequest.mainApplicationId = mainApplicationId;
          }

          if (applicantType) {
            feesRequest.relationship = applicantType;
            setupRequest.relationship = applicantType;
          }

          const feesAndDocs = this.httpService
            .getFeesAndDocUploadRequirements(feesRequest);

          const setup = this.httpService
            .getApplicationSetupData(setupRequest);

          return combineLatest([feesAndDocs, setup]);
        }),
        map(([fees, setup]) => {
          return !!fees && !! setup;
        }),
        tap(infoExists => {
          if (!infoExists) {
            this.router
              .navigate(['/community'])
              .catch(console.log);

            this.uiService.showError({
              message: 'Invalid Information Provided',
              removeCurrent: true,
            })

          } else {
            this.uiService.clearCurrentToastr();
          }
        })
      );
  }
}
