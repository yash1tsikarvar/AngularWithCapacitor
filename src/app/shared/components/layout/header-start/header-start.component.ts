import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'tev-header-start',
  templateUrl: './header-start.component.html',
  styleUrls: ['./header-start.component.scss']
})
export class HeaderStartComponent implements OnInit {

  isHomePage: boolean = false;
  constructor(
    public authService: AuthService,
    private router: Router,) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.isHomePage = event.url === '/community/home';
        }
      });
  }

  ngOnInit() {
  }
  back() {
    window.history.back();
  }
}
