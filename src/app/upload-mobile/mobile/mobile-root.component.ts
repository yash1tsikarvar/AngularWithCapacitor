import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {UiService} from '../../ui/ui.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'tev-mobile',
  templateUrl: './mobile-root.component.html',
  styleUrls: ['./mobile-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileRootComponent implements OnInit {

  destroyed$: Subject<any> = new Subject<any>();
  smallLogo: String;
  website = location.origin;

  constructor(private uiService: UiService) {
  }

  ngOnInit() {
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
