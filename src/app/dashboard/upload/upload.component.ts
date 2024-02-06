import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UploadFilesService} from '../upload-files-service.service';
import {UploadDocumentRequest} from '../../shared/definitions/requests/upload-document.request';
import {HttpService} from '../../core/services/http.service';
import {of, Subject} from 'rxjs';
import {DocumentTask} from '../../shared/definitions/models/document-task.model';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {UiService} from '../../ui/ui.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, takeUntil, tap} from 'rxjs/operators';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import sweetAlert from 'sweetalert2';
import heic2any from 'heic2any';
import {LocationStrategy} from '@angular/common';


@Component({
  selector: 'tev-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @ViewChild('fileInput', {static: false, read: ElementRef }) fileInput: ElementRef;


  files: any = [];
  filesFail: any = [];

  mainApplication: ApplicationResponse;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  documentTask: DocumentTask;
  documentId: number;
  documentTaskId: any;
  uploading: Boolean;

  pageBack: any;
  proofOfIncomeTask: DocumentTask;


  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uploadFilesService: UploadFilesService,
    private location: LocationStrategy
  ) {
    this.listenToUrlParams();
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  deleteFailedFile(index: number) {
    this.filesFail.splice(index, 1);
  }

  /**
   * uploadFiles
   */
  processUploadQueue(index: number) {

    this.uploading = true;

    if (index === this.files.length) {
      return;
    }

    let file = this.files[index];

    if (file.type.startsWith('image')) {
      const blob: Blob = file;
      heic2any({blob, toType: 'image/jpeg', quality: 0.8}).then((jpgBlob: Blob) => {
        file = this.blobToFile(jpgBlob, file.name);
        this.files[index] = file;
        this.uploadFile(file, index);
        return Promise.resolve(true);
      }).catch(err => {
        this.uploadFile(file, index);
        return Promise.resolve(true);
      });
    } else {
      this.uploadFile(file, index);
    }

  }

  async uploadFile(file, index) {

    const fileData = await this.readFileData(file);

    const uploadRequest: UploadDocumentRequest = {
      documentTaskId: this.documentTask.documentTaskId,
      filename: file.name,
      fileMimeType: file.type,
      fileData: fileData,
      message: '',
      comment: null,
      uploadCode: 'none',
      uploadByType: 'A',
      isBackId: false
    };
    this.callServiceUploadDocument(uploadRequest, file, index);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {

    for (const item of files) {
      item.progress = 0;
      if (this.fileHasAllowedMimeType(item) &&
        this.fileHasAllowedSize(item) &&
        this.fileCanBeAdded()) {
        this.files.push(item);
      }
    }
    if (!this.uploading) {
      this.processUploadQueue(0);
    }
    this.fileInput.nativeElement.value = '';

  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        this.documentTaskId = params.documentTaskId;
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
        this.documentTask = application.pendingDocumentTasks.filter(task => task.documentTaskId == this.documentTaskId)[0];
        for (const proof of application.proofOfIncomeManual) {
          if (!this.documentTask) {
            this.documentTask = proof.task.filter(task => task.documentTaskId == this.documentTaskId)[0];
          }
        }


        if (this.files.length === 0) {
          history.pushState(null, null, this.pageBack);
        } else {
          history.pushState(null, null, window.location.href);
        }

        if (!this.documentTask && !this.proofOfIncomeTask) {
          this.closeWindow();
        }
      });
  }

  fileHasAllowedSize(file: File) {

    const twentyMB = Math.pow(2, 20) * 20;
    if (file.size < twentyMB) {
      return true;
    } else {
      sweetAlert({
        customClass: 'confirm-remove-expedite-modal',
        title: 'Something went wrong. Make sure your files meet the following specs.',
        type: 'info',
        html: 'The maximum document size limit for uploads is 20MB.',
        showCloseButton: true,
        confirmButtonText: 'Close',
        confirmButtonClass: 'tev-btn tev-btn--block tev-btn--large',
        buttonsStyling: false,
        animation: false
      });

      return false;
    }

  }

  fileHasAllowedMimeType(file: File) {
    const {acceptedMimeTypes} = this.documentTask;
    const {type} = file;

    if (acceptedMimeTypes.indexOf(type) === -1) {
      sweetAlert({
        customClass: 'confirm-remove-expedite-modal',
        title: 'Something went wrong. Make sure your files meet the following specs.',
        type: 'info',
        html: 'The supported formats are PDF, JPEG, PNG or GIF.',
        showCloseButton: true,
        confirmButtonText: 'Close',
        confirmButtonClass: 'tev-btn tev-btn--block tev-btn--large',
        buttonsStyling: false,
        animation: false
      });
      return false;
    }

    return true;
  }

  fileCanBeAdded() {
    if (!this.documentTask.multipleFiles) {
      if (this.documentTask.documents.length > 0 || this.files.length > 0) {
        this.uiService
          .showError({
            message: 'Only 1 file can be added to this type of document',
            removeCurrent: true
          });
        return false;
      }
    }
    return true;
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModified = new Date();
    b.name = fileName;
    return <File>theBlob;
  };

  canDeactivate(): boolean {
    if (this.documentTask && this.documentTask.documents.length > 0) {
      return false;
    }
    return true;
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

  confirmDeleteDocument(event: MouseEvent, documentId: number) {
    event.preventDefault();
    event.stopPropagation();

    this.uiService
      .confirmAction({
        title: 'This action is irreversible',
        message: 'Are you sure you want to delete the file'
      })
      .subscribe(confirm => {
        if (confirm) {
          this.deleteDocument(documentId);
        }
      });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  deleteDocument(documentId: number) {

    this.uiService
      .showInfo({
        message: `Deleting Document`
      });

    this.httpService
      .removeDocument(documentId.toString())
      .subscribe(() => {

        this.httpService
          .getApplicationById(this.mainApplication.applicationId.toString())
          .subscribe(() => {
            this.uiService
              .showSuccess({
                message: `Document Removed`
              });
          });
      });
  }

  callServiceUploadDocument(uploadRequest, document, index) {

    this.httpService
      .uploadDocument(uploadRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {

          if (event.type === HttpEventType.UploadProgress) {
            document.progress = Math.round(100 * event.loaded / event.total);
          }

        }),
        catchError((error: HttpErrorResponse) => {

          let errorString = 'There was an error uploading the file ';
          if (error.status === 422) {
            errorString = 'File not supported format ';
          }
          if (error.status === 406) {
            errorString = 'Encrypted or corrupted documents are not allowed ';
          }
          document.errorMessage = errorString;

          this.uiService
            .showError({
              message: errorString + uploadRequest.filename
            });
          this.filesFail.push(document);
          this.deleteFileFromQueue(document);

          return of(error);
        })
      )
      .subscribe((event: HttpEvent<any>) => {

        if (event.type === HttpEventType.Response) {

          this.uiService
            .showSuccess({
              message: `Documents Uploaded`
            });

          document.progress = 100;

          this.deleteFileFromQueue(document);

          this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {
            });
        }
      });

  }

  progressBarValue(value: string) {
    if (value === 'Uploaded' || value === 'Processing') {
      value = '100';
    } else if (value === 'In Queue') {
      value = '0';
    }

    const result = parseFloat(value);

    return result;
  }

  deleteFileFromQueue(file: any) {
    this.uploading = false;
    this.files = this.files.filter(item => item !== file);
    if (this.files.length > 0) {
      this.processUploadQueue(0);
    }
  }

  finishUploads() {
    this.uiService
      .showInfo({
        message: `Finishing Documents`
      });
    this.uploadFilesService.finishUploads(this.mainApplication.applicationId, this.documentTaskId);
  }

  closeWindow() {
    this.router.navigate(['/dashboard', this.mainApplication.applicationId, 'upload-documents'])
      .catch(console.log);
  }
}
