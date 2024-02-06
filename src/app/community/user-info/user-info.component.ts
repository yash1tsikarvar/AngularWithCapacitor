import { Component, OnInit, isDevMode } from '@angular/core';
import Player from '@vimeo/player';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'tev-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  code: string;
  shownext: boolean;
  infoUrl: string;
  playVideo: boolean;
  player: any;
  iphonePlayButton: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params) => {
      const { code } = params
      this.code = code
    })
    this.shownext = isDevMode() ? true : false;
    this.playVideo = true;
    this.iphonePlayButton = false;
    this.infoUrl = 'https://support.tenantevaluation.com/support/solutions/articles/65000166337-getting-started-with-your-application';
    this.player = new Player('videoplayer1');
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

  goToInfoPage() {
        window.open(this.infoUrl, "_blank");
  }

  retry() {
    this.playVideo = true;
    this.player.play();
  }

  retryIphone() {
      this.iphonePlayButton = false;
      this.retry();
  }

  submit() {
    this.router.navigate(['/community', this.code]).catch(console.log)
  }

}
