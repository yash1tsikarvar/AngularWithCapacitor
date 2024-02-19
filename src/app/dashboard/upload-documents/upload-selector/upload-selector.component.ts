import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {HttpService} from '../../../core/services/http.service';
import {UiService} from '../../../ui/ui.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DocumentTask} from '../../../shared/definitions/models/document-task.model';

@Component({
  selector: 'tev-upload-selector',
  templateUrl: './upload-selector.component.html',
  styleUrls: ['./upload-selector.component.scss']
})
export class UploadSelectorComponent implements OnInit, OnDestroy {

  documentTaskId: number;
  qrCodeGenerate: any;
  taskName: any;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  document: DocumentTask;

  constructor(private httpService: HttpService,
              private uiService: UiService,
              private router: Router,
              private activeRoute: ActivatedRoute,
             ) {

    this.listenToUrlParams();
  }

  ngOnInit() {
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {documentTaskId} = params;
        this.documentTaskId = documentTaskId;
        this.httpService
          .mainApplication$
          .pipe(
            takeUntil(this.unsubscribeSubject)
          )
          .subscribe(application => {

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

  generateQrCode() {
    this.httpService
      .createUploadInPhone(this.documentTaskId)
      .subscribe(data => {
         this.router.navigate(['../../upload-mobile/' + this.documentTaskId], {relativeTo: this.activeRoute}, );
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next(true);
  }
}
