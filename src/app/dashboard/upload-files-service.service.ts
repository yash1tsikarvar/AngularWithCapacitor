import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {UiService} from '../ui/ui.service';
import {TenantFile} from '../shared/definitions/models/tenant-file.interface';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


  constructor(private httpService: HttpService,
              private uiService: UiService,
              private router: Router) {
  }

  callServiceGeneratePdfNoMandatory(uploadRequest, document, applicationId, taskId) {
    this.uiService
      .showInfo({
        message: `Processing request`
      });
    this.httpService
      .uploadDocument(uploadRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {
        }),
        catchError((error: HttpErrorResponse) => {
          this.uiService
            .showError({
              message: `There was a problem uploading the file ${uploadRequest.filename}`
            });
          return of(error);
        })
      )
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          document.percentageUploaded = 'Uploaded';
          this.finishUploads(applicationId, taskId);
          this.refreshUpdates(applicationId);
        }
      });
  }

  refreshUpdates(applicationId) {
    this.httpService
      .getApplicationById(applicationId)
      .subscribe(() => {
      });
  }

  confirmFinishUploads(applicationId, taskId) {
    this.uiService
      .confirmAction({
        title: 'Are you sure you want to Submit?',
        message: 'Your documents will be reviewed by our agents, we will contact you if further details are needed'
      })
      .subscribe(confirm => {
        if (confirm) {
          this.finishUploads(applicationId, taskId);
          return true;
        } else {
          return false;
        }
      });
  }

  finishUploads(applicationId, taskId) {

    this.httpService
      .finishUploads(applicationId, taskId)
      .subscribe(() => {
        this.uiService
          .showSuccess({
            message: `Documents Submited`
          });
        this.httpService
          .getApplicationById(applicationId)
          .subscribe(application => {

           if (application.pendingDocumentTasks.length > 0) {
             this.router
               .navigate(['/dashboard', applicationId, 'upload-documents'])
               .catch(console.log);

           } else {
             this.router
               .navigate(['/dashboard', applicationId])
               .catch(console.log);
           }


          });

      });
  }

  getPercentage(application): string {
    if (application) {
      const completeTask = (application.completedDocumentTasks) ? application.completedDocumentTasks.length : 0;
      const waitingTask = (application.workingDocumentTasks) ? application.workingDocumentTasks.length : 0;
      const pending = (application.pendingDocumentTasks) ?  application.pendingDocumentTasks.length : 0;
      const proofDecline = (application.proofOfIncomeManual) ?  application.proofOfIncomeManual.length : 0;
      return parseFloat(((completeTask + waitingTask ) * 100
        / (pending + completeTask + waitingTask + proofDecline)) + '').toFixed(0) + '% Uploaded';
    } else {
      return  '0';
    }
  }

}
