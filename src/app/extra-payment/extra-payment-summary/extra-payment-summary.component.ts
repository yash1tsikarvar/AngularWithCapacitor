import { Component, Input, OnInit } from '@angular/core';
import { ExtraPaymentDetailResponse } from '../../shared/definitions/responses/extra-payment-detail.response';

@Component({
  selector: 'tev-extra-payment-summary',
  templateUrl: './extra-payment-summary.component.html',
  styleUrls: ['./extra-payment-summary.component.scss']
})
export class ExtraPaymentSummaryComponent implements OnInit {

  @Input() extraPayment: ExtraPaymentDetailResponse;

  constructor() {
  }

  ngOnInit() {
  }

}
