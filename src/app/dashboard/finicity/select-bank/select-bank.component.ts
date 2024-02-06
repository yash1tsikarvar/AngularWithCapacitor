import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../../shared/definitions/responses/application.response';
import {of, Subject, TimeoutError} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../core/services/http.service';
import {catchError, takeUntil, timeout} from 'rxjs/operators';
import {ScriptService} from '../../../shared/services/script.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FinicityError} from '../../../shared/definitions/models/finicity-error.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProofOfIncome} from '../../../shared/definitions/models/proof-of-income';


@Component({
  selector: 'tev-select-bank',
  templateUrl: './select-bank.component.html',
  styleUrls: ['./select-bank.component.scss'],
})
export class SelectBankComponent implements OnInit, OnDestroy {

  paramsAppId: number;
  paramsApplicantId: number;
  reportId: string;

  mainApplication: ApplicationResponse;
  destroyed$: Subject<any> = new Subject<any>();
  urlConnect = '';
  showLoading: boolean = Boolean(1);
  finishProcess: boolean = Boolean(0);
  loadingMessage: string = String('');
  hasError: boolean = Boolean(0);
  error: FinicityError = {title: '', text: '', buttonText: '', returnCode: 'NONE'};

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private script: ScriptService,
              public dialog: MatDialog) {
    this.listenToUrlParams();

  }

  ngOnInit() {
    this.deleteAllIframes();
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {applicantId, applicationId} = params;
        this.paramsAppId = applicationId;
        this.paramsApplicantId = applicantId;
        console.log(this.paramsApplicantId + ' - ' + this.paramsAppId);
        this.listenToApplicationInfo();
      });
  }

  listenToApplicationInfo() {
    this.httpService
      .mainApplication$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(application => {
        this.mainApplication = application;
        this.connectFinicity();
        console.log(this.mainApplication);
      });
    // this.httpService.getUrlFromFinicity(this.paramsAppId,this.paramsApplicantId).
  }

  connectFinicity() {
    this.loadingMessage = 'Connecting with Mastercard';
    this.httpService.generateUrl(this.paramsAppId, this.paramsApplicantId).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showConnectionError(error);
        return of(error);
      })
    ).pipe(timeout(59000))
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.urlConnect = res.link;
          this.script.load('finicity').then(data => {
            const loadSubscribe = document.getElementById('connect-container');
            if (loadSubscribe) {
              // @ts-ignore
              window.finicityConnect.launch(this.urlConnect, {
                selector: '#connect-container',
                success: (event) => {
                  console.log('Yay! User went through Connect', event);
                  if (event.reason === 'complete' && event.reportData !== undefined) {
                    try {
                      this.reportId = event.reportData[0].reportId;
                    } catch (e) {
                      console.log(e);
                    }
                  }
                  // @ts-ignore
                  window.finicityConnect.destroy();
                  this.finishProcessService();
                },
                cancel: (event) => {
                  console.log('The user cancelled the iframe', event);
                  this.cancelProcess();
                },
                error: (error) => {
                  console.error('Some runtime error was generated during insideConnect ', error);
                  // @ts-ignore
                  this.unhandledError(error);
                },
                loaded: () => {
                  console.log('This gets called only once after the iframe has finished loading ');
                  document.getElementById('finicityConnectIframe').style.height = '755px';
                  document.getElementById('finicityConnectIframe').style.minWidth = '100%';
                  this.showLoading = false;
                },
                route: (event) => {
                  if (event.data.screen === 'select-accounts') {
                    this.httpService.journalLogIn(this.paramsAppId, this.paramsApplicantId,
                      event.data.screen, event.data.params.institutionId).subscribe();
                  }
                  console.log('This is called as the user navigates through Connect ', event);
                },
                user: (event) => {
                  console.log('This is called as the user interacts with Connect ', event);
                  try {
                    if (event.data.action === 'SelectInstitution' && !event.data.supported) {
                      this.bankNotSupported(this.paramsApplicantId);
                    }
                  } catch (e) {
                    console.log('e');
                  }
                }
              });
            }
          }).catch((error) => {
            console.log(error);
            this.showUnexpectedError(error);
          });
        }
      }, (error) => {

        if (error instanceof TimeoutError) {
          this.showTimeOutError(error);
        } else {
          this.showConnectionError(error);
        }
      });

  }

  errorProcess(error, deleteIframes) {
    this.showLoading = false;
    this.finishProcess = false;
    this.hasError = true;
    if (deleteIframes) {
      try {
        // @ts-ignore
        window.finicityConnect.destroy();
      } catch (e) {
        console.log(e);
      }
      this.deleteAllIframes();
    }
  }

  showConnectionError(err) {
    this.errorProcess(err, true);
    this.error = {
      title: 'Network Error', text: 'Sorry, the operation couldn’t be completed. Please try again later.',
      buttonText: 'TRY AGAIN', returnCode: 'RETRY'
    };
  }

  showFinicityError(err) {
    this.errorProcess(err, true);
    console.log(err);
    this.error = {
      title: 'Please check!',
      text: err,
      buttonText: 'EXIT', returnCode: 'RETRY'
    };
  }

  showFinicityTitleError(err, title) {
    this.errorProcess(err, true);
    console.log(err);
    this.error = {
      title: title,
      text: err,
      buttonText: 'EXIT', returnCode: 'RETRY'
    };
  }


  showUnexpectedError(err) {
    this.errorProcess(err, true);
    this.error = {title: 'Opss!', text: 'Something went wrong. We are working on getting this fixed as soon as we can.',
      buttonText: 'Retry', returnCode: 'RETRY'};
  }

  unhandledError(err) {
    this.errorProcess(err, true);
    this.error = {
      title: 'Opss!',
      text: 'Something went wrong. We are working on getting this fixed as soon as we can.', buttonText: 'Retry', returnCode: 'RETRY'
    };
  }

  private showTimeOutError(err) {
    this.errorProcess(err, true);
    this.error = {
      title: 'Time Out', text: 'A network related error occurred while connecting. Please try one more time.',
      buttonText: 'TRY AGAIN', returnCode: 'RETRY'
    };
  }

  cancelProcess() {
    this.errorProcess('', true);
    this.error = {
      title: 'Oops!',
      text: 'You have closed the window during the connection. Please try again.', buttonText: 'TRY AGAIN', returnCode: 'RETRY'
    };
  }


  deleteAllIframes() {
    const iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) {
      if (iframes[i].title !== 'voiceflow-chat') {
        iframes[i].parentNode.removeChild(iframes[i]);
      }
    }
  }

  ngOnDestroy() {
    this.deleteAllIframes();
    // @ts-ignore
    if (window.finicityConnect) {
      // @ts-ignore
      window.finicityConnect.destroy();
    }
    this.destroyed$.next();
  }


  finishProcessService() {
    this.loadingMessage = 'Processing ...';
    this.showLoading = true;
    this.deleteAllIframes();
    this.httpService.closeProofOfIncome(this.paramsAppId, this.paramsApplicantId, this.reportId).pipe(
      catchError((error: HttpErrorResponse) => {
        // Finicity Error
        if (error && error.error) {
          if (error.error.detail) {
            const finicityError = JSON.parse(error.error.detail);
            console.log('Controlled Error ', finicityError.message);
            var errorText = finicityError.message;
            if (finicityError.message.includes('No matching account types apply')) {
              errorText = 'A source of income was not found on the selected bank account.\nKindly select an alternate bank account with a source of income or upload documentation that presents your income details.';
              this.showFinicityTitleError(errorText, 'Income Cannot be Verified');
            } else {
              this.showFinicityError(errorText);
            }
            return [];
          }
          return of(error);
        }

        console.log('Generic Error ', error);
        return of(error);

      })
    ).pipe(timeout(59000)).subscribe((url) => {
      this.showLoading = false;
      this.finishProcess = true;
    }, (error) => {
      this.showConnectionError(error);
    });
  }

  bankNotSupported(paramsApplicantId: number) {this.dialog.open(DialogNotSupportedBankComponent, {
      panelClass: 'custom-dialog-container', data: this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId)
    }).afterClosed().subscribe(result => {
      if (result === 'uploads') {
        this.httpService.proofOfIncomeDecline(this.paramsAppId, this.paramsApplicantId).pipe(
          catchError((error: HttpErrorResponse) => {
            // Finicity Error
            if (error && error.error) {
              return of(error);
            }
            console.log('Generic Error ', error);
            return of(error);
          })
        ).pipe(timeout(59000)).subscribe((url) => {
          this.router
            .navigate(['/dashboard', this.paramsAppId, 'upload-documents']).catch(console.log);
        }, (error) => {
          console.log(error);
          this.showConnectionError(error);
        });
      }
    });
  }


  bankNotFound(event: Event, paramsApplicantId: number) {
    event.preventDefault();
    console.log(paramsApplicantId);
    console.log(this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId));
    this.dialog.open(DialogNotFindBankComponent, {
      panelClass: 'custom-dialog-container', data: this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId)
    }).afterClosed().subscribe(result => {
      if (result === 'uploads') {
        this.httpService.proofOfIncomeDecline(this.paramsAppId, this.paramsApplicantId).pipe(
          catchError((error: HttpErrorResponse) => {
            // Finicity Error
            if (error && error.error) {
              return of(error);
            }

            console.log('Generic Error ', error);
            return of(error);

          })
        ).pipe(timeout(59000)).subscribe((url) => {
          this.router
            .navigate(['/dashboard', this.paramsAppId, 'upload-documents']).catch(console.log);
        }, (error) => {
          console.log(error);
          this.showConnectionError(error);
        });

      }
    });
  }

  actionError($eve: string) {
    if ($eve === 'RETRY') {
      window.location.reload();
    } else if ($eve === 'EXIT') {
      this.deleteAllIframes();
      this.router
        .navigate(['/dashboard', this.paramsAppId]).catch(console.log);
    }
  }


}

@Component({
  selector: 'tev-dialog-not-find-bank',
  styleUrls: ['./dialog-not-find-bank.scss'],
  templateUrl: 'dialog-not-find-bank.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogNotFindBankComponent implements OnInit {

  proofOfIncomeTask: ProofOfIncome;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogNotFindBankComponent>,
  ) {
  }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data);
    this.proofOfIncomeTask = this.data;
  }

  continueWithFinicity() {
    this.dialogRef.close('continue');
  }

  goToUploads() {
    this.dialogRef.close('uploads');
  }

}

@Component({
  selector: 'tev-dialog-not-supported-bank',
  styleUrls: ['./dialog-not-find-bank.scss'],
  templateUrl: 'dialog-not-supported-bank.html',
})
export class DialogNotSupportedBankComponent implements OnInit {

  proofOfIncomeTask: ProofOfIncome;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogNotSupportedBankComponent>,
  ) {
  }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data);
    this.proofOfIncomeTask = this.data;
  }

  goToUploads() {
    this.dialogRef.close('uploads');
  }

}

