import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import sweetAlert from 'sweetalert2';
import {UploadComponent} from './upload/upload.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<UploadComponent> {
  async canDeactivate(
    component: UploadComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ) {

    let exitScreen = true;
    if (!component.canDeactivate()) {

      let title = 'Do you want to upload more files for this task: '
      + component.documentTask.description;
      if (component.documentTask.name) {
        title += ' for '  + component.documentTask.name;
      }
      title += '?';

      await sweetAlert({
        customClass: 'confirm-exit-uploads',
        title: title,
        type: 'info',
        html: '',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large',
        cancelButtonClass: 'tev-btn tev-btn--block tev-btn--large gray-button',
        buttonsStyling: false,
        animation: false
      }).then((result) => {
        if (result && result.value) {
          exitScreen = false;
        } else {
          exitScreen = true;
          component.finishUploads();
          sweetAlert({
            customClass: 'confirm-exit-uploads',
            title: 'Thank you!',
            type: 'info',
            html: 'Your documents will be reviewed for our agents, we will contact you if further details are needed.',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: true,
            confirmButtonText: 'Close',
            confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large gray-button',
            buttonsStyling: false,
            animation: false
          });
        }
      });
    }

    return exitScreen;
  }
}
