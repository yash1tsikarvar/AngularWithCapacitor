import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import {Location} from '@angular/common';
import { SetupResponse } from '../../shared/definitions/responses/setup.response';
import { DecodeTokenModel } from '../../shared/definitions/models/decode-token.model';
import {HttpService} from '../../core/services/http.service';
import {SetupRequest} from '../../shared/definitions/requests/setup.request';
import {MatChipInputEvent} from '@angular/material/chips';
import { apiEndpoints } from '../../../app/core/services/endpoints'
import { environment } from '../../../environments/environment';
import { CustomValidators } from '../../shared/custom-validators';
import { countries, PhoneCode, phoneCodes } from '../../shared/definitions/constants/phone_codes';
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorResponse } from '../../shared/definitions/responses/error.response'

import {
  getMaxAgeDate,
  getMinAgeDate,
} from '../../shared/definitions/constants/dates-min-max-utils';
import {
  CoApplicantTypeValues,
} from '../../shared/definitions/types/co-applicant.type'
import {
  ApplicationSubType,
  ApplicationSubTypeAccess,
} from '../../shared/definitions/types/application-sub-type'
import { ActivatedRoute, Router } from '@angular/router'
import { Subject } from 'rxjs'
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import { UiService } from '../../ui/ui.service'
import { takeUntil } from 'rxjs/operators'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ApplicationRequest} from '../../shared/definitions/requests/application.request';
import {
  ApplicantPersonalInfo,
} from '../../shared/definitions/models/applicant.model';
import { AuthService } from '../../core/services/auth.service';
import * as accents from 'remove-accents';
import { CoApplicantSelectionAddDialogComponent } from './casa-dialog/casa-dialog.component';
import { ApplicationSubTypeValues } from '../../shared/definitions/types/application-sub-type'

@Component({
  selector: 'tev-co-applicant-selection',
  templateUrl: './co-applicant-selection.component.html',
  styleUrls: ['./co-applicant-selection.component.scss'],
})
export class CoApplicantSelectionComponent implements OnInit, OnDestroy {
  applicationSubTypes = ApplicationSubTypeValues
  errorMessage: string
  errorTitle: string
  code: string
  dataUser: DecodeTokenModel
  additional: string
  type: ApplicationSubType
  smallLogo: string
  applicationSubTypeAccess = ApplicationSubTypeAccess
  url: string = 'enter-type'
  classActive: string
  currentYear:number;
  coApplicantTypes = CoApplicantTypeValues
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  phonemask: any;
  minDate: Date = getMinAgeDate();
  maxDate: Date = getMaxAgeDate();
  previousApplicantSmsValue: boolean;
  previousCoApplicantSmsValue: boolean;
  selectApplicantForm: FormGroup
  selectCoApplicantForm: FormGroup
  dialCodes: PhoneCode[] = phoneCodes.filter(code => code.code !== 'CA' && code.code!== 'US');
  firstDialCode : PhoneCode = {'name': 'USA/Canada', 'dial_code': '+1', 'code': 'US'};
  missingApplicantSSN = false;
  missingCoApplicantSSN = false;
  countries: PhoneCode[] = countries;
  separatorKeysCodes: number[];
  selectable: boolean;
  removable: boolean;
  addOnBlur: boolean;
  propertyId: number;
  shortApplication: string;
  pendingApplicationId: number;
  newPath: string[] = []
  setup: SetupResponse;
  iconJustMe: string = 'url("/assets/icon-just-me.svg")'
  iconMeAndSomeone: string = 'url("/assets/icon-me-and-someone.svg")'
  iconWithExistingTenant: string =
    'url("/assets/icon-with-existing-tenant.svg")'
  showDataForCoApplicantRequest = false
  showDataForm = false
  firstNameApplicant: string = ''
  lastNameApplicant: string = ''
  sending = false;


