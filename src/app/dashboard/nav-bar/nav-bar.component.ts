import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import { HttpService } from '../../core/services/http.service';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { Subject ,  of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConfirmDataInterface } from '../../shared/definitions/viewparams/confirm-data.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { UiService } from '../../ui/ui.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'tev-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse; 
  menuCollapsed = true;
  destroyed$: Subject<any> = new Subject<any>();
  smallLogo: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private httpService: HttpService,
    private uiService: UiService,
    private currencyPipe: CurrencyPipe,
  ) {
    this.listenToApplicationInfo();
    this.listenToThemeValues();

  }

  disputeUrl = environment.reportDisputeUrl;

  ngOnInit() {
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  confirmCancelApplication(event: MouseEvent) {
    event.preventDefault();
    const confirmData: ConfirmDataInterface = {
      title: 'Are you sure you want to cancel this application? This cannot be undone',
      message: 'Please remember a refund can not be processed as services were already rendered.'
    };

    this.uiService
      .confirmAction(confirmData)
      .subscribe(confirm => {
        if (confirm) {
          this.cancelApplication(false);
        }
      });
  }

  confirmCancelAndRefundApplication(event: MouseEvent) {
    event.preventDefault();
    const confirmData: ConfirmDataInterface = {
      title: 'THIS CANNOT BE UNDONE',
      message: 'I understand that the refund will be the total amount paid minus the 10% convenience fee?',
      confirmButtonText: `Refund ${this.currencyPipe.transform(this.mainApplication.refundAvailable)}`,
    };

    this.uiService
      .confirmAction(confirmData)
      .subscribe(confirm => {
        if (confirm) {
          this.router.navigate(['dashboard', this.mainApplication.applicationId, 'refund-application'])
            .catch(console.log);
          this.menuCollapsed = true;
        }
      });
  }

  cancelApplication(redirect: boolean) {
    this.uiService
      .showInfo({
        title: 'Processing your request',
        message: 'Canceling the Application',
        keepOpen: true
      });

    this.httpService
      .cancelApplicationById(this.mainApplication.applicationId.toString(10))
      .pipe(
        map(() => true),
        catchError((httpError: HttpErrorResponse) => {
          return of(false);
        })
      )
      .subscribe(couldCancel => {
        if (couldCancel) {
          this.uiService.showSuccess({
            message: 'Application Canceled',
            removeCurrent: true
          });

          if (!redirect) {
            this.router
              .navigate(['/'], {
                replaceUrl: true
              })
              .catch(console.log);
          } else {
            window.location.href = environment.refundUrl;
          }

        } else {
          this.uiService.showError({
            message: 'Application Could not canceled',
            removeCurrent: true
          });
        }
      });
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => this.mainApplication = application);
  }

  toggleCollapse() {
    this.menuCollapsed = !this.menuCollapsed;
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

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
