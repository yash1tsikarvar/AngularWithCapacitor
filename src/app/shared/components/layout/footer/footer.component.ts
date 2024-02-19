import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear:number;

  constructor() { }

  ngOnInit() {
    this.currentYear=new Date().getFullYear();
  }

}
