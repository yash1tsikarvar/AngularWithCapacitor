import {Component, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {UiService} from '../../ui/ui.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'tev-uploads',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadsComponent implements OnInit {

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
