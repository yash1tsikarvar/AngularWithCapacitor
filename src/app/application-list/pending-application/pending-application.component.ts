import {Component, Input, OnInit} from '@angular/core';
import {ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import {Router} from '@angular/router';

@Component({
  selector: 'tev-pending-application',
  templateUrl: './pending-application.component.html',
  styleUrls: ['./pending-application.component.scss']
})
export class PendingApplicationComponent implements OnInit {

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

  nextUrl: string[];
  nextUrlText: string;
  styleStatus: string ='pending ';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.getStatus(this.application)
  }

  gotoApplication(url) {
    this.router.navigate(url);
  }

  setValues() {
    const {status, signatureMissing} = this.application;

    if (status === 'P') {
      this.nextUrl = ['/application/resume', this.application.pendingApplicationId.toString(10)];
      this.nextUrlText = 'Resume';
    } else {

      if (signatureMissing) {
        this.nextUrl = ['/agreement', this.application.applicationId.toString(10)];
        this.nextUrlText = 'Sign Agreement';
      }

    }

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

  getStatus(application: ApplicationListItem){

    if (this.isAbandoned(application)){
      this.styleStatus = 'status--abandoned'
    }

    if (this.isPending(application)){
      this.styleStatus = 'status--pending'
    }

    if (this.isInProgress(application)){
      this.styleStatus = 'status--progress'
    }

    if (this.isClosed(application)){
      this.styleStatus = 'status--closed'
    }

  }

}
