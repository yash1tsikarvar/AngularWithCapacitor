import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {UiService} from '../../ui/ui.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {

  bigLogo: string;
  private destroyed$: Subject<any> = new Subject<any>();

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.listenToThemeValues();
  }

  listenToThemeValues() {
    this.uiService
      .bigLogo$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(value => this.bigLogo = value);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
