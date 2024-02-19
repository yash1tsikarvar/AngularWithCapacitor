import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'tev-awesome-message',
    templateUrl: './awesome-message.component.html',
    styleUrls: ['./awesome-message.component.scss']
})
export class AwesomeMessageComponent {

    autoCloseable: boolean;
    timeAutoClose: number;
    text: String = 'You are awesome!';
    hasChange: boolean = Boolean(0);
    additional_text: String  = '';
    button_text: String = 'Continue';

    @Input()
    set auto_closeable(autoCloseable: boolean) {
        this.autoCloseable = autoCloseable;
    }

  @Input()
  set message(message: String) {
    if (message !== '') {
      this.hasChange = true;
      this.text = message;
    }
  }

    @Input()
    set additionalText(message: String) {
        if (message !== '') {
            this.additional_text = message;
        }
    }

    @Input()
    set buttonText(message: String) {
        this.button_text = message;
    }

    @Input()
    set autoCloseTime(timeAutoClose: number) {
        this.timeAutoClose = timeAutoClose;
    }

    @Output()
    closePopup = new EventEmitter<string>();


    constructor() {
    }

    closeUploadFinish() {
        this.closePopup.emit('finish');
    }
}
