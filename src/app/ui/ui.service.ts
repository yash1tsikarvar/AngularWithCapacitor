import { Injectable } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import {
  ToastrDataInterface,
  ToastrType,
} from "../shared/definitions/viewparams/toastr-data.interface";
import { Observable, from as fromPromise, BehaviorSubject } from "rxjs";
import {ConfirmDataInterface, ErrorAlert} from '../shared/definitions/viewparams/confirm-data.interface';
import { AmericanDatePipe } from "../shared/pipes/american-date.pipe";
import swal, { SweetAlertResult } from "sweetalert2";
import { THEME_VARIABLES } from "../shared/definitions/constants/theme-variables";
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class UiService {
  private smallLogoSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(THEME_VARIABLES.SMALL_LOGO.defaultValue);
  smallLogo$: Observable<string> = this.smallLogoSubject.asObservable();

  private bigLogoSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    THEME_VARIABLES.BIG_LOGO.defaultValue
  );
  bigLogo$: Observable<string> = this.bigLogoSubject.asObservable();

  private footerLogoSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(THEME_VARIABLES.FOOTER.defaultValue);
  footerLogo$: Observable<string> = this.footerLogoSubject.asObservable();

  private hasWhitelabelSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  hasWhitelabel$: Observable<boolean> =
    this.hasWhitelabelSubject.asObservable();

  constructor(
    private toastr: ToastrService,
    private datePipe: AmericanDatePipe,
  ) {}

  /**
   * This function will return only the first error associated with a form control.
   *
   * @param {ValidationErrors} errors
   * @returns {string}
   */
  getControlError(errors: ValidationErrors): string {
    if (!errors) {
      return;
    }

    if (errors) {
      const errorsKeys = Object.keys(errors).filter((key) => {
        return !!errors[key];
      });
      const errorKey = errorsKeys[0];
      const error: ValidationErrors = errors[errorKey];

      switch (errorKey) {
        case "required":
          return "This field is required";
        case "minlength":
          return `At least ${error.requiredLength} characters needed`;
        case "pattern":
          return "Invalid Characters";
        case "firstName":
          return "Invalid input: Remove any blank spaces or special characters.";
        case "lastName":
          return "Invalid input: Remove any blank spaces or special characters.";
        case "email":
          return "Enter a valid Email Address";
        case "emailsDifferentFrom":
          return "Email and Confirm Email must match";
        case "newEmailsDifferentFrom":
          return "Email and Confirm Email must match";
        case "valueDifferentFrom":
          return "Password and Confirm Password must match";
        case "valueEqualsTo":
          return `The value cannot be equal to ${error}`;
        case "anyToBeAffirmative":
          return "One of the options must be affirmative";
        case "futureDate":
          return "Please choose a date in the future";
        case "invalidZipCode":
          return "Enter a valid Zip Code";
        case "invalidUsaZipCode":
          return "Enter a valid USA Zip Code";
        case "invalidCanadianZipCode":
          return "Enter a valid Canada Zip Code";
        case "invalidSsn":
          return "Enter a valid SSN";
        case "invalidPassport":
          return "Enter a valid Passport";
        case "minimumAge":
          return `The applicant must be at least ${error} years to apply`;
        case "max":
          return `Maximum value allowed is ${error.max}`;
        case "min":
          return `Minimum value allowed is ${error.min}`;
        case "minimunSalary":
          return `Minimum value allowed is at least 1`;
        case "minMonths":
          return `Minimum Value allowed by community is ${error} months`;
        case "agree":
          return `Please agree to continue`;
        case "invalidCreditCard":
          return `Please enter a valid credit card number`;
        case "invalidCreditCardExpirationFormat":
          return `Please enter a valid expiration date`;
        case "invalidCreditCardExpirationDate":
          return `Please enter a non expired credit card`;
        case "invalidCreditCardCode":
          return `Please enter a valid CVV`;
        case "invalidUsername":
          return `Please enter a valid Username`;
        case "emailUsed":
          return "Email cannot be same as applicant email";
        case "lowercase":
          return "At least 1 lowercase needed";
        case "uppercase":
          return "At least 1 uppercase needed";
        case "number":
          return "At least 1 number needed";
        case "special":
          return "At least 1 special character needed";
        case "currency":
          return "Numbers only allowed. (i.e. $ and letters not allowed)";
        case "numberAtLeast1":
          return "Must be at least 1";
        case "numbersOnly":
          return "Numbers only allowed. (i.e. $, decimals or letters not allowed)";
        case "invalidCharacters":
          return "Invalid Characters";
        case "maxlength":
          return "Max length exceeded";
        case "matDatepickerMin":
          return `Minimum value allowed is ${this.toDate(error.min)}`;
        case "matDatepickerMax":
          return `Maximum value allowed is ${this.toDate(error.max)}`;
        default:
          return errorKey;
      }
    }

    return "";
  }

  toDate(date: any) {
    return this.datePipe.transform(date);
  }

  /**
   * Mark all controls inside a form group as touched.
   *
   * @param {FormGroup} formGroup
   */
  markControlsAsTouched(formGroup: FormGroup) {
    if (!formGroup) {
      return;
    }

    Object.keys(formGroup.controls).forEach((controlName) => {
      formGroup.controls[controlName].markAsTouched();
    });
  }

  /**
   * Update all controls value and validity inside a form group.
   *
   * @param {FormGroup} formGroup
   */
  updateControlsValueAndValidity(formGroup: FormGroup) {
    if (!formGroup) {
      return;
    }

    Object.keys(formGroup.controls).forEach((controlName) => {
      formGroup.controls[controlName].updateValueAndValidity();
    });
  }

  /**
   * Get information saved on the session storage.
   *
   * @param {string} key
   * @returns {null}
   */
  getInfoFromLocalStorage(key: string) {
    const info = localStorage.getItem(key);
    return info ? JSON.parse(info) : null;
  }

  /**
   * Save information in the session storage.
   *
   * @param {string} key
   * @param data
   */
  saveInfoInLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  deleteInfoFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  showMessage(data: ToastrDataInterface) {
    this.openToastr("default", data);
  }

  showInfo(data: ToastrDataInterface) {
    this.openToastr("info", data);
  }

  showSuccess(data: ToastrDataInterface) {
    this.openToastr("success", data);
  }

  showWarning(data: ToastrDataInterface) {
    this.openToastr("warning", data);
  }

  showError(data: ToastrDataInterface) {
    this.openToastr("error", data);
  }

  clearCurrentToastr() {
    this.toastr.clear();
  }

  private openToastr(toastrType: ToastrType, data: ToastrDataInterface) {
    const { title, message, removeCurrent, keepOpen, positionClass} = data;

    if (removeCurrent) {
      this.clearCurrentToastr();
    }

    const options = {
      positionClass: "toast-top-center",
      timeOut: 3000,
    };

    if (keepOpen) {
      options["timeOut"] = 0;
    }

    if (positionClass) {
      options["positionClass"] = positionClass;
    }

    switch (toastrType) {
      case "success":
        this.toastr.success(message, title || null, options);
        break;
      case "info":
        this.toastr.info(message, title || null, options);
        break;
      case "warning":
        this.toastr.warning(message, title || null, options);
        break;
      case "error":
        this.toastr.error(message, title || null, options);
        break;
      default:
        this.toastr.show(message, title || null, options);
        break;
    }
  }

  /**
   * Confirm an action.
   *
   * @param data
   */
  confirmAction(data: ConfirmDataInterface): Observable<boolean> {
    const confirmBox = swal({
      title: data.title,
      html: data.html,
      text: data.message,
      type: data.type || "warning",
      imageUrl: data.img || "",
      imageWidth: 100,
      imageHeight: 100,
      showCancelButton:
        typeof data.showCancel !== "undefined" ? data.showCancel : true,
      confirmButtonText: data.confirmButtonText || "OK",
      animation: false,
    }).then((response: SweetAlertResult) => {
      return !!response.value;
    });

    return fromPromise(confirmBox);
  }

  setThemeDefaultValues() {
    this.smallLogoSubject.next(THEME_VARIABLES.SMALL_LOGO.defaultValue);
    this.bigLogoSubject.next(THEME_VARIABLES.BIG_LOGO.defaultValue);
    this.footerLogoSubject.next(THEME_VARIABLES.FOOTER.defaultValue);
    this.hasWhitelabelSubject.next(false);
  }

  setThemeValues(values: Record<string, string>[]) {
    const smallLogo = this.findThemeValue(
      THEME_VARIABLES.SMALL_LOGO.themeVar,
      values
    );
    if (smallLogo) {
      this.setSmallLogo(smallLogo[Object.keys(smallLogo)[0]]);
    }

    const bigLogo = this.findThemeValue(
      THEME_VARIABLES.BIG_LOGO.themeVar,
      values
    );
    if (bigLogo) {
      this.setBigLogo(bigLogo[Object.keys(bigLogo)[0]]);
    }

    const footerLogo = this.findThemeValue(
      THEME_VARIABLES.FOOTER.themeVar,
      values
    );
    if (footerLogo) {
      this.setFooterLogo(footerLogo[Object.keys(footerLogo)[0]]);
    } else {
      this.setFooterLogo(THEME_VARIABLES.FOOTER.defaultValue);
    }

    this.hasWhitelabelSubject.next(true);
  }

  private findThemeValue(
    key: string,
    values: Record<string, string>[]
  ): Record<string, string> {
    return values.find((value) => {
      return Object.keys(value)[0] === key;
    });
  }

  private setSmallLogo(value: string) {
    this.smallLogoSubject.next(value);
  }

  private setBigLogo(value: string) {
    this.bigLogoSubject.next(value);
  }

  private setFooterLogo(value: string) {
    this.footerLogoSubject.next(value);
  }

  /**
   * Confirm an action.
   *
   * @param data
   */
  errorAlert(data: ErrorAlert): Observable<boolean> {
    const confirmBox = swal({
      title: data.title,
      html: data.html,
      text: data.message,
      type: data.type || 'warning',
      showCancelButton:
        typeof data.showCancel !== 'undefined' ? data.showCancel : true,
      confirmButtonText: data.confirmButtonText || 'OK',
      animation: false,
    }).then((response: SweetAlertResult) => {
      return !!response.value;
    });

    return fromPromise(confirmBox);
  }

}
