import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-message-with-icon',
  templateUrl: './message-with-icon.component.html',
  styleUrls: ['./message-with-icon.component.scss']
})
export class MessageWithIconComponent implements OnInit {

  @Input() img: string;
  @Input() altText: string;
  @Input() text: string;
  @Input() subError: string;
  @Input() smallText: string;

  constructor() { }

  ngOnInit() {
  }

}
