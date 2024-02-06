import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'tev-refund-app',
  templateUrl: './refund-app.component.html',
  styleUrls: ['./refund-app.component.scss']
})
export class RefundAppComponent implements OnInit, AfterViewInit {

  @ViewChild('signaturePad', {static: false}) signaturePadRef: ElementRef;
  @ViewChild('signatureText', {static: false}) signatureTextRef: ElementRef;

  signatureCanvas: HTMLCanvasElement;
  signatureTextCanvas: HTMLCanvasElement;
  signaturePad: SignaturePad;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initSignature();
  }

  private initSignature() {
    this.signatureCanvas = this.signaturePadRef.nativeElement;
    this.signatureTextCanvas = this.signatureTextRef.nativeElement;
    this.setCanvasSize();
    this.signaturePad = new SignaturePad(this.signatureCanvas);
    this.signaturePad.onEnd = () => {

      const signature = this.signaturePad.toDataURL('image/png');

    };
  }

  private setCanvasSize() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    if (this.signatureCanvas) {
      this.signatureCanvas.width = this.signatureCanvas.offsetWidth * ratio;
      this.signatureCanvas.height = this.signatureCanvas.offsetHeight * ratio;
      this.signatureCanvas.getContext('2d').scale(ratio, ratio);

      if (this.signaturePad) {
        this.signaturePad.clear();
      }
    }

    if (this.signatureTextCanvas) {
      this.signatureTextCanvas.width = this.signatureTextCanvas.offsetWidth * ratio;
      this.signatureTextCanvas.height = this.signatureTextCanvas.offsetHeight * ratio;
      this.signatureTextCanvas.getContext('2d').scale(ratio, ratio);
    }

  }

}
