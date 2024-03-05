import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'tev-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  url: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.url = params['url'];
      console.log('URL:', this.url);
    });
  }
}