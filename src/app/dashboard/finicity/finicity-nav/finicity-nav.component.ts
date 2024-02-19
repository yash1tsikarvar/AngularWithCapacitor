import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../../shared/definitions/responses/application.response';
import {takeUntil} from 'rxjs/operators';
import {HttpService} from '../../../core/services/http.service';
import {Subject} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tev-finicity-nav',
  templateUrl: './finicity-nav.component.html',
  styleUrls: ['./finicity-nav.component.scss']
})
export class FinicityNavComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  destroyed$: Subject<any> = new Subject<any>();

  constructor(private authService: AuthService,
              private router: Router,
              private httpService: HttpService) {
    this.listenToApplicationInfo();
  }

  ngOnInit() {
  }

  logOut($event: MouseEvent) {
    event.preventDefault();
    this.authService
      .logOut()
      .subscribe(() => {
        this.router
          .navigate(['/'])
          .catch(console.log);
      });
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => {
        this.mainApplication = application;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
