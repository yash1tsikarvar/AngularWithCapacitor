import { Component, OnInit } from '@angular/core';
import {ApplicationListFilterResponse, ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import { HttpService } from '../../core/services/http.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { DecodeTokenModel } from '../../shared/definitions/models/decode-token.model';
import sweetAlert from 'sweetalert2';
import { NotificationApplicationListItem, NotificationApplicationRequest } from '../../shared/definitions/requests/notification-application.request';

@Component({
  selector: 'tev-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  applications: ApplicationListItem[] = [];
  sourceApplications: ApplicationListItem[] = [];
  loggedInUser: DecodeTokenModel;
  isApplicant: boolean;
  notificationsShow: boolean;
  notificationsChecked: boolean;
  statusList: string[] = [];
  toggleFilter: boolean;
  queryString: string ='';
  filterString: string;
  page: number;
  currentPage = 1;
  nrOfElements: number;
  sizePage = 10;
  placeHolder: string;
  notFoundText: string;

  constructor(
    private httpService: HttpService,
    public authService: AuthService,
    private router: Router,
  ) {
    this.notFoundText = "";
    if (!this.authService.isCallCenterL1()) {
      this.getApplications();
    }
  }

  getApplications() {
    this.httpService
      .getApplicationList(true)
      .subscribe(applicationsResponse => {
        if (applicationsResponse) {
          this.applications = applicationsResponse.applications;
          this.filter();
        }
      });
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getDecodedToken();
    this.checkIsApplicant(this.loggedInUser.auth);
    this.placeHolder = this.authService.isCallCenterL1() ?
      'Search by property name, applicant name or application ID' :
      'Search by property name, applicant name, address or application ID';
  }

  checkIsApplicant(roles) {
    this.isApplicant = roles.includes('ROLE_APPLICANT');
  }

  isAbandoned(application: ApplicationListItem): boolean {
    return application.abandoned;
  }

  isPending(application: ApplicationListItem): boolean {
    return ['P'].indexOf(application.status) > -1 || application.signatureMissing;
  }

  isInProgress(application: ApplicationListItem): boolean {
    return ['W', 'S'].indexOf(application.status) > -1 && !application.signatureMissing && !application.abandoned;
  }

  isClosed(application: ApplicationListItem): boolean {
    return ['C', 'R', 'X'].indexOf(application.status) > -1 && !application.abandoned;
  }

  showSweetAlert() {
    sweetAlert({
      customClass: 'confirm-remove-expedite-modal',
      type: 'info',
      // tslint:disable-next-line:max-line-length
      html: 'Our records indicate that the email listed in this account has been registered as a realtor account. For this reason you are not able to begin an application. Please create an account with a different email address in order to begin an application',
      showCloseButton: true,
      confirmButtonText: 'Close',
      confirmButtonClass: 'tev-btn tev-btn--block tev-btn--large',
      buttonsStyling: false,
      animation: false
    });
  }

  startApp() {
    this.router
      .navigate(['/community/enter-code'])
      .catch(console.log);
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

  toggle() {
    this.notificationsShow = !this.notificationsShow;
  }

  changeNotiValue(value: any) {
    this.applications.forEach(x => {
      x.notificationChecked = value
    });
  }

  updateNotification() {
    const request = {} as NotificationApplicationRequest;
    this.applications.forEach((x, i) => {
      if (i == 0) {
        request.notifications = [{
          applicationId: !!x.applicationId ? x.applicationId : x.pendingApplicationId,
          notify: x.notificationChecked
        }] as NotificationApplicationListItem[]
      }
      else {
        request.notifications.push({
          applicationId: !!x.applicationId ? x.applicationId : x.pendingApplicationId,
          notify: x.notificationChecked
        });
      }
    });

    console.log(request);
  }

  onPercentChange(page: number) {
    console.log('here'+page);
    this.page = page;
  }

  filter() {
    if (!this.authService.isCallCenterL1()) {
      let status: string[] = [];
      this.applications.forEach(x => {
        status.push(x.status);
      });

      this.statusList = [...new Set(status)];
    }
  }

  getApplicationsFilter(searchValue: string, page: number) {
    this.httpService
    .getApplicationsByFilter(searchValue, page, this.sizePage)
    .subscribe(applicationListFilterResponse => {
      if (applicationListFilterResponse) {
        this.applications = applicationListFilterResponse.pageList;
        this.sourceApplications = applicationListFilterResponse.source;
        this.nrOfElements = applicationListFilterResponse.nrOfElements;
        if (this.nrOfElements === 0) {
          this.notFoundText = 'No Matches Found';
        }
      } else {
        this.notFoundText = 'No Matches Found';
      }
    });
  }

  onEnterDown(event: KeyboardEvent) {
    if (this.queryString) {
      this.filterString = this.authService.isCallCenterL1() ? '' : this.queryString;
      if (this.authService.isCallCenterL1()) {
        const searchValue = this.queryString;
        this.getApplicationsFilter(searchValue, 0);
      }
    }
  }

  onChangeSearch($event: Event) {
    if (!this.authService.isCallCenterL1()) {
      this.filterString = this.queryString;
    }
  }

  loadPage(page: number) {
    page = page - 1;
    if (this.page !== page && 0 <= page) {
      this.getApplicationsFilter(this.queryString, page);
    }
  }
}


