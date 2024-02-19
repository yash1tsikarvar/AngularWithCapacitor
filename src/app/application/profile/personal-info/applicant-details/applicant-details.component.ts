import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Inject
} from '@angular/core'
import { ApplicantInfo } from '../../../../shared/definitions/forms/profile-form/personal-info/applicant-info.interface'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable, Subject, combineLatest } from 'rxjs'
import { UiService } from '../../../../ui/ui.service'
import {
  countries,
  PhoneCode,
  phoneCodes,
} from '../../../../shared/definitions/constants/phone_codes'
import { CustomValidators } from '../../../../shared/custom-validators'
import { ChildForm } from '../../child-form.interface'
import { ProfileFormService } from '../../profile-form.service'
import { SetupResponse } from '../../../../shared/definitions/responses/setup.response'
import { filter, first, takeUntil } from 'rxjs/operators'
import { ApplicationParams } from '../../../../shared/definitions/forms/profile-form/application-params.interface'
import { CoApplicantType } from '../../../../shared/definitions/types/co-applicant.type'
import { DecodeTokenModel } from '../../../../shared/definitions/models/decode-token.model'
import * as accents from 'remove-accents'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import {PropertyInfoResponse} from '../../../../shared/definitions/responses/property-info.response'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'tev-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss'],
})
export class ApplicantDetailsComponent implements OnInit, ChildForm, OnDestroy {
  coApplicantType: CoApplicantType

  childForm: FormGroup
  dialCodes: PhoneCode[] = phoneCodes.filter((code) => code.code !== 'CA')
  countries: PhoneCode[] = countries
  missingSSN = false

  formReady$: Subject<boolean> = new Subject<boolean>()
  dataReady$: Subject<boolean> = new Subject<boolean>()

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>()

  propertyInfo: PropertyInfoResponse;

  data: ApplicantInfo
  @Input()
  set info(info$: Observable<ApplicantInfo>) {
    info$.subscribe((applicantInfo) => {
      this.data = applicantInfo
      if (this.data) {
        this.dataReady$.next(true)
      }
    })
  }

  maxDate: Date
  minDate: Date
  selectable: boolean
  removable: boolean
  addOnBlur: boolean
  separatorKeysCodes: number[]
  cellphonemask: any

  setup: SetupResponse
  decodedToken: DecodeTokenModel

  previousSmsValue: boolean
  smallLogo: string

  hide: boolean = true
  buttonText: string

  @Output() formChanged: EventEmitter<ApplicantInfo> =
    new EventEmitter<ApplicantInfo>()

  @Input() viewType: string = 'normal'
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.maxDate = this.profileFormService.maxAgeDate
    this.minDate = this.profileFormService.minAgeDate
    this.selectable = true
    this.removable = true
    this.addOnBlur = true
    this.separatorKeysCodes = [ENTER, COMMA]

    this.defaultValues()
    this.listenToApplicationParams()
    this.listenToSetup()
    this.listenForFormValidation()
    this.listenToDecodedToken()
    this.listenToThemeValues()

    this.listenToPropertyInformation()
  }

  ngOnInit() {
    this.initForm()
  }

  listenToThemeValues() {
    this.uiService.smallLogo$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => (this.smallLogo = `url(${value})`))
  }

  listenToDecodedToken() {
    this.profileFormService.decodedToken$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((data) => (this.decodedToken = data))
  }

  listenToApplicationParams() {
    this.profileFormService.applicationParams$
      .pipe(
        first((params) => !!params),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((params: ApplicationParams) => {
        const { coApplicantType, applicationType } = params
        this.coApplicantType = coApplicantType
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

  /**
   * Show applicant form depending on the URL params
   *
   * @returns {boolean}
   */
  showCoApplicantDetails(): boolean {
    return this.coApplicantType && this.coApplicantType !== 'W'
  }

  initForm() {
    const { em } = this.decodedToken

    // const pattern = /^([a-zA-ZÀ-ÖØ-öø-ÿ])+$/
    // const pattern2 = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+(\s[a-zA-ZÀ-ÖØ-öø-ÿ-]+)?$/

    this.childForm = this.formBuilder.group({
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
      aka: [[]],
      dateOfBirth: [null, [Validators.required]],
      email: [
        em,
        [
          Validators.required,
          Validators.email,
          CustomValidators.emailValidator(),
          Validators.maxLength(50),
          CustomValidators.asciiValidator(),
        ],
        [
          //CustomValidators.usedEmailValidator('mainApplicant', this.profileFormService.emailsUsed$)
        ],
      ],
      country: ['US', Validators.required],
      dialCode: ['+1', Validators.required],
      cellPhone: [null, CustomValidators.phoneValidator()],
      missingSnn: [this.missingSSN],
      receiveTextMessages: [(this.propertyInfo.shortApplication == 'SHORT')? false: true],
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
        CustomValidators.asciiValidator(),
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
        CustomValidators.asciiValidator(),
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

  modifyVisibility() {
    this.hide = !this.hide
    this.buttonText = this.hide ? 'Show' : 'Hide'
  }

  isCoApplicantRequest(): boolean {
    return !!this.profileFormService.mainApplicationId
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
        this.profileFormService.setEmailUsed('mainApplicant', email)
      })

    this.childForm.controls['email'].updateValueAndValidity()

    this.childForm.controls['dialCode'].valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((dialCode) => {
        this.updatePhoneValidators(dialCode)
      })
    this.updatePhoneValidators(this.childForm.controls['dialCode'].value)

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

  /**
   * Fill the values with values previously stored
   */
  defaultValues() {
    combineLatest([this.formReady$, this.dataReady$])
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(() => {
        Object.keys(this.childForm.controls).forEach((controlName) => {
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

  /**
   * Mark controls as touched to know where the error is.
   */
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
        const inputPhone = this.document.getElementById('profileCellPhone');
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
