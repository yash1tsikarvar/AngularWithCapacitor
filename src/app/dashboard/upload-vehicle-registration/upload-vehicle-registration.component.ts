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
import heic2any from 'heic2any';
import {LocationStrategy} from '@angular/common';
import {PhotoVehicleRegistrationVerification} from '../../shared/definitions/models/photo-tag-registration-verification';
import {$e} from 'codelyzer/angular/styles/chars';


@Component({
  selector: 'tev-upload-vehicle-registration',
  templateUrl: './upload-vehicle-registration.component.html',
  styleUrls: ['./upload-vehicle-registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadVehicleRegistrationComponent implements OnInit, OnDestroy {


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
  checkExpired: boolean = Boolean(1);
  error: string;
  fileQueue: TenantFile[] = [];

  retriesUpdateCounter: number;
  errorRetries: number;
  subError: String = '';


  showForm: boolean;
  showInstructions: boolean = Boolean(1);
  photoTagVerification: PhotoVehicleRegistrationVerification =
    {
      id: null,
      plate: null,
      documentId: null,
      step1Plate: null,
      vehRegInfoDTO: {plate: ''}
    };

  uploaded: boolean;
  uploadedFinish: boolean;
  imageToShow: any;
  textFinal: String = '';


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
        this.uploadDocument(file).then(r => this.callServiceUploadDocument(r));
        this.files.push(file);
      } else {
        const blob: Blob = file;
        heic2any({blob, toType: 'image/jpeg', quality: 0.8}).then((jpgBlob: Blob) => {
          file = this.blobToFile(jpgBlob, file.name);
          this.uploadDocument(file).then(r => this.callServiceUploadDocument(r));
          this.files.push(file);
          return Promise.resolve(true);
        }).catch(err => {
          this.uploadDocument(file).then(r => this.callServiceUploadDocument(r));
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
  };

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
      doAutoSanitizer: true,
      checkExpired: this.checkExpired,
      secondRetry: (this.errorRetries > 0),
      uploadCode: 'vehicle-registration',
      uploadByType: 'A',
      message: moment(file.lastModified).format('MM/DD/YYYY HH:mm') + ' - ' + Math.round(file.size / 1024) + 'KB'
    };

    return tenantFile;

  }

  callServiceUploadDocument(uploadRequest) {
    this.httpService
      .uploadDocumentTagRegistration(uploadRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {

        }),
        catchError((error: HttpErrorResponse) => {

          if (error.status === HttpStatusCode.REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
          } else if (error.status === HttpStatusCode.UNPROCESSABLE_ENTITY) {
            this.error = error.error['automaticRejecReason'];
            if (!this.error) {
              this.error = error.error.detail;
              if (this.error.includes('is expired') || this.error.includes('can\'t read the expiration date')
              || this.error.includes('can´t detect your plate')
              || this.error.includes('Duplicated Document')
              || this.error.includes('already uploaded')
              || this.error.includes('We are unable to read the information')) {
                let errorExpired = true;
                if (this.error.includes('can´t detect your plate') || this.error.includes('Duplicated Document')) {
                  errorExpired = false;
                }
                const expRetry = (3 - this.errorRetries);
                if (expRetry <= 1) {
                  this.checkExpired = false;
                  if (errorExpired) {
                    this.textFinal = 'We will upload and review this vehicle registration manually, if it is expired the ' +
                      'document may be rejected and a new non-expired vehicle-registration will be requested.';
                  } else {
                    this.textFinal = 'We will upload and review this vehicle registration manually, if it does not match ' +
                      'a valid document, the document may be rejected and a new vehicle registration will be requested.';
                  }
                }
                this.subError = expRetry + ' tries left (After the last attempt is made, the document will be submitted to be manually reviewed)';
                this.errorRetries++;
              }
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
              const extractInfo = updateApplicant.vehRegInfoExtractDTO;

              const plate = (extractInfo.plate && extractInfo.matchPlate) ? extractInfo.plate : '';

              this.nothingCoincidence = !this.nothingCoincidence
                && !extractInfo.plate;

              // TEN-507
              this.uploadedFinish = true;
              // if (plate) {
              //   this.uploadedFinish = true;
              // } else {
              //   this.imageToShow = 'data:image/png;base64,' + event.body.imgProcessed;
              //   if (this.nothingCoincidence) {
              //     this.error = 'The information doesn\'t match with the application.' +
              //       ' Please make sure to upload the vehicle registration for vehicle with plate : \n' + this.document.plate +
              //       '\n please try again.',
              //       this.files.splice(0, 1);
              //     this.uploading = false;
              //   } else {
              //     this.showForm = true;
              //     this.photoTagVerification = {
              //       id: null,
              //       plate: plate,
              //       documentId: event.body.documentId,
              //       step1Plate: this.document.plate
              //     };
              //     this.uploaded = true;
              //   }
              //
              // }

            }
          }

          this.uploading = false;
          if (!event.body.autoSanitation) {
            this.uploadedFinish = true;
          }

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
