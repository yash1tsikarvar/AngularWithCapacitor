import {Component, Input, OnInit} from '@angular/core';
import {ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import {Router} from '@angular/router';

@Component({
  selector: 'tev-abandoned-application',
  templateUrl: './abandoned-application.component.html',
  styleUrls: ['./abandoned-application.component.scss']
})
export class AbandonedApplicationComponent implements OnInit {

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

}
