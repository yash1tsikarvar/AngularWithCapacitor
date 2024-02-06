import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import swal, {SweetAlertResult} from 'sweetalert2';

@Component({
  template: ``,
  selector: 'tev-expired-dialog'
})
export class ExpiredDialogComponent implements OnInit {

  constructor() {
  }

  @Input()
  errorBackRetries: number;

  @Output()
  responseExpired = new EventEmitter<string>();

  ngOnInit() {
    this.showExpiredDialog();
  }

  showExpiredDialog() {

    let htmlText = '<p>We detected your document is expired. A valid document is required by the association.</p>';
    htmlText += '<p>' + (3 - this.errorBackRetries) + ' tries left (then will upload document)</p>';
    htmlText += '<p>Please try again uploading a valid version</p>';

    swal(
      {
        title: 'Document Expired',
        html: htmlText,
        type: 'warning',
        customClass: 'notify-optional-file',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Try Again',
        allowOutsideClick: false,
        focusConfirm: false,
        animation: false
      })
      .then((response: SweetAlertResult) => {
        if (!response.value) {
          this.responseExpired.emit('upload');
        } else {
          this.responseExpired.emit('retry');
        }
      });
  }

}
