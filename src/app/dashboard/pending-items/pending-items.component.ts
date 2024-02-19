import { Component, Input, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../shared/definitions/responses/application.response';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'tev-pending-items',
  templateUrl: './pending-items.component.html',
  styleUrls: ['./pending-items.component.scss']
})
export class PendingItemsComponent implements OnInit {

  @Input() mainApplication: ApplicationResponse;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  nothingPending(): boolean {
    const {pendingVerifications, workingDocumentTasks, ownerSigningStatus, workingReferenceTasks} = this.mainApplication;

    return !(!!pendingVerifications && pendingVerifications.length)
      && !(!!workingDocumentTasks && workingDocumentTasks.length)
      && (!!ownerSigningStatus && ownerSigningStatus !== 'WAITING_OWNER_RESPONSE')
      && !(!!workingReferenceTasks && workingReferenceTasks.length);
  }

}
