import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {Subject, Observable, combineLatest} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TenantPet} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {AnimalTypeValues} from '../../../../shared/definitions/forms/profile-form/additional-info/animal-types';
import {takeUntil} from 'rxjs/operators';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';
import {CustomValidators} from '../../../../shared/custom-validators';

let counter = 0;

@Component({
  selector: 'tev-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  data: TenantPet;
  animalTypes = AnimalTypeValues;
  showPetForm: boolean;

  esaPetValue: string = null;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  setup: SetupResponse;
  @Input() esaForm: boolean;

  @Input()
  set info(info$: Observable<any>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<TenantPet> = new EventEmitter<TenantPet>();

  @Input() formIndex: number;

  counter = counter++;

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
    if(this.esaForm) {
      this.esaPetValue = 'yes';
      this.showPetForm = true;
    }
  }

  yesNoChanged() {
    this.showPetForm = true;
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        esa: [this.esaPetValue, this.esaForm ? null : Validators.required],
        name: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        animalType: ['', Validators.required],
        breed: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        description: [null, [Validators.required, Validators.maxLength(255), CustomValidators.asciiValidator()]],
        age: [null, [Validators.required, Validators.min(0)]],
        weight: [null, [Validators.required, Validators.min(0), this.esaForm ? Validators.max(999) : Validators.max(this.setup.maxPetWeight)]],
        sex: ['', Validators.required],
        licenseTag: ['', [Validators.maxLength(50), CustomValidators.asciiValidator()]],
      });

      this.childForm
      .controls['esa']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(esa => {
        if (esa !!= undefined) {
          this.showPetForm = true;

          if(esa == 'no'){
            this.childForm.controls['weight'].setValidators([Validators.required, Validators.min(0), this.esaForm ? Validators.max(999) : Validators.max(this.setup.maxPetWeight)]);
          }else{
            this.childForm.controls['weight'].setValidators([Validators.required, Validators.min(0), Validators.max(999)]);
          }
          this.childForm.controls['weight'].markAsUntouched();
          this.childForm.controls['weight'].updateValueAndValidity();        

        }
      });
  
  }

  listenToSetup() {
    this.profileFormService
      .setup$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup => this.setup = setup);
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
              this.childForm.controls[controlName].setValue(this.data[controlName]);
            }

          });

        this.childForm.updateValueAndValidity();

      });

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
        } else{
          this.formChanged.emit(null);
        }
      });

    this.childForm.updateValueAndValidity();

  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

}
