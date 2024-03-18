import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tev-header-without-logo',
  templateUrl: './header-without-logo.component.html',
  styleUrls: ['./header-without-logo.component.scss']
})
export class HeaderWithoutLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  back() {
    window.history.back();
  }
}
