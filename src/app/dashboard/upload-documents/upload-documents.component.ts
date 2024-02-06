import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {HttpService} from '../../core/services/http.service';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import {UploadDocumentRequest} from '../../shared/definitions/requests/upload-document.request';
import {takeUntil} from 'rxjs/operators';
import {from as fromPromise, Observable, Subject} from 'rxjs';
import swal, {SweetAlertResult} from 'sweetalert2';
import {TextareaDataInterface} from '../../shared/definitions/viewparams/textarea-data.interface';
import {UploadFilesService} from '../upload-files-service.service';
import {Router} from '@angular/router';
import {ProofOfIncome} from '../../shared/definitions/models/proof-of-income';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'tev-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit, OnDestroy {

  mainApplication: ApplicationResponse;
  documentTasks: DocumentTask[] = [];
  pendingDocumentTasks: Record<string, DocumentTask> = {};
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  completePercentage: string;
  proofOfIncomeManual: ProofOfIncome[] = [];


  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private uploadService: UploadFilesService,
    private router: Router,
  ) {
    this.listenToApplicationInfo();
  }

  ngOnInit() {
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(application => {

        this.mainApplication = application;
        this.documentTasks = application.pendingDocumentTasks.filter(task => task.status === 'P');
        this.proofOfIncomeManual = application.proofOfIncomeManual;

        this.pendingDocumentTasks = application
          .pendingDocumentTasks
          .reduce((acc, current) => {
            return {...acc, [current.documentTaskId.toString(10)]: current};
          }, {});

        const notElements = Object.keys(this.pendingDocumentTasks).length === 0 &&
          Object.keys(this.proofOfIncomeManual).length === 0 ;

        if (notElements) {
          this.router
            .navigate(['/dashboard', this.mainApplication.applicationId.toString(10)])
            .catch(console.log);
        }

        this.completePercentage = this.uploadService.getPercentage(this.mainApplication);

      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  createOptionalPdfNoMandatory(event: MouseEvent, documentId: number) {

    event.preventDefault();
    event.stopPropagation();

    // this.collectTextArea({
    //   type: 'warning',
    //   title: 'State Reason',
    //   message: 'Please enter the reason why you can not provide this document',
    //   confirmButtonText: 'Submit',
    //   textPlaceHolder: 'Add comments here'
    // })
    //   .subscribe(preConfirm => {
    //     if (preConfirm) {

          const documentTask = this.pendingDocumentTasks[documentId];

          const uploadRequest: UploadDocumentRequest = {
            isBackId: false,
            documentTaskId: documentTask.documentTaskId,
            filename: 'generated' + new Date().getTime() + '.pdf',
            fileMimeType: 'application/pdf',
            fileData: null,
            message: '',
            comment:
            // preConfirm +
            'Optional document not provided',
            uploadCode: 'none',
            uploadByType: 'A'
          };

          this.uploadService.callServiceGeneratePdfNoMandatory
          (uploadRequest, document, this.mainApplication.applicationId, documentTask.documentTaskId);

      //}
    // });

  }

  // collectTextArea(data: TextareaDataInterface): Observable<boolean> {

  //   // @ts-ignore
  //   const confirmBox = swal(
  //     {
  //       title: data.title,
  //       text: data.message,
  //       type: data.type || 'warning',
  //       customClass: 'notify-optional-file',
  //       html:
  //         '<div>Please enter the reason why you can not provide this document</div>' +
  //         '<textarea id="swal-input1" class="swal2-textarea" placeholder="Add comments here" ></textarea>' +
  //         '<p class="reason-not-provide-text">The association will get notified about the reason why you can not provide ' +
  //         'the document requested. Your reason may be rejected depending on the Association requirements.</p>',
  //       focusConfirm: false,
  //       preConfirm: () => {
  //         const mar = (<HTMLInputElement>document.getElementById('swal-input1')).value;
  //         if (mar.length === 0) {
  //           swal.showValidationMessage(`The reason can't be empty`);
  //         }
  //         return mar;
  //       },
  //       inputPlaceholder: data.textPlaceHolder || 'Type your message here...',
  //       confirmButtonText: data.confirmButtonText || 'OK'
  //     })
  //     .then((response: SweetAlertResult) => {
  //       return response.value;
  //     });

  //   return fromPromise(confirmBox);
  // }

  canDeactivate(): boolean {
    for (let i = 0; i < this.documentTasks.length; i++) {
      if (this.documentTasks[i].documents.length > 0) {
        return false;
      }
    }
    return true;
  }

  isSanitizable(document: DocumentTask) {

    if (document.code != null && document.code !== '' && document.code !== undefined && document.code !== 'none'
      && document.code !== 'proof-of-income' && document.code !== 'contracts') {
      return true;
    }
    return false;
  }

  showJournalTask(taskId: any) {
    this.httpService.showJournalTask(taskId)
  }

  getTextComplement(document: DocumentTask) {
    if (document.code === 'vehicle-registration') {
      return document.plate;
    }
    if (document.code === 'id' || document.code == 'id-v2' || document.code === 'ssn') {
      return 'for ' + document.name;
    }
    return '';
  }

  getRoute(code: '' | 'id' | 'id-v2' | 'ssn' | 'none' | 'vehicle-registration', documentTaskId: number) {
    if (code === 'id') {
      return '../id-instructions' + '/' + documentTaskId;
    } else if (code === 'id-v2') {
      return '../document-selector' + '/' + documentTaskId;
    } else {
      return '../upload-' + code + '/' + documentTaskId;
    }
  }

  isEnabled(document: DocumentTask) {
    for (const poi of this.mainApplication.proofOfIncome){

    }
    if (document.applicantId) {
      return true;
    }
  }
}
