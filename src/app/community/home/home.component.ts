import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { HttpService } from '../../core/services/http.service';
import { ApplicationListItem } from '../../shared/definitions/responses/application-list.response';



@Component({
  selector: 'tev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentYear: number;
  applications: ApplicationListItem[] = [];
  roleRealtor: Boolean = false;
  processing: Boolean = false;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    const dataUser = this.authService.getDecodedToken()
    this.currentYear = new Date().getFullYear();
    if (dataUser.auth.includes('ROLE_CALL_CENTER_L1')) {
      this.openAppsDashboard();
    }
    if ((dataUser.auth.includes('ROLE_REALTOR'))) {
      this.roleRealtor = true;
    }
    
    // this.httpService
    // .getApplicationList(true)
    // .subscribe(applicationsResponse => {
    //   if (applicationsResponse) {
    //     this.applications = applicationsResponse.applications;
    //     if (this.applications.length < 1) {
    //       this.router
    //         .navigate(['/community'])
    //         .catch(console.log);
    //     }
    //   }
    // });
  }

  openExternalUrl() {
    window.open('https://support.tenantevaluation.com/support/solutions/articles/65000166337-getting-started-with-your-application', '_blank');
  }
  back(){
    window.history.back();
  }

  openCommunity() {
    this.router
      .navigate(['/community'])
      .catch(console.log);
  }

  openAppsDashboard() {
    this.router
      .navigate(['/application-list'])
      .catch(console.log);
  }

  submit(type: string) {
    this.processing = true;
    if (type === 'NA') {
      this.router
        .navigate(['/community/enter-code'])
        .catch(console.log);
    } else if (type === 'RA') {
      this.router
        .navigate(['/application-list'])
        .catch(console.log);
    }
  }
}
