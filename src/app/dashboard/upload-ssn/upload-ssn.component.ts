import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {HttpService} from '../../core/services/http.service';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import {UiService} from '../../ui/ui.service';
import {catchError, takeUntil, tap, timeout} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {TenantFile} from '../../shared/definitions/models/tenant-file.interface';
import * as moment from 'moment';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import {PhotoIdVerification} from '../../shared/definitions/models/photo-id-verification';
import heic2any from 'heic2any';
import {LocationStrategy} from '@angular/common';
import {PhotoSsnVerification} from '../../shared/definitions/models/photo-sn-verification';

@Component({
  selector: 'tev-upload-ssn',
  templateUrl: './upload-ssn.component.html',
  styleUrls: ['./upload-ssn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadSsnComponent implements OnInit, OnDestroy {


  mainApplication: ApplicationResponse;
  documentTaskId: number;
  document: DocumentTask = null;
  pendingDocumentTasks: Record<string, DocumentTask> = {};
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  files: File[] = [];

  tenMB = Math.pow(2, 20) * 10;

  uploading: boolean = Boolean(0);
  deleting: boolean = Boolean(0);
  initUpload: boolean = Boolean(1);
  error: string;
  fileQueue: TenantFile[] = [];

  retriesUpdateCounter: number;
  errorRetries: number;


  showForm: boolean;
  showInstructions: boolean = Boolean(1);
  photoSsnVerification: PhotoSsnVerification =
    {
      id: null, firstName: null,
      ssn: null, documentId: null, step1Name: null,
      step1Lastname: null, step1Ssn: null
    };

  uploaded: boolean;
  uploadedFinish: boolean;
  imageToShow: any;


  genericText = `Please make sure the text is readable, the card is
  well lit and all corners are visible`;

  private nothingCoincidence: boolean;
  private src: any;
  private animationProcess = 0;


  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: LocationStrategy,
  ) {
    this.listenToUrlParams();
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit() {
    this.retriesUpdateCounter = 0;
    this.errorRetries = 0;
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
        this.document = application.pendingDocumentTasks.filter(task => task.documentTaskId == this.documentTaskId)[0];

        if (this.document == null && !this.uploadedFinish && !this.showForm) {
          this.closeUploadFinish();
        }

        this.pendingDocumentTasks = application
          .pendingDocumentTasks
          .reduce((acc, current) => {
            return {...acc, [current.documentTaskId.toString(10)]: current};
          }, {});

      });
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {documentTaskId} = params;
        this.documentTaskId = documentTaskId;
        this.listenToApplicationInfo();
      });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.retriesUpdateCounter = 0;
    this.errorRetries = 0;
    this.unsubscribeSubject.next(true);
  }

  onSelect(event) {
    this.error = null;
    if (event.rejectedFiles[0]) {
      this.showErrors(event.rejectedFiles[0].reason);
    } else {
      this.uploading = true;

      let file = event.addedFiles[0];

      if (file.type.endsWith('pdf')) {
        this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
        this.files.push(file);
      } else {
        const blob: Blob = file;
        heic2any({blob, toType: 'image/jpeg', quality: 0.8}).then((jpgBlob: Blob) => {
          file = this.blobToFile(jpgBlob, file.name);
          this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
          this.files.push(file);
          return Promise.resolve(true);
        }).catch(err => {
          this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
          this.files.push(file);
          return Promise.resolve(true);
        });
      }


    }
    this.retriesUpdateCounter++;
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModified = new Date();
    b.name = fileName;
    return <File>theBlob;
  }

  isImage() {
    return true;
  }

  showErrors(reason: String) {
    this.error = '';
    if (reason === 'size') {
      this.error += 'The maximum document size limit for uploads is 10MB.';
    }
    if (reason === 'type') {
      this.error += 'The supported formats are JPG, PNG or PDF';
    }
  }

  mimetypesAccept() {
    return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
  }

  onRemove(event) {
    if (!this.showForm) {
      this.deleting = true;
      this.files.splice(this.files.indexOf(event), 1);
      this.error = null;
      this.deleteDocument(this.document.documents[this.document.documents.length - 1].documentId);
    }
  }

  deleteDocument(documentId) {

    this.httpService
      .removeDocument(documentId)
      .subscribe(() => {
        this.httpService
          .getApplicationById(this.mainApplication.applicationId.toString())
          .subscribe(() => {
            this.uiService
              .showSuccess({
                message: `Document Removed`
              });

            this.uploaded = false;
          });
      });
  }

  readFileData(file: File): Promise<string> {
    return new Promise(((resolve, reject) => {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        resolve(<string>fileReader.result);
      };

      fileReader.onerror = () => {
        reject(fileReader.error);
      };

      fileReader.readAsDataURL(file);
    }));
  }

  async uploadDocument(file: File) {
    const fileData = await this.readFileData(file);
    const tenantFile: TenantFile = {
      filename: file.name,
      fileMimeType: file.type,
      fileData: fileData,
      fileSize: file.size,
      percentageUploaded: 'In Queue',
      documentTaskId: this.documentTaskId,
      doAutoSanitizer: (this.retriesUpdateCounter <= 2),
      secondRetry: (this.errorRetries > 0),
      uploadCode: 'ssn',
      uploadByType: 'A',
      message: moment(file.lastModified).format('MM/DD/YYYY HH:mm') + ' - ' + Math.round(file.size / 1024) + 'KB'
    };

    return tenantFile;

  }

  callServiceUploapDocument(uploadRequest, document) {

    this.httpService
      .uploadDocumentSsn(uploadRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {

        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
          } else if (error.status === HttpStatusCode.UNPROCESSABLE_ENTITY) {
            this.error = error.error['automaticRejecReason'];
            if ( !this.error) {
              this.error = error.error.detail;
            }
          } else if (error.status === HttpStatusCode.NOT_ACCEPTABLE) {
            this.error = error.error.detail;
          } else {
            this.uiService
              .showError({
                message: `There was a problem uploading the file ${uploadRequest.filename}`
              });
          }

          this.files.splice(0, 1);
          this.errorRetries++;
          this.uploading = false;
          return of(error);
        })
      ).pipe(timeout(59000))
      .subscribe((event: HttpEvent<any>) => {

        if (event.type === HttpEventType.Response) {

          this.fileQueue.splice(0, 1);

          if (event.body.autoSanitation && event.body.autoSanitationJson) {
            const updateApplicant = event.body.autoSanitationJson;

            if (updateApplicant) {
              const extractInfo = updateApplicant.ssnInfoExtractDTO;

              const name = (extractInfo.firstNameExt && extractInfo.matchFirstName) ? extractInfo.firstNameExt : '';
              const ssn = (extractInfo.ssnExt && extractInfo.matchSsn) ? extractInfo.ssnExt : '';

              this.nothingCoincidence = !this.nothingCoincidence && !extractInfo.matchFirstName
                && !extractInfo.matchSsn;

              if (name !== '' && ssn !== '' ) {
                this.uploadedFinish = true;
              } else {
                this.imageToShow = 'data:image/png;base64,' + event.body.imgProcessed;
                if (this.nothingCoincidence) {
                  this.error = 'The information doesn\'t match with the application.' +
                    ' Please make sure to upload the Social Security Card for: \n' + this.document.name +
                    '\n please try again.',
                    this.files.splice(0, 1);
                  this.uploading = false;
                } else {
                  this.showForm = true;
                  this.photoSsnVerification = {
                    id: updateApplicant.applicantInfoDTO.id, firstName: name, ssn: ssn, documentId: event.body.documentId,
                    step1Name: updateApplicant.applicantInfoDTO.firstName,
                    step1Lastname: updateApplicant.applicantInfoDTO.lastName,
                    step1Ssn: updateApplicant.applicantInfoDTO.ssn
                  };
                  this.uploaded = true;
                }

              }

            }
          }

          this.uploading = false;
          if (!event.body.autoSanitation) {
            this.uploadedFinish = true;
          }

          this.retriesUpdateCounter = 0;
          this.errorRetries = 0;

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {
              this.uploading = false;
              this.uploadedFinish = this.uploadedFinish;
            });
        }
      }, (error) => {
        this.files.splice(0, 1);
        this.errorRetries++;
        this.uploading = false;
        this.error = 'We are not able to read the document. Please try again!';
      });

  }


  onComplete() {
  }


  verificationSended($event: string) {
    if ($event === 'retry') {
      this.showForm = false;
      this.uploadedFinish = false;
      this.uploaded = false;
      this.files.splice(0, 1);
      this.errorRetries++;
      this.uploading = false;
      return;
    }

    this.showForm = false;
    this.uploadedFinish = true;
    this.httpService
      .getApplicationById(this.mainApplication.applicationId.toString())
      .subscribe(() => {
        this.uploading = false;
        this.uploadedFinish = this.uploadedFinish;
      });
  }

  showBack() {
    if (!this.uploadedFinish && !this.uploading
      && !this.showInstructions
      && !this.showForm) {
      return true;
    }
    return false;
  }

  /** Control de instructions views */
  showErrorMessage() {
    if (this.error && this.errorRetries <= 1) {
      return true;
    }
    return false;
  }


  closeUploadFinish() {
    this.router
      .navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents'])
      .catch(console.log);
  }

  hideShowInstructions() {
    this.showInstructions = false;
  }

  showFullWidth() {
    if (!this.showForm || !this.showErrorMessage()) {
      return 12;
    } else {
      return 7;
    }
  }

  updateProcess($event: number) {
    this.animationProcess = 100 - $event;
  }
}
