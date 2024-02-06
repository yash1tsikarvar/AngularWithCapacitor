import {Component, Input, OnInit} from '@angular/core';
import {ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import {Router} from '@angular/router';

@Component({
  selector: 'tev-closed-application',
  templateUrl: './closed-application.component.html',
  styleUrls: ['./closed-application.component.scss']
})
export class ClosedApplicationComponent implements OnInit {

  @Input() application: ApplicationListItem;

  constructor(
    private router: Router,
  ) { }

  notificationsShow: boolean = false;

  ngOnInit() {
  }

  gotoApplication(url) {
    this.router.navigate(url);
  }

  doNothing(event: MouseEvent) {
    event.preventDefault();
  }

}
