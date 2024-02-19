import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {Subject, Observable, combineLatest} from 'rxjs';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {JobInformation} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {states} from '../../../../shared/definitions/constants/us_states';
import {countries} from '../../../../shared/definitions/constants/phone_codes';
import {CustomValidators} from '../../../../shared/custom-validators';
import {SalaryPeriods} from '../../../../shared/definitions/forms/profile-form/references/salary-periods';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';

let counter = 0;

@Component({
  selector: 'tev-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit, ChildForm, OnDestroy {

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  childForm: FormGroup;

  data: JobInformation;

  @Input()
  set info(info$: Observable<JobInformation>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<JobInformation> = new EventEmitter<JobInformation>();

  counter = counter++;
  states = states;
  countries = countries;
  salaryPeriods = SalaryPeriods;

  zipValidators: ValidatorFn[];

  maxEmployDate: Date;
  minEmployDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
    this.maxEmployDate = this.profileFormService.maxEmployDate;
    this.minEmployDate = this.profileFormService.minEmployDate;
    this.defaultValues();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        companyName: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        jobTitle: [null, [Validators.required, Validators.maxLength(100), CustomValidators.asciiValidator()]],
        country: ['US', [Validators.required, Validators.maxLength(2)]],
        city: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        address: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        zip: [null, CustomValidators.asciiValidator()],
        state: ['', Validators.maxLength(2)],
        startDate: [null, Validators.required],
        amount: [null, [Validators.required, Validators.maxLength(8), CustomValidators.asciiValidator(), CustomValidators.currencyValidator(),CustomValidators.minimun(1)]],
        period: ['', Validators.required],
      });

    this.zipValidators = [
      CustomValidators.requiredIfControlEqualsTo(this.childForm, 'country', 'US'),
      CustomValidators.requiredIfControlEqualsTo(this.childForm, 'country', 'CA'),
    ];
    this.updateZipValidators('US');


    this.childForm.controls['state'].setValidators(CustomValidators.requiredIfControlEqualsTo(this.childForm, 'country', 'US'));
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            const data = this.data[controlName];
            if (!!data) {
              this.childForm.controls[controlName].setValue(data);
            }
          });
      });
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  subscribeToFormChanges() {

    this.childForm
      .controls['country']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((country) => {
        this.childForm.controls['zip'].setValue('');
        this.childForm.controls['state'].setValue('');


        this.childForm.controls['state'].updateValueAndValidity();

        this.updateZipValidators(country);

      });

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm.updateValueAndValidity();
  }

  updateZipValidators(countryCode: string) {

    const zipValidators = this.zipValidators.slice(0);

    switch (countryCode) {
      case 'US':
        zipValidators.push(CustomValidators.usaZipCode());
        break;
      case 'CA':
        zipValidators.push(CustomValidators.canadaZipCode());
        break;
    }

    this.childForm.controls['zip'].setValidators(zipValidators);
    this.childForm.controls['zip'].updateValueAndValidity();
  }

  listenForFormValidation(): void {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
