import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from '../core/services/http.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class UploadDocumentsGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const {applicationId, documentTaskId} = next.params;

    return this.httpService.mainApplication$
      .pipe(
        map(mainApplication => {

          let hasPendingTask = mainApplication.pendingDocumentTasks
            // tslint:disable-next-line:triple-equals
            .find(task => task.documentTaskId == documentTaskId) ? true : false;

          if (mainApplication.proofOfIncomeManual) {
            for (const proof of mainApplication.proofOfIncomeManual) {
               if (hasPendingTask === false && (proof.task.find(task => task.documentTaskId == documentTaskId)) ? true : false) {
                 hasPendingTask = true;
               }
            }
          }

          return hasPendingTask;
        }),
        tap(canGo => {

          if (!canGo) {
            this.router
              .navigate(['/dashboard', applicationId])
              .catch(console.log);
          }
        })
      );

  }
}
