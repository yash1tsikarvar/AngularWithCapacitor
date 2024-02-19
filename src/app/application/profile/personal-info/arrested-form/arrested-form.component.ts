import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ArrestedInfo} from '../../../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';
import {getMaxEmploymentDate, getMinAgeDate} from '../../../../shared/definitions/constants/dates-min-max-utils';
import * as accents from 'remove-accents';
import { states } from '../../../../shared/definitions/constants/us_states';
import {HttpService} from '../../../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'tev-arrested-form',
    templateUrl: './arrested-form.component.html',
    styleUrls: ['./arrested-form.component.scss']
  })
  export class ArrestedFormComponent implements OnInit, ChildForm, OnDestroy {

    childForm: FormGroup;

    formReady$: Subject<boolean> = new Subject<boolean>();
    dataReady$: Subject<boolean> = new Subject<boolean>();
    unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

    maxDate: Date;
    minDate: Date;
    states = [];
    counties = [];
    showCountyDropdown = false;
    showCountyField = true;

    data: ArrestedInfo;
    readonly controlLengths: Record<string, number> = {
        caseArrest: 100,
        county: 50,
        typeOffense: 300,
        dateArrest: 10,
      };

    @Input()
    set info(info$: Observable<any>) {
        info$.subscribe(info => {
            if (this.data = info) {
              this.stateNonUs();
              this.dataReady$.next(true);
            }
        });
    }

    @Input() formIndex: number;

    @Output() formChanged: EventEmitter<ArrestedInfo> = new EventEmitter<ArrestedInfo>();

    constructor(
        private formBuilder: FormBuilder,
        private uiService: UiService,
        private profileFormService: ProfileFormService,
        private httpService: HttpService,
      ) {

        this.maxDate = getMaxEmploymentDate();
        this.minDate = getMinAgeDate();
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
                caseArrest: ['', [Validators.maxLength(100), CustomValidators.asciiValidator()]],
                county: ['', [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
                countyDropdown: ['', null],
                typeOffense: ['', [Validators.required, Validators.maxLength(300), CustomValidators.asciiValidator()]],
                dateArrest: ['', [Validators.required, CustomValidators.asciiValidator()]],
                state: ['', [Validators.required]],
        });
        this.states = [];
        this.states.unshift({ name: 'OUTSIDE USA', abbreviation: 'NONUS'});
        this.states.push(...states);
        this.childForm
        .controls['countyDropdown']
        .valueChanges
        .pipe(
          takeUntil(this.unsubscribeSubject)
        )
        .subscribe(countyDropdown => {
          if (this.childForm.controls['state'].value === 'FL') {
          this.childForm.controls['county'].setValue(countyDropdown);
          }
        });
      }

      defaultValues() {
        combineLatest([this.formReady$, this.dataReady$])
          .pipe(
            takeUntil(this.unsubscribeSubject)
          )
          .subscribe(() => {
            Object.keys(this.childForm.controls)
              .forEach(controlName => {
                if (typeof this.data[controlName] !== 'undefined') {
                  if (controlName !== 'state' || this.data['state'] !== undefined) {
                    this.childForm.controls[controlName].setValue(this.data[controlName]);
                    if (controlName === 'state' && this.data['state'] === 'FL' && this.data['county']) {
                      this.getCountiesOfStates('FL')
                      this.childForm.controls['countyDropdown'].setValue(this.data['county']);
                    }
                  }
                }

              });
            this.childForm.updateValueAndValidity();
          });
        this.stateNonUs();
      }

      getError(controlName: string): string {
        const errors = this.childForm.controls[controlName].errors;
        return this.uiService.getControlError(errors);
      }

      listenForFormValidation() {
        this.profileFormService
          .validateForm$
          .pipe(
            takeUntil(this.unsubscribeSubject)
          )
          .subscribe(() => this.markControlsAsTouched());

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

      updateValidators(value: boolean) {
        const validator = !value ? Validators.required : null;

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            this.childForm
              .controls[controlName]
              .setValidators(
                validator
                  ? [validator, Validators.maxLength(this.controlLengths[controlName]), CustomValidators.asciiValidator()]
                  : null
              );

            this.childForm.controls[controlName].updateValueAndValidity();
          });
      }

      removeAccents(event: any, control: string) {
        this.childForm.controls[control].setValue(accents.remove(event.target.value))
        this.childForm.controls[control].updateValueAndValidity();
      }

      ngOnDestroy() {
        this.unsubscribeSubject.next(true);
      }

      ngOnChanges(changes: SimpleChanges) {
        if(changes.info && changes.info.currentValue && changes.info.previousValue && changes.info.currentValue._value == null) {
            this.initForm();
            this.subscribeToFormChanges();
            this.formReady$.next(true);
        }
      }

  stateOnChange(event) {
      if (event.value === 'NONUS') {
        this.childForm.controls['county'].setValue('NONUS');
        this.childForm.controls['county'].clearValidators();
        this.childForm.controls['county'].updateValueAndValidity();
        this.childForm.controls['countyDropdown'].setValue(null);
        this.childForm.controls['countyDropdown'].clearValidators();
        this.childForm.controls['countyDropdown'].updateValueAndValidity();
        this.showCountyField = false;
      } else {
        this.showCountyField = true;
        if (this.childForm.controls['county'].value === 'NONUS') {
          this.childForm.controls['county'].setValue(null);
        }
        this.getCountiesOfStates(event.value);
      }
  }

  private getCountiesOfStates(state?: string) {
      if (state && state !== 'NONUS') {
        this.httpService.getCountiesOfStates(state)
          .subscribe((res) => {
              this.showCountiesDropdown(res);
            },
            (httpError: HttpErrorResponse) => {
              this.showCountyDropdown = false;
              this.childForm.controls['county'].setValidators([Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]);
              this.childForm.controls['county'].updateValueAndValidity();
              this.childForm.controls['countyDropdown'].clearValidators();
              this.childForm.controls['countyDropdown'].updateValueAndValidity();
              this.counties = [];
            });
      }
  }

  private showCountiesDropdown(res?: any) {
      if (res !== null) {
        this.showCountyDropdown = true;
        this.counties = res;
        if (this.childForm) {
          this.childForm.controls['county'].clearValidators();
          this.childForm.controls['county'].updateValueAndValidity();
          this.childForm.controls['countyDropdown'].setValidators(Validators.required);
          this.childForm.controls['countyDropdown'].updateValueAndValidity();
          this.childForm.controls['county'].setValue('');
        }
      } else {
        this.showCountyDropdown = false;
        this.childForm.controls['county'].setValidators([Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]);
        this.childForm.controls['county'].updateValueAndValidity();
        this.childForm.controls['countyDropdown'].clearValidators();
        this.childForm.controls['countyDropdown'].updateValueAndValidity();
        this.counties = [];
      }
  }

  stateNonUs() {
    if (this.childForm && this.childForm.controls['state'].value === 'NONUS') {
      this.showCountyField = false;
      this.childForm.controls['county'].setValue(null);
      this.childForm.controls['county'].clearValidators();
      this.childForm.updateValueAndValidity();
    }
    if (this.data && this.data.state === 'NONUS') {
      this.showCountyField = false;
    }
  }
}
