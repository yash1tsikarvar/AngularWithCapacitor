import { TestBed, async, inject } from '@angular/core/testing';

import { ProofIncomeGuardGuard } from './proof-income-guard.guard';

describe('ProofIncomeGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProofIncomeGuardGuard]
    });
  });

  it('should ...', inject([ProofIncomeGuardGuard], (guard: ProofIncomeGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
