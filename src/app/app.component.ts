import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { UiService } from './ui/ui.service';
import { Subscription ,  Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ScriptService } from './shared/services/script.service';

@Component({
  selector: 'tev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit, OnInit {

  idleStartSubscription: Subscription;
  idleEndSubscription: Subscription;
  timeOutSubscription: Subscription;
  interruptionSubscription: Subscription;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private idle: Idle,
    private uiService: UiService,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
  ) {
    this.idle.setIdle(environment.idleTime);
    this.idle.setTimeout(environment.logoutTime);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.checkIdleOnLoading();
    this.listenToPathChanges();
  }

  ngOnInit() {
    const scriptService = new ScriptService;
    scriptService.loadScript('reviewswidgetvars');
    scriptService.loadScript('reviewswidget');
  }

  ngAfterViewInit() {
    this.listenAuthStatus();
  }

  checkIdleOnLoading() {
    const currentDate = new Date();
    const lastPing = Number(localStorage.getItem('lastPing') || currentDate.getTime());
    const seconds = (currentDate.getTime() - lastPing) / 1000;

    if (seconds > environment.logoutTime) {
      this.logOutUser();
    }
  }

  logOutUser() {
    this.authService
      .logOut()
      .subscribe(() => {
        this.router.navigate(['/'])
          .then(() => {
            this.uiService.clearCurrentToastr();
          })
          .catch(console.log);
      });
  }

  listenAuthStatus() {
    this.authService
      .authStatus$
      .subscribe(status => {
        if (status) {
          this.listenToIdleness();
        }
      });
  }

  listenToIdleness() {

    if (this.timeOutSubscription) {
      this.timeOutSubscription.unsubscribe();
    }

    this.timeOutSubscription = this.idle.onTimeout
      .subscribe(() => {
        this.logOutUser();
      });

    if (this.idleStartSubscription) {
      this.idleStartSubscription.unsubscribe();
    }

    this.idleStartSubscription = this.idle.onIdleStart
      .subscribe(() => {
        this.uiService.showWarning({
          title: 'Inactivity Detected',
          message: 'You will be logged out in a few minutes',
          keepOpen: true,
          removeCurrent: true
        });
      });

    if (this.idleEndSubscription) {
      this.idleEndSubscription.unsubscribe();
    }

    this.idleEndSubscription = this.idle.onIdleEnd
      .subscribe(() => {
        this.uiService.clearCurrentToastr();
      });


    if (this.interruptionSubscription) {
      this.interruptionSubscription.unsubscribe();
    }

    this.interruptionSubscription = this.idle.onInterrupt
      .subscribe(() => {
        const currentTime = new Date();
        localStorage.setItem('lastPing', currentTime.getTime().toString(10));
      });

    this.idle.watch();
  }

  listenToPathChanges() {

    this.router
      .events
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
