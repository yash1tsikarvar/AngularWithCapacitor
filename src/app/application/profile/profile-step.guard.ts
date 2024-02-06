import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfileFormService} from './profile-form.service';
import {ProfileFormControlNames} from '../../shared/definitions/forms/profile-form/profile-form.interface';
import {RemarksInfo} from '../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import {PersonalInfo} from '../../shared/definitions/forms/profile-form/personal-info/personal-info.interface';

import {ResumeApplicationGuard} from '../resume-application.guard';
import {UiService} from '../../ui/ui.service';
import {map, take} from 'rxjs/operators';
import {ProfileAccordionButton} from '../../shared/definitions/viewparams/profile-accordion-button.interface';

@Injectable()
export class ProfileStepGuard implements CanActivateChild {

  stepsNames: ProfileFormControlNames[] = [];

  constructor(
    private profileFormService: ProfileFormService,
    private uiService: UiService,
  ) {}

  /**
   * To activate the child routes the user must have filled
   * the information in the previous steps.
   *
   * @param {ActivatedRouteSnapshot} childRoute
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | boolean}
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    /**
     * There are 2 ways to get to this path, by trying to create a new application and get here in the first step
     *
     * The other way by trying to resume an existing application.
     *
     * We will assume that if the pendingApplicationId param exists the user is trying to resume an application.
     *
     * By getting here with the pendingApplicationId is implied the an application exists with that ID as a the {@link ResumeApplicationGuard} is checking that.
     */

    const {code, type, coApplicantType, pendingApplicationId} = childRoute.params;
    const {stepName} = childRoute.data;

    // // let remarksOk = true;

    // if (this.profileFormService.getData('personalInfo') !== null){

    //   // const personalInfo: PersonalInfo = this.profileFormService.getData('personalInfo');

    //   // const remarksInfo: RemarksInfo = personalInfo.remarksInfo;

    //   // if (remarksInfo.arrests){
    //   //   const {arrests, co_applicant_arrests} = remarksInfo;
    //   //   if (arrests !== undefined){
    //   //     arrests.forEach(arrest => {
    //   //       if (
    //   //         arrest === null
    //   //         || remarksInfo.applicant_explanation === ''
    //   //         ) {
    //   //         remarksOk = false;
    //   //       }
    //   //     });
    //   //   }
    //   //   if(co_applicant_arrests !== undefined){
    //   //     co_applicant_arrests.forEach(arrest => {
    //   //       if (
    //   //         arrest === null
    //   //         || remarksInfo.co_applicant_explanation === ''
    //   //         ) {
    //   //         remarksOk = false;
    //   //         }
    //   //     });
    //   //   }
    //   // }
    // }

    // if (remarksOk){
      if (pendingApplicationId) {
        return this.verifyNextStep(stepName);
      }

      if (stepName === 'addressDetails') {
        this.profileFormService.resetInformation();
        this.profileFormService.setCurrentStep(1);
        this.profileFormService.setApplicationParams(code, type, coApplicantType);
        return true;
      }
    // }

    this.uiService.showError({
      message: 'Please enter the missing information before continuing'
    });

    return false;
  }

  verifyNextStep(stepName: ProfileFormControlNames): Observable<boolean> {
    return this.profileFormService
      .profileSteps$
      .pipe(
        take(1),
        map((steps: ProfileAccordionButton[]) => {
          this.stepsNames = steps.map(step => step.controlName);
          const step = this.stepsNames.indexOf(stepName) + 1;

          const canGoToStep = step > 1 ? this.canGoToStep(step) : true;

          if (canGoToStep) {
            this.profileFormService.setCurrentStep(step);
          } else {
            this.uiService.showError({
              message: 'Please fill the information before continuing'
            });
          }

          return canGoToStep;

        })
      );
  }


  /**
   * Verify from the first to the previous step given if there is information saved.
   *
   * @param {number} step
   * @returns {boolean}
   */
  canGoToStep(step: number): boolean {

    return this.stepsNames.slice(0, step - 1)
      .every((controlName: ProfileFormControlNames) => {

        if (controlName=='reviewInfo'){
          const idx = this.stepsNames.indexOf(controlName);
          controlName = this.stepsNames[idx-1];
        }

        return this.profileFormService.getData(controlName);

      });
  }
}
