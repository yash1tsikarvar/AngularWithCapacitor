import { Component, OnInit, isDevMode } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'tev-info-after-pay',
  templateUrl: './info-after-pay.component.html',
  styleUrls: ['./info-after-pay.component.scss']
})
export class InfoAfterPayComponent implements OnInit {

  shownext: boolean;
  infoUrl: string;
  playVideo: boolean;
  player: any;
  iphonePlayButton: boolean;

  constructor() {

  }

  ngOnInit() {
    this.shownext = isDevMode() ? true : false;
    this.playVideo = true;
    this.iphonePlayButton = false;
    this.infoUrl = "https://support.tenantevaluation.com/support/solutions/folders/65000154131";
    this.player = new Player('videoplayer2');
    this.player.on('ended', () => {
        this.shownext = true;
        this.playVideo = false;
    });
    this.player.on('play', () => {
      this.player.off('ended');
      this.player.on('ended', () => {
        this.shownext = true;
        this.playVideo = false;
      });
    });
    this.player.on('timeupdate', () => {
      this.player.off('ended');
      this.player.on('ended', () => {
        this.shownext = true;
        this.playVideo = false;
      });
    });
    setTimeout(() => {
        this.shownext = true;
    }, 120000);
    this.setDashboardVisible(false);
    if(navigator && navigator.userAgent){
        if(/iPhone/.test(navigator.userAgent)) {
            this.iphonePlayButton = true;
        }
    }
  }

  ngAfterViewInit() {
    if(navigator && navigator.userAgent){
        if(/iPhone/.test(navigator.userAgent)) {
            this.retry();
        }
    }
  }

  retryIphone() {
    this.iphonePlayButton = false;
    this.retry();
  }

  goToInfoPage() {
        window.open(this.infoUrl, "_blank");
  }

  retry() {
    this.playVideo = true;
    this.player.play();
  }

  ngOnDestroy() {
    this.setDashboardVisible(true);
  }

  setDashboardVisible(visible: boolean) {
    let element = document.getElementsByClassName('dashboard-main__head');
    for (var i = element.length - 1; i >= 0; --i) {
      if (!visible)
        element[i].classList.add('hide');
      else
        element[i].classList.remove('hide');
    }
    let element2 = document.getElementsByTagName('tev-nav-bar');
    for (var i = element2.length - 1; i >= 0; --i) {
      if (!visible)
        element2[i].classList.add('hide');
      else
        element2[i].classList.remove('hide');
    }

    let element3 = document.getElementsByTagName('main');
    for (var i = element3.length - 1; i >= 0; --i) {
      if (!visible)
        element3[i].classList.add('fullscreen');
      else
        element3[i].classList.remove('fullscreen');

      for (var j = element3[i].children.length - 1; j >= 0; --j) {
        if (!visible)
          element3[i].children[j].classList.add('fullscreen');
        else
          element3[i].children[j].classList.remove('fullscreen');

      }
    }
  }

}