  private destroyed$: Subject<any> = new Subject<any>()

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private uiService: UiService,
    public dialog: MatDialog,
    private httpService: HttpService,
    private authService: AuthService,
  ) {
    this.separatorKeysCodes = [ENTER, COMMA];
    this.selectable = true;
    this.removable = true;
    this.addOnBlur = true;
    this.subscribeToRouteParams()
    this.listenToThemeValues()
    this.listenToSetupAndInitForms();
  }

  ngOnInit() {
    this.dataUser = this.authService.getDecodedToken()
    this.currentYear=new Date().getFullYear();
    this.dialCodes.unshift({'name': 'USA/Canada', 'dial_code': '+1', 'code': 'US'})
    if (localStorage.getItem('applicantsFilled') === 'true') {
      this.uiService.showInfo({
        message: 'Applicant(s) section details was not fully filled out. Please complete this section before proceeding to the next step.',
        keepOpen: true,
      });
      localStorage.removeItem('applicantsFilled')
    }
  }

  showDocumentsRequired() {
    const dialogRef = this.dialog.open(CoApplicantSelectionAddDialogComponent, {
      // width: '500px',
      // //height: '550px',
      // maxWidth: '75vw',
      // maxHeight: '60vh',
      // backdropClass: 'mat-dialog-full-screen',
      panelClass: 'custom-dialog-container',
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AccessTypeDialog, {
      panelClass: 'fit-dialog',
    })
    let instance = dialogRef.componentInstance
    instance['dialogTitle'] = this.errorTitle
    instance['dialogText'] = this.errorMessage
    dialogRef.afterClosed().subscribe(() => this.clearInfo())
  }

  clearInfo() {
    this.uiService.clearCurrentToastr()
  }

  listenToThemeValues() {
    this.uiService.smallLogo$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => (this.smallLogo = `url(${value})`))
  }

  listenToSetupAndInitForms() {

    const cookieName = `${environment.api_url}/${apiEndpoints.getPropertyInfo}/${this.code}/${this.type}`

    const propertyInfo = JSON.parse(localStorage.getItem(cookieName))

    this.propertyId = propertyInfo.propertyId;
    this.shortApplication = propertyInfo.shortApplication;

    const setupRequest: SetupRequest = {
      propertyId: this.propertyId,
      applicationSubType: this.type,
      numberOfApplicants: 1,
      numberOfPets: null
    };

    this.httpService
      .getApplicationSetupData(setupRequest
        )
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(setup =>{
        this.setup = setup
        this.initFormApplicant();
        this.initFormCoApplicant();
      });
  }

  initFormApplicant() {
    this.selectApplicantForm = this.formBuilder.group({
      firstName: [this.firstNameApplicant, [Validators.required, CustomValidators.firstName(), CustomValidators.asciiValidator()]],
      middleInitial: ['', [CustomValidators.asciiValidator()]],
      lastName: [this.lastNameApplicant, [Validators.required, CustomValidators.lastName(), CustomValidators.asciiValidator()]],
      maternalName: ['', [CustomValidators.asciiValidator()]],
      email: [this.dataUser.em,
      [
        Validators.required,
        Validators.email,
        CustomValidators.emailValidator(),
        Validators.maxLength(80),
        CustomValidators.asciiValidator()]],
      dateOfBirth: ['', [Validators.required]],
      dialCode: ['+1', [Validators.required]],
      mobile: ['', [Validators.required]],
      // ssn: ['', [Validators.required]],
      aka: [[]],
      missingSnn: [this.missingApplicantSSN],
      receiveTextMessages: [true],
    })
    this.selectApplicantForm
    .controls['dialCode']
    .valueChanges
    .pipe(
      takeUntil(this.unsubscribeSubject)
    )
    .subscribe(dialCode => {
      this.updatePhoneValidators(dialCode, false);
    });
    this.updatePhoneValidators(this.selectApplicantForm.controls['dialCode'].value, false);
    const ssnValidators = this.setup.ssnRequired
    ? [
      CustomValidators.requiredIfControlEqualsTo(
        this.selectApplicantForm,
        'missingSnn',
        false),
      Validators.minLength(9),
      CustomValidators.ssnValidator(),
    ] : null;

  const ssnControl = new FormControl('', {
    validators: ssnValidators
  });

  const passportControl = new FormControl('', {
    validators: [
      CustomValidators
        .requiredIfControlEqualsTo(this.selectApplicantForm, 'missingSnn', true),
      Validators.maxLength(50),
      CustomValidators.asciiValidator()
    ]
  });

  const passportCountryControl = new FormControl('', {
    validators: [
      CustomValidators
        .requiredIfControlEqualsTo(this.selectApplicantForm, 'missingSnn', true),
      Validators.maxLength(3),
      CustomValidators.asciiValidator()
    ]
  });

  this.selectApplicantForm.addControl('ssn', ssnControl);
  this.selectApplicantForm.addControl('passport', passportControl);
  this.selectApplicantForm.addControl('passportCountry', passportCountryControl);

  this.listenToNegativeAnswerOnSms(false);
}

