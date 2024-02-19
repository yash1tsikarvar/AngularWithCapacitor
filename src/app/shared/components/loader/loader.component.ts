import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() loading_text = 'Please wait!';

  constructor() { }

  ngOnInit() {
  }

}
