import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {combineLatest, Observable, Subject} from 'rxjs';
import {ProofOfIncomeStep1} from '../../../../shared/definitions/forms/profile-form/references/references.interface';
import {UiService} from '../../../../ui/ui.service';
import {AuthService} from '../../../../core/services/auth.service';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-income-verification',
  templateUrl: './income-verification.component.html',
  styleUrls: ['./income-verification.component.scss']
})
export class IncomeVerificationComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  data: ProofOfIncomeStep1;

  @Input()
  set info(info$: Observable<ProofOfIncomeStep1>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<ProofOfIncomeStep1> = new EventEmitter<ProofOfIncomeStep1>();


  @Input() viewType = 'normal';
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();
  hasUsBank: boolean;
  notAllowedBank: boolean;
  showHasBank: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
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
        hasUsBank: ['', Validators.required],
        notAllowedBank: ['', Validators.required],
        bankName: ['']
      });

    this.childForm.controls['hasUsBank']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        if (this.childForm.controls['hasUsBank'].value === 'yes') {
          this.hasUsBank = true;
          this.showHasBank = true;
          this.childForm.get('notAllowedBank').setValidators(Validators.required);
          this.childForm.get('bankName').setValidators(Validators.required);
          this.childForm.controls['bankName'].updateValueAndValidity();
        } else {
          this.hasUsBank = false;
          this.showHasBank = false;
          this.childForm.controls['notAllowedBank'].clearValidators();
          this.childForm.controls['notAllowedBank'].updateValueAndValidity();
          this.childForm.controls['bankName'].setValue(null);
          this.childForm.controls['bankName'].clearValidators();
          this.childForm.controls['bankName'].updateValueAndValidity();
        }
      });

    this.childForm.controls['notAllowedBank']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        if (this.childForm.controls['notAllowedBank'].value === 'yes') {
          this.notAllowedBank = true;
          this.childForm.get('bankName').setValidators(Validators.required);
          this.childForm.get('bankName').setValue('notAllowedBank');
        } else {
          this.notAllowedBank = false;
          this.childForm.controls['bankName'].setValue(null);
          this.childForm.controls['bankName'].clearValidators();
          this.childForm.controls['bankName'].updateValueAndValidity();
        }
      });

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
      });

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

  reviewEdit() {
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }
}