removeAccentsApplicantForm(event: any, control: string) {
  this.selectApplicantForm.controls[control].setValue(accents.remove(event.target.value))
  this.selectApplicantForm.controls[control].updateValueAndValidity();
}

removeAccentsCoApplicantForm(event: any, control: string) {
  this.selectCoApplicantForm.controls[control].setValue(accents.remove(event.target.value))
  this.selectCoApplicantForm.controls[control].updateValueAndValidity();
}

toggleApplicantSSN(event: MouseEvent | TouchEvent) {
  event.preventDefault();
  const {missingSnn} = this.selectApplicantForm.value;
  this.missingApplicantSSN = !missingSnn;
  this.selectApplicantForm.controls['missingSnn'].setValue(!missingSnn);
  this.resetApplicantValues();
  this.selectApplicantForm.controls['missingSnn'].updateValueAndValidity();
}

resetApplicantValues() {
  this.selectApplicantForm.controls['ssn'].reset();
  this.selectApplicantForm.controls['passport'].reset();
  this.selectApplicantForm.controls['passportCountry'].reset();
  this.selectApplicantForm.controls['passportCountry'].setValue('');
}

toggleCoApplicantSSN(event: MouseEvent | TouchEvent) {
  event.preventDefault();
  const {missingSnn} = this.selectCoApplicantForm.value;
  this.missingCoApplicantSSN = !missingSnn;
  this.selectCoApplicantForm.controls['missingSnn'].setValue(!missingSnn);
  this.resetCoApplicantValues();
  this.selectApplicantForm.controls['missingSnn'].updateValueAndValidity();
}

