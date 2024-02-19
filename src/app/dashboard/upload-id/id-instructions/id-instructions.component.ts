import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {UploadFilesService} from '../../upload-files-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'tev-id-instructions',
  templateUrl: './id-instructions.component.html',
  styleUrls: ['./id-instructions.component.scss']
})
export class IdInstructionsComponent implements OnInit, OnDestroy {


  completePercentage: string;

  animationProcess = 0;
  genericText = `Please make sure the text is readable, the card is
  well lit and all corners are visible`;

  @Output() hideInstruction = new EventEmitter<boolean>();
  private documentTaskId: number;

  constructor(private httpService: HttpService,
              private uploadService: UploadFilesService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private deviceDetector: DeviceDetectorService) {
    this.listenToUrlParams();
  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {documentTaskId} = params;
        this.documentTaskId = documentTaskId;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }


  updateProcess($event: number) {
    this.animationProcess = 100 - $event;
  }

  hideShowInstructions() {
    this.hideInstruction.emit(true);
    if (this.deviceDetector.isDesktop()) {
      this.router.navigate(['../../upload-selector', this.documentTaskId], {relativeTo: this.activeRoute} );
    } else {
      this.router.navigate(['../../upload-id', this.documentTaskId], {relativeTo: this.activeRoute});
    }

  }
}
