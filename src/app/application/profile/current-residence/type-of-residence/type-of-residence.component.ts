import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, combineLatest, Subject} from 'rxjs';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {CurrentResidenceType, CurrentResidenceTypeValues} from '../../../../shared/definitions/types/current-residence.type';
import {takeUntil} from 'rxjs/operators';

let uniqueId = 0;

@Component({
  selector: 'tev-type-of-residence',
  templateUrl: './type-of-residence.component.html',
  styleUrls: ['./type-of-residence.component.scss']
})
export class TypeOfResidenceComponent implements OnInit, OnDestroy {

  id = uniqueId++;
  residenceTypeForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  currentResidenceTypeValues = CurrentResidenceTypeValues;

  data: CurrentResidenceType;
  @Input()
  set type(type$: Observable<CurrentResidenceType>) {
    type$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(type => {
      if (this.data = type) {
        this.dataReady$.next(true);
      }
    });
  }

  @Input()
  set validate(validate$: Observable<boolean>) {
    validate$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(validate => {
      if (validate) {
        this.markControlsAsTouched();
      }
    });
  }

  @Output() valueChanged: EventEmitter<CurrentResidenceType> = new EventEmitter<CurrentResidenceType>();

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
  }

  initForm() {
    this.residenceTypeForm = this.formBuilder
      .group({
        type: [null, Validators.required]
      });

    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.residenceTypeForm.controls['type'].setValue(this.data);
      });
  }

  subscribeToFormChanges() {
    this.residenceTypeForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.valueChanged.emit(this.residenceTypeForm.value.type);
        } else {
          this.valueChanged.emit(null);
        }
      })
  }

  markControlsAsTouched() {
    this.residenceTypeForm.markAsTouched();
    this.uiService.markControlsAsTouched(this.residenceTypeForm);
  }

  getError(controlName: string): string {
    const {errors} = this.residenceTypeForm.controls[controlName];

    return this.uiService.getControlError(errors);
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
