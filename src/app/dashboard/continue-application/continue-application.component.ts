import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';
import {SigningStatus} from '../../shared/definitions/models/signature-completion-status.model';
import {HttpService} from '../../core/services/http.service';
import {UiService} from '../../ui/ui.service';
import {SendEmailReferenceVerification} from '../../shared/definitions/requests/send-email-referece-verification.request';
import swal, {SweetAlertResult} from 'sweetalert2';
import {UploadFilesService} from '../upload-files-service.service';
import {MatDialog} from '@angular/material/dialog';
import {ProofOfIncome} from '../../shared/definitions/models/proof-of-income';
import {AuthService} from '../../core/services/auth.service';
import {DecodeTokenModel} from '../../shared/definitions/models/decode-token.model';
import {FinicityVideoComponent} from '../finicity-video/finicity-video.component';
import {Router} from '@angular/router';
import {SignVideoComponent} from '../../shared/components/sign-video/sign-video.component';

@Component({
  selector: 'tev-continue-application',
  templateUrl: './continue-application.component.html',
  styleUrls: ['./continue-application.component.scss'],
})
export class ContinueApplicationComponent implements OnInit, OnDestroy {

  @Input() mainApplication: ApplicationResponse;

  percentageComplete: string;

  selectedApplicant: number;

  loggedInUser: DecodeTokenModel;

  reviewsFacesWidget = (window as any).reviewsFacesWidget;


  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private uploadFileService: UploadFilesService,
    public dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {
  }

  ngOnInit() {

    this.loggedInUser = this.authService.getDecodedToken();
    this.percentageComplete = this.uploadFileService.getPercentage(this.mainApplication);
    const iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) {
      if (iframes[i].title !== 'voiceflow-chat') {
        iframes[i].parentNode.removeChild(iframes[i]);
      }
    }

