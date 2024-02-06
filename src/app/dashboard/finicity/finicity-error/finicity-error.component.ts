import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tev-finicity-error',
  templateUrl: './finicity-error.component.html',
  styleUrls: ['./finicity-error.component.scss']
})
export class FinicityErrorComponent implements OnInit {

  @Input() applicationId: number;
  @Input() error: any;
  text: string;
  title: string;
  buttonText: string;
  @Output() actionButton = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.text = this.error.text;
    this.buttonText = this.error.buttonText;
    this.title = this.error.title;
  }

  actionBt() {
    this.actionButton.emit(this.error.returnCode);
  }

}
