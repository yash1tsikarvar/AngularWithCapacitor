import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../../ui/ui.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-white-label-footer',
  templateUrl: './white-label-footer.component.html',
  styleUrls: ['./white-label-footer.component.scss']
})
export class WhiteLabelFooterComponent implements OnInit, OnDestroy {

  destroyed$: Subject<any> = new Subject<any>();
  footerLogo: string;
  hasWhiteLabel: boolean = false;

  constructor(
    private uiService: UiService,
  ) {
    this.listenToThemeValues();
  }

  ngOnInit() {
  }

  listenToThemeValues() {
    this.uiService
      .footerLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(logo => this.footerLogo = logo);

    this.uiService
      .hasWhitelabel$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(hasWhiteLabel => this.hasWhiteLabel = hasWhiteLabel);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
