import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {UiService} from '../../../../ui/ui.service';
import {UnderAgeOccupant} from '../../../../shared/definitions/forms/profile-form/additional-info/additional-info.interface';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';
import {CustomValidators} from '../../../../shared/custom-validators';

let counter = 0;

@Component({
  selector: 'tev-underage-form',
  templateUrl: './underage-form.component.html',
  styleUrls: ['./underage-form.component.scss']
})
export class UnderageFormComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  data: UnderAgeOccupant;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  @Input()
  set info(info$: Observable<UnderAgeOccupant>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<UnderAgeOccupant> = new EventEmitter<UnderAgeOccupant>();

  @Input() formIndex: number;

  counter = counter++;

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
        name: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        relationship: [null, [Validators.required, Validators.maxLength(20), CustomValidators.asciiValidator()]],
        age: [null, [Validators.required, Validators.max(17), Validators.min(0)]],
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

}
