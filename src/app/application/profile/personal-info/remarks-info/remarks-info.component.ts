import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {
  Answer,
  Question,
  RemarksInfo,
  remarksQuestions,
  ArrestedInfo
} from '../../../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import {CoApplicantType} from '../../../../shared/definitions/types/co-applicant.type';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ChildForm} from '../../child-form.interface';
import {ProfileFormService} from '../../profile-form.service';
import {first, takeUntil} from 'rxjs/operators';
import {ApplicationParams} from '../../../../shared/definitions/forms/profile-form/application-params.interface';
import { MatDialog } from '@angular/material';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';

@Component({
  selector: 'tev-remarks-info',
  templateUrl: './remarks-info.component.html',
  styleUrls: ['./remarks-info.component.scss']
})
export class RemarksInfoComponent implements OnInit, AfterViewInit, ChildForm, OnDestroy {

  coApplicantType: CoApplicantType;
  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();


  numberOfArrests: number = 1;
  anyArrest: boolean;
  arrestsFormsValues: ArrestedInfo[] = [];
  arrestsFormsValues$: BehaviorSubject<ArrestedInfo>[] = [new BehaviorSubject<ArrestedInfo>(null)];

  CoAppNumberOfArrests: number = 1;
  CoAppAnyArrest: boolean;
  CoAppArrestsFormsValues: ArrestedInfo[] = [];
  CoAppArrestsFormsValues$: BehaviorSubject<ArrestedInfo>[] = [new BehaviorSubject<ArrestedInfo>(null)];

  remarksQuestions = remarksQuestions;
  formQuestions: Question[];
  formQuestionsObject: {[key: string]: Question};
  controlNames: string[];
  questionGroups: {[key: string]: FormGroup} = {};
  hideApplicantExplanation = true;
  hideCoApplicantExplanation = true;

  remarkChanged: boolean = false;
  initialData: RemarksInfo;
  copyOfInitialData: boolean = false;
  onRestoreInitialData: boolean = false;

  backupOnEnterReviewEdit: RemarksInfo;