resetCoApplicantValues() {
  this.selectCoApplicantForm.controls['ssn'].reset();
  this.selectCoApplicantForm.controls['passport'].reset();
  this.selectCoApplicantForm.controls['passportCountry'].reset();
  this.selectCoApplicantForm.controls['passportCountry'].setValue('');
}

  sendTextMessagesApplicant(): boolean {
    const {dialCode} = this.selectApplicantForm.value;
    return dialCode === '+1';
  }

  sendTextMessagesCoApplicant(): boolean {
    const {dialCode} = this.selectApplicantForm.value;
    return dialCode === '+1';
  }

  onCheckValue(value: string) {
    this.additional = value;
    this.classActive = value;
  }

  listenToNegativeAnswerOnSms(coApplicant: boolean) {

    let control
    let previousSmsValue

    if (coApplicant) {
      control = this.selectCoApplicantForm.controls['receiveTextMessages'];
      previousSmsValue = this.previousCoApplicantSmsValue;
    } else {
      control = this.selectApplicantForm.controls['receiveTextMessages'];
      previousSmsValue = this.previousApplicantSmsValue;
    }

    control
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => {

        if (!control.pristine
          && value === false
          && previousSmsValue !== value) {

          this.uiService.confirmAction({
            message: 'If you opt out of receiving text messages, the application may be delayed.',
            showCancel: false
          });
        }

        if (coApplicant) {
          this.previousCoApplicantSmsValue = value;
        } else {
          this.previousApplicantSmsValue = value;
        }

      });
  }

  updatePhoneValidators(dial: string, coApplicant: boolean) {
    let phoneValidators = [];
    let form;
    if (coApplicant) {
      form = this.selectCoApplicantForm;
    } else {
      form = this.selectApplicantForm;
    }
    phoneValidators = CustomValidators.realtorPhoneValidator();
    if (dial == "+1") {
      phoneValidators.splice(2, 1, Validators.minLength(10));
      this.phonemask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      this.phonemask = false;
      if (form.controls['mobile'].value) {
        const cleanValue = form.controls['mobile'].value.replace(/-/ig, '');
        form.controls['mobile'].setValue(cleanValue);
        document.querySelector('[ng-reflect-id="registerApplicantMobile"]')['value'] = cleanValue;
      }
    }
    form.controls['mobile'].setValidators(phoneValidators);
    form.controls['mobile'].updateValueAndValidity();
  }

  initFormCoApplicant() {
    this.selectCoApplicantForm = this.formBuilder.group({
      coApplicantType: ['', Validators.required],
      firstName: ['', [Validators.required, CustomValidators.firstName(), CustomValidators.asciiValidator()]],
      middleInitial: ['', [CustomValidators.asciiValidator()]],
      lastName: ['', [Validators.required, CustomValidators.lastName(), CustomValidators.asciiValidator()]],
      maternalName: ['', [CustomValidators.asciiValidator()]],
      email: ['',
      [
        Validators.required,
        Validators.email,
        CustomValidators.emailValidator(),
        Validators.maxLength(80),
        CustomValidators.asciiValidator(),
        CustomValidators.valueDifferentThan(this.selectApplicantForm.controls['email'].value)
      ]],
      dateOfBirth: ['', [Validators.required]],
      dialCode: ['+1', [Validators.required]],
      mobile: ['', [Validators.required]],
      //ssn: ['', [Validators.required]],
      aka: [[]],
      missingSnn: [this.missingCoApplicantSSN],
      receiveTextMessages: [true],
    })
  //   this.listenToFormChanges()
  this.selectCoApplicantForm
  .controls['dialCode']
  .valueChanges
  .pipe(
    takeUntil(this.unsubscribeSubject)
  )
  .subscribe(dialCode => {
    this.updatePhoneValidators(dialCode, true);
  })


  this.selectCoApplicantForm
  .controls['coApplicantType']
  .valueChanges
  .pipe(
    takeUntil(this.unsubscribeSubject)
  )
  .subscribe(coApplicantType => {
    if(coApplicantType === 'S') {
      this.showDocumentsRequired()
    }
  })

  ;
  this.updatePhoneValidators(this.selectCoApplicantForm.controls['dialCode'].value, true);
  const ssnValidators = this.setup.ssnRequired
  ? [
    CustomValidators.requiredIfControlEqualsTo(
      this.selectCoApplicantForm,
      'missingSnn',
      false),
    Validators.minLength(9),
    CustomValidators.ssnValidator(),
  ] : null;

const ssnControl = new FormControl('', {
  validators: ssnValidators
});

const passportControl = new FormControl('', {
  validators: [
    CustomValidators
      .requiredIfControlEqualsTo(this.selectCoApplicantForm, 'missingSnn', true),
    Validators.maxLength(50),
    CustomValidators.asciiValidator()
  ]
});

const passportCountryControl = new FormControl('', {
  validators: [
    CustomValidators
      .requiredIfControlEqualsTo(this.selectCoApplicantForm, 'missingSnn', true),
    Validators.maxLength(3),
    CustomValidators.asciiValidator()
  ]
});

this.selectCoApplicantForm.addControl('ssn', ssnControl);
this.selectCoApplicantForm.addControl('passport', passportControl);
this.selectCoApplicantForm.addControl('passportCountry', passportCountryControl);

this.listenToNegativeAnswerOnSms(true);
}

  goBack(event: MouseEvent) {
    event.preventDefault();
    this.location.back();
  }


  onKeyPressed(event: KeyboardEvent) {

    let abcd=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","u","v","w","x","y","z"];
    // extract s for +590 codes
    let result = this.dialCodes.filter(dialCode => dialCode.name.toLowerCase().startsWith(event.key.toLowerCase()))

    if (event.key.toLowerCase() === 's') {
      this.firstDialCode.dial_code = '+290';
    } else if (abcd.includes(event.key.toLowerCase()) && result.length > 0) {
      this.firstDialCode.dial_code = result[0].dial_code;
    }
  }

    /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
    getErrorApplicantForm(controlName: string): string {
      const { errors } = this.selectApplicantForm.controls[controlName]

      return this.uiService.getControlError(errors)
    }

        /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
    getErrorCoApplicantForm(controlName: string): string {
      const { errors } = this.selectCoApplicantForm.controls[controlName]

      return this.uiService.getControlError(errors)
    }

    getApplicationSubTypeAccess(): string {
      for (let option of this.applicationSubTypeAccess) {
        if (option.value === this.type) {
          return option.name
        }
      }
    }

    subscribeToRouteParams() {
      this.activeRoute.params.subscribe((params) => {
        const { code, type, pendingApplicationId } = params
        this.code = code
        this.type = type
        this.pendingApplicationId = pendingApplicationId
      })
    }

    ngOnDestroy() {
      this.destroyed$.next()
      this.destroyed$.complete()
    }

    addAliasApplicant(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
          this.selectApplicantForm.value.aka.push(value.trim());
      }

      if (input) {
          input.value = '';
      }
  }

  removeAliasApplicant(name): void {
      const index = this.selectApplicantForm.value.aka.indexOf(name);
      if (index >= 0) {
          this.selectApplicantForm.value.aka.splice(index, 1);
      }
  }

  addAliasCoApplicant(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
        this.selectCoApplicantForm.value.aka.push(value.trim());
    }

    if (input) {
        input.value = '';
    }
}

