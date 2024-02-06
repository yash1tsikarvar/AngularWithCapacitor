import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {UiService} from '../../../ui/ui.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DocumentTask} from '../../../shared/definitions/models/document-task.model';
import {ApplicationResponse} from '../../../shared/definitions/responses/application.response';

@Component({
  selector: 'tev-upload-mobile',
  templateUrl: './upload-mobile.component.html',
  styleUrls: ['./upload-mobile.component.scss']
})
export class UploadMobileComponent implements OnInit, OnDestroy {



  documentTaskId: number;
  qrCode: string;
  baseURl: string = location.origin + '/mobile/upload/';
  taskName: String;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  document: DocumentTask;
  mainApplication: ApplicationResponse;


  constructor(private httpService: HttpService,
              private uiService: UiService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.listenToUrlParams();

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.unsubscribeSubject.next(true);
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {documentTaskId} = params;
        this.documentTaskId = documentTaskId;
        this.getQrCode();
        this.httpService
          .mainApplication$
          .pipe(
            takeUntil(this.unsubscribeSubject)
          )
          .subscribe(application => {
            this.mainApplication = application;
            this.document = application.pendingDocumentTasks.find(task => task.documentTaskId == this.documentTaskId);

            if (this.document == null) {
              this.router
                .navigate(['dashboard/' + application.applicationId + '/upload-documents'])
                .catch(console.log);
            }

            this.taskName = this.document.description + ' ' + this.document.name;
          });
      });
  }

  getQrCode() {
    this.httpService
      .createUploadInPhone(this.documentTaskId)
      .subscribe(data => {
        this.baseURl = this.baseURl + data.token;
        this.qrCode = data.token;
      });
  }

  continue() {
    this.httpService
      .getApplicationById(this.mainApplication.applicationId.toString())
      .subscribe(() => {
        this.router.navigate(['../../upload-documents'], { relativeTo : this.activeRoute });
      });

  }
}
