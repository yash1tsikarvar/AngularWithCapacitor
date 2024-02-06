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
import {DeviceDetectorService} from 'ngx-device-detector';
import swal, {SweetAlertResult} from 'sweetalert2';

@Component({
  selector: 'tev-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadIdComponent implements OnInit, OnDestroy {


  mainApplication: ApplicationResponse;
  documentTaskId: number;
  document: DocumentTask = null;
  documentUploadedId = null;
  pendingDocumentTasks: Record<string, DocumentTask> = {};
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  files: File[] = [];

  tenMB = Math.pow(2, 20) * 10;

  uploading: boolean = Boolean(0);
  deleting: boolean = Boolean(0);
  initUpload: boolean = Boolean(1);
  checkExpired: boolean = Boolean(1);
  requestExpired: boolean = Boolean(0);

  error: string;
  fileQueue: TenantFile[] = [];

  errorRetries: number;
  errorRetriesBack = 0;
  subError: String = '';
  animationProcess = 0;
  showForm: boolean;
  photoIdVerification: PhotoIdVerification =
    {
      id: null, firstName: null,
      lastName: null, dob: null, documentId: null, step1Name: null,
      step1Lastname: null, step1dob: null
    };

  uploaded: boolean;
  uploadedFinish: boolean;
  imageToShow: any;
  textFinal: String = '';
  src: any;
  showInstruction = true;
  showInputFile = true;

  type = 'FRONT';
  result: string;
  forceUpload: boolean;


  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: LocationStrategy,
    private deviceDetector: DeviceDetectorService) {
    this.listenToUrlParams();
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit() {
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
    this.errorRetries = 0;
    this.unsubscribeSubject.next(true);
  }

  onSelect(event) {
    this.error = null;
    this.subError = '';
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
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModified = new Date();
    b.name = fileName;
    return <File>theBlob;
  };


  isImage() {
    if (this.imageToShow === undefined) {
      return false;
    }
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
      doAutoSanitizer: true,
      checkExpired: this.checkExpired,
      secondRetry: (this.errorRetries > 1),
      forceUpload: this.forceUpload,
      uploadCode: 'id',
      message: moment(file.lastModified).format('MM/DD/YYYY HH:mm') + ' - ' + Math.round(file.size / 1024) + 'KB',
      uploadByType: 'A'
    };

    return tenantFile;

  }

  uploadError(error, filename) {
    if (error.status === HttpStatusCode.REQUEST_TIMEOUT) {
      this.error = 'We are not able to read the document. Please try again!';
    } else if (error.status === HttpStatusCode.UNPROCESSABLE_ENTITY) {
      this.error = error.error.detail;
      if (this.error.includes('The session')) {
        this.textFinal = 'Please go back to the computer and generate a new QR ' +
          'code by refreshing the page. Scan the code and try again.';
      } else if (this.error.includes('expiration date') || this.error.includes('has expired')
        || this.error.includes('Non-US Driver’s License detected')) {
        if (this.type === 'FRONT') {
          const expRetry = (2 - this.errorRetries);
          if (expRetry === 1) {
            this.checkExpired = false;
            this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' +
              'document may be rejected and a new non-expired ID will be requested.';
          }
          this.subError = expRetry + ' tries left (then will upload document)';
        } else {
          const expRetry = (2 - this.errorRetriesBack);

          if (expRetry === 0) {
            this.finishUploads(this.mainApplication.applicationId, this.documentTaskId);
          } else {
            this.showExpiredDialog();
            this.errorRetriesBack++;
          }
        }
      } else if (this.error === 'invalid.task.id') {
        this.error = '';
        return;
      }
    } else if (error.status === HttpStatusCode.NOT_ACCEPTABLE) {
      this.error = error.error.detail;
    } else {
      this.uiService
        .showError({
          message: `There was a problem uploading the file ${filename}`
        });
    }

    if (this.error) {
      this.showInstruction = false;
    }

    this.errorRetries++;
    this.uploading = false;
  }

  showExpiredDialog() {
    this.requestExpired = true;
  }

  finishUploads(applicationId, taskId) {
    this.httpService
      .confirmExpired(taskId)
      .subscribe(() => {
        this.httpService
          .getApplicationById(this.mainApplication.applicationId.toString())
          .subscribe(() => {
            this.uploading = false;
            this.uploadedFinish = this.uploadedFinish;
          });
        this.showNeedReviewDialog();
      });
  }

  callServiceUploapDocument(uploadRequest, document) {
    uploadRequest.backId = this.type === 'BACK';
    this.uploadId(uploadRequest, document);

  }

  goToForm(updateApplicant, name, lastName, dob, documentId) {
    if (!updateApplicant.needBack) {
      this.showForm = true;
      this.showInputFile = false;
      this.photoIdVerification = {
        id: updateApplicant.applicantInfoDTO.id, firstName: name,
        lastName: lastName, dob: dob, documentId: documentId,
        step1Name: updateApplicant.applicantInfoDTO.firstName,
        step1Lastname: updateApplicant.applicantInfoDTO.lastName,
        step1dob: updateApplicant.applicantInfoDTO.dob
      };
      this.uploaded = true;
    } else {
      this.needUploadBack();
    }
  }

  needUploadBack() {
    this.type = 'BACK';
    this.files.splice(0);
    this.errorRetries = 0;
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
      this.showInputFile = true;
      this.imageToShow = null;
      return;
    }
    this.showForm = false;
    this.showNeedReviewDialog();
    this.httpService
      .getApplicationById(this.mainApplication.applicationId.toString())
      .subscribe(() => {
        this.uploading = false;
        this.uploadedFinish = this.uploadedFinish;
      });
  }

  /** Control de instructions views */
  showErrorMessage() {
    if (this.error) {
      return true;
    }
    return false;
  }

  closeUploadFinish() {
    this.router
      .navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents'])
      .catch(console.log);
  }

  getRoute() {
    if (this.deviceDetector.isDesktop()) {
      return '../../upload-selector/' + this.documentTaskId;
    } else {
      return '../../upload-documents';
    }
  }

  getImage() {
    if (this.type === 'FRONT') {
      return 'assets/upload_from_mobile.svg';
    }
    return 'assets/upload_back_mobile.svg';
  }

  showBack() {
    if (!this.uploadedFinish && !this.uploading
      && !this.showForm) {
      return true;
    }
    return false;
  }

  private uploadId(uploadRequest, document) {
    let service = this.httpService
      .uploadDocumentId(uploadRequest);

    if (uploadRequest.backId) {
      service = this.httpService
        .uploadBackId(uploadRequest);
    }
    service
      .pipe(
        tap((event: HttpEvent<any>) => {

        }),
        catchError((error: HttpErrorResponse) => {
          this.uploadError(error, document.fileName);
          return of(error);
        })
      ).pipe(timeout(59000))
      .subscribe((event: HttpEvent<any>) => {

        if (event.type === HttpEventType.Response) {

          this.fileQueue.splice(0, 1);


          if (event.body.needReview) {
            this.showNeedReviewDialog();
          }

          if (event.body.autoSanitation && event.body.autoSanitationJson) {


            const updateApplicant = event.body.autoSanitationJson;

            if (updateApplicant) {

              this.uploading = false;

              const extractInfo = updateApplicant.idInfoExtractDTO;
              this.documentUploadedId = event.body.documentId;

              this.result = extractInfo.result;

              if (this.result === 'OK') {
                this.showSuccessUpload();
              } else if (this.result === 'NR') {
                this.showNeedReviewDialog();
              } else if (this.result === 'NM') {
                this.errorRetries++;
                this.forceUpload = this.errorRetries > 1;
                this.error = 'The information doesn\'t match with the application.' +
                  ' Please make sure to upload the ID for: \n' + this.document.name +
                  '\n please try again.',
                  this.files.splice(0, 1);

              } else if (extractInfo.result === 'NF') {
                this.imageToShow = 'data:image/png;base64,' + event.body.imgProcessed;
                const name = (extractInfo.firstNameExt && extractInfo.matchFirstName) ? extractInfo.firstNameExt : '';
                const lastName = (extractInfo.lastNameExt && extractInfo.matchLastName) ? extractInfo.lastNameExt : '';
                const dob = ((extractInfo.dobExt && extractInfo.dobExt) && extractInfo.matchDob) ?
                  moment(extractInfo.dobExt).toDate() : null;
                this.goToForm(updateApplicant, name, lastName, dob, this.documentUploadedId);
                this.errorRetries = 0;
                return;
              } else if (extractInfo.result === 'NB') {
                this.needUploadBack();
              }
            }
          }

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

  showNeedReviewDialog() {
    this.uploading = false;
    this.showInstruction = false;
    this.showForm = false;
    this.error = '';
    this.textFinal = 'Thank you for your cooperation! There is some information that needs to be manually verified. ' +
      ' Please review your dashboard for any additional documentation/ information that may be needed.';
    this.uploadedFinish = true;
  }

  showSuccessUpload() {
    this.uploading = false;
    this.showInstruction = false;
    this.showForm = false;
    this.uploadedFinish = true;
  }

  forceUploadExpiredId($event: string) {
    this.requestExpired = false;
    if ($event === 'retry') {
      this.type = 'FRONT';
      this.showInstruction = true;
      this.error = '';
    } else {
      this.finishUploads(this.mainApplication.applicationId, this.documentTaskId);
    }
  }


}