removeAliasCoApplicant(name): void {
    const index = this.selectCoApplicantForm.value.aka.indexOf(name);
    if (index >= 0) {
        this.selectCoApplicantForm.value.aka.splice(index, 1);
    }
}

openExternalUrl(){
  window.open(
    'https://support.tenantevaluation.com/support/solutions/articles/65000182043-more-than-2-people-applying-together',
    '_blank'
    );
}

sendInfoIfAdditional (additional) {

  switch (additional) {
    case '0':
      this.router
        .navigate(['/application/new', this.code, this.type, 'fees'])
        .catch(console.log)
      break
    case '1':
      this.router
        // .navigate(['/application/new', this.code, this.type, 'fees', 'A'])
        .navigate(['/application/new', this.code, this.type, 'fees', 'S'])
        .catch(console.log)
      break
    case '2':
      this.router
        .navigate(['/application/new', this.code, this.type, 'fees', 'W'])
        .catch(console.log)
      break
    default:
      return null
  }

}


submit(additional) {
  this.httpService
    .getPropertyInfo(this.code, this.type, false)
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      () => {
        this.sendInfoIfAdditional (additional)
      },
      (httpError: HttpErrorResponse) => {
        const error: ErrorResponse = httpError.error
        this.errorTitle = 'Error'
        this.errorMessage = error.title
        this.openDialog()
      }
    )
}

}

@Component({
  selector: 'access-type-dialog',
  templateUrl: './access-type.dialog.html',
})
export class AccessTypeDialog {
  dialogTitle: String
  dialogText: String

  constructor() {
    this.dialogTitle = ''
    this.dialogText = ''
  }
}
