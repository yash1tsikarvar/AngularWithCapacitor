import { Component, OnDestroy, OnInit } from '@angular/core'
import { ApplicationSubTypeValues } from '../../shared/definitions/types/application-sub-type'
import { FormControl, FormGroup } from '@angular/forms'
//import { FormBuilder, Validators } from '@angular/forms'
import { UiService } from '../../ui/ui.service'
import { HttpService } from '../../core/services/http.service'
import { Router } from '@angular/router'
import {ApplicationListItem} from '../../shared/definitions/responses/application-list.response';
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorResponse } from '../../shared/definitions/responses/error.response'
//import { EnterCodeForm } from '../../shared/definitions/forms/enter-code/enter-code-form-interface'
import { AlertType } from '../../shared/definitions/types/alert.type'
import { AuthService } from '../../core/services/auth.service'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog'
import { environment } from '../../../environments/environment';
import { apiEndpoints } from '../../../app/core/services/endpoints'

@Component({
  selector: 'tev-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss'],
})
export class EnterCodeComponent implements OnInit, OnDestroy {
  applicationSubTypes = ApplicationSubTypeValues
  enterCodeForm: FormGroup

  bigLogo: string

  info: string
  infoType: AlertType
  errorMessage: string
  errorTitle: string
  code: string = ''
  currentYear:number;
  caretTransparent: boolean = false;

  applications: ApplicationListItem[] = [];

  hideRequiredControl = new FormControl(false)
  floatLabelControl = new FormControl('auto')

  private destroyed$: Subject<any> = new Subject<any>()

  constructor(
    //private formBuilder: FormBuilder,
    private uiService: UiService,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  onKey(value: string) {
    this.code = value
    if (this.code.length > 0) {
      this.caretTransparent = true;
    } else {
      this.caretTransparent = false;
    }
  }

  ngOnInit() {
    const dataUser = this.authService.getDecodedToken()
    const applications = this.getApplications();
    //ROLE_APPLICANT
    if((dataUser.auth.includes('ROLE_REALTOR')) && (applications.length < 1)){
      //this.router.navigate(['/application-list'])
      this.errorTitle = 'Error'
      this.errorMessage = 'Our records indicate that the email listed on this account has been registered as a realtor account. For this reason you are nt able to begin an application. Please create an account with a different email address in order to begin an application'
      this.openDialog()
      this.authService.logOut().subscribe(() => {
        this.router.navigate(['/']).catch(console.log)
      })
    }
    this.uiService.setThemeDefaultValues()
    //this.initForm();
    this.listenToThemeValues()
    this.currentYear=new Date().getFullYear();
  }
  listenToThemeValues() {
    this.uiService.bigLogo$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => (this.bigLogo = value))
  }

  getApplications() {
    this.httpService
      .getApplicationList(true)
      .subscribe(applicationsResponse => {
        if (applicationsResponse) {
          this.applications = applicationsResponse.applications;
        }
      });
    return this.applications;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AccessPropertyDialog, {
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
  // initForm() {
  //   this.enterCodeForm = this.formBuilder.group({
  //     code: ["", [Validators.required, Validators.pattern("[0-9]*")]],
  //     type: [""],
  //     //type: ["", Validators.required],
  //   });
  // }

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string {
    const { errors } = this.enterCodeForm.controls[controlName]

    return this.uiService.getControlError(errors)
  }

  markControlsASTouched() {
    this.uiService.markControlsAsTouched(this.enterCodeForm)
  }

  /**
   * Submit the form.
   */
  submit() {
    // if (this.enterCodeForm.valid) {
    //   this.clearInfo();

    //   this.uiService.showInfo({
    //     message: "Getting Property Information",
    //     title: "Please Wait",
    //     keepOpen: true,
    //   });
    //   const { code, type } = <EnterCodeForm>this.enterCodeForm.value;

    this.httpService
      //.getPropertyInfo(code, type, false)
      .getPropertyInfoByCode(this.code, false)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        () => {
          //this.router.navigate(["/community", code, type]).catch(console.log);

          const cookieName = `${environment.api_url}/${apiEndpoints.getPropertyInfo}/${this.code}`
          
          const propertyInfo = JSON.parse(localStorage.getItem(cookieName))

          switch (propertyInfo.shortApplication) {
            case 'SHORT':
              this.router.navigate(['/community', this.code]).catch(console.log)
              break
            case 'LONG':
              this.router.navigate(['/community/video-info', this.code]).catch(console.log)
              break
            default:
              return null
          }        
        },
        (httpError: HttpErrorResponse) => {
          const error: ErrorResponse = httpError.error

          console.log(error.status)

          /**
           * @todo Add this error codes as constants
           */

          if (error.errorKey === 'invalid.property.code' || error.errorKey === 'property.not.active') {
            //   const applicationType = this.applicationSubTypes.find(
            //     (appType) => appType.value === type
            //   );
            //   this.errorTitle = "Option not allowed";
            //   this.errorMessage = `${applicationType.name} is not permitted through this code. Please contact the community to advise on a different procedure`;
            // } else if (error.errorKey === "property.not.active") {
            //   const applicationType = this.applicationSubTypes.find(
            //     (appType) => appType.value === type
            //   );
            this.errorTitle = 'Property error'
            this.errorMessage =
            'Property not active on our System. Please contact the community to advise on a different procedure'
          }
          // else if (error.errorKey === 'property.not.active') {
          //   this.errorTitle = 'Property error'
          //   this.errorMessage =
          //     'Property not active on our System. Please contact the community to advise on a different procedure'
          //}
          else if(error.status === 404){
            this.errorTitle = 'No Property Coded Provided'
            this.errorMessage =
            'Please make sure you provide a valid 4-5 digit number'
          } else {
            this.errorTitle = 'Error'
            this.errorMessage = error.message
          }
          this.openDialog()
        }
      )
    // } else {
    //   this.markControlsASTouched();
    // }
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
  selector: 'access-property-dialog',
  templateUrl: './access-property.dialog.html',
})
export class AccessPropertyDialog {
  dialogTitle: String
  dialogText: String

  constructor() {
    this.dialogTitle = ''
    this.dialogText = ''
  }
}
