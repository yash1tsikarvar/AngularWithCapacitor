import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import HttpStatusCode from '../shared/utils/HTTPStatusCode';
import {of} from 'rxjs';
import { FullUrlResponse } from '../shared/definitions/models/full-url.model';

@Component({
  selector: 'tev-redirect-short',
  templateUrl: './redirect-short.component.html',
  styleUrls: ['./redirect-short.component.scss']
})
export class RedirectShortComponent implements OnInit {

  alias: string;
  errorData = '';
  status = '';

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) {
    this.listenToUrlParams();

  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe((params: any) => {
        const {shorturl} = params;
        this.alias = shorturl;
        console.log(this.alias);
        
        this.getFullUrlFromService(this.alias);
      });
  }


  getFullUrlFromService(alias :string) {
    
        this.httpService.getFullLinkByAlias(alias)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              this.errorURL(error);
              return of(error);
            })
          )
          .subscribe((res) => {
            console.log(res);
    
            if (res && !(res instanceof HttpErrorResponse)) {
              this.correctResponse(res);
            }
    
          });
      }

    correctResponse(res: FullUrlResponse) {
      if (res) {
        console.log(res);
        window.location.href = res.url ;
      }
    }
  
    errorURL(error: HttpErrorResponse) {
      switch (error.status) {
        case HttpStatusCode.NOT_FOUND:
          this.errorData = 'Url Not Found';
          break;
        default:
          this.errorData = error.message;
          break;
      }
      this.status = 'Complete';
    }


  

  ngOnInit() {
  }

}
