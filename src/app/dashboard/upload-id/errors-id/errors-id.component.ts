import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-errors-id',
  templateUrl: './errors-id.component.html',
  styleUrls: ['./errors-id.component.scss']
})
export class ErrorsIdComponent implements OnInit {
  @Input() error: string;
  @Input() subError: string;
  @Input() errorCode: number;
  @Input() smallText: string;

  constructor() {
  }

  ngOnInit() {
  }

  showErrorMessage() {
    if (this.error) {
      return true;
    }
    return false;
  }
}
