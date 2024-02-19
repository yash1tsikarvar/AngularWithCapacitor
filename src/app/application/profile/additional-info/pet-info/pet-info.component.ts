import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {PetInfo, TenantPet} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {YesNoType} from '../../../../shared/definitions/types/yes-no.type';
import {takeUntil} from 'rxjs/operators';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';

@Component({
  selector: 'tev-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: PetInfo;
  @Input()
  set info(info$: Observable<PetInfo>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<PetInfo> = new EventEmitter<PetInfo>();

  anyPet: boolean;
  petFormsValues: TenantPet[] = [];
  petFormsValues$: BehaviorSubject<TenantPet>[] = [new BehaviorSubject<TenantPet>(null)];
  numberOfPets = 1;

  setup: SetupResponse;

  @Input() viewType: string = 'normal';
  @Input() esaForm: boolean;

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
        anyPet: [null, Validators.required],
        pets: [null],
      });

    this.childForm
      .controls['pets']
      .setValidators(
        CustomValidators.requiredIfControlEqualsTo(this.childForm, 'anyPet', 'yes')
      );

  }

  petInfoChanged(info: TenantPet, index: number) {
    this.petFormsValues[index] = info;
    const value = this.checkIfNotNullValueInsidePetValues() ? this.petFormsValues : null;

    this.childForm.controls['pets'].setValue(value);
    this.childForm.controls['pets'].updateValueAndValidity();
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup => this.setup = setup);
  }

  checkIfNotNullValueInsidePetValues(): boolean {
    return this.petFormsValues.every(value => !!value);
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
                case 'pets':
                  this.setPetsInfo(data);
                  break;
                default:
                  this.childForm.controls[controlName].setValue(data);
                  break;
              }
            }
          });
      })
  }

  setPetsInfo(data: TenantPet[]) {
    this.petFormsValues = data;
    this.petFormsValues
      .forEach((value, index) => {

        if (index > 0) {
          this.petFormsValues$[index] = new BehaviorSubject<TenantPet>(value);
        } else {
          this.petFormsValues$[index].next(value);
        }

      });

    this.numberOfPets = this.petFormsValues.length;
    this.anyPet = this.numberOfPets > 0;
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
      .controls['anyPet']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.childForm.controls['pets'].updateValueAndValidity();
      });
  }

  getNumberOfForms(): number[] {
    return Array.apply(null, {length: this.numberOfPets});
  }

  yesNoChanged(value: YesNoType) {
    this.anyPet = value === 'yes';
  }

  showAddForm(): boolean {
    if (this.viewType !== 'review') {
      if(this.esaForm) {
        return this.checkIfNotNullValueInsidePetValues()
          && (
            this.numberOfPets < this.setup.numberOfPetsAllowed + 3
            // && this.petFormsValues.filter(pet => pet.esa === 'yes').length < 4
          );
      } else {
        return this.checkIfNotNullValueInsidePetValues()
          && this.numberOfPets < this.setup.numberOfPetsAllowed;
      }
    }
  }

  addPet() {
    this.petFormsValues$[this.numberOfPets] = new BehaviorSubject<TenantPet>(null);
    this.numberOfPets++;
  }

  deletePetByIndex(index: number) {
    this.petFormsValues.splice(index, 1);
    this.fillPetsValues();
    this.numberOfPets--;
    this.petFormsValues$.splice(-1, 1);
  }

  fillPetsValues() {
    this.petFormsValues
      .forEach((value, index) => {
        this.petFormsValues$[index].next(value);
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
