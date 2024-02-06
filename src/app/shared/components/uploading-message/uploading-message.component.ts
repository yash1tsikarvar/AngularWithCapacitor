import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'tev-uploading-message',
    templateUrl: './uploading-message.component.html',
    styleUrls: ['./uploading-message.component.scss']
})
export class UploadingMessageComponent {

    initCounter = 60;

    @Input()
    set init(init: number) {
        this.initCounter = init;
    }

    @Output()
    closeMessage = new EventEmitter<string>();

    constructor() {
    }

    closeUploadFinish() {
        this.closeMessage.emit('finish');
    }
}
