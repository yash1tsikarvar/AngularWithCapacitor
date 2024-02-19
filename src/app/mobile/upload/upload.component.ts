import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {UiService} from '../../ui/ui.service';
import {ActivatedRoute} from '@angular/router';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import * as moment from 'moment';
import {PhotoIdVerification} from '../../shared/definitions/models/photo-id-verification';
import heic2any from 'heic2any';

@Component({
  selector: 'tev-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit, OnDestroy {


  @ViewChild('inputFile', {read: ElementRef, static: false}) inputFile: ElementRef;

  type: String = 'FRONT';
  selectedFile: any;
  token: String;

  uploading: boolean;
  error: string;
  subError: string;
  errorRetries: number;
  checkExpired: boolean;
  textFinal: string;
  endProcess: boolean = Boolean(0);
  uploadedFinish: boolean = Boolean(0);
  additionalText = '';
  notTask: boolean;
  showButtonUpload: boolean = Boolean(1);

  showForm: boolean;
  photoIdVerification: PhotoIdVerification =
    {
      id: null, firstName: null,
      lastName: null, dob: null, documentId: null, step1Name: null,
      step1Lastname: null, step1dob: null
    };
  forceUpload: boolean = Boolean(0);
  requestExpired: boolean = Boolean(0);
  errorRetriesBack = 0;


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
        this.http.checkTokenUpload(params.token)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              this.uploadError(error, '');
              return of(error);
            })
          )
          .subscribe((res) => {

          });
      });
  }

  ngOnInit() {
    this.errorRetries = 0;
  }

  ngOnDestroy() {
    this.errorRetries = 0;
  }


  onFileChanged(event) {
    this.error = null;
    this.subError = '';
    this.uploading = true;

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
    const tenantFile = {
      filename: this.selectedFile.name,
      fileMimeType: this.selectedFile.type,
      fileData: fileData,
      fileSize: this.selectedFile.size,
      token: this.token,
      checkExpired: this.checkExpired,
      forceUpload: this.forceUpload,
      backId: this.type === 'BACK',
      retries: this.errorRetries
    };


    this.http
      .uploadDocumentFromMobile(tenantFile)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.uploadError(error, tenantFile.filename);
          return of(error);
        })
      )
      .subscribe((res) => {
        if (res && !(res instanceof HttpErrorResponse)) {

          if (res.result === 'OK') {
            this.uploadSuccess();
            this.errorRetries = 0;
          } else if (res.result === 'NR') {
            this.uploadNeedReview();
          } else if (res.result === 'NM') {
            this.error = 'The information doesn\'t match with the application.' +
              ' Please make sure to upload the ID for correct applicant \n' +
              '\n',
              this.uploading = false;
            this.errorRetries++;
            this.forceUpload = this.errorRetries === 2;
          } else if (res.result === 'NB') {
              this.type = 'BACK';
            this.errorRetries = 0;
          } else if (res.result === 'NF') {
            this.needForm(res.idInfoExtractDTO, res.documentId, res.applicantId);
            this.errorRetries = 0;
          }
              this.uploading = false;
        }
      }, (error) => {
        this.errorRetries++;
        this.uploading = false;
        this.error = 'We are not able to read the document. Please try again!';
        this.forceUpload = this.errorRetries === 2;
      });
  }

  uploadError(error, filename) {
    this.forceUpload = false;
    if (error.status === HttpStatusCode.REQUEST_TIMEOUT) {
      this.error = 'We are not able to read the document. Please try again!';
      this.forceUpload = this.errorRetries > 1;
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
          const expRetry = (2 - this.errorRetries);
          if (expRetry === 1) {
            this.checkExpired = false;
            this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' +
              'document may be rejected and a new non-expired ID will be requested.';
          }
          this.subError = expRetry + ' tries left (then will upload document)';
          this.forceUpload = false;
        } else {
          this.showButtonUpload = false;
          const expRetryBack = (2 - this.errorRetriesBack);
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
    this.forceUpload = this.errorRetries > 1;
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
      ' Please review your dashboard for any additional documentation/ information that may be needed. ';
    this.additionalText = 'You can now close and continue on to the computer.';
    this.uploading = false;
    this.uploadedFinish = true;
  }

  uploadNew() {
    const el: HTMLElement = this.inputFile.nativeElement;
    el.click();
  }

  needForm(extractInfo, documentId, applicantId) {
    this.errorRetries = 0;

    const name = (extractInfo.firstNameExt && extractInfo.matchFirstName) ? extractInfo.firstNameExt : '';
    const lastName = (extractInfo.lastNameExt && extractInfo.matchLastName) ? extractInfo.lastNameExt : '';
    const dob = ((extractInfo.dobExt && extractInfo.dobExt) && extractInfo.matchDob) ?
      moment(extractInfo.dobExt).toDate() : null;

    this.showForm = true;
    this.photoIdVerification = {
      id: applicantId,
      firstName: name,
      lastName: lastName,
      dob: dob,
      documentId: documentId,
      step1Name: null,
      step1Lastname: null,
      step1dob: null
    };

  }

  closeUploadFinish() {

  }

  verificationSended($event: string) {
    if ($event === 'retry') {
      this.type = 'FRONT';
      this.showForm = false;
      this.uploadedFinish = false;
      this.errorRetries++;
      this.uploading = false;
      return;
    }
    this.uploadSuccess();
  }

  showUploadFile() {
    return !this.uploading && !this.error && !this.uploadedFinish && !this.showForm && !this.notTask;
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
    } else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.showForm && !this.notTask) {
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
}
