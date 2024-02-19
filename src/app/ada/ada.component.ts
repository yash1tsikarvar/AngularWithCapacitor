import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'tev-ada',
  templateUrl: './ada.component.html',
  styleUrls: ['./ada.component.scss']
})

export class AdaComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;
  isLoad = environment.showAda ? false : true;

  constructor() { }

  loadAda() {
    const Window = window as any;
    Window.__AudioEyeSiteHash = "00be13c4d26695fbb921aadaaa931c43";
    var a = document.createElement("script");
    a.src = "https://wsmcdn.audioeye.com/aem.js";
    a.type = "text/javascript";
    a.setAttribute("async", "");
    document.getElementsByTagName("body")[0].appendChild(a);
  };

  waitForElementToDisplay(selector: string, time: number) {
    const item: HTMLElement = document.querySelector(selector);
    if (item !== null) {
      this.isLoading = false;
      item.click();
    } else {
      if (time <= 0) {
        this.isLoading = false;
        this.isError = true;
      } else {
        setTimeout(() => {
          this.waitForElementToDisplay(selector, time - 100);
        }, 100);
      }
    }
  }

  load() {
    this.loadAda();
    this.isLoading = true;
    this.isLoad = true;
    this.waitForElementToDisplay("#ae_launcher", 10000);
  }

  ngOnInit() {
  }

}
