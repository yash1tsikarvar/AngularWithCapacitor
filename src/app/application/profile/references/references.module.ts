import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {ReferencesComponent} from './references/references.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {SupervisorInfoComponent} from './supervisor-info/supervisor-info.component';
import {JobInfoComponent} from './job-info/job-info.component';
import { PrimaryApplicantInfoComponent } from './primary-applicant-info/primary-applicant-info.component';
import { SecondaryApplicantInfoComponent } from './secondary-applicant-info/secondary-applicant-info.component';
import { PersonalReferencesComponent } from './personal-references/personal-references.component';
import { EmergencyDetailsComponent } from './emergency-details/emergency-details.component';
import { ApplicantEmploymentComponent } from './applicant-employment/applicant-employment.component';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { IncomeVerificationComponent } from './income-verification/income-verification.component';
import {YesNoInputComponent} from '../../../shared/components/yes-no-input/yes-no-input.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ReferencesComponent,
    CompanyInfoComponent,
    SupervisorInfoComponent,
    JobInfoComponent,
    PrimaryApplicantInfoComponent,
    SecondaryApplicantInfoComponent,
    PersonalReferencesComponent,
    EmergencyDetailsComponent,
    ApplicantEmploymentComponent,
    SingleReferenceComponent,
    IncomeVerificationComponent,
  ],
    exports: [
        ReferencesComponent,
        ApplicantEmploymentComponent,
        PersonalReferencesComponent,
    ]
})
export class ReferencesModule {

}
