import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info/personal-info.component';
import { ReviewInfoComponent } from './review-info/review-info/review-info.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PersonalInfoComponent | ReviewInfoComponent> {
  canDeactivate(
    component: PersonalInfoComponent | ReviewInfoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ) {
    if (component.canDeactivate()) {
      return true
    } else {
      return false
    }
  }
}
