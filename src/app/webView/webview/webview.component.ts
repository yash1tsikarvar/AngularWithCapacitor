import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tev-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.scss']
})
export class WebviewComponent implements OnInit {
  url: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.url = params['url'];
      console.log('URL:', this.url);
    });
  }

}
