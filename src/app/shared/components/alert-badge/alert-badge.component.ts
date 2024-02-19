import {Component, Input, OnInit} from '@angular/core';
import {AlertType} from '../../definitions/types/alert.type';


@Component({
  selector: 'tev-alert-badge',
  templateUrl: './alert-badge.component.html',
  styleUrls: ['./alert-badge.component.scss']
})
export class AlertBadgeComponent implements OnInit {

  @Input() type: AlertType = 'primary';
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
