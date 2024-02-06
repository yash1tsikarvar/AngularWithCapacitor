import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {UiService} from '../ui/ui.service';
import {ApplicationResponse} from '../shared/definitions/responses/application.response';
import {AuthService} from '../core/services/auth.service';

@Injectable()
export class UploadsGuard implements CanActivate {


  private application: ApplicationResponse;

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router,
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    // this.authService.redirectUrl = state.url;
    const {applicationId, documentTaskId} = next.params;

    this.uiService
      .showInfo({
        title: 'Please Wait',
        message: 'Getting Task Application Information',
      });



    return this.httpService
      .getApplicationById(applicationId)
      .pipe(
        map(response => {
          this.application = response;


          let hasPendingTask = this.application.pendingDocumentTasks
            // tslint:disable-next-line:triple-equals
            .find(task => task.documentTaskId == documentTaskId) ? true : false;

          if (this.application.proofOfIncomeManual) {
            for (const proof of this.application.proofOfIncomeManual) {
              if (hasPendingTask === false && (proof.task.find(task => task.documentTaskId == documentTaskId)) ? true : false) {
                hasPendingTask = true;
              }
            }
          }

          return hasPendingTask;

        }),
        catchError((httpError: HttpErrorResponse) => {
          console.log(httpError);
          return of(false);
        }),
        tap(applicationExists => {
          if (!applicationExists) {
            this.router
              .navigate(['/dashboard', applicationId, 'upload-documents'])
              .catch(console.log);
          }

        })
      );
  }
}