    if (!this.showPendingDocumentsUpload()) {
      if (this.reviewsFacesWidget) {
        const decodedToken = this.authService.getDecodedToken();
        this.reviewsFacesWidget.load({
          jwt: this.authService.getUserIdToken(),
          label: 'How was your upload experience?',
          type: 'TENANTEV',
          step: 'DOCUMENTS',
          position: 'bottom',
          showtime: 9,
          showtimeaftercompleted: 1,
          feedback: true,
          data: `Application ID: ${this.mainApplication.applicationId} Rol: ${this.loggedInUser.auth}`,
          dataid: this.mainApplication.applicationId,
          localstorage: true,
          lskey: decodedToken.auth,
        });
      }
    }

  }

  showSigning(): boolean {

    if (this.mainApplication) {
      const {signingStatus} = this.mainApplication;
      return (<SigningStatus[]>['UNSIGNED', 'PARTIALLY_SIGNED']).indexOf(signingStatus.signingStatus) > -1;
    }

    return false;
  }

  showPendingDocumentsUpload(): boolean {

    if (this.mainApplication && this.mainApplication.pendingDocumentTasks.length) {

      return this.mainApplication.pendingDocumentTasks
        .some(task => task.status === 'P');

    }
    if (this.mainApplication && this.mainApplication.proofOfIncomeManual.length > 0) {
      return true;
    }
    return false;
  }

  unFreezeCredit(event: Event, creditId: string) {
    event.preventDefault();

    this.httpService
      .reRunCreditById(creditId)
      .subscribe(() => {
        this.uiService.showSuccess({
          message: 'Credit Un-frozen'
        });
      });
  }

  noActionsNeeded(): boolean {
    return !this.showSigning()
      && !this.showPendingDocumentsUpload()
      && !this.hasVerification()
      && this.mainApplication.ownerSigningStatus !== 'COMPLETE'
      && this.mainApplication.personalReferenceVerification.length === 0
      && this.mainApplication.employmentReferenceVerification.length === 0
      && this.mainApplication.ownerSigningStatus !== 'OWNER_INFO_MISSING';
  }

  sendEmailReference(reference: any, type: string) {

    let emailReferenceDto: SendEmailReferenceVerification;

    switch (type) {
      case 'employment':
        const employmentReferenceVerification =
          this.mainApplication.employmentReferenceVerification.find(x => x.idReference === reference.idReference);

        emailReferenceDto = {
          applicantId: employmentReferenceVerification.applicantId,
          id: employmentReferenceVerification.idReference,
          applicationId: employmentReferenceVerification.applicationId,
          type: 'EMPLOYMENT'
        };
        break;
      case 'personal':
        const personalReferenceVerification =
          this.mainApplication.personalReferenceVerification.find(x => x.idReference === reference.idReference);
        emailReferenceDto = {
          applicantId: personalReferenceVerification.applicantId,
          id: personalReferenceVerification.personalVerificationId,
          applicationId: personalReferenceVerification.applicationId,
          type: 'REFERENCE'
        };
        break;
      case 'landlord':
        const landlordReferenceVerification =
          this.mainApplication.landlordReferenceVerification.find(x => x.id === reference.id);
        emailReferenceDto = {
          applicantId: landlordReferenceVerification.applicantId,
          id: landlordReferenceVerification.id,
          applicationId: landlordReferenceVerification.applicationId,
          type: 'LANDLORD'
        };
        break;
      case 'owner':
        emailReferenceDto = {
          applicantId: null,
          id: null,
          applicationId: this.mainApplication.applicationId,
          type: 'OWNER'
        };
        this.mainApplication.ownerInfo.hideEmailLink = true;
        break;
    }

    if (emailReferenceDto) {
      this.httpService
        .resendEmailToReferenceInformation(emailReferenceDto)
        .subscribe(() => {
          this.uiService
            .showSuccess({
              message: 'Email Resent!'
            });
        });
    }
  }

  showJournals(pendingItem: any) {
    let text = '';
    pendingItem.journal.forEach(value => text += '<p class="journal_text small">' + value + '</p>');
    swal(
      {
        title: 'Lastest events',
        html: text,
        customClass: 'journal-log',
        focusConfirm: false,
        confirmButtonText: 'Close',
        animation: false,
      });
  }

  showJournalTask(taskId: any) {
    this.httpService.showJournalTask(taskId);
  }

  showJournalFinicity(applicationId: string, applicantId: string) {
    this.httpService.showJournalFinicity(applicationId, applicantId);
  }


  showOwnerInfo() {

    if (this.mainApplication.ownerSigningStatus === 'NOT_REQUIRED') {
      return false;
    } else if (this.mainApplication.ownerSigningStatus === 'OWNER_INFO_MISSING' ||
      this.mainApplication.ownerSigningStatus === 'WAITING_APPLICANT_SIGNING' ||
      this.mainApplication.ownerSigningStatus === 'WAITING_OWNER_RESPONSE') {
      return true;
    } else if (this.mainApplication.signingStatus.signingStatus !== 'SIGNED' ||
      this.mainApplication.ownerSigningStatus === 'COMPLETE'
    ) {
      return false;
    }

    return true;
  }

  hasVerification() {
    if (this.mainApplication.personalReferenceVerification.length > 0 ||
      this.mainApplication.employmentReferenceVerification.length > 0 ||
      this.mainApplication.landlordReferenceVerification.length > 0 ||
      this.showOwnerInfo()) {
      return true;
    }
    return false;
  }

  isEditable() {
    const lastEdit24h = new Date(this.mainApplication.ownerInfo.ownerInfoLastEdit);
    const now = new Date();
    lastEdit24h.setDate(lastEdit24h.getDate() + 1);

    return (this.mainApplication.ownerInfo.ownerInfoLastEdit == null || lastEdit24h < now);
  }

  isRealtor(){
    if (this.authService.getDecodedToken().auth.includes('ROLE_REALTOR')) {
      return true;
    }
    return null;
  }

  openDialog(id: number) {
    if (!this.authService.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1')) {
      this.selectedApplicant = id;
      this.dialog.open(FinicityVideoComponent, {
        data: {name: id},
        disableClose: true,
        height: '100%',
        width: '95%',
        panelClass: 'other-dialog-container'
      }).afterClosed().subscribe(res => {

        this.dialog.open(DialogFinicity, {panelClass: 'custom-dialog-container'}).afterClosed().subscribe(result => {
          this.route.navigate(['dashboard', this.mainApplication.applicationId, 'proof-income', id, 'select-bank']);
        });

      });
    }
  }


  goToFinicity() {

  }

  isEnable(pendingItem: ProofOfIncome) {
    if (pendingItem.enable) {
      return 'tev-btn tev-btn--common tev-btn--primary';
    } else {
      return 'user-action__box';
    }
  }

  needSign() {
    swal(
      {
        title: 'Signatures Required',
        text: 'Missing electronic signatures within the property agreement',
        type: 'warning',
        customClass: 'notify-optional-file',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        focusConfirm: false,
        animation: false
      })
      .then((response: SweetAlertResult) => {
        if (!response.value) {

        } else {

        }
      });
  }

  ngOnDestroy() {
    if (this.reviewsFacesWidget) {
      this.reviewsFacesWidget.close();
    }
  }

  showVideoSigning() {
    if (this.isSkipped()) {
      window.location.href = this.mainApplication.signingStatus.url;
      return;
    }
    if (!this.authService.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1')) {
      this.dialog.open(SignVideoComponent, {
        data: {redirect: this.mainApplication.signingStatus.url},
        disableClose: true,
        height: '100%',
        width: '95%',
        panelClass: 'other-dialog-container'
      }).afterClosed().subscribe(res => {
        localStorage.setItem('video-signature-' + this.mainApplication.applicationId, 'skipped');
        window.location.href = this.mainApplication.signingStatus.url;
      });
    }
  }

  isSkipped() {
    if (localStorage.getItem('video-signature-' + this.mainApplication.applicationId) === 'skipped') {
      return true;
    }
    return false;
  }
}

@Component({
  selector: 'tev-dialog-finicity',
  templateUrl: 'dialog-finicity.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogFinicity {
}


