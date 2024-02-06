import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import {ProofOfIncome} from '../../shared/definitions/models/proof-of-income';
import {HttpService} from '../../core/services/http.service';
import {UploadFilesService} from '../upload-files-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, takeUntil, timeout} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {UiService} from '../../ui/ui.service';

@Component({
  selector: 'tev-upload-proof-of-income',
  templateUrl: './upload-proof-of-income.component.html',
  styleUrls: ['./upload-proof-of-income.component.scss']
})
export class UploadProofOfIncomeComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  documentTasks: DocumentTask[] = [];
  proofOfIncomeManual: ProofOfIncome[] = [];
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  applicantId: number;
  proofOfIncomeSelected: ProofOfIncome;

  constructor(
    private httpService: HttpService,
    private uploadService: UploadFilesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uiService: UiService
  ) {
    this.listenToUrlParams();
  }

  ngOnInit() {
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {proofOfIncome} = params;
        this.applicantId = proofOfIncome;
        this.listenToApplicationInfo();
      });
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {
        this.mainApplication = application;
        // tslint:disable-next-line:triple-equals
        this.proofOfIncomeSelected = application.proofOfIncomeManual.find(i => i.applicantId == this.applicantId);
        if (this.proofOfIncomeSelected) {
          this.documentTasks = this.proofOfIncomeSelected.task;
          const notElements = Object.keys(this.documentTasks).length === 0;
          if (notElements) {
            this.router
              .navigate(['/dashboard', this.mainApplication.applicationId.toString(10)])
              .catch(console.log);
          }
        }
      });
  }

  showJournalTask(taskId: any) {
    this.httpService.showJournalTask(taskId)
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  getTextComplement(document: DocumentTask) {
    if (document.code === 'vehicle-registration') {
      return document.plate;
    }
    if (document.code === 'id' || document.code === 'ssn') {
      return 'for ' + document.name;
    }
    return '';
  }

  getRoute(code: '' | 'id' | 'ssn' | 'none' | 'vehicle-registration', documentTaskId: number) {
    if (code === 'id') {
      return '../document-selector' + '/' + documentTaskId;
    } else {
      return '../upload-' + code + '/' + documentTaskId;
    }
  }

  continueInstantVerification(event: Event, proofOfIncomeSelected: ProofOfIncome, clearReport: boolean) {
    event.preventDefault();
    this.httpService.proofOfIncomeChangeStatus(this.mainApplication.applicationId, proofOfIncomeSelected.applicantId, clearReport).pipe(
      catchError((error: HttpErrorResponse) => {
        // Finicity Error
        if (error && error.error) {
          return of(error);
        }

        this.uiService.errorAlert({title: 'Error', message: 'unexpected error', showCancel: false});
        return of(error);

      })
    ).pipe(timeout(59000)).subscribe((url) => {

      this.router
        .navigate(['/dashboard', this.mainApplication.applicationId, 'proof-income',
          proofOfIncomeSelected.applicantId, 'select-bank']).catch(console.log);
    }, (error) => {
      console.log(error);
      this.uiService.errorAlert({title: 'Error', message: 'unexpected error', showCancel: false});
    });

  }
}
