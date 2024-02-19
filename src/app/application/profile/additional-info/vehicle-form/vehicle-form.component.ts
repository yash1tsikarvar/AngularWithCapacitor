import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {TenantVehicle} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {states} from '../../../../shared/definitions/constants/us_states';
import {takeUntil} from 'rxjs/operators';
import { CustomValidators } from '../../../../shared/custom-validators';

let counter = 0;

@Component({
  selector: 'tev-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  readonly controlLengths: Record<string, number> = {
    make: 20,
    model: 20,
    color: 20,
    year: 4,
    tag: 50,
    state: 2,
    insureBy: 50,
  };

  readonly dummyData = {
    make: "tbd",
    model: "tbd",
    color: "tbd",
    year: 9999,
    tag: "tbd",
    state: "FL",
    insureBy: "tbd",
    isElectric: null,
  };

  data: TenantVehicle;
  @Input()
  set info(info$: Observable<any>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<TenantVehicle> = new EventEmitter<TenantVehicle>();

  @Input() formIndex: number;

  counter = counter++;
  states = states;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
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
        make: [null, [Validators.required, Validators.maxLength(this.controlLengths.make), CustomValidators.asciiValidator()]],
        model: [null, [Validators.required, Validators.maxLength(this.controlLengths.model), CustomValidators.asciiValidator()]],
        color: [null, [Validators.required, Validators.maxLength(this.controlLengths.color), CustomValidators.asciiValidator()]],
        year: [null, [Validators.required, Validators.maxLength(this.controlLengths.year), CustomValidators.asciiValidator()]],
        tag: [null, [Validators.required, Validators.maxLength(this.controlLengths.tag), CustomValidators.asciiValidator()]],
        state: ['', [Validators.required, Validators.maxLength(this.controlLengths.state), CustomValidators.asciiValidator()]],
        insureBy: [null, [Validators.required, Validators.maxLength(this.controlLengths.insureBy), CustomValidators.asciiValidator()]],
        isElectric: [null, [Validators.required]],
        rented: [false],
      });
  }

  defaultValues() {
      let dummyCase = true;
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            let data = this.data[controlName];
            if(data == this.dummyData[controlName] && dummyCase && controlName != 'rented'){
                dummyCase = dummyCase && true;
            } else if(controlName == 'rented' && dummyCase) {
                data = true;
                dummyCase = false;
            } else {
                dummyCase = false;
            }

            if (typeof data !== 'undefined') {
              this.childForm.controls[controlName].setValue(data);
            }

          });

        this.childForm.updateValueAndValidity();

      })
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

    this.childForm
      .controls['rented']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {
        this.updateValidators(value);
      });

    this.childForm.updateValueAndValidity();
  }

  updateValidators(value: boolean) {
    const validator = !value ? Validators.required : null;

    Object.keys(this.childForm.controls)
      .filter(controlName => controlName !== 'rented')
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

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
