import {AfterViewInit, Component, Inject, isDevMode, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import Player from '@vimeo/player';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DeviceDetectorService} from 'ngx-device-detector';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'tev-sign-video',
  templateUrl: './sign-video.component.html',
  styleUrls: ['./sign-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignVideoComponent implements OnInit, OnDestroy, AfterViewInit {

  shownext: boolean;
  infoUrl: string;
  playVideo: boolean;
  player: any;
  iphonePlayButton: boolean;
  showSkipButton: boolean;
  applicantId: number;
  applicationId: number;

  constructor(private authService: AuthService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<SignVideoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public deviceDetector: DeviceDetectorService) {

  }

  ngOnInit() {

    this.shownext = true;
    this.playVideo = true;
    this.iphonePlayButton = false;
    this.showSkipButton = false;
    this.infoUrl = 'https://support.tenantevaluation.com/support/solutions/articles/65000181223-proof-of-income-bank-verification-report';
    this.player = new Player('videoplayer4');
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
    }, 160000);
    this.setDashboardVisible(false);
    if (navigator && navigator.userAgent) {
      if (/iPhone/.test(navigator.userAgent)) {
        this.iphonePlayButton = true;
      }
    }
    setTimeout(() => {
      this.showSkipButton = true;
    }, isDevMode() ? 0 : 27000);
  }

  ngAfterViewInit() {
    if (navigator && navigator.userAgent) {
      if (/iPhone/.test(navigator.userAgent)) {
        this.retry();
      }
    }
  }

  retryIphone() {
    this.iphonePlayButton = false;
    this.retry();
  }


  retry() {
    this.playVideo = true;
    this.player.play();
  }

  ngOnDestroy() {
    this.setDashboardVisible(true);
  }

  setDashboardVisible(visible: boolean) {
    const element = document.getElementsByClassName('dashboard-main__head');
    for (let i = element.length - 1; i >= 0; --i) {
      if (!visible) {
        element[i].classList.add('hide');
      } else {
        element[i].classList.remove('hide');
      }
    }
    const element2 = document.getElementsByTagName('tev-nav-bar');
    for (let i = element2.length - 1; i >= 0; --i) {
      if (!visible) {
        element2[i].classList.add('hide');
      } else {
        element2[i].classList.remove('hide');
      }
    }

    const element3 = document.getElementsByTagName('main');
    for (let i = element3.length - 1; i >= 0; --i) {
      if (!visible) {
        element3[i].classList.add('fullscreen');
      } else {
        element3[i].classList.remove('fullscreen');
      }

      for (let j = element3[i].children.length - 1; j >= 0; --j) {
        if (!visible) {
          element3[i].children[j].classList.add('fullscreen');
        } else {
          element3[i].children[j].classList.remove('fullscreen');
        }

      }
    }
  }

  openDialog(id: number) {
    this.dialogRef.close();
  }

  goToSignature() {
    this.dialogRef.close();
  }
}
