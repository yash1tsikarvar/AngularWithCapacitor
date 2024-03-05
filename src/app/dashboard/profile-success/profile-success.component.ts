import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UiService } from '../../ui/ui.service';
import { Subject } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import { SigningStatus } from '../../shared/definitions/models/signature-completion-status.model';
import {SignVideoComponent} from '../../shared/components/sign-video/sign-video.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'tev-profile-success',
  templateUrl: './profile-success.component.html',
  styleUrls: ['./profile-success.component.scss']
})
export class ProfileSuccessComponent implements OnInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  smallLogo: string;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  mainApplication: ApplicationResponse;

  applicationFee: number = 0;
  rushProcessingPrice: number = 0;
  total: number = 0;
  paymentId: number = 0;
  transactionId: string;
  paymentReceiptUrl: string;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private uiService: UiService,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.listenToThemeValues();
    this.listenToApplicationInfo();
  }

  ngOnInit() {
    // Remove dashboard components and style fullscreen
    this.setDashboardVisible(false);

  }

  ngOnDestroy() {
    this.setDashboardVisible(true);
    this.destroyed$.next();
  }


  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => {
        this.mainApplication = application;
        this.transactionId = application.transactionId

        //if (this.mainApplication.payments && this.mainApplication.payments.length>0)
        //  this.paymentId = this.mainApplication.payments[0].paymentId;

        if (this.mainApplication) {
          this.total = Number(this.mainApplication.amountPaid);

          /*
          if (this.mainApplication.rush)
            this.rushProcessingPrice = Fees.EXPEDITE_FEE;
          else
            this.rushProcessingPrice = 0;
          this.applicationFee  = this.total - this.rushProcessingPrice;*/

          const {signingStatus} = this.mainApplication;
          return (<SigningStatus[]>['UNSIGNED', 'PARTIALLY_SIGNED']).indexOf(signingStatus.signingStatus) > -1
        }

      });
  }




  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }


  setDashboardVisible(visible: boolean) {
    let element = document.getElementsByClassName('dashboard-main__head');
    for (var i = element.length - 1; i >= 0; --i) {
      if (!visible)
        element[i].classList.add('hide');
      else
        element[i].classList.remove('hide');
    }
    let element2 = document.getElementsByTagName('tev-nav-bar');
    for (var i = element2.length - 1; i >= 0; --i) {
      if (!visible)
        element2[i].classList.add('hide');
      else
        element2[i].classList.remove('hide');
    }

    let element3 = document.getElementsByTagName('main');
    for (var i = element3.length - 1; i >= 0; --i) {
      if (!visible)
        element3[i].classList.add('fullscreen');
      else
        element3[i].classList.remove('fullscreen');

      for (var j = element3[i].children.length - 1; j >= 0; --j) {
        if (!visible)
          element3[i].children[j].classList.add('fullscreen');
        else
          element3[i].children[j].classList.remove('fullscreen');

      }
    }

    if (!visible)
      this.renderer.removeClass(document.body, 'dashboard-main');
    else
      this.renderer.addClass(document.body, 'dashboard-main');
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

  goToDashboard() {

    const nextFullPath = `/dashboard/${this.mainApplication.applicationId}`;
    this.router
      .navigate([nextFullPath])
      .catch(console.log);
  }

  showVideoSigning() {
    const nextFullPath1 = `/dashboard/${this.mainApplication.applicationId}/signature`;
    if (this.isSkipped()) {
      const url = this.mainApplication.signingStatus.url; // Use 'url' instead of 'urls'
      this.router.navigate([nextFullPath1], { queryParams: { url } });
      console.log("link=====>>", url);
      return;
    }
    if (!this.authService.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1')) {
      const url = this.mainApplication.signingStatus.url; // Use 'url' instead of 'urls'
      console.log("link=====>>", url);
      this.dialog.open(SignVideoComponent, {
        data: { redirect: this.mainApplication.signingStatus.url },
        disableClose: true,
        height: '100%',
        width: '95%',
        panelClass: 'other-dialog-container'
      }).afterClosed().subscribe(res => {
        localStorage.setItem('video-signature-' + this.mainApplication.applicationId, 'skipped');
        this.router.navigate([nextFullPath1], { queryParams: { url } });
        console.log("link=====>>", url);
      });
    }
}


  isSkipped() {
    if (localStorage.getItem('video-signature-' + this.mainApplication.applicationId) === 'skipped') {
      return true;
    }
    return false;
  }
}
