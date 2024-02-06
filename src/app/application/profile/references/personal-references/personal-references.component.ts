import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {
  ApplicantPersonalReference,
  ApplicantPersonalReferences
} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-personal-references',
  templateUrl: './personal-references.component.html',
  styleUrls: ['./personal-references.component.scss']
})
export class PersonalReferencesComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  firstReferenceInfo$: BehaviorSubject<ApplicantPersonalReference> = new BehaviorSubject<ApplicantPersonalReference>(null);
  secondReferenceInfo$: BehaviorSubject<ApplicantPersonalReference> = new BehaviorSubject<ApplicantPersonalReference>(null);

  data: ApplicantPersonalReferences;
  @Input()
  set info(info$: Observable<ApplicantPersonalReferences>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    })
  }

  @Input() applicantType: string;
  @Output() formChanged: EventEmitter<ApplicantPersonalReferences> = new EventEmitter<ApplicantPersonalReferences>();

  @Input() viewType: string = 'normal';  
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

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
    this.childForm = this.formBuilder.group({
      firstReference: [null, Validators.required],
      secondReference: [null, Validators.required],
    });
  }

  referenceChange(data: ApplicantPersonalReference, field: string) {
    this.saveData<ApplicantPersonalReference>(field, data);
  }

  saveData<T>(controlName: string, data: T) {
    this.childForm.controls[controlName].setValue(data);
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
              switch (controlName) {
                case 'firstReference':
                  this.firstReferenceInfo$.next(data);
                  break;
                case 'secondReference':
                  this.secondReferenceInfo$.next(data);
                  break;
                default:
                  this.childForm.controls[controlName].setValue(data);
                  break;
              }
            }
          });

        this.childForm.updateValueAndValidity();

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
      })

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

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }     
}
