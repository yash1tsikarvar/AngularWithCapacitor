import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordComponent } from './landlord/landlord.component';
import { VerificationsComponent } from './verifications-router/verifications.component';
import {ComponentsModule} from '../shared/components/components.module';
import {VerificationRoutingModule} from './verification-routing.module';
import {MatProgressSpinnerModule, MatRadioModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { AnswerComponent } from './verification/verification-question-answer/answer.component';
import {MobileModule} from '../mobile/mobile.module';
import {CompleteSignatureModule} from '../complete-signature/complete-signature.module';
import {PaymentDetailsModule} from '../application/profile/payment-details/payment-details.module';
import { VerificationFooterComponent } from './verification/verification-footer/verification-footer.component';
import { VerificationTitleComponent } from './verification/verification-title/verification-title.component';
import { VerificationFinishComponent } from './verification-finish/verification-finish.component';
import {EmploymentComponent} from './employment/employment.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [CharacterComponent, EmploymentComponent, LandlordComponent, VerificationsComponent,
    AnswerComponent, VerificationFooterComponent, VerificationTitleComponent, VerificationFinishComponent],
    imports: [
        CommonModule,
        VerificationRoutingModule,
        ComponentsModule,
        MatRadioModule,
        ReactiveFormsModule,
        SharedModule,
        MatProgressSpinnerModule,
        MobileModule,
        CompleteSignatureModule,
        PaymentDetailsModule

    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class VerificationsModule { }
