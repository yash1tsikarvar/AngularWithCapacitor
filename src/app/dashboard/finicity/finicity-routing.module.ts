import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {FinicityComponent} from './finicity/finicity.component';
import {SelectBankComponent} from './select-bank/select-bank.component';
import {DashboardGuard} from '../dashboard.guard';
import {ProofIncomeGuardGuard} from './proof-income-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FinicityComponent,
    children: [
      {path: 'select-bank', component: SelectBankComponent,  canActivate: [ProofIncomeGuardGuard]},
    ],
    canActivate: [DashboardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CurrencyPipe,
  ]
})
export class FinicityRoutingModule {
}
