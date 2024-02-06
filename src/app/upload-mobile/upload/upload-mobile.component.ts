import {Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse, HttpEvent} from '@angular/common/http';
import {catchError, tap, timeout} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {UiService} from '../../ui/ui.service';
import {ActivatedRoute} from '@angular/router';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import heic2any from 'heic2any';

@Component({
  selector: 'tev-upload',
  templateUrl: './upload-mobile.component.html',
  styleUrls: ['./upload-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadMobileComponent implements OnDestroy {


  @ViewChild('inputFile', {read: ElementRef, static: false}) inputFile: ElementRef;

  state$: Observable<any>;
  type: String = 'FRONT';
  selectedFile: any;
  token: String;

  uploading: boolean;
  error: string;
  subError: string;
  errorRetries = 0;
  checkExpired: boolean;
  textFinal: string;
  endProcess: boolean = Boolean(0);
  uploadedFinish: boolean = Boolean(0);
  additionalText = '';
  notTask: boolean;
  showButtonUpload: boolean = Boolean(1);

  forceUpload: boolean = Boolean(0);
  requestExpired: boolean = Boolean(0);
  errorRetriesBack = 0;

  taskId: number;
  finishTitle: string;
  finishSubtitle: string;
  errorText: string;
  documentType: string;
  typeText: string;
  data: any;
  errorCode: number;
  tenMB = Math.pow(2, 20) * 20;
  private lastTypeText: string;


  constructor(private http: HttpService,
              private ui: UiService,
              private activeRoute: ActivatedRoute) {
    this.listenToUrlParams();
  }


  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        this.token = params.token;
        this.http.checkTokenUploadV2(params.token)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              this.uploadError(error, '');
              return of(error);
            })
          )
          .subscribe((res) => {
            this.data = res;
            if (!this.data && !this.data.idDocumentType) {
              this.documentType = 'DRIVER_LICENSE';
            } else {
              this.documentType = this.data.idDocumentType;
            }
            this.changeType(this.documentType);
          });
      });
  }


  ngOnDestroy() {
    this.errorRetries = 0;
  }


  onFileChanged(event) {
    this.error = null;
    this.subError = '';
    this.uploading = true;


    if (event.target.files[0]) {
      if (event.target.files[0].size > this.tenMB) {
        this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' +
          'The system detected that the image was in a format that is larger than allowed. ' +
          'Please reduce the file before uploading it. ', 'ER', false, 130);
        return;
      } else if (event.target.files[0].type && event.target.files[0].type !== ''
        && !this.mimetypesAccept().includes(event.target.files[0].type)) {
        this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' +
          'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' +
          'Please upload your document in any of the preferred listed formats. ', 'ER', false, 102);
        return;
      }
    }

    const file = this.selectedFile = event.target.files[0];

    if (file.type.endsWith('pdf')) {
      this.selectedFile = file;
      this.onUpload();
    } else {
      const blob: Blob = file;
      heic2any({blob, toType: 'image/jpeg', quality: 0.8}).then((jpgBlob: Blob) => {
        this.selectedFile = this.blobToFile(jpgBlob, file.name);
        this.onUpload();
        return Promise.resolve(true);
      }).catch(err => {
        this.selectedFile = file;
        this.onUpload();
        return Promise.resolve(true);
      });
    }

  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModified = new Date();
    b.name = fileName;
    return <File>theBlob;
  };


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

  async onUpload() {

    this.textFinal = null;
    const fileData = await this.readFileData(this.selectedFile);

    if (!this.forceUpload) {
      this.forceUpload = this.errorRetries >= 4;
    }

    const tenantFile = {
      filename: this.selectedFile.name,
      fileMimeType: this.selectedFile.type,
      fileData: fileData,
      fileSize: this.selectedFile.size,
      token: this.token,
      checkExpired: this.checkExpired,
      forceUpload: this.forceUpload,
      backId: this.type === 'BACK',
      retries: this.errorRetries,
      idDocumentType: this.documentType
    };


    this.http
      .uploadDocumentFromMobileV2(tenantFile)
      .pipe(
        tap((event: HttpEvent<any>) => {

        }),
        catchError((error: HttpErrorResponse) => {
          this.unexpectedError(error, tenantFile.filename);
          return of(error);
        })
      ).pipe(timeout(59000))
      .subscribe((event: any) => {

        if (event.error) {
          this.unexpectedError(event.error, tenantFile.filename);
          return;
        }

        if (event) {

          if (event.errors) {
            if (event.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.errors === 'TENANT_UNEXPECTED_ERROR') {
              this.errorRetries = 3;
            }
            this.errorRetries++;
            this.changeType(event.side);
            this.showErrors(event.errorString, event.status, this.needShowRetries(event.errors), event.errorCode);
            return;
          }

          if (event.status) {
            const status = event.status;
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
        this.errorRetries++;
        this.uploading = false;
        this.error = 'We are not able to read the document. Please try again!';
      });
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
    this.errorCode = errorCode;
    this.uploading = false;
  }

  private unexpectedError(error: HttpErrorResponse, fileName) {
    const err = 'Unexpected error has occurred';
    this.finishUpload('NR_ER', err);
  }

  finishUpload(status: any, error: string) {
    if (status === 'OK') {
      this.uploadedFinish = true;
      this.uploadSuccess();
    }
    if (status === 'NR') {
      this.uploadedFinish = true;
      this.uploadNeedReview();
    }
    if (status === 'NR_ER') {
      this.uploadedFinish = true;
      this.uploadNeedReview();
    }
  }


  mimetypesAccept() {
    return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
  }


  uploadError(error, filename) {
    this.forceUpload = false;
    if (error.status === HttpStatusCode.REQUEST_TIMEOUT) {
      this.error = 'We are not able to read the document. Please try again!';
      this.forceUpload = this.errorRetries > 4;
    } else if (error.status === HttpStatusCode.UNPROCESSABLE_ENTITY) {
      this.error = error.error.detail;
      this.forceUpload = true;
      if (this.error.includes('The session')) {
        this.textFinal = 'Please go back to the computer and generate a new QR ' +
          'code by refreshing the page. Scan the code and try again.';
        this.endProcess = true;
        this.forceUpload = false;
      } else if (this.error.includes('expiration date') || this.error.includes('has expired')
        || this.error.includes('Non-US Driver’s License detected')) {
        if (this.type === 'FRONT') {
          const expRetry = (5 - this.errorRetries);
          if (expRetry === 1) {
            this.checkExpired = false;
            this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' +
              'document may be rejected and a new non-expired ID will be requested.';
          }
          this.subError = expRetry + ' tries left (then will upload document)';
          this.forceUpload = false;
        } else {
          this.showButtonUpload = false;
          const expRetryBack = (5 - this.errorRetriesBack);
          if (expRetryBack === 0) {
            this.forceUpload = true;
            this.http
              .confirmExpiredMobile(this.token)
              .subscribe(() => {
                this.uploadNeedReview();
              });
          } else {
            this.requestExpired = true;
            this.errorRetriesBack++;
            this.forceUpload = false;
          }
          this.errorRetries++;
          this.uploading = false;
          return;
        }


      } else if (this.error === 'invalid.task.id') {
        this.notTask = true;
        this.error = '';
        this.forceUpload = false;
        return;
      }

    } else if (error.status === HttpStatusCode.NOT_ACCEPTABLE) {
      this.error = error.error.detail;
      this.forceUpload = this.errorRetries > 1;
    } else {
      this.ui
        .showError({
          message: `There was a problem uploading the file ${filename}`
        });
    }
    this.errorRetries++;
    this.uploading = false;
  }

  uploadSuccess() {
    this.ui
      .showSuccess({
        message: `Documents Uploaded`
      });
    this.selectedFile.progress = 100;
    this.textFinal = '';
    this.additionalText = 'You can now close and continue on to the computer.';
    this.uploading = false;
    this.uploadedFinish = true;
  }

  uploadNeedReview() {
    this.selectedFile.progress = 100;
    this.textFinal = 'Thank you for your cooperation! There is some information that needs to be manually verified. ' +
      ' Please review your dashboard for any additional documentation/ information that may be needed.';
    this.additionalText = 'You can now close and continue on to the computer.';
    this.uploading = false;
    this.uploadedFinish = true;
  }

  uploadNew() {
    const el: HTMLElement = this.inputFile.nativeElement;
    el.click();
  }


  closeUploadFinish() {

  }

  verificationSended($event: string) {
    if ($event === 'retry') {
      this.type = 'FRONT';
      this.uploadedFinish = false;
      this.errorRetries++;
      this.uploading = false;
      return;
    }
    this.uploadSuccess();
  }

  showUploadFile() {
    return !this.uploading && !this.error && !this.uploadedFinish && !this.notTask;
  }


  getImage() {
    if (this.type === 'FRONT') {
      return 'assets/upload_from_mobile.svg';
    }
    return 'assets/upload_back_mobile.svg';
  }

  showButtonUploadOrRetry() {
    if (!this.showButtonUpload) {
      return false;
    } else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.notTask) {
      return true;
    }
    return false;
  }

  forceUploadExpiredId($event: string) {
    if ($event === 'retry') {
      this.type = 'FRONT';
      this.errorRetries = 0;
      this.error = '';
      this.showButtonUpload = true;
      this.requestExpired = false;
    } else {
      this.http
        .confirmExpiredMobile(this.token)
        .subscribe(() => {
          this.uploadNeedReview();
        });
    }
  }

  changeType(documentSide) {
    if (this.documentType === 'PASSPORT') {
      this.typeText = '<b>information page</b>';
      this.lastTypeText = 'passport';
      return;
    } else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
      this.documentType = 'DRIVER_LICENSE';
      this.typeText = '<b>FRONT SIDE</b>';
      this.lastTypeText = 'US drivers license';
      return;
    } else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
      this.documentType = 'DRIVER_LICENSE_BACK';
      this.typeText = '<b>BACK SIDE</b>';
      this.lastTypeText = 'US drivers license';
      return;
    }
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
}
