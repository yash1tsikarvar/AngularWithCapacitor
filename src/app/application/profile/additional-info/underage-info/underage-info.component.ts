import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {UnderAgeInfo, UnderAgeOccupant} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {YesNoType} from '../../../../shared/definitions/types/yes-no.type';
import {takeUntil} from 'rxjs/operators';
import {SetupResponse} from '../../../../shared/definitions/responses/setup.response';

@Component({
  selector: 'tev-underage-info',
  templateUrl: './underage-info.component.html',
  styleUrls: ['./underage-info.component.scss']
})
export class UnderageInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: UnderAgeInfo;
  @Input()
  set info(info$: Observable<UnderAgeInfo>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<UnderAgeInfo> = new EventEmitter<UnderAgeInfo>();

  anyUnderAge: boolean;
  occupantsFormsValues: UnderAgeOccupant[] = [];
  occupantsFormsValues$: BehaviorSubject<UnderAgeOccupant>[] = [new BehaviorSubject<UnderAgeOccupant>(null)];
  numberOfOccupants = 1;

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
        anyUnderAge: [null, Validators.required],
        underAgeOccupants: [null]
      });

    this.childForm
      .controls['underAgeOccupants']
      .setValidators(
        CustomValidators.requiredIfControlEqualsTo(this.childForm, 'anyUnderAge', 'yes')
      );
  }

  occupantInfoChanged(info: UnderAgeOccupant, index: number) {
    this.occupantsFormsValues[index] = info;
    const value = this.checkIfNotNullValueInsideOccupantValues() ? this.occupantsFormsValues : null;

    this.childForm.controls['underAgeOccupants'].setValue(value);
    this.childForm.controls['underAgeOccupants'].updateValueAndValidity();

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
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            const data = this.data[controlName];

            if (!!data) {
              switch (controlName){
                case 'underAgeOccupants':
                  this.setOccupantsInfo(data);
                  break;
                default:
                  this.childForm.controls[controlName].setValue(data);
                  break;
              }
            }
          });

      });
  }

  setOccupantsInfo(data: UnderAgeOccupant[]) {

    this.occupantsFormsValues = data;
    this.occupantsFormsValues
      .forEach((value, index) => {

        if (index > 0) {
          this.occupantsFormsValues$[index] = new BehaviorSubject<UnderAgeOccupant>(value);
        } else{
          this.occupantsFormsValues$[index].next(value);
        }

      });

    this.numberOfOccupants = this.occupantsFormsValues.length;
    this.anyUnderAge = this.numberOfOccupants > 0;
  }

  getError(controlName: string): string {
    const errors = this.childForm.controls[controlName].errors;
    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  submit() {

    if (!this.childForm.valid){
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
        if ('VALID' === status ){
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm
      .controls['anyUnderAge']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.childForm.controls['underAgeOccupants'].updateValueAndValidity();
      });

  }

  yesNoChanged(value: YesNoType) {
    this.anyUnderAge = value === 'yes';
  }

  getNumberOfForms(): number[] {
    return Array.apply(null, {length: this.numberOfOccupants});
  }

  showAddForm(): boolean {
    return this.checkIfNotNullValueInsideOccupantValues()
      && (
        this.setup.numberOfOthersAllowed === -1
        || this.numberOfOccupants < this.setup.numberOfOthersAllowed
      );
  }

  checkIfNotNullValueInsideOccupantValues() {
    return this.occupantsFormsValues.every(value => !!value);
  }

  addOccupant() {
    this.occupantsFormsValues$[this.numberOfOccupants] = new BehaviorSubject<UnderAgeOccupant>(null);
    this.numberOfOccupants++;
  }

  deleteOccupantByIndex(index: number) {
    this.occupantsFormsValues.splice(index, 1);
    this.fillOccupantsValues();
    this.numberOfOccupants--;
    this.occupantsFormsValues$.splice(-1, 1);
  }

  fillOccupantsValues() {
    this.occupantsFormsValues
      .forEach((value, index) => {
        this.occupantsFormsValues$[index].next(value);
      });
  }


  listenForFormValidation() {
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

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }    
}
