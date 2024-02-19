import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-verification-finish',
  templateUrl: './verification-finish.component.html',
  styleUrls: ['./verification-finish.component.scss']
})
export class VerificationFinishComponent implements OnInit {

  @Input() title: string;
  @Input() error: string;
  @Input() complete: boolean;
  @Input() id: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
