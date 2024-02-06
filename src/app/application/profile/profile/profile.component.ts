import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileFormService } from '../profile-form.service';
import { AuthService } from '../../../core/services/auth.service';
import { Location } from '@angular/common';
import { ProfileFormControlNames } from '../../../shared/definitions/forms/profile-form/profile-form.interface';
import { ProfileAccordionButton } from '../../../shared/definitions/viewparams/profile-accordion-button.interface';
import { ApplicationResponse } from '../../../shared/definitions/responses/application.response';
import { nodeListToArray } from '../../../shared/utils/dom';
import { ApplicationSubType } from '../../../shared/definitions/types/application-sub-type';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { UiService } from '../../../ui/ui.service';

@Component({
  selector: 'tev-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  buildingName = '';
  currentStep: number;
  newApplication = true;
  formControlNames: string[];

  profileSteps: ProfileAccordionButton[] = [];
  type: ApplicationSubType;

  headerButtons: ProfileAccordionButton[] = [];
  footerButtons: ProfileAccordionButton[] = [];

  smallLogo: string;
  private destroyed$: Subject<any> = new Subject<any>();

  @ViewChild('profileContent', {static: false}) profileContent: ElementRef;

  constructor(
    private profileFormService: ProfileFormService,
    private authService: AuthService,
    private uiService: UiService,
    private router: Router,
    private location: Location,
  ) {

    this.listenToPropertyInformation();
    this.listenToProfileSteps();

    this.listenToStepNumber();
    this.listenToValidationResults();
    this.listenToApplicationParams();

    this.listenToThemeValues();
    this.listenToNewFormSetup();
  }

  ngOnInit() {}

  listenToNewFormSetup() {
    this.profileFormService
      .newApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(newApplication => this.newApplication = newApplication);

    this.profileFormService
      .profileSteps$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(steps => {
        this.formControlNames = steps.map(step => step.controlName);
      });
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  listenToValidationResults() {
    this.profileFormService
      .validationFinished$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        const invalidElementsList = (<HTMLElement>this.profileContent.nativeElement).getElementsByClassName('ng-invalid');

        nodeListToArray(invalidElementsList)
          .some((element: HTMLElement) => {
            return ['FORM', 'MAT-FORM-FIELD'].indexOf(element.tagName.toLocaleUpperCase()) === -1 ? (() => {
              element.focus();
              return true;
            })() : false;
          });
      });
  }

  listenToApplicationParams() {
    this.profileFormService
      .applicationParams$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(params => {
        const {applicationType} = params;
        this.type = applicationType;
      });
  }

  /**
   * Listen for the property information.
   *
   * The other one if we are resuming an application
   */
  listenToPropertyInformation() {

    this.profileFormService
      .propertyInfo$
      .pipe(
        filter(info => !!info),
        takeUntil(this.destroyed$),
      )
      .subscribe(info => {
        this.buildingName = info.buildingName;
      });
  }

  listenToProfileSteps() {
    this.profileFormService
      .profileSteps$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(steps => {
        this.profileSteps = steps;
        // this.profileSteps = steps.filter(step => step.controlName !== 'addressDetails');
      });
  }

  listenToStepNumber() {
    this.profileFormService
      .currentStep$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((step) => {
        // if(step === 1){
        //   this.currentStep = 1;
        //   this.setupHeaderButtons();

        // }
        // else {
        //   this.currentStep = step -1;
        //   this.setupHeaderButtons();
        // }
        this.currentStep = step;
        this.setupHeaderButtons();
      });
  }

  setupHeaderButtons() {
    this.headerButtons = this.profileSteps.slice(0, this.currentStep)
      .map((button, index) => ({...button, collapsed: this.currentStep !== index + 1}));

    this.footerButtons = this.profileSteps.slice(this.currentStep);
  }

  logOut(event: MouseEvent) {
    event.preventDefault();
    this.authService
      .logOut()
      .subscribe(() => {
        this.router
          .navigate(['/'])
          .catch(console.log);
      });
  }

  /**
   * Verify from the first to the previous step given if there is information saved.
   *
   * @param {number} step
   * @returns {boolean}
   */
  canGoToStep(step: number): boolean {

    return this.formControlNames.slice(0, step - 1)
      .every((controlName: ProfileFormControlNames) => {
        if(controlName !== 'addressDetails'){
          return this.profileFormService.dataExistsOnFormControl(controlName);
        }
      });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
