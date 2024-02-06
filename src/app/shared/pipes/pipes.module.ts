import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PropertyAddressPipe} from './property-address.pipe';
import {PropertyNamePipe} from './property-name.pipe';
import {DialCodeValuePipe} from './dial-code-value.pipe';
import {DialCodeNamePipe} from './dial-code-name.pipe';
import {JsonStringifyPipe} from './json-stringify.pipe';
import {FormErrorsPipe} from './form-errors.pipe';
import {CoApplicantTitlePipe} from './co-applicant-title.pipe';
import {PricedItemFeePipe} from './priced-item-fee.pipe';
import {SetupFeePipe} from './setup-fee.pipe';
import {PricedItemDescriptionPipe} from './priced-item-description.pipe';
import {MoneyFormatPipe} from './money-format.pipe';

import {RequiredDocumentFormattingPipe} from './required-document-formatting.pipe';
import {AmericanDatePipe} from './american-date.pipe';
import {LoggedInUserNamePipe} from './logged-in-user-name.pipe';

import {ProfileApplyTitlePipe} from './profile-apply-title.pipe';
import {SigningStatusPipe} from './signing-status.pipe';
import {ApplicationPipesModule} from './application-pipes/application-pipes.module';
import {TextReplacementPipe} from './text-replacement.pipe';
import { PropertyCodePipe } from './property-code.pipe';
import { MobileMaskPipe } from './mobile-mask.pipe';
import { SafePipe } from './safe.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ApplicationPipesModule,
  ],
  declarations: [

    PropertyAddressPipe,
    PropertyNamePipe,
    DialCodeValuePipe,
    DialCodeNamePipe,
    JsonStringifyPipe,
    FormErrorsPipe,
    CoApplicantTitlePipe,
    SetupFeePipe,
    PricedItemDescriptionPipe,
    PricedItemFeePipe,
    MoneyFormatPipe,

    RequiredDocumentFormattingPipe,
    AmericanDatePipe,
    LoggedInUserNamePipe,

    ProfileApplyTitlePipe,
    SigningStatusPipe,
    TextReplacementPipe,
    PropertyCodePipe,
    MobileMaskPipe,
    SafePipe,
    FilterPipe,
  ],
  exports: [

    PropertyAddressPipe,
    PropertyNamePipe,
    PropertyCodePipe,
    DialCodeValuePipe,
    DialCodeNamePipe,
    JsonStringifyPipe,
    FormErrorsPipe,
    CoApplicantTitlePipe,
    SetupFeePipe,
    PricedItemDescriptionPipe,
    PricedItemFeePipe,
    MoneyFormatPipe,

    RequiredDocumentFormattingPipe,
    AmericanDatePipe,
    LoggedInUserNamePipe,

    ProfileApplyTitlePipe,
    SigningStatusPipe,

    ApplicationPipesModule,
    TextReplacementPipe,
    MobileMaskPipe,
    SafePipe,
    FilterPipe,
  ],
})
export class PipesModule { }
