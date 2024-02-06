import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ApplicationRequest} from '../../shared/definitions/requests/application.request';

@Injectable()
export class ApplicationRequestInterceptor implements HttpInterceptor{

  apiPrefix = environment.api_prefix;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (!environment.production && this.endpointReturnsApplicationRequest(req.url)) {

      return next.handle(req)
        .pipe(
          map((event: HttpEvent<any>) => {

            if (event instanceof HttpResponse) {

              const applicationRequest: ApplicationRequest = event.body;

              applicationRequest.propertyCode = applicationRequest.propertyCode || applicationRequest.propertyId + 5000;
              return event.clone({
                body: applicationRequest
              });
            }

            return event;

          })
        );
    } else {
      return next.handle(req)
    }
  }

  endpointReturnsApplicationRequest(url: string) {
    return [`${this.apiPrefix}/resume`, `${this.apiPrefix}/save`]
      .some(api => url.indexOf(api) >= 0);
  }

}