  data: RemarksInfo;
  @Input()
  set info(info: Observable<RemarksInfo>) {
    info.subscribe((remarksInfo) => {
      this.data = remarksInfo;
      if (this.data) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() public onChange = new EventEmitter();
  @Output() public isValid = new EventEmitter();
  @Output() formChanged: EventEmitter<RemarksInfo> = new EventEmitter<RemarksInfo>();

  @Input() viewType: string = 'normal';
  @Input() onCancel: boolean = false;

  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    public dialog: MatDialog,

  ) {
    this.listenToApplicationParams();
    this.defaultValues();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();
  }


  openCancelDialog() {
    const dialogRef = this.dialog.open(CancelDialogComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true
    })
    dialogRef.afterClosed().subscribe(() => {
      window.location.reload()
    });
  }

  restoreInitialData() {
    if(this.onRestoreInitialData) {
      this.openCancelDialog()
      // window.location.reload()
    }
    Object.keys(this.childForm.controls)
    .forEach(controlName => {
      const data = this.initialData[controlName];
      if (!!data) {
        switch (controlName){
          case 'arrests':
            this.setArrestsInfo(data);
            break;
          case 'co_applicant_arrests':
            this.setArrestsInfo(data, 'co_applicant_arrests');
            break;
          default:
            try {
              this.childForm.controls[controlName].setValue(data);
            } catch (error) {
              //console.log('Dont have data for this control')
            }
            break;
        }
      }
    });
    this.onRestoreInitialData = true;
  }

  ngAfterViewInit(){
    this.createCopyOfInitialData();
    this.sendOnChangeInfo();
    // this.refreshData()
  }

//   refreshData() {
//   if (this.viewType = 'review') {
//     if(this.childForm.controls['applicant_explanation'].value !== "") {
//       if (this.childForm.controls['arrests']){
//         const {arrests} = this.childForm.value;
//         arrests.forEach(arrest => {
//           console.log(arrest.county)
//           console.log(arrest.dateArrest)
//           console.log(arrest.state)
//           console.log(arrest.typeOffense)
//           // if (arrest.county.length = 0) window.location.reload()
//           // if (arrest.dateArrest.length = 0) window.location.reload()
//           // if (arrest.state.length = 0) window.location.reload()
//           // if (arrest.typeOffense.length = 0) window.location.reload()
//         });
//       }
//     }
//     if(this.childForm.controls['co_applicant_explanation'].value !== "") {
//       if (this.childForm.controls['co_applicant_arrests']){
//         const {co_applicant_arrests} = this.childForm.value;
//         co_applicant_arrests.forEach(arrest => {
//           if (arrest.county.length = 0) window.location.reload()
//           if (arrest.dateArrest.length = 0) window.location.reload()
//           if (arrest.state.length = 0) window.location.reload()
//           if (arrest.typeOffense.length = 0) window.location.reload()
//         });
//       }
//     }
//   }
// }

  createCopyOfInitialData() {
    if(!this.copyOfInitialData){
      this.initialData = JSON.parse(JSON.stringify(this.childForm.value));
      this.copyOfInitialData = true;
      localStorage.setItem('initialData', JSON.stringify(this.childForm.value));
    }
  }

  sendOnChangeInfo() {

    if(this.childForm.value && this.initialData){
      const childFormWithoutCountryDropdown =
      this.childForm.value.arrests.map(function(item) {
        delete item.countyDropdown;
        return item;
      });
      const initialDataWithoutCountryDropdown =
      this.initialData.arrests.map(function(item) {
        delete item.countyDropdown;
        return item;
      });
      if (!this.onCancel) {
        if (JSON.stringify(initialDataWithoutCountryDropdown) === JSON.stringify(childFormWithoutCountryDropdown)) {
          this.onChange.emit(false);
        } else {
          this.onChange.emit(true);
        }
      }
    }
  }

  listenToApplicationParams() {
    this.profileFormService
      .applicationParams$
      .pipe(
        first(params => !!params),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((params: ApplicationParams) => {
        const {coApplicantType} = params;
        this.coApplicantType = coApplicantType;
      });
  }

  initForm() {
    this.setQuestions();

    this.childForm = this.formBuilder
      .group({
        arrests: [[]],
        co_applicant_arrests: [[]],
        applicant_explanation: [''],
        co_applicant_explanation: [''],
      });

    this.addQuestions();

    this.childForm
      .controls['applicant_explanation']
      .setValidators(
        [
          Validators.maxLength(500),
          CustomValidators.asciiValidator(),
          CustomValidators.requiredIfOneOfProvidedAffirmative(this.childForm, this.controlNames)
        ]
      );

      this.childForm
      .controls['arrests']
      .setValidators(
        [
          CustomValidators.requiredArrestsIfOneOfProvidedAffirmative(this.childForm, this.controlNames)
        ]
      );

    if (this.hasCoApplicant()) {
      this.childForm
        .controls['co_applicant_explanation']
        .setValidators(
          [
            Validators.maxLength(500),
            CustomValidators.asciiValidator(),
            CustomValidators.requiredIfOneOfProvidedAffirmative(this.childForm, this.controlNames, true)
          ]
        );

        this.childForm
            .controls['co_applicant_arrests']
            .setValidators(
                [
                CustomValidators.requiredArrestsIfOneOfProvidedAffirmative(this.childForm, this.controlNames, true)
                ]
            );
    }


    this.subscribeToFormChanges();

    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);

  }

  arrestInfoChanged(info: ArrestedInfo, index: number, who: string = 'applicant') {
        let key;
        let value;
        if(who == 'applicant') {
            this.arrestsFormsValues[index] = info;
            key = 'arrests';
            value = this.checkIfNotNullValueInsideArrestValues() ? this.arrestsFormsValues : null;
        } else {
            this.CoAppArrestsFormsValues[index] = info;
            key = 'co_applicant_arrests';
            value = this.checkIfNotNullValueInsideArrestValues(who) ? this.CoAppArrestsFormsValues : null;
        }

        this.childForm.controls[key].setValue(value);
        this.childForm.controls[key].updateValueAndValidity();
  }

  subscribeToFormChanges() {

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (!this.onCancel) {
          if (status === 'VALID') {
            this.formChanged.emit(this.childForm.value);
            this.isValid.emit(true);
          } else {
            this.formChanged.emit(null);
            this.isValid.emit(false);
          }
        }
      });


