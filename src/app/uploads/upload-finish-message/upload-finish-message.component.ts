import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tev-upload-finish-message',
  templateUrl: './upload-finish-message.component.html',
  styleUrls: ['./upload-finish-message.component.scss']
})
export class UploadFinishMessageComponent {

  autoCloseable: boolean;
  timeAutoClose: number;
  title: String = 'You are awesome!';
  subtitle: String = 'Your files have been submitted successfully.<br/>' +
    'If we need additional information we will contact you later.';
  error: any;
  hasChange: boolean = Boolean(0);
  button_text: String = 'Back to the dashboard';

  @Input()
  set auto_closeable(autoCloseable: boolean) {
    this.autoCloseable = autoCloseable;
  }

  @Input()
  set setTitle(message: String) {
    if (message && message !== '') {
      this.title = message;
    }
  }

  @Input()
  set setSubTitle(message: String) {
    if (message && message !== '') {
      this.subtitle = message;
    }
  }

  @Input()
  set setError(message: String) {
    if (message && message !== '') {
      this.error = message;
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

  close() {
    this.closePopup.emit('finish');
  }

  closeUploadFinish() {
    if (this.auto_closeable) {
      this.closePopup.emit('finish');
    }
  }
}
