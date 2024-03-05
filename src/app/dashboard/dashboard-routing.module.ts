import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardGuard } from "./dashboard.guard";
import { AddCoApplicantComponent } from "./add-co-applicant/add-co-applicant.component";
import { SignatureMissingComponent } from "./signature-missing/signature-missing.component";
import { UploadDocumentsComponent } from "./upload-documents/upload-documents.component";
import { UploadIdComponent } from "./upload-id/upload-id.component";
import { OwnerVerificationComponent } from "./owner-verification/owner-verification.component";
import { ChooseUploadTypeComponent } from "./choose-upload-type/choose-upload-type.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ProfileComponent } from "./profile/profile.component";
import { SuccessComponent } from "./success/success.component";
import { OwnerInfoGuard } from "./owner-info.guard";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AllowCoApplicantGuard } from "./allow-co-applicant.guard";
import { UploadDocumentsGuard } from "./upload-documents.guard";
import { CanDeactivateGuard } from "./can-deactivate.guard";
import { ApplicationSummaryComponent } from "./application-summary/application-summary.component";
import { InReviewDocumentsComponent } from "./in-review-documents/in-review-documents.component";
import { ExpediteAppComponent } from "./expedite-app/expedite-app.component";
import { ExpeditePayComponent } from "./expedite-pay/expedite-pay.component";
import { RefundApplicationComponent } from "./refund-application/refund-application.component";
import { RefundApplicationGuard } from "./refund-application.guard";
import { CurrencyPipe } from "@angular/common";
import { ProfileSuccessComponent } from "./profile-success/profile-success.component";
import { InfoAfterPayComponent } from "./info-after-pay/info-after-pay.component";
import { ProfileFormService } from "../application/profile/profile-form.service";
import { ProfileFormFactoryService } from "../application/profile/profile-form-factory.service";
import { PersonalReferenceVerificationComponent } from "./personal-reference-verification/personal-reference-verification.component";
import { EmploymentReferenceVerificationComponent } from "./employment-reference-verification/employment-reference-verification.component";
import { LandlordReferenceVerificationComponent } from "./landlord-reference-verification/landlord-reference-verification.component";
import { UploadComponent } from "./upload/upload.component";
import { UploadSsnComponent } from "./upload-ssn/upload-ssn.component";
import { UploadPetComponent } from "./upload-pet-photo/upload-pet.component";
import { UploadVehicleRegistrationComponent } from "./upload-vehicle-registration/upload-vehicle-registration.component";
import { UploadSelectorComponent } from "./upload-documents/upload-selector/upload-selector.component";
import { UploadProofOfIncomeComponent } from "./upload-proof-of-income/upload-proof-of-income.component";
import { DocumentSelectorComponent } from "./upload-id/document-selector/document-selector.component";
import { IdInstructionsComponent } from "./upload-id/id-instructions/id-instructions.component";
import { UploadMobileComponent } from "./upload-documents/upload-mobile/upload-mobile.component";
import { FinicityVideoComponent } from "./finicity-video/finicity-video.component";
import { SignatureComponent } from "./signature/signature.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: ApplicationSummaryComponent },
      { path: "add-co-applicant", component: AddCoApplicantComponent },
      {
        path: "owner-verification",
        component: OwnerVerificationComponent,
        canActivate: [OwnerInfoGuard],
      },
      { path: "upload-documents", component: UploadDocumentsComponent },
      { path: "upload-id/:documentTaskId", component: UploadIdComponent },
      { path: "in-review-documents", component: InReviewDocumentsComponent },
      { path: "maintenance", component: MaintenanceComponent },
      { path: "payment-details", component: PaymentDetailsComponent },
      { path: "faqs", component: FaqsComponent },
      { path: "profile", component: ProfileComponent },
      { path: "success", component: SuccessComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "expedite-app", component: ExpediteAppComponent },
      { path: "expedite-pay", component: ExpeditePayComponent },
      {
        path: "refund-application",
        component: RefundApplicationComponent,
        canActivate: [RefundApplicationGuard],
      },
      { path: "profile-success-dashboard", component: ProfileSuccessComponent },
      { path: "profile-success", component: InfoAfterPayComponent },
      { path: "signature",component:SignatureComponent },

      {
        path: "personal-reference-verification/:id",
        component: PersonalReferenceVerificationComponent,
      },
      {
        path: "employment-reference-verification/:id",
        component: EmploymentReferenceVerificationComponent,
      },
      {
        path: "landlord-reference-verification/:id",
        component: LandlordReferenceVerificationComponent,
      },
      {
        path: "upload/:documentTaskId",
        component: UploadComponent,
        canActivate: [UploadDocumentsGuard],
        canDeactivate: [CanDeactivateGuard],
      },
      { path: "upload-ssn/:documentTaskId", component: UploadSsnComponent },
      {
        path: "upload-pet-photo/:documentTaskId",
        component: UploadPetComponent,
      },
      {
        path: "upload-vehicle-registration/:documentTaskId",
        component: UploadVehicleRegistrationComponent,
      },
      {
        path: "id-instructions/:documentTaskId",
        component: IdInstructionsComponent,
      },
      {
        path: "document-selector/:documentTaskId",
        component: DocumentSelectorComponent,
      },
      {
        path: "upload-selector/:documentTaskId",
        component: UploadSelectorComponent,
      },
      {
        path: "upload-mobile/:documentTaskId",
        component: UploadMobileComponent,
      },
      {
        path: "upload-proof-of-income/:proofOfIncome",
        component: UploadProofOfIncomeComponent,
      },

    ],
    canActivate: [DashboardGuard],
  },
  {
    path: "proof-income/:applicantId",
    loadChildren: () =>
      import("./finicity/finicity.module").then((m) => m.FinicityModule),
  },
  {
    path: "finicity-video/:applicantId",
    component: FinicityVideoComponent,
  },
  { path: "signature-missing", component: SignatureMissingComponent },
  { path: "upload-type", component: ChooseUploadTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DashboardGuard,
    OwnerInfoGuard,
    AllowCoApplicantGuard,
    UploadDocumentsGuard,
    RefundApplicationGuard,
    CurrencyPipe,
    ProfileFormService,
    ProfileFormFactoryService,
    CanDeactivateGuard,
  ],
})
export class DashboardRoutingModule {}
