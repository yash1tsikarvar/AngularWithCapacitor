import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Observable, combineLatest} from 'rxjs';
import {CoApplicantType} from '../../../../shared/definitions/types/co-applicant.type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MilitaryInfo, militaryQuestions} from '../../../../shared/definitions/forms/profile-form/personal-info/military-info.interface';
import {Answer, Question} from '../../../../shared/definitions/forms/profile-form/personal-info/remarks-info.interface';
import {UiService} from '../../../../ui/ui.service';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ChildForm} from '../../child-form.interface';
import {ProfileFormService} from '../../profile-form.service';
import {first, takeUntil} from 'rxjs/operators';
import {ApplicationParams} from '../../../../shared/definitions/forms/profile-form/application-params.interface';

@Component({
  selector: 'tev-military-info',
  templateUrl: './military-info.component.html',
  styleUrls: ['./military-info.component.scss']
})
export class MilitaryInfoComponent implements OnInit, ChildForm, OnDestroy {

  coApplicantType: CoApplicantType;
  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  militaryQuestions = militaryQuestions;
  formQuestions: Question[];
  formQuestionsObject: {[key: string]: Question};
  controlNames: string[];
  questionGroups: {[key: string]: FormGroup} = {};

  previousConfirmValue: string = null;

  data: MilitaryInfo;
  @Input()
  set info(info: Observable<MilitaryInfo>) {
    info.subscribe((militaryInfo) => {
      this.data = militaryInfo;
      if (this.data) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<MilitaryInfo> = new EventEmitter<MilitaryInfo>();

  @Input() viewType: string = 'normal';
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {

    this.defaultValues();
    this.listenForFormValidation();
    this.listenToApplicationParams()
  }

  ngOnInit() {
    this.initForm();
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

    this.childForm = new FormGroup({});
    this.addQuestions();
    this.subscribeToFormChanges();

    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);
  }

  subscribeToFormChanges() {

    this.listenToAffirmativeAnswer();

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



    });
  }

  setQuestions() {
    this.formQuestions = this.hasCoApplicant() ? this.militaryQuestions.withCoApplicant : this.militaryQuestions.applicantOnly;
    this.formQuestionsObject = this.formQuestions
      .reduce((previous, current) =>{
        return Object.assign({[current.mainField]: current}, previous);
      }, {});

    this.controlNames = this.formQuestions
      .map(question => {
        return question.mainField;
      });
  }

  hasCoApplicant(): boolean {
    return !!this.coApplicantType && this.coApplicantType !== 'W';
  }

  /**
   * Fill the values with values previously stored.
   *
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
              if (this.data.activeMilitaryAnswers.primaryApplicant != undefined
                || this.data.activeMilitaryAnswers.secondaryApplicant != undefined) {

              this.childForm
              .controls[question.mainField]
              .setValue(this.data[question.mainField]);

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
              }
            }
          });
      });
  }

  listenToAffirmativeAnswer() {

    const control = this.childForm.controls['activeMilitary'];
    control
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {

        if (!control.pristine
          && value === 'yes'
          && this.previousConfirmValue !== value) {

          this.uiService.confirmAction({
            message: 'You have selected that the applicant is a United States active duty military. The active duty status will be verified from military resources.',
            showCancel: false
          });
        }

        this.previousConfirmValue = value;
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

  /**
   * Update the form controls validators based on the user answers
   *
   * @param {string} questionKey
   */
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

  /**
   * Set the values of the form controls
   *
   * @param {string} groupName
   * @param value
   */
  setGroupValues(groupName: string, value: any) {
    Object.keys(this.questionGroups[`${groupName}Answers`].controls)
      .forEach(control => {
        this.questionGroups[`${groupName}Answers`].controls[control].setValue(value);
        this.questionGroups[`${groupName}Answers`].controls[control].updateValueAndValidity();
      });
  }

  submit(): void {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
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
