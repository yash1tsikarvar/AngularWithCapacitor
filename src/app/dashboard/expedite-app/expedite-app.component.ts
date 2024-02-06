import { Component, OnInit } from '@angular/core';
import { Fees } from '../../shared/definitions/constants/fees';

@Component({
  selector: 'tev-expedite-app',
  templateUrl: './expedite-app.component.html',
  styleUrls: ['./expedite-app.component.scss']
})
export class ExpediteAppComponent implements OnInit {

  expedite_fee: number;
    
  constructor() { 
    this.expedite_fee = Fees.EXPEDITE_FEE;    
  }

  ngOnInit() {
  }

}
