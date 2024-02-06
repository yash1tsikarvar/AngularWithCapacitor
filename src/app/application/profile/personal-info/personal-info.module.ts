import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {ApplicantDetailsComponent} from './applicant-details/applicant-details.component';
import {CoApplicantDetailsComponent} from './co-applicant-details/co-applicant-details.component';
import {MilitaryInfoComponent} from './military-info/military-info.component';
import {RemarksInfoComponent} from './remarks-info/remarks-info.component';
import {ArrestedFormComponent} from './arrested-form/arrested-form.component';
import { CoApplicantSelectionAddDialogComponent } from './co-applicant-details/marriage-dialog/marriage-dialog.component';
import { CancelDialogComponent } from './remarks-info/cancel-dialog/cancel-dialog.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PersonalInfoComponent,
    ApplicantDetailsComponent,
    CoApplicantDetailsComponent,
    MilitaryInfoComponent,
    RemarksInfoComponent,
    ArrestedFormComponent,
    CoApplicantSelectionAddDialogComponent,
    CancelDialogComponent,
  ],
  exports: [
    PersonalInfoComponent,
  ],
  entryComponents: [ CoApplicantSelectionAddDialogComponent, CancelDialogComponent ],

})
export class PersonalInfoModule {

}
