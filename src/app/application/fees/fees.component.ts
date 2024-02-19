import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {FeesAndDocsResponse} from '../../shared/definitions/responses/fees-and-docs.response';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationSubType} from '../../shared/definitions/types/application-sub-type';
import {PropertyInfoResponse} from '../../shared/definitions/responses/property-info.response';
import {CoApplicantType} from '../../shared/definitions/types/co-applicant.type';
import {AuthService} from '../../core/services/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UiService} from '../../ui/ui.service';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationRequest } from '../../shared/definitions/requests/application.request';
//import {FeesDialogComponent} from './fees-dialog/fees-dialog.component';

@Component({
  selector: 'tev-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent implements OnInit, OnDestroy {

  feesAndDocs: FeesAndDocsResponse;
  propertyInfo: PropertyInfoResponse;
  pendingApplicationId: string;
  code: string;
  type: ApplicationSubType;
  coApplicantType: CoApplicantType;
  disableButton: boolean= true;
  highLight: boolean = false;

  newProfilePath: string[] = [];
  backProfilePath: string[] = [];

  applicationRequest: ApplicationRequest;

  currentYear:number;

  smallLogo: string;
  private destroyed$: Subject<any> = new Subject<any>();

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    public dialog: MatDialog,
  ) {

    this.listenToFeesAndDocs();

    this.listenToPropertyInformation();
    this.listenToThemeValues();
    this.listenToRouteParams();

    // this.listenDataApplication();
  }

  ngOnInit() {
    this.currentYear=new Date().getFullYear();
    // if (localStorage.getItem('agreementPropertyRequirements') === 'true') {
    //   this.uiService.showInfo({
    //     message: 'Before you continue please read and agree with the application fees and property requirements.',
    //     keepOpen: true,
    //   });
    //   localStorage.removeItem('agreementPropertyRequirements')
    // }
  }

  listenToFeesAndDocs() {
    this.httpService
      .feesAndDocUploadRequirements$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(info => {
        this.feesAndDocs = info;
      });
  }

  listenToPropertyInformation() {
    this.httpService
      .propertyInfo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(propertyInfo => {
        this.propertyInfo = propertyInfo;
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

  listenToRouteParams() {
    this.activeRoute
      .params
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(params => {
        const {
          code, type,
          coApplicantType,
          // pendingApplicationId
        } = params;

        this.code = code;
        this.type = type;
        this.coApplicantType = coApplicantType || '';
        // this.pendingApplicationId = pendingApplicationId;


        this.newProfilePath = ['/application/new/', code, type, 'profile'];
        if (coApplicantType) {
          this.newProfilePath.push(coApplicantType);
        }
      });
  }

  // listenDataApplication(){
  //   this.httpService
  //   .resumeApplication(this.pendingApplicationId)
  //   .subscribe(
  //     (applicationRequest: ApplicationRequest) => {
  //     this.applicationRequest = applicationRequest
  //     this.applicationRequest.agreementPropertyRequirements = Date.now()
  //   })
  // }

  onChange() {
    this.disableButton = !this.disableButton;
    this.highLight = false;
  }

  goToProfilePath(): void {

    if(!this.disableButton){
      // this.httpService.savePartialApplication(this.applicationRequest)
      // .subscribe(applicationRequest => {
      // });
      this.router.navigate(this.newProfilePath);
    } else {
      this.highLight = true;
      this.uiService.showError({
        message: 'Please click and agree with the application fee and property requirements before you can continue.',
      });
    }
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

  goBack(event: MouseEvent) {
    event.preventDefault();
    this.location.back();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
