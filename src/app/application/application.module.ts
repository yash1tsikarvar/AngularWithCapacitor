import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application/application.component';
import { FeesComponent } from './fees/fees.component';
import { CoApplicantsComponent } from './co-applicants/co-applicants.component';
import { CoApplicantSelectionComponent, AccessTypeDialog } from './co-applicant-selection/co-applicant-selection.component';
import { CoApplicantAddedComponent } from './co-applicant-added/co-applicant-added.component';
import { FeesDialogComponent } from './fees/fees-dialog/fees-dialog.component';
import { CoApplicantSelectionAddDialogComponent } from './co-applicant-selection/casa-dialog/casa-dialog.component';

@NgModule({
  imports: [SharedModule, ApplicationRoutingModule],
  declarations: [
    ApplicationComponent,
    FeesComponent,
    CoApplicantsComponent,
    CoApplicantSelectionComponent,
    CoApplicantSelectionAddDialogComponent,
    CoApplicantAddedComponent,
    AccessTypeDialog,
    FeesDialogComponent,
  ],
  entryComponents: [FeesDialogComponent, CoApplicantSelectionAddDialogComponent, ],
})
export class ApplicationModule {}
