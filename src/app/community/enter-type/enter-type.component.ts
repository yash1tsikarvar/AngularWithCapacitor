import { Component, OnDestroy, OnInit } from '@angular/core'
import { ApplicationSubTypeValues } from '../../shared/definitions/types/application-sub-type'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UiService } from '../../ui/ui.service'
import { HttpService } from '../../core/services/http.service'
import { Router, ActivatedRoute } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorResponse } from '../../shared/definitions/responses/error.response'
import { AlertType } from '../../shared/definitions/types/alert.type'
import { AuthService } from '../../core/services/auth.service'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog'
import { CoApplicantSelectionDialogComponent } from '../enter-type/cas-dialog/cas-dialog.component'
import { apiEndpoints } from '../../../app/core/services/endpoints'
import { environment } from '../../../environments/environment';



@Component({
  selector: 'tev-enter-type',
  templateUrl: './enter-type.component.html',
  styleUrls: ['./enter-type.component.scss'],
})
export class EnterTypeComponent implements OnInit, OnDestroy {
  applicationSubTypes = ApplicationSubTypeValues
  enterCodeForm: FormGroup

  code: string
  newPath: string[] = []

  bigLogo: string
  smallLogo: string

  info: string
  infoType: AlertType
  errorMessage: string
  errorTitle: string
  currentYear:number;

  allowLease: boolean;
  allowPurchase: boolean;
  allowGuest: boolean;

  iconRentApplication: string = 'url("/assets/icon-rent-application.svg")'
  iconBuyApplication: string = 'url("/assets/icon-buy-application.svg")'
  iconGuestApplication: string = 'url("/assets/icon-guest-application.svg")'

  private destroyed$: Subject<any> = new Subject<any>()

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.uiService.setThemeDefaultValues()
    this.initForm()
    this.listenToThemeValues()
    this.route.params.subscribe((params) => {
      const { code } = params
      this.code = code
    })
    this.currentYear=new Date().getFullYear();

    const cookieName = `${environment.api_url}/${apiEndpoints.getPropertyInfo}/${this.code}`

    const propertyInfo = JSON.parse(localStorage.getItem(cookieName))

    this.allowLease = propertyInfo.allowLease;
    this.allowPurchase = propertyInfo.allowPurchase;
    this.allowGuest = propertyInfo.allowGuest;

  }

  listenToThemeValues() {
    this.uiService.smallLogo$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => (this.smallLogo = value))
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
  /**
   * Init the form
   */
  initForm() {
    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      type: ['', Validators.required],
    })
  }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  // getError(controlName: string): string {
  //   const { errors } = this.enterCodeForm.controls[controlName];

  //   return this.uiService.getControlError(errors);
  // }

  markControlsASTouched() {
    this.uiService.markControlsAsTouched(this.enterCodeForm)
  }

  openAgeReminderAlert(): void {

    const dialogRef = this.dialog.open(CoApplicantSelectionDialogComponent, {
      // width: '450px',
      // maxWidth: '75vw',
      // maxHeight: '50vh',
      // backdropClass: 'mat-dialog-full-screen',
      panelClass: 'custom-dialog-container',
      data: { link: this.newPath },
    })

    dialogRef.afterClosed().subscribe((result) => {
    })
  }


  /**
   * Submit the form.
   */
  submit(type) {

    this.httpService
      .getPropertyInfo(this.code, type, false)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.newPath = ['/application/new', this.code, type]

          this.openAgeReminderAlert()

        },
        (httpError: HttpErrorResponse) => {
          const error: ErrorResponse = httpError.error

          /**
           * @todo Add this error codes as constants
           */
          if (error.errorKey === 'invalid.application.type') {
            const applicationType = this.applicationSubTypes.find(
              (appType) => appType.value === type
            )
            this.errorTitle = 'Option not allowed'
            this.errorMessage = `${applicationType.name} is not permitted through this code. Please contact the community to advise on a different procedure`
          } else if (error.errorKey === 'property.not.active') {
            const applicationType = this.applicationSubTypes.find(
              (appType) => appType.value === type
            )
            this.errorTitle = 'Property error'
            this.errorMessage =
              'Property not active on our System. Please contact the community to advise on a different procedure'
          } else {
            this.errorTitle = 'Error'
            this.errorMessage = error.title
          }
          this.openDialog()
        }
      )
  }

  clearInfo() {
    this.uiService.clearCurrentToastr()
  }

  logOut(event: MouseEvent) {
    event.preventDefault()
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/']).catch(console.log)
    })
  }

  ngOnDestroy() {
    this.destroyed$.next()
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
