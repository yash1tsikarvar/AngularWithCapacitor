import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {TenantVehicle, VehicleInfo} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {YesNoType} from '../../../../shared/definitions/types/yes-no.type';
import {takeUntil} from 'rxjs/operators';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';

@Component({
  selector: 'tev-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: VehicleInfo;
  @Input()
  set info(info$: Observable<VehicleInfo>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<VehicleInfo> = new EventEmitter<VehicleInfo>();

  anyVehicle: boolean;
  vehiclesFormsValues: TenantVehicle[] = [];
  vehiclesFormsValues$: BehaviorSubject<TenantVehicle>[] = [new BehaviorSubject<TenantVehicle>(null)];
  numberOfVehicles = 1;

  setup: SetupResponse;

  @Input() viewType: string = 'normal';
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {
    this.defaultValues();
    this.listenForFormValidation();
    this.listenToSetup();
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        anyVehicle: [null, Validators.required],
        vehicles: [null],
      });

    this.childForm
      .controls['vehicles']
      .setValidators(
        CustomValidators.requiredIfControlEqualsTo(this.childForm, 'anyVehicle', 'yes')
      );
  }

  vehicleInfoChanged(info: TenantVehicle, index: number) {
    this.vehiclesFormsValues[index] = info;
    const value = this.checkIfNotNullValueInsideVehicleValues() ? this.vehiclesFormsValues : null;

    this.childForm.controls['vehicles'].setValue(value);
    this.childForm.controls['vehicles'].updateValueAndValidity();
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup => this.setup = setup);
  }

  checkIfNotNullValueInsideVehicleValues() {
    return this.vehiclesFormsValues.every(value => !!value);
  }

  defaultValues() {
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            const data = this.data[controlName];

            if (!!data) {
              switch (controlName){
                case 'vehicles':
                  this.setVehiclesInfo(data);
                  break;
                default:
                  this.childForm.controls[controlName].setValue(data);
                  break;
              }
            }
          });
      });
  }

  setVehiclesInfo(data: TenantVehicle[]) {
    this.vehiclesFormsValues = data;

    this.vehiclesFormsValues
      .forEach((value, index) => {
        if (index > 0) {
          this.vehiclesFormsValues$[index] = new BehaviorSubject<TenantVehicle>(value);
        } else {
          this.vehiclesFormsValues$[index].next(value);
        }

      });

    this.numberOfVehicles = this.vehiclesFormsValues.length;
    this.anyVehicle = this.numberOfVehicles > 0;
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
      .controls['anyVehicle']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.childForm.controls['vehicles'].updateValueAndValidity();
      });
  }

  yesNoChanged(value: YesNoType) {
    this.anyVehicle = value === 'yes';
  }

  getNumberOfForms(): number[] {
    return Array.apply(null, {length: this.numberOfVehicles});
  }

  showAddForm(): boolean {
    return this.checkIfNotNullValueInsideVehicleValues()
      && (
        this.setup.numberOfCarsAllowed === -1
        || this.numberOfVehicles < this.setup.numberOfCarsAllowed
      );
  }

  addVehicle() {
    this.vehiclesFormsValues$[this.numberOfVehicles] = new BehaviorSubject<TenantVehicle>(null);
    this.numberOfVehicles++;
  }

  deleteVehicleByIndex(index: number) {
    this.vehiclesFormsValues.splice(index, 1);
    this.fillVehiclesValues();
    this.numberOfVehicles--;
    this.vehiclesFormsValues$.splice(-1, 1);
  }

  fillVehiclesValues() {
    this.vehiclesFormsValues
      .forEach((value, index) => {
        this.vehiclesFormsValues$[index].next(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }
}
