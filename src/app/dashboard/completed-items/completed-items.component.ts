import { Component, Input, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import { PropertyInfoResponse} from '../../shared/definitions/responses/property-info.response';
import { SigningStatus } from '../../shared/definitions/models/signature-completion-status.model';
import {AuthService} from '../../core/services/auth.service';
import swal from 'sweetalert2';
import {HttpService} from '../../core/services/http.service';

@Component({
  selector: 'tev-completed-items',
  templateUrl: './completed-items.component.html',
  styleUrls: ['./completed-items.component.scss']
})
export class CompletedItemsComponent implements OnInit {

  @Input() mainApplication: ApplicationResponse;

  constructor(
    private authService: AuthService,
    private httpService: HttpService
  ) {
  }

  ngOnInit() {
  }

  showSigningStatus(): boolean {

    if (this.mainApplication) {
      return !(<SigningStatus[]>['UNSIGNED', 'NOT_REQUIRED', 'PARTIALLY_SIGNED'])
        .includes(this.mainApplication.signingStatus.signingStatus);
    }

    return false;
  }

  signStatusClass(): Record<string, boolean> {
    const {signingStatus} = this.mainApplication;
    return {
      'with-alert': signingStatus.signingStatus !== 'SIGNED',
    };
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
        animation: false
      });
  }

  showJournalTask(taskId: any) {
    this.httpService.showJournalTask(taskId)
  }

  nothingCompleted(): boolean {
    if (this.mainApplication) {
      const {
        signingStatus,
        completedDocumentTasks,
        completedVerifications,
        completedReferenceTasks,
        ownerSigningStatus,
        signedDocumentUrl
      } = this.mainApplication;

      return (!signingStatus || signingStatus.signingStatus !== 'SIGNED')
        && (!completedDocumentTasks || !completedDocumentTasks.length)
        && (!completedVerifications || !completedVerifications.length)
        && (!completedReferenceTasks || !completedReferenceTasks.length)
        && (!ownerSigningStatus || ownerSigningStatus !== 'COMPLETE')
        && !signedDocumentUrl
        ;
    }

    return true;
  }

}
