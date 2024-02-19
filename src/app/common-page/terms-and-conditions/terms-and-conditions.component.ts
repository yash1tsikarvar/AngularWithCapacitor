import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tev-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

  logOut(event: Event) {
    event.preventDefault();

    this.authService
      .logOut()
      .subscribe(() => {
        this.router
          .navigate(['/'])
          .catch(console.log)
      })
  }

}
