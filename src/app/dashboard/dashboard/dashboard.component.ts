import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {UiService} from '../../ui/ui.service';
import {Subject} from 'rxjs';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'tev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  smallLogo: string;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private uiService: UiService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.listenToThemeValues();
    this.listenToApplicationInfo();
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'dashboard-main');
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => {

      });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'dashboard-main');
    this.destroyed$.next();
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        this.smallLogo = value ? value : '/assets/tenant-ev-logo-service.svg';
      });
  }

}
