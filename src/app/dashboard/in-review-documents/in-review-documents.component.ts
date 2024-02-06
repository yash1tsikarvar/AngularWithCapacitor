import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {HttpService} from '../../core/services/http.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'tev-in-review-documents',
  templateUrl: './in-review-documents.component.html',
  styleUrls: ['./in-review-documents.component.scss']
})
export class InReviewDocumentsComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  workingDocumentTasks: DocumentTask[] = [];

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
  ) {
    this.listenToApplicationInfo();
  }

  ngOnInit() {
  }

  showJournalTask(taskId: any) {
    this.httpService.showJournalTask(taskId)
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {
        this.mainApplication = application;
        this.workingDocumentTasks = application.workingDocumentTasks;
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
