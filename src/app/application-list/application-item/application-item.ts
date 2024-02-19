import {Component, Input, OnInit} from '@angular/core';
import {ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import {Router} from '@angular/router';
import { UiService } from '../../ui/ui.service';

@Component({
  selector: 'tev-application-item',
  templateUrl: './application-item.html',
  styleUrls: ['./application-item.scss']
})
export class ApplicationItemComponent implements OnInit {

  _application: ApplicationListItem;
  @Input()
  set application(application: ApplicationListItem) {
    this._application = application;
    this.setValues();
  }

  get application(): ApplicationListItem {
    return this._application;
  }

  _notificationsShow: boolean;
  @Input()
  set notificationsShow(notificationsShow: boolean) {
    this._notificationsShow = notificationsShow;
    this.setValues();
  }

  get notificationsShow(): boolean {
    return this._notificationsShow;
  }

  nextUrl: string;
  nextUrlText: string;
  styleStatus: string;
  statusName: string;
  baseUrl: string;
  applicantFullName: string;

  constructor(
    private router: Router,
    private uiService: UiService,
  ) { }

  ngOnInit() {
    this.getStatus(this.application)
    this.baseUrl = window.location.origin
  }

  setValues() {
    const {status, pendingApplicationId, applicationId, signingStatus} = this.application;

    this.applicantFullName = this.application.applicantFullName

    if (status === 'P') {
      this.nextUrl = `/application/resume/${pendingApplicationId}`;
      this.nextUrlText = 'Resume';
    } else {
      this.nextUrl = `/dashboard/${applicationId}`;
      this.nextUrlText = 'Dashboard';
      }

  }

  // showInfoSigningProccess() {
  //   const {status, signingStatus} = this.application;

  //   if (status === 'S' && signingStatus.url) {
  //   this.uiService.showInfo({
  //     message: 'Please wait while electronic signatures are loading!',
  //     keepOpen: true
  //   });
  //   }
  // }

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

  getStatus(application: ApplicationListItem){

    if (this.isAbandoned(application)){
      this.styleStatus = 'status--abandoned'
      this.statusName = 'Abandoned'
    }

    if (this.isPending(application)){
      this.styleStatus = 'status--pending'
      this.statusName = 'Pending'
    }

    if (this.isInProgress(application)){
      this.styleStatus = 'status--progress'
      this.statusName = 'In Progress'
    }

    if (this.isClosed(application)){
      this.styleStatus = 'status--closed'
      this.statusName = 'Closed'
    }

  }


}
