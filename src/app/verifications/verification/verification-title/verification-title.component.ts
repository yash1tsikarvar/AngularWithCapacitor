import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UiService} from '../../../ui/ui.service';

@Component({
  selector: 'tev-verification-title',
  templateUrl: './verification-title.component.html',
  styleUrls: ['./verification-title.component.scss']
})
export class VerificationTitleComponent implements OnInit {

  @Input() name;
  @Input() verificationName: string;
  @Input() description: string;
  @Input() hasDecline: boolean;
  @Input() declineText: string;
  @Output() decline: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() error: string;
  @Input() status: string;
  @Input() type: string;

  constructor(
    private uiService: UiService
  ) {}


  ngOnInit() {
  }

  confirmDecline() {
    this.uiService
      .confirmAction({
        title: 'Are you sure you want to decline?',
        type: 'question',
        confirmButtonText: 'Decline',
        message: ''
      })
      .subscribe(confirm => {
        if (confirm) {
          this.declineEvent();
        }
      });
  }

  declineEvent() {
    this.decline.emit(true);
  }

}
