import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[tevDropzone]'
})
export class DropzoneDirective {

  @Output() dropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() hovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }

}
