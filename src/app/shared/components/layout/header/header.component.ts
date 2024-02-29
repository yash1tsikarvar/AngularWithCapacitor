import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'tev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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



  logOut(event: MouseEvent) {
    event.preventDefault();
    this.authService
      .logOut()
      .subscribe(() => {
        this.router
          .navigate(['/'])
          .catch(console.log);
      });
  }

  back() {
    window.history.back();
  }
  home(event: MouseEvent) {
    event.preventDefault();
    if (this.authService.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1')) {
      this.router
        .navigate(['application-list'])
        .catch(console.log);
    } else {
      this.router
        .navigate(['/community/home'])
        .catch(console.log);
    }
  }

  callCenter(event: MouseEvent) {
    event.preventDefault();
    const url = 'https://connect.tenantevaluation.com';
    window.open(url, '_blank');
  }
}
