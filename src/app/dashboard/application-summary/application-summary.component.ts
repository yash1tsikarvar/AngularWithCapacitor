import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import { DecodeTokenModel } from '../../shared/definitions/models/decode-token.model';
import { Subject } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { AuthService } from '../../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { SigningStatus } from '../../shared/definitions/models/signature-completion-status.model';

@Component({
  selector: 'tev-application-summary',
  templateUrl: './application-summary.component.html',
  styleUrls: ['./application-summary.component.scss']
})
export class ApplicationSummaryComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;

  loggedInUser: DecodeTokenModel;

  destroyed$: Subject<boolean> = new Subject<boolean>();

  selectedTab: number = 0;

  reviewsFacesWidget = (window as any).reviewsFacesWidget;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
  ) {
    this.listenToApplicationInfo();
  }

  ngOnInit() {

    this.loggedInUser = this.authService.getDecodedToken();

    if (this.mainApplication.status === 'C' && !this.mainApplication.abandoned) {
      if (this.reviewsFacesWidget) {
        this.reviewsFacesWidget.load({
          jwt: this.authService.getUserIdToken(),
          label: 'How did we do?',
          type: 'TENANTEV',
          step: 'CLOSED_APPLICATION',
          position: 'center-overlay',
          showtime: 10,
          showtimeaftercompleted: 1,
          data: `Application ID: ${this.mainApplication.applicationId} Rol: ${this.loggedInUser.auth}`,
          dataid: this.mainApplication.applicationId,
          google: true,
          feedback: true,
          localstorage: true,
          lskey: this.loggedInUser.auth,
        });
      }
    }

  }

  changeTab(index: number, el: HTMLElement) {
    this.selectedTab = index;
    el.scrollIntoView();
  }

  showSigning(): boolean {

    if (this.mainApplication) {
      const {signingStatus} = this.mainApplication;
      return (<SigningStatus[]>['UNSIGNED', 'PARTIALLY_SIGNED']).indexOf(signingStatus.signingStatus) > -1
    }

    return false;
  }

  showPendingDocumentsUpload(): boolean {

    if (this.mainApplication && this.mainApplication.pendingDocumentTasks.length) {

      return this.mainApplication.pendingDocumentTasks
        .some(task => task.status === 'P');

    }
    return false;
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => this.mainApplication = application);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);

    if (this.reviewsFacesWidget) {
      this.reviewsFacesWidget.close();
    }
  }

  doNothing(event: MouseEvent) {
    event.preventDefault();
  }

}

