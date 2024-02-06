import {Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map, tap, timeout} from 'rxjs/operators';
import {DocumentTask, DocumentType} from '../../shared/definitions/models/document-task.model';
import {GifCssElementModel} from '../../shared/definitions/models/gif-css-element.model';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {HttpService} from '../../core/services/http.service';
import heic2any from 'heic2any';
import {TenantFile} from '../../shared/definitions/models/tenant-file.interface';
import * as moment from 'moment';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {NgbAccordion, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'tev-upload-id-document',
  templateUrl: './upload-id-document.component.html',
  styleUrls: ['./upload-id-document.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadIdDocumentComponent implements OnInit, OnDestroy {

  state$: Observable<any>;
  documentTaskId: number;
  documentType: DocumentType;

  images: GifCssElementModel[] = [
    {image: '/assets/upload-id-v2/visible.svg', text: 'Make sure all four corners are visible'},
    {image: '/assets/upload-id-v2/cover.svg', text: 'Must not be covered in any way'},
    {image: '/assets/upload-id-v2/blurry.svg', text: 'Make sure the image is not blurry or distorted'},
    {image: '/assets/upload-id-v2/double_image.svg', text: 'Do not upload more than one ID per image'},
  ];
  uploaded: GifCssElementModel[] = [
    {image: '/assets/upload-id-v2/uploaded.svg', text: 'You can now close or go back to the dashboard.'},
  ];
  uploadingImages: GifCssElementModel[] = [
    {image: '/assets/upload-id-v2/uploading.svg', text: 'Analyzing. Please wait.'},
  ];

  files: File[] = [];
  fileQueue: TenantFile[] = [];
  pendingDocumentTasks: Record<string, DocumentTask> = {};
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  mainApplication: ApplicationResponse;
  uploadedFinish: Boolean = Boolean(0);
  uploading: Boolean = Boolean(0);
  forceUpload: boolean = Boolean(0);
  mobile: boolean = Boolean(0);

  showInputFile = true;
  tenMB = Math.pow(2, 20) * 20;
  document: any;
  typeText: string;
  error: string;

  errorRetries = 0;
  finishTitle: string;
  finishSubtitle: string;
  errorText: string;
  needBack: boolean = Boolean(0);
  errorCode: number;

  @ViewChild('acc', {static: true}) ngbAccordion: NgbAccordion;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public httpService: HttpService,
              public deviceDetector: DeviceDetectorService) {
    this.listenToUrlParams();
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .subscribe(app => {

        this.mainApplication = app;
        // tslint:disable-next-line:triple-equals
        this.document = app.pendingDocumentTasks.filter(task => task.documentTaskId == this.documentTaskId)[0];

        if (this.document == null && !this.uploadedFinish) {
          this.closeUploadFinish();
        }

        this.pendingDocumentTasks = app
          .pendingDocumentTasks
          .reduce((acc, current) => {
            return {...acc, [current.documentTaskId.toString(10)]: current};
          }, {});

      });
  }

  ngOnInit() {
    this.state$ = this.activeRoute.paramMap
      .pipe(map(() => window.history.state));
    this.state$.subscribe(returnValue => {
      if (returnValue.documentType === undefined) {
        this.documentType = this.getInfoFromLocalStorage('ID' + this.documentTaskId);
        if (!this.documentType) {
          this.documentType = 'DRIVER_LICENSE';
        }
        this.changeType(this.documentType);
      } else {
        this.saveInfoInLocalStorage('ID' + this.documentTaskId, returnValue.documentType);
        this.documentType = returnValue.documentType;
        this.changeType(this.documentType);
      }

    });
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
        this.listenToApplicationInfo();
      });
  }

  changeType(documentSide) {
    if (this.documentType === 'PASSPORT') {
      this.typeText = 'Upload Face Photo Page';
    } else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
      this.documentType = 'DRIVER_LICENSE';
      this.typeText = 'Upload ID <b>Front Side</b>';
    } else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
      this.documentType = 'DRIVER_LICENSE_BACK';
      this.typeText = 'Upload ID <b>Back Side</b>';
    }
  }

  mimetypesAccept() {
    return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
  }

  onSelect(event, type: string) {
    this.error = null;
    let errorCode = 0;
    let msg = 'Your document scanning was unsuccessful as the system could not extract the information from it.  ' +
      'This could be caused by an unexpected connection error.' +
      ' Please try uploading again. If this error persists, please submit the document which will be reviewed manually.';
    if (event.rejectedFiles[0]) {
      if (event.rejectedFiles[0].reason === 'type') {
        msg = 'Your document scanning was unsuccessful as the system could not extract the information from it. ' +
          'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' +
          'Please upload your document in any of the preferred listed formats. ';
        errorCode = 102;
      } else if (event.reevent.target.files[0].sizejectedFiles[0].reason === 'size') {
        msg =
          'Your document scanning was unsuccessful as the system could not extract the information from it. ' +
          'The system detected that the image was in a format that is larger than allowed. ' +
          'Please reduce the file before uploading it. ';
        errorCode = 130;
      }
      this.showErrors(msg, 'ER', false, errorCode);
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

  callServiceUploapDocument(uploadRequest, document) {
    uploadRequest.backId = this.typeText === 'BACK';
    uploadRequest.idDocumentType = this.documentType;
    uploadRequest.forceUpload = this.forceUpload;
    if (!uploadRequest.forceUpload) {
      uploadRequest.forceUpload = this.errorRetries >= 4;
    }
    uploadRequest.uploadCode = 'id-v2';
    this.uploadId(uploadRequest, document);
  }

  needShowRetries(errors) {
    switch (errors) {
      case 'GREEN_CARD_DETECTED':
      case 'ERROR_PROCESS_PDF':
        return false;
      default:
        return true;
    }
  }

  private uploadId(uploadRequest, document) {
    let service = this.httpService
      .uploadDocumentId(uploadRequest);

    if (uploadRequest.backId) {
      service = this.httpService.uploadBackId(uploadRequest);
    }
    service
      .pipe(
        tap((event: HttpEvent<any>) => {

        }),
        catchError((error: HttpErrorResponse) => {
          this.unexpectedError(error, document.fileName);
          return of(error);
        })
      ).pipe(timeout(59000))
      .subscribe((event: HttpEvent<any>) => {



        if (event.type === HttpEventType.Response) {

          this.fileQueue.splice(0, 1);

          if (event.body.errors) {
            if (event.body.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.body.errors === 'TENANT_UNEXPECTED_ERROR') {
              this.errorRetries = 3;
            }
            this.errorRetries++;
            this.changeType(event.body.side);
            this.showErrors(event.body.errorString, event.body.status, this.needShowRetries(event.body.errors), event.body.errorCode);
            return;
          }

          if (event.body.status) {
            const status = event.body.status;
            if (status === 'NB') {
              this.documentType = 'DRIVER_LICENSE_BACK';
              this.uploading = false;
              this.changeType(this.documentType);
            } else if (status === 'NFNT') {
              this.documentType = 'DRIVER_LICENSE';
              this.uploading = false;
              this.changeType(this.documentType);
            } else if (status === 'NR') {
              this.finishUpload(status, undefined);
            } else if (status === 'OK') {
              this.finishUpload(status, undefined);
            }
          }
        }
      }, (error) => {
        this.files.splice(0, 1);
        this.errorRetries++;
        this.uploading = false;
        this.error = 'We are not able to read the document. Please try again!';
      });
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModified = new Date();
    b.name = fileName;
    return <File>theBlob;
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
      forceUpload: this.forceUpload,
      uploadCode: 'id',
      message: moment(file.lastModified).format('MM/DD/YYYY HH:mm') + ' - ' + Math.round(file.size / 1024) + 'KB',
      uploadByType: 'A',
      idDocumentType: this.documentType
    };

    return tenantFile;

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

  private showErrors(reason, status, showRetries = true, errorCode) {
    if (status === 'NR') {
      this.finishUpload(status, undefined);
      return;
    }
    if (showRetries) {
      reason += '<br/><br/>';
      if ((5 - this.errorRetries) > 1) {
        reason += 'You have (' + (5 - this.errorRetries) + ') TRIES left before manual review';
      }
      if ((5 - this.errorRetries) <= 1) {
        reason += 'You have (' + (5 - this.errorRetries) + ') TRY left before manual review';
      }
    }

    this.error = reason;
    this.uploading = false;
    this.errorCode = errorCode;
  }

  private unexpectedError(error: HttpErrorResponse, fileName) {
    const err = 'Unexpected error has occurred';
    this.finishUpload('NR_ER', err);
  }

  finishUpload(status: any, error: string) {
    if (status === 'OK') {
      this.uploadedFinish = true;
    }
    if (status === 'NR') {
      this.finishTitle = 'Thank you for your cooperation!';
      this.finishSubtitle = 'There is some information that needs to be manually verified.' +
        ' Please review your dashboard for any additional documentation/ information that may be needed';
      this.uploadedFinish = true;
    }
    if (status === 'NR_ER') {
      this.finishTitle = 'Thank you for your cooperation!';
      this.finishSubtitle = 'There is some information that needs to be manually verified.' +
        ' Please review your dashboard for any additional documentation/ information that may be needed';
      this.errorText = error;
      this.uploadedFinish = true;
    }
    this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  uploadTimeOut() {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.backToDashboard();
  }

  closeUploadFinish() {
    this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
    this.router
      .navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents'])
      .catch(console.log);
  }

  backToDashboard() {
    this.closeUploadFinish();
  }

  uploadMobile() {
    const type = {taskId: this.documentTaskId, idDocumentType: this.getInfoFromLocalStorage('ID' + this.documentTaskId)};
    this.httpService
      .createUploadInPhoneV2(type)
      .subscribe(data => {
        this.router.navigate(['../../upload-mobile/' + this.documentTaskId], {relativeTo: this.activeRoute});
      });
  }

  goBack() {
    this.router
      .navigate(['dashboard/' + this.mainApplication.applicationId + '/document-selector/' + this.documentTaskId])
      .catch(console.log);

  }

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'back-side') {
      $event.preventDefault();
    }
  }

  isDriverLicense() {
    return this.documentType !== 'PASSPORT';
  }

  private getInfoFromLocalStorage<T>(key: string): T | null {
    const info = localStorage.getItem(key);
    return info ? JSON.parse(info) : null;
  }

  /**
   * Save information in the session storage.
   *
   * @param {string} key
   * @param data
   */
  private saveInfoInLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  canUploadFromMobile() {
    return this.deviceDetector.isDesktop() && this.documentType !== 'DRIVER_LICENSE_BACK';
  }

  showBack() {
    return !this.uploadedFinish && !this.uploading;
  }
}
