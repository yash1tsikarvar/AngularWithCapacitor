import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogNotFindBankComponent, DialogNotSupportedBankComponent, SelectBankComponent} from './select-bank/select-bank.component';
import {FinicityNavComponent} from './finicity-nav/finicity-nav.component';
import {FinicityComponent} from './finicity/finicity.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../shared/components/components.module';
import {FinicityRoutingModule} from './finicity-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material';
import {ScriptService} from '../../shared/services/script.service';
import {FinicityFinishBankComponent} from './finicity-finish-bank/finicity-finish-bank.component';
import {SpinnerLoadingComponent} from '../../core/spinner-loading/spinner-loading.component';
import {FinicityErrorComponent} from './finicity-error/finicity-error.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogFinicity} from '../continue-application/continue-application.component';

@NgModule({
  declarations: [
    SelectBankComponent,
    FinicityNavComponent,
    FinicityNavComponent,
    FinicityComponent,
    FinicityFinishBankComponent,
    SpinnerLoadingComponent,
    FinicityErrorComponent,
    DialogNotFindBankComponent,
    DialogNotSupportedBankComponent
  ],
  exports: [

  ],
  entryComponents: [
    DialogNotFindBankComponent,
    DialogNotSupportedBankComponent,
  ],
  providers: [ScriptService],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
    FinicityRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule

  ]
})
export class FinicityModule {
}
