import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tev-finicity-finish-bank',
  templateUrl: './finicity-finish-bank.component.html',
  styleUrls: ['./finicity-finish-bank.component.scss']
})
export class FinicityFinishBankComponent implements OnInit {

  @Input() applicationId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
