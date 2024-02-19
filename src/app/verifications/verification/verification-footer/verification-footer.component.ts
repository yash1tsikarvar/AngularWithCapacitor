import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tev-verification-footer',
  templateUrl: './verification-footer.component.html',
  styleUrls: ['./verification-footer.component.scss']
})
export class VerificationFooterComponent implements OnInit {

  @Output() submitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  submitEmit() {
    this.submitEvent.emit(true);
  }
}
