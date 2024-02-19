import {Component, OnDestroy, OnInit} from '@angular/core';
import {PropertyInfoResponse} from '../../shared/definitions/responses/property-info.response';
import {HttpService} from '../../core/services/http.service';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {UiService} from '../../ui/ui.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'tev-co-applicants',
  templateUrl: './co-applicants.component.html',
  styleUrls: ['./co-applicants.component.scss']
})
export class CoApplicantsComponent implements OnInit, OnDestroy {

  propertyInfo: PropertyInfoResponse;
  smallLogo: string;
  private destroyed$: Subject<any> = new Subject<any>();

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private authService: AuthService,
    private router: Router,
    private location: Location,
  ) {
    this.listenToPropertyInfo();
    this.listenToThemeValues();
  }

  ngOnInit() {}

  listenToPropertyInfo() {
    this.httpService
      .propertyInfo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(propertyInfo => {
        this.propertyInfo = propertyInfo;
        if (propertyInfo.theme) {
          this.uiService.setThemeValues(propertyInfo.theme.values);
        } else {
          this.uiService.setThemeDefaultValues();
        }
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

  goBack(event: MouseEvent) {
    event.preventDefault();
    this.location.back();
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
