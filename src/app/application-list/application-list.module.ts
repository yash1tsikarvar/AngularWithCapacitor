import {NgModule} from '@angular/core';

import {ApplicationListRoutingModule} from './application-list-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationItemComponent } from './application-item/application-item';
import { ClosedApplicationComponent } from './closed-application/closed-application.component';
import { PendingApplicationComponent } from './pending-application/pending-application.component';
import { AbandonedApplicationComponent } from './abandoned-application/abandoned-application.component';
import { FilterApplicationComponent } from './filter-application/filter-application.component';

@NgModule({
  imports: [
    SharedModule,
    ApplicationListRoutingModule,
  ],
  declarations: [ApplicationListComponent, ApplicationItemComponent, ClosedApplicationComponent, AbandonedApplicationComponent, PendingApplicationComponent, FilterApplicationComponent]
})
export class ApplicationListModule { }
