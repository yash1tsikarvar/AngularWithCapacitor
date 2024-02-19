import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'tev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    public authService: AuthService,
    private router: Router,) { }

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
