import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
