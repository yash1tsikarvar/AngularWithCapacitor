import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest} from 'rxjs';
import {FamilyInfo} from '../../../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {takeUntil} from 'rxjs/operators';
import {PhoneCode, phoneCodes } from '../../../../shared/definitions/constants/phone_codes';

let counter = 0;

@Component({
  selector: 'tev-family-friend-info',
  templateUrl: './family-friend-info.component.html',
  styleUrls: ['./family-friend-info.component.scss']
})
export class FamilyFriendInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  formCounter = counter++;
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA');

  dataReady$: Subject<boolean> = new Subject<boolean>();
  formReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  data: any;
  phonemask: any;
  @Input()
  set info(info$: Observable<any>){
    info$.subscribe(info => {
      if(this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  _applicantType: string = 'primary';
  @Input()
  set applicantType(applicantType: string) {
    this._applicantType = applicantType || this._applicantType;
  }

  get applicantType(): string {
    return this._applicantType;
  }

  @Output() formChanged: EventEmitter<FamilyInfo> = new EventEmitter<FamilyInfo>();

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
  }

  initForm() {
    this.childForm = this.formBuilder
      .group({
        name: [null, [Validators.required, Validators.maxLength(255), CustomValidators.asciiValidator()]],
        relationship: [null, [Validators.required, Validators.maxLength(60), CustomValidators.asciiValidator()]],
        dialCode: ['+1', Validators.required],
        phone: [null, CustomValidators.familyPhoneValidator()],
      });

    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
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

      this.childForm
        .controls['dialCode']
        .valueChanges
        .pipe(
            takeUntil(this.unsubscribeSubject)
        )
        .subscribe(dialCode => {
            this.updatePhoneValidators(dialCode);
        });
        this.updatePhoneValidators(this.childForm.controls['dialCode'].value);
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = [];
    phoneValidators = CustomValidators.phoneValidator();
    if(dial == "+1"){
        phoneValidators.splice(2, 1, Validators.minLength(10));
        this.phonemask = [/\d/, /\d/,/\d/, '-', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
        this.phonemask = false;
        if(this.childForm.controls['phone'].value){
            const cleanValue = this.childForm.controls['phone'].value.replace(/-/ig, '');
            this.childForm.controls['phone'].setValue(cleanValue);
            document.querySelector('#familyPhone-' + this.formCounter)['value'] = cleanValue;
        }
    }

    this.childForm.controls['phone'].setValidators(phoneValidators);
    this.childForm.controls['phone'].updateValueAndValidity();
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