      this.childForm
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.sendOnChangeInfo();
      });
  }

  addQuestions() {

    this.formQuestions.forEach(question => {

      const controlMain = new FormControl(null, Validators.required);
      this.childForm.addControl(question.mainField, controlMain);

      this.questionGroups[`${question.mainField}Answers`] = new FormGroup({});

      question.fields
        .forEach((field: Answer) => {
          const control = new FormControl(false);
          this.questionGroups[`${question.mainField}Answers`].addControl(field.key, control);
        });

      this.childForm.addControl(`${question.mainField}Answers`, this.questionGroups[`${question.mainField}Answers`]);

      this.questionGroups[`${question.mainField}Answers`]
        .valueChanges
        .pipe(
          takeUntil(this.unsubscribeSubject)
        )
        .subscribe(() => {
          this.childForm.controls['applicant_explanation'].updateValueAndValidity();
          this.childForm.controls['co_applicant_explanation'].updateValueAndValidity();
          this.childForm.controls['arrests'].updateValueAndValidity();
          this.childForm.controls['co_applicant_arrests'].updateValueAndValidity();
          this.updateExplanationsDisplay();
        });

    });
  }

  updateExplanationsDisplay() {
    const values = this.controlNames
      .map(controlName => {
        return this.childForm.controls[controlName].value;
      })
      .reduce((acc, current) => {
        if (this.hasCoApplicant()) {
          return {
            primaryApplicant: acc
              ? acc.primaryApplicant || current.primaryApplicant
              : current.primaryApplicant,
            secondaryApplicant: acc
              ? acc.secondaryApplicant || current.secondaryApplicant
              : current.secondaryApplicant,
          }
        } else{
          return {
            primaryApplicant: acc
              ? acc.primaryApplicant || current.primaryApplicant
              : current.primaryApplicant
          }
        }
      }, {});

    if(!this.hideApplicantExplanation && !values.primaryApplicant) {
        this.clearArrestData();
    }
    this.hideApplicantExplanation = !values.primaryApplicant;
    if (this.hasCoApplicant()) {
        if(!this.hideCoApplicantExplanation && !values.secondaryApplicant) {
            this.clearArrestData('co_applicant');
        }
        this.hideCoApplicantExplanation = !values.secondaryApplicant;
    }
  }

  /**
   * Fill the values with values previously stored
   */
  defaultValues() {
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        this.formQuestions
          .forEach(question => {

            if (this.data[question.mainField]) {
              if (this.data.arrestedAnswers.primaryApplicant != undefined
                || this.data.arrestedAnswers.secondaryApplicant != undefined) {
                // if ((this.data.arrestedAnswers.primaryApplicant === false || this.data.arrestedAnswers.secondaryApplicant === false)
                //   || this.data.arrestedAnswers.secondaryApplicant === true || this.data.arrestedAnswers.primaryApplicant === true) {
                this.childForm
                  .controls[question.mainField]
                  .setValue(this.data[question.mainField]);
                //}

                question.fields
                  .forEach((field: Answer) => {

                    if (this.data[`${question.mainField}Answers`]
                      && this.data[`${question.mainField}Answers`][field.key]){

                      this.questionGroups[`${question.mainField}Answers`]
                        .controls[field.key]
                        .setValue(this.data[`${question.mainField}Answers`][field.key]);
                    }

                  });

                this.questionGroups[`${question.mainField}Answers`].updateValueAndValidity();

                Object.keys(this.childForm.controls)
                .forEach(controlName => {
                  const data = this.data[controlName];
                  if (!!data) {
                    switch (controlName){
                      case 'arrests':
                        this.setArrestsInfo(data);
                        break;
                      case 'co_applicant_arrests':
                        this.setArrestsInfo(data, 'co_applicant_arrests');
                        break;
                      default:
                        try {
                          this.childForm.controls[controlName].setValue(data);
                        } catch (error) {
                          //console.log('Dont have data for this control')
                        }
                        break;
                    }
                  }
                });
              }
            }
          });
        this.childForm.updateValueAndValidity();
      });
  }

  hasCoApplicant(): boolean {
    return !!this.coApplicantType && this.coApplicantType !== 'W';
  }

  setQuestions() {
    this.formQuestions = this.hasCoApplicant() ? this.remarksQuestions.withCoApplicant : this.remarksQuestions.applicantOnly;
    this.formQuestionsObject = this.formQuestions
      .reduce((previous, current) =>{
        return Object.assign({[current.mainField]: current}, previous);
      }, {});

    this.controlNames = this.formQuestions
      .filter(question => {
          return question.mainField != 'evicted';
      })
      .map(question => {
        return `${question.mainField}Answers`;
      });
  }

  updateValidators(questionKey: string) {

    const question = this.formQuestionsObject[questionKey];
    const affirmative = this.childForm.value[questionKey] === 'yes';

    const childValidator = affirmative ? CustomValidators.oneOfGroupMustBeAffirmative() : null;

    this.childForm.controls[`${question.mainField}Answers`].setValidators(childValidator);
    this.childForm.controls[`${question.mainField}Answers`].updateValueAndValidity();

    if (!affirmative) {
      this.setGroupValues(question.mainField, false);
    }
  }

  setGroupValues(groupName: string, value: any) {
    Object.keys(this.questionGroups[`${groupName}Answers`].controls)
      .forEach(control => {
        this.questionGroups[`${groupName}Answers`].controls[control].setValue(value);
        this.questionGroups[`${groupName}Answers`].controls[control].updateValueAndValidity();
      });
  }

  /**
   * Mark controls as touched to know where the error is.
   */
  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }


  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  submit(): void {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
    localStorage.setItem('initialData', JSON.stringify(this.childForm.value));
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
    localStorage.removeItem('initialData');
    this.unsubscribeSubject.next(true);
  }

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }

  getNumberOfForms(who: string = 'applicant'): number[] {
      const structure = who == 'applicant' ? this.numberOfArrests : this.CoAppNumberOfArrests;
      return Array.apply(null, {length: structure});
  }

  showAddForm(who: string = 'applicant'): boolean {
    if (this.viewType !== 'review') {
      return this.checkIfNotNullValueInsideArrestValues(who);
    }
  }

  checkIfNotNullValueInsideArrestValues(who: string = 'applicant') {
    const analyzedElements = who == 'applicant' ? this.arrestsFormsValues : this.CoAppArrestsFormsValues;
    let correct = analyzedElements && analyzedElements.length > 0 ? true : false;
    analyzedElements.forEach(record => {
        if(record){
            const {caseArrest, ...mandatories} = record;
            if (record.state === 'FL') {
              delete mandatories.county;
            } else if (record.state === 'NONUS') {
              delete mandatories.county;
              // @ts-ignore
              delete mandatories.countyDropdown;
            } else {
              // @ts-ignore
              delete mandatories.countyDropdown;
            }
        correct = correct && Object.values(mandatories).every(value => !!value);
        } else {
            correct = false;
        }
    });
    return correct;
  }

  deleteArrestByIndex(index: number, who: string = 'applicant') {
      if(who == 'applicant'){
        this.arrestsFormsValues.splice(index, 1);
        this.fillArrestsValues(who);
        this.numberOfArrests--;
        this.arrestsFormsValues$.splice(-1, 1);
      } else {
        this.CoAppArrestsFormsValues.splice(index, 1);
        this.fillArrestsValues(who);
        this.CoAppNumberOfArrests--;
        this.CoAppArrestsFormsValues$.splice(-1, 1);
      }

  }

  fillArrestsValues(who: string) {
      if(who == 'applicant'){
        this.arrestsFormsValues.forEach((value, index) => {
            this.arrestsFormsValues$[index].next(value);
        });
      } else {
        this.CoAppArrestsFormsValues.forEach((value, index) => {
            this.CoAppArrestsFormsValues$[index].next(value);
        });
      }
  }

  addArrest(who: string = 'applicant') {
      if(who == 'applicant'){
        this.arrestsFormsValues$[this.numberOfArrests] = new BehaviorSubject<ArrestedInfo>(null);
        this.numberOfArrests++;
      } else {
        this.CoAppArrestsFormsValues$[this.CoAppNumberOfArrests] = new BehaviorSubject<ArrestedInfo>(null);
        this.CoAppNumberOfArrests++;
      }

  }

  setArrestsInfo(data: ArrestedInfo[], who: string = 'applicant') {
      if(who == 'applicant'){
        this.arrestsFormsValues = data;
        this.arrestsFormsValues
        .forEach((value, index) => {

            if (index > 0) {
            this.arrestsFormsValues$[index] = new BehaviorSubject<ArrestedInfo>(value);
            } else {
            this.arrestsFormsValues$[index].next(value);
            }

        });

        this.numberOfArrests = this.arrestsFormsValues.length;
        this.anyArrest = this.numberOfArrests > 0;
    } else {
        this.CoAppArrestsFormsValues = data;
        this.CoAppArrestsFormsValues
        .forEach((value, index) => {

            if (index > 0) {
            this.CoAppArrestsFormsValues$[index] = new BehaviorSubject<ArrestedInfo>(value);
            } else {
            this.CoAppArrestsFormsValues$[index].next(value);
            }

        });

        this.CoAppNumberOfArrests = this.CoAppArrestsFormsValues.length;
        this.CoAppAnyArrest = this.CoAppNumberOfArrests > 0;
    }
  }
  clearArrestData(who: string = 'applicant') {
    if(who == 'applicant'){
        this.arrestsFormsValues = [null];
        this.arrestsFormsValues$ = [new BehaviorSubject<ArrestedInfo>(null)];
        this.childForm.controls['arrests'].setValue(null);
        this.childForm.controls['arrests'].updateValueAndValidity();
        this.childForm.controls['applicant_explanation'].setValue('');
        this.childForm.controls['applicant_explanation'].updateValueAndValidity();
        this.numberOfArrests = 1;
    } else {
        this.CoAppArrestsFormsValues = [null];
        this.CoAppArrestsFormsValues$ = [new BehaviorSubject<ArrestedInfo>(null)];
        this.childForm.controls['co_applicant_arrests'].setValue(null);
        this.childForm.controls['co_applicant_arrests'].updateValueAndValidity();
        this.childForm.controls['co_applicant_explanation'].setValue('');
        this.childForm.controls['co_applicant_explanation'].updateValueAndValidity();
        this.CoAppNumberOfArrests = 1;
    }
  }
}
