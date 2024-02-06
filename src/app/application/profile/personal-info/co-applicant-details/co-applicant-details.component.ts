import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Inject
} from '@angular/core'
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import {
  countries,
  PhoneCode,
  phoneCodes,
} from '../../../../shared/definitions/constants/phone_codes'
import { Observable, Subject, combineLatest } from 'rxjs'
import { UiService } from '../../../../ui/ui.service'
import { CustomValidators } from '../../../../shared/custom-validators'
import { ChildForm } from '../../child-form.interface'
import { AuthService } from '../../../../core/services/auth.service'
import { ProfileFormService } from '../../profile-form.service'
import { ApplicantInfo } from '../../../../shared/definitions/forms/profile-form/personal-info/applicant-info.interface'
import { filter, first, takeUntil } from 'rxjs/operators'
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface'
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response'
import * as accents from 'remove-accents'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { CoApplicantTypeValues } from '../../../../shared/definitions/types/co-applicant.type'
import { MatDialog } from '@angular/material/dialog'
import { CoApplicantSelectionAddDialogComponent } from './marriage-dialog/marriage-dialog.component'
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'tev-co-applicant-details',
  templateUrl: './co-applicant-details.component.html',
  styleUrls: ['./co-applicant-details.component.scss'],
})
export class CoApplicantDetailsComponent
  implements OnInit, ChildForm, OnDestroy
{
  coApplicantType: CoApplicantType
  coApplicantTypes = CoApplicantTypeValues

  childForm: FormGroup
  dialCodes: PhoneCode[] = phoneCodes.filter((code) => code.code !== 'CA')
  countries: PhoneCode[] = countries
  missingSSN = false

  hide: boolean = true
  buttonText: string

  formReady$: Subject<boolean> = new Subject<boolean>()
  dataReady$: Subject<boolean> = new Subject<boolean>()

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>()

  propertyInfo: PropertyInfoResponse;

  data: ApplicantInfo
  @Input()
  set info(info: Observable<ApplicantInfo>) {
    info.subscribe((coApplicantInfo) => {
      this.data = coApplicantInfo
      if (this.data) {
        this.dataReady$.next(true)
      }
    })
  }
  @Input() coApplicantTypeApplication = '' // decorate the property with @Input()

  maxDate: Date
  minDate: Date
  cellphonemask: any

  selectable: boolean
  removable: boolean
  addOnBlur: boolean
  separatorKeysCodes: number[]

  setup: SetupResponse

  previousSmsValue: boolean

  @Output() formChanged: EventEmitter<ApplicantInfo> =
    new EventEmitter<ApplicantInfo>()

  @Input() viewType: string = 'normal'
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private authService: AuthService,
    private profileFormService: ProfileFormService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.maxDate = this.profileFormService.maxAgeDate
    this.minDate = this.profileFormService.minAgeDate
    this.selectable = true
    this.removable = true
    this.addOnBlur = true
    this.separatorKeysCodes = [ENTER, COMMA]

    this.defaultValues()
    this.listenToSetup()
    this.listenToApplicationParams()
    this.listenForFormValidation()
    this.listenToPropertyInformation()
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    // const pattern = /^([a-zA-ZÀ-ÖØ-öø-ÿ])+$/
    // const pattern2 = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+(\s[a-zA-ZÀ-ÖØ-öø-ÿ-]+)?$/

    this.childForm = this.formBuilder.group({
      coApplicantType: ['', Validators.required],
      firstName: [
        null,
        [
          Validators.required,
          Validators.maxLength(30),
          CustomValidators.firstName(),
        ],
      ],
      middleInitial: [
        null,
        [Validators.maxLength(1), CustomValidators.firstName()],
      ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.maxLength(30),
          CustomValidators.lastName(),
        ],
      ],
      maternalName: [
        null,
        [Validators.maxLength(30), CustomValidators.lastName()],
      ],
      dateOfBirth: [null, Validators.required],
      email: (this.propertyInfo.shortApplication == 'SHORT')? ['shortapplication@tenantevaluation.com'] :
      [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(50),
          CustomValidators.asciiValidator(),
          CustomValidators.emailValidator(),
        ],
        [
          CustomValidators.usedEmailValidator(
            'mainApplicant',
            this.profileFormService.emailsUsed$
          ),
        ],
      ],
      country: ['US', Validators.required],
      dialCode: ['+1', Validators.required],
      cellPhone: [null, CustomValidators.phoneValidator()],
      missingSnn: [this.missingSSN],
      receiveTextMessages: [(this.propertyInfo.shortApplication == 'SHORT')? false: true],
      aka: [[]],
    })

    const ssnValidators = this.setup.ssnRequired
      ? [
          CustomValidators.requiredIfControlEqualsTo(
            this.childForm,
            'missingSnn',
            false
          ),
          Validators.minLength(9),
          CustomValidators.ssnValidator(),
        ]
      : null

    const ssnControl = new FormControl('', {
      validators: ssnValidators,
    })

    const passportControl = new FormControl('', {
      validators: [
        CustomValidators.requiredIfControlEqualsTo(
          this.childForm,
          'missingSnn',
          true
        ),
        Validators.maxLength(50),
      ],
    })

    const passportCountryControl = new FormControl('', {
      validators: [
        CustomValidators.requiredIfControlEqualsTo(
          this.childForm,
          'missingSnn',
          true
        ),
        Validators.maxLength(3),
      ],
    })

    this.childForm.addControl('ssn', ssnControl)
    this.childForm.addControl('passport', passportControl)
    this.childForm.addControl('passportCountry', passportCountryControl)

    this.subscribeToFormChanges()

    this.formReady$.next(true)
  }

  removeAccents(event: any, control: string) {
    this.childForm.controls[control].setValue(
      accents.remove(event.target.value)
    )
    this.childForm.controls[control].updateValueAndValidity()
  }

  listenToSetup() {
    this.profileFormService.setup$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((setup) => (this.setup = setup))
  }

  subscribeToFormChanges() {
    this.listenToNegativeAnswerOnSms()

    this.childForm.statusChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((status) => {
        if (status === 'VALID') {
          this.formChanged.emit(this.childForm.value)
        } else {
          this.formChanged.emit(null)
        }
      })

    this.childForm.controls['email'].valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((email) => {
        this.profileFormService.setEmailUsed('coApplicant', email)
      })

    this.childForm.controls['dialCode'].valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((dialCode) => {
        this.updatePhoneValidators(dialCode)
      })
    this.updatePhoneValidators(this.childForm.controls['dialCode'].value)

    // this.childForm
    // .controls['coApplicantType']
    // .valueChanges
    // .pipe(
    //   takeUntil(this.unsubscribeSubject)
    // )
    // .subscribe(coApplicantType => {
    //   if(coApplicantType === 'S') {
    //     this.showDocumentsRequired()
    //   }
    // })
  }

  getValueCoApplicantType(type) {
    if (type === 'S') {
      this.showDocumentsRequired()
    }
  }

  showDocumentsRequired() {
    const dialogRef = this.dialog.open(CoApplicantSelectionAddDialogComponent, {
      panelClass: 'custom-dialog-container',
    })
  }

  openExternalUrl() {
    window.open(
      'https://support.tenantevaluation.com/support/solutions/articles/65000182043-more-than-2-people-applying-together',
      '_blank'
    )
  }

  listenToNegativeAnswerOnSms() {
    const control = this.childForm.controls['receiveTextMessages']
    control.valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (
          !control.pristine &&
          value === false &&
          this.previousSmsValue !== value
        ) {
          this.uiService.confirmAction({
            message:
              'If you opt out of receiving text messages, the application may be delayed.',
            showCancel: false,
          })
        }

        this.previousSmsValue = value
      })
  }

  listenToApplicationParams() {
    this.profileFormService.applicationParams$
      .pipe(
        first((params) => !!params),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(
        (params: ApplicationParams) =>
          (this.coApplicantType = params.coApplicantType)
      )
  }

  /**
   * Fill the values with values previously stored
   */
  defaultValues() {
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(() => {
        Object.keys(this.childForm.controls).forEach((controlName) => {
          if ('coApplicantType' === controlName) {
            this.childForm.controls[controlName].setValue(
              this.coApplicantTypeApplication
            )
          }

          if (typeof this.data[controlName] !== 'undefined') {
            if ('missingSnn' !== controlName) {
              this.childForm.controls[controlName].setValue(
                this.data[controlName]
              )
            } else {
              this.childForm.controls[controlName].setValue(
                this.setup.ssnRequired ? this.data[controlName] : false
              )
              this.missingSSN = this.setup.ssnRequired
                ? this.data[controlName]
                : false
            }
          }
        })

        this.childForm.updateValueAndValidity()
      })
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm)
  }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const { errors } = this.childForm.controls[controlName]

    return this.uiService.getControlError(errors)
  }

  toggleSSN(event: MouseEvent | TouchEvent) {
    event.preventDefault()
    const { missingSnn } = this.childForm.value
    this.missingSSN = !missingSnn
    this.childForm.controls['missingSnn'].setValue(!missingSnn)
    this.resetValues()
    this.uiService.updateControlsValueAndValidity(this.childForm)
  }

  resetValues() {
    this.childForm.controls['ssn'].reset()
    this.childForm.controls['passport'].reset()
    this.childForm.controls['passportCountry'].reset()
    this.childForm.controls['passportCountry'].setValue('')
  }

  sendTextMessages(): boolean {
    const { dialCode } = this.childForm.value
    return dialCode === '+1'
  }

  modifyVisibility() {
    this.hide = !this.hide
    this.buttonText = this.hide ? 'Show' : 'Hide'
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched()
    }
  }

  listenForFormValidation(): void {
    this.profileFormService.validateForm$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(() => {
        this.markControlsAsTouched()
      })
  }


  listenToPropertyInformation() {

    this.profileFormService
      .propertyInfo$
      .pipe(
        filter(info => !!info),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => this.propertyInfo = info);
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true)
  }

  reviewEdit() {
    this.viewType = 'review-edit'
    this.viewTypeChanged.emit(this.viewType)
  }

  updatePhoneValidators(dial: string) {
    let phoneValidators = []
    phoneValidators = CustomValidators.phoneValidator()
    if (dial == '+1') {
      phoneValidators.splice(2, 1, Validators.minLength(10))
      this.cellphonemask = [
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]
    } else {
      this.cellphonemask = false
      if (this.childForm.controls['cellPhone'].value) {
        const cleanValue = this.childForm.controls['cellPhone'].value.replace(
          /-/gi,
          ''
        )
        this.childForm.controls['cellPhone'].setValue(cleanValue)
        const inputPhone = this.document.getElementById('profileCoApplicantCellPhone');
        if (inputPhone) inputPhone['value'] = cleanValue;
      }
    }
    this.childForm.controls['cellPhone'].setValidators(phoneValidators)
    this.childForm.controls['cellPhone'].updateValueAndValidity()
  }

  addAlias(event: MatChipInputEvent): void {
    const input = event.input
    const value = event.value
    if ((value || '').trim()) {
      this.childForm.value.aka.push(value.trim())
    }

    if (input) {
      input.value = ''
    }
  }

  removeAlias(name): void {
    const index = this.childForm.value.aka.indexOf(name)
    if (index >= 0) {
      this.childForm.value.aka.splice(index, 1)
    }
  }
}
