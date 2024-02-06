import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationAddressPipe} from './application-address.pipe';
import {ApplicationBuildingNamePipe} from './application-building-name.pipe';
import {ApplicationStatusPipe} from './application-status.pipe';
import {ApplicationTypePipe} from './application-type.pipe';
import {DocumentMimeTypesPipe} from './document-mime-types.pipe';
import { CoApplicantTypePipe } from './co-applicant-type.pipe';
import { EmploymentTypePipe } from './employment-type.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApplicationAddressPipe,
    ApplicationBuildingNamePipe,
    ApplicationStatusPipe,
    ApplicationTypePipe,
    DocumentMimeTypesPipe,
    CoApplicantTypePipe,
    EmploymentTypePipe,
  ],
  exports: [
    ApplicationAddressPipe,
    ApplicationBuildingNamePipe,
    ApplicationStatusPipe,
    ApplicationTypePipe,
    DocumentMimeTypesPipe,
    CoApplicantTypePipe,
    EmploymentTypePipe,
  ]
})
export class ApplicationPipesModule { }
