import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AddCoApplicantComponent} from './add-co-applicant/add-co-applicant.component';
import {SharedModule} from '../shared/shared.module';
import {SignatureMissingComponent} from './signature-missing/signature-missing.component';
import {UploadDocumentsComponent} from './upload-documents/upload-documents.component';
import {UploadIdComponent} from './upload-id/upload-id.component';
import {OwnerVerificationComponent} from './owner-verification/owner-verification.component';
import {ChooseUploadTypeComponent} from './choose-upload-type/choose-upload-type.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {PaymentDetailsComponent} from './payment-details/payment-details.component';
import {FaqsComponent} from './faqs/faqs.component';
import {ProfileComponent} from './profile/profile.component';
import {SuccessComponent} from './success/success.component';
import {ApplicationInfoComponent} from './application-info/application-info.component';
import {ApplicationInfoContactComponent} from './application-info-contact/application-info-contact.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CompletedItemsComponent} from './completed-items/completed-items.component';
import {
  ContinueApplicationComponent,
  DialogFinicity
} from './continue-application/continue-application.component';
import {PendingItemsComponent} from './pending-items/pending-items.component';
import {ApplicationSummaryComponent} from './application-summary/application-summary.component';
import {InReviewDocumentsComponent} from './in-review-documents/in-review-documents.component';
import {ExpediteAppComponent} from './expedite-app/expedite-app.component';
import {ExpeditePayComponent} from './expedite-pay/expedite-pay.component';
import {RefundApplicationComponent} from './refund-application/refund-application.component';
import {ProfileSuccessComponent} from './profile-success/profile-success.component';
import {InfoAfterPayComponent} from './info-after-pay/info-after-pay.component';
import {ReferencesModule} from './../application/profile/references/references.module';
import {PersonalReferenceVerificationComponent} from './personal-reference-verification/personal-reference-verification.component';
import {MatCardModule, MatMenuModule, MatProgressSpinnerModule} from '@angular/material';
import {EmploymentReferenceVerificationComponent} from './employment-reference-verification/employment-reference-verification.component';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatIconModule} from '@angular/material/icon';
import {UpdateIdApplicantComponent} from './upload-id/update-id-applicant/update-id-applicant.component';
import {LandlordReferenceVerificationComponent} from './landlord-reference-verification/landlord-reference-verification.component';
import {CurrentResidenceModule} from '../application/profile/current-residence/current-residence.module';
import {UploadComponent} from './upload/upload.component';
import {DragDropDirective} from './drag-drop.directive';
import {PipesModule} from '../shared/pipes/pipes.module';
import {UploadSsnComponent} from './upload-ssn/upload-ssn.component';
import {UpdateSsnApplicantComponent} from './upload-ssn/update-ssn-applicant/update-ssn-applicant.component';
import {UploadPetComponent} from './upload-pet-photo/upload-pet.component';
import {UploadVehicleRegistrationComponent} from './upload-vehicle-registration/upload-vehicle-registration.component';
// tslint:disable-next-line:max-line-length
import {UpdateVehicleRegistrationComponent} from './upload-vehicle-registration/update-tag-registration/update-vehicle-registration.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {UploadSelectorComponent} from './upload-documents/upload-selector/upload-selector.component';
import {QRCodeModule} from 'angularx-qrcode';
import {ErrorsIdComponent} from './upload-id/errors-id/errors-id.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UploadProofOfIncomeComponent } from './upload-proof-of-income/upload-proof-of-income.component';
import { DocumentSelectorComponent } from './upload-id/document-selector/document-selector.component';
import {IdInstructionsComponent} from './upload-id/id-instructions/id-instructions.component';
import {UploadMobileComponent} from './upload-documents/upload-mobile/upload-mobile.component';
import { FinicityVideoComponent } from './finicity-video/finicity-video.component';
import {SignVideoComponent} from '../shared/components/sign-video/sign-video.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    ReferencesModule,
    MatMenuModule,
    MatIconModule,
    CurrentResidenceModule,
    PipesModule,
    MatCardModule,
    QRCodeModule,
    MatDialogModule
  ],
  providers: [
    DeviceDetectorService
  ],
  exports: [
    ErrorsIdComponent,
    UpdateIdApplicantComponent,
    IdInstructionsComponent,
    DialogFinicity,
  ],
  entryComponents: [
    DialogFinicity,
    SignVideoComponent
  ],
  declarations: [
    DashboardComponent,
    NavBarComponent,
    AddCoApplicantComponent,
    SignatureMissingComponent,
    UploadDocumentsComponent,
    UploadIdComponent,
    OwnerVerificationComponent,
    ChooseUploadTypeComponent,
    MaintenanceComponent,
    PaymentDetailsComponent,
    FaqsComponent,
    ProfileComponent,
    SuccessComponent,
    ApplicationInfoComponent,
    ApplicationInfoContactComponent,
    ChangePasswordComponent,
    CompletedItemsComponent,
    ContinueApplicationComponent,
    PendingItemsComponent,
    ApplicationSummaryComponent,
    InReviewDocumentsComponent,
    ExpediteAppComponent,
    ExpeditePayComponent,
    RefundApplicationComponent,
    // tslint:disable-next-line:indent
    ProfileSuccessComponent,
    InfoAfterPayComponent,
    PersonalReferenceVerificationComponent,
    EmploymentReferenceVerificationComponent,
    LandlordReferenceVerificationComponent,
    UploadComponent,
    DragDropDirective,
    UpdateIdApplicantComponent,
    UploadPetComponent,
    UploadSsnComponent,
    UpdateSsnApplicantComponent,
    UploadVehicleRegistrationComponent,
    UpdateVehicleRegistrationComponent,
    UploadSelectorComponent,
    UploadMobileComponent,
    ErrorsIdComponent,
    IdInstructionsComponent,
    DialogFinicity,
    UploadProofOfIncomeComponent,
    DocumentSelectorComponent,
    FinicityVideoComponent,

  ]
})
export class DashboardModule {
}
