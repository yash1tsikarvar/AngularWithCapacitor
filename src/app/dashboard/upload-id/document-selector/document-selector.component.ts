import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'tev-document-selector',
  templateUrl: './document-selector.component.html',
  styleUrls: ['./document-selector.component.scss'],
})
export class DocumentSelectorComponent implements OnInit, OnDestroy {


  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  documentTaskId: number;
  applicationId: number;

  constructor(public router: Router, private activeRoute: ActivatedRoute) {
    this.listenToUrlParams();
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next(true);
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {applicationId, documentTaskId} = params;
        this.documentTaskId = documentTaskId;
        this.applicationId = applicationId;
      });
  }


  selectId() {
    this.router.navigate(['/uploads/' + this.applicationId + '/id', this.documentTaskId],
      { state: {documentType: 'DRIVER_LICENSE'}}).catch(console.log);
  }

  selectPassport() {
    this.router.navigate(['/uploads/' + this.applicationId + '/id', this.documentTaskId],
      {state: {documentType: 'PASSPORT'}}).catch(console.log);

  }
}
