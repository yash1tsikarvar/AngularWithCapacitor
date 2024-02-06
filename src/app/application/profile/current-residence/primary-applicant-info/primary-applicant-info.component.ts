import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject, combineLatest, BehaviorSubject} from 'rxjs';
import {
  ApplicantResidenceInfo,
  FamilyInfo,
  LandlordInfo,
  ResidenceInfo,
} from '../../../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import {ChildForm} from '../../child-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../../../ui/ui.service';
import {ProfileFormService} from '../../profile-form.service';
import {CurrentResidenceType} from '../../../../shared/definitions/types/current-residence.type';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tev-primary-applicant-info',
  templateUrl: './primary-applicant-info.component.html',
  styleUrls: ['./primary-applicant-info.component.scss']
})
export class PrimaryApplicantInfoComponent implements OnInit, ChildForm, OnDestroy {


  childForm: FormGroup;
  residenceType: CurrentResidenceType;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  residenceInfo$: BehaviorSubject<ResidenceInfo> = new BehaviorSubject<ResidenceInfo>(null);
  landLordInfo$: BehaviorSubject<LandlordInfo> = new BehaviorSubject<LandlordInfo>(null);
  familyInfo$: BehaviorSubject<FamilyInfo> = new BehaviorSubject<FamilyInfo>(null);
  data: ApplicantResidenceInfo;
  @Input()
  set info(info$: Observable<ApplicantResidenceInfo>) {
    info$.subscribe(residenceInfo => {
      this.data = residenceInfo;
      if (this.data) {
        this.dataReady$.next(true);
      }
    })
  }

  @Output() formChanged: EventEmitter<ApplicantResidenceInfo> = new EventEmitter<ApplicantResidenceInfo>();

  @Input() viewType: string = 'normal';  
      
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
        residenceInfo: [null, Validators.required],
        landLord: [null],
        familyInfo: [null]
      });

    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
    this.formReady$.next(true)
  }

  residenceInfoChanged(data: ResidenceInfo) {
    this.saveData<ResidenceInfo>('residenceInfo', data);
  }

  landLordInfoChanged(data: LandlordInfo) {
    this.saveData<LandlordInfo>('landLord', data);
  }

  familyInfoChanged(data: FamilyInfo) {
    this.saveData<FamilyInfo>('familyInfo', data);
  }

  saveData<T>(controlName: string, data: T) {
    this.childForm.controls[controlName].setValue(data);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
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
              const data = this.data[controlName];

              switch (controlName) {
                case 'residenceInfo':
                  this.setResidenceInfoValues(data);
                  break;
                case 'landLord':
                  this.setLandLordInfoValues(data);
                  break;
                case 'familyInfo':
                  this.setFamilyInfoValues(data);
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

  setResidenceInfoValues(data: ResidenceInfo) {
    this.residenceInfo$.next(data);
  }

  setLandLordInfoValues(data: LandlordInfo) {
    this.landLordInfo$.next(data);
  }

  setFamilyInfoValues(data: FamilyInfo) {
    this.familyInfo$.next(data);
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  submit(): void {
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
        if (status === 'VALID') {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });
  }

  residenceTypeChanged(residenceType: CurrentResidenceType) {
    this.residenceType = residenceType;
    this.updateValidators();
  }

  updateValidators() {
    const landLordValidator = this.showLandlordForm() ? Validators.required : null;
    const familyInfoValidator = this.showFamilyFriendForm() ? Validators.required : null;

    this.childForm.controls['landLord'].setValidators(landLordValidator);
    this.childForm.controls['landLord'].updateValueAndValidity();
    this.childForm.controls['familyInfo'].setValidators(familyInfoValidator);
    this.childForm.controls['familyInfo'].updateValueAndValidity();
  }

  showLandlordForm() {
    return this.residenceType === 'R';
  }

  showFamilyFriendForm() {
    return this.residenceType === 'D';
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
  }    
}
