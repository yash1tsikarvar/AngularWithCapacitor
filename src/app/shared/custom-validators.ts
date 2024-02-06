import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {ApplicationSubType} from './definitions/types/application-sub-type';

export class CustomValidators {

  static sameEmailAs(group: FormGroup, controlName: string, newEmail?: boolean): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value.toLocaleLowerCase();
      const compareValue = group.controls[controlName].value.toLocaleLowerCase();

      return (myValue === compareValue) ? null : !newEmail ? {emailsDifferentFrom: controlName} : {newEmailsDifferentFrom: controlName};

    };
  }
  static sameValueAs(group: FormGroup, controlName: string): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value;
      const compareValue = group.controls[controlName].value;

      return (myValue === compareValue) ? null : {valueDifferentFrom: controlName};

    };
  }

  static passwordStrength(hardStrength: boolean = false): ValidatorFn {
    return (control: FormControl) => {
      const mediumStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
      const hardStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

      const strengthRegex = !hardStrength
        ? mediumStrengthRegex : hardStrengthRegex;

      if (control.value) {


        return strengthRegex.test(control.value)
          ? null
          : {
            lowercase: !control.value.match(/[a-z]/),
            uppercase: !control.value.match(/[A-Z]/),
            number: !control.value.match(/[0-9]/),
            special: hardStrength ? !control.value.match(/[!@#$%^&*]/) : false,
          };
      }

      return null;
    };
  }

  static valueDifferentThan(value: string): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value;

      return (myValue === value) ? {valueEqualsTo: value} : null;
    };

  }

  static minMonths(value: any): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value;

      return typeof myValue !== 'undefined'
        ? Number(myValue) < Number(value) ? {minMonths: value} : null
        : null;
    };
  }

  static minDaysMonthsOnDate(leaseType: string, value: any): ValidatorFn {

    return (control: FormControl) => {

      const myValue: NgbDateStruct = control.value;

      if (myValue) {
        const moveOutDate = new Date();
        moveOutDate.setFullYear(myValue.year);
        moveOutDate.setUTCMonth(myValue.month - 1);
        moveOutDate.setUTCDate(myValue.day);
        let newDate;
        if (leaseType === 'MONTH') {
          newDate = new Date(moveOutDate.setMonth(moveOutDate.getMonth() + value));
        } else {
          newDate = new Date(moveOutDate.setDate(moveOutDate.getDate() + value));
        }

        return (moveOutDate < newDate) ? {minMonths: value} : null;
      }

    };
  }

  static minimun(value: any): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value;

      return typeof myValue !== 'undefined'
        ? Number(myValue) < Number(value) ? {minimunSalary: value} : null
        : null;
    };
  }

  static usedEmailValidator(ownControlName: string, emailsUsed$: Observable<Record<string, string>>): ValidatorFn {

    return (control: FormControl) => {
      const myValue: string = control.value || '';

      return emailsUsed$
        .pipe(
          take(1),
          map(emailsUsed => {
            return Object.keys(emailsUsed)
              .filter(key => ownControlName == '' || key == ownControlName)
              .map(key => emailsUsed[key]);
          }),
          map(emails => {
            return emails.indexOf(myValue.toLocaleLowerCase()) > -1
              ? {emailUsed: true}
              : null;
          })
        );
    };

  }

  static agreeValidator(): ValidatorFn {
    return (control: FormControl) => !control.value ? {agree: true} : null;
  }

  static validCreditCard(): ValidatorFn {

    return (control: FormControl) => {
      const VISA_REGEXP = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const MASTER_CARD_REGEXP = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
      const AMEX_REGEXP = /^3[47][0-9]{13}$/;
      const DINERS_REGEXP = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
      const DISCOVER_REGEXP = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
      const JCB_REGEXP = /^(?:2131|1800|35\d{3})\d{11}$/;

      if (control.value) {
        const value = control.value.replace(/-|\s/g, '');
        const isVisa = VISA_REGEXP.test(value);
        const isMasterCard = MASTER_CARD_REGEXP.test(value);
        const isAmex = AMEX_REGEXP.test(value);
        const isDiners = DINERS_REGEXP.test(value);
        const isDiscover = DISCOVER_REGEXP.test(value);
        const isJCB = JCB_REGEXP.test(value);

        return isVisa || isMasterCard || isAmex || isDiscover || isJCB || isDiners ?
          null :
          {invalidCreditCard: true};
      }

      return null;
    };
  }

  static validCreditCardNumber(): ValidatorFn {
    return (control: FormControl) => {
        const cleanNumber = control.value.replace(/-|\s/g, '');
        const reverseNumber = cleanNumber.split('').reverse().join('');
        const size = reverseNumber.length;
        let sum = 0;
        let digit;
        for (let i = 0; i < size; i++) {
            digit = Number(reverseNumber[i]);
            digit = i % 2 != 0 ? digit * 2 : digit;
            sum += Math.floor(digit / 10);
            sum += digit % 10;
        }
        return sum % 10 == 0 ? null : {invalidCreditCard: true};
    };
  }

  static validCreditCardCode(): ValidatorFn {

    return (control: FormControl) => {

      const regex = /^(?:[0-9]{3}|[0-9]{4})$/;
      if (control.value) {
        return regex.test(control.value) ? null : {invalidCreditCardCode: true};
      }
      return null;
    };
  }

  static validCreditCardExpiration(): ValidatorFn {

    return (control: FormControl) => {
      const value: string = control.value;
      const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
      if (value) {
        if (regex.test(value)) {
          const dateSplit = value.split('/');
          const currentDate = new Date();
          currentDate.setDate(1);
          currentDate.setHours(0, 0, 0, 0);

          const currentMillennium = 2000;

          const expDate = new Date();
          expDate.setDate(1);
          expDate.setFullYear(Number(dateSplit[1]) + currentMillennium);
          expDate.setMonth(Number(dateSplit[0]) - 1);
          expDate.setHours(0, 0, 0, 0);

          if (currentDate.getTime() > expDate.getTime()) {
            return {invalidCreditCardExpirationDate: true};
          }

        } else {
          return {invalidCreditCardExpirationFormat: true};
        }

      }
      return null;
    };
  }

  static futureDate(): ValidatorFn {
    return (control: FormControl) => {
      const myValue: NgbDateStruct = control.value;

      if (myValue) {

        const valueDate = new Date();
        valueDate.setFullYear(myValue.year);
        valueDate.setUTCMonth(myValue.month - 1);
        valueDate.setUTCDate(myValue.day);

        const currentDate = new Date();

        return (valueDate.getTime() < currentDate.getTime()) ? {futureDate: true} : null;
      }
      return null;
    };
  }

  static requiredIfControlEqualsTo(group: FormGroup, controlName: string, controlValue: any): ValidatorFn {

    return (control: FormControl) => {
      const myValue = control.value;
      const compareValue = group.controls[controlName].value;

      if (compareValue === controlValue) {
        return (!!myValue) ? null : {required: true};
      }

      return null;
    };

  }

  static oneOfGroupMustBeAffirmative(): ValidatorFn {
    return (control: FormControl) => {
      const myValue = control.value;
      const anyTrue = Object.keys(myValue)
        .map(answer => {
          return myValue[answer];
        })
        .reduce((previous, current) => {
          return previous || current;
        }, false);

      return anyTrue ? null : {anyToBeAffirmative: true};
    };
  }

  static requiredIfOneOfProvidedAffirmative(
    group: FormGroup,
    controlNames: string[],
    isCoApplicant: boolean = false
  ): ValidatorFn {
    return (control: FormControl) => {
      const value: string = control.value;

      if ((value.trim() === '')) {
        const anyTrue = controlNames
          .map((controlName) => {
            return group.controls[controlName]
              .value[
                isCoApplicant ? 'secondaryApplicant' : 'primaryApplicant'
              ];
          })
          .reduce((prev, current) => {
            return prev || current;
          }, false);

        return anyTrue ? {required: true} : null;
      }

      return null;
    };
  }

  static requiredArrestsIfOneOfProvidedAffirmative(
    group: FormGroup,
    controlNames: string[],
    isCoApplicant: boolean = false
  ): ValidatorFn {
    return (control: FormControl) => {
      const value: string = control.value;

      if ((!value || value.length == 0)) {
        const anyTrue = controlNames
          .map((controlName) => {
            return group.controls[controlName]
              .value[
                isCoApplicant ? 'secondaryApplicant' : 'primaryApplicant'
              ];
          })
          .reduce((prev, current) => {
            return prev || current;
          }, false);

        return anyTrue ? {required: true} : null;
      }

      return null;
    };
  }

  static phoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static noDialCodePhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static referencePhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static emergencyPhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static businessPhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static realtorPhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static landlordPhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static familyPhoneValidator(): Validators[] {
    return [
      Validators.required,
      Validators.pattern('[0-9-]+'),
      Validators.minLength(5),
      Validators.maxLength(15),
    ];
  }

  static usaZipCode(): ValidatorFn {
    return (control: FormControl) => {
      const regex = /^\d{5}(?:(-\d{4}))?$/;
      if (control.value) {
        return regex.test(control.value) ? null : {invalidUsaZipCode: true};
      }
      return null;
    };
  }

  static canadaZipCode(): ValidatorFn {
    return (control: FormControl) => {
      const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
      if (control.value) {
        return regex.test(control.value) ? null : {invalidCanadianZipCode: true};
      }
      return null;
    };
  }

  static ssnValidator(): ValidatorFn {
    return (control: FormControl) => {

      const regex = /^(?!000|666|9)[0-9]{3}([ -]?)(?!00)[0-9]{2}\1(?!0000)[0-9]{4}$/;
      const value = control.value ? control.value.replace(/-|\s/g, '') : '';
      if (value) {
        return regex.test(value) ? null : {invalidSsn: true};
      }

      return null;
    };
  }

  static usernameValidator(): ValidatorFn {
    return (control: FormControl) => {
      const regex = /^[_.@A-Za-z0-9-]*$/;
      if (control.value) {
        return regex.test(control.value) ? null : {invalidUsername: true};
      }

      return null;
    };
  }

  static minimumAge(years: number) {
    return (control: FormControl) => {
      const myValue: NgbDateStruct = control.value;

      if (myValue) {

        const valueDate = new Date();
        valueDate.setFullYear(myValue.year);
        valueDate.setUTCMonth(myValue.month - 1);
        valueDate.setUTCDate(myValue.day);

        const dateAgo = new Date();
        dateAgo.setFullYear(dateAgo.getFullYear() - years);

        return (valueDate.getTime() > dateAgo.getTime()) ? {minimumAge: years} : null;
      }

      return null;
    };
  }
  static currencyValidator(): ValidatorFn {
      return (control: FormControl) => {
        const decimalsOnly = /^[1-9]\d{0,7}(\.\d{1,3})?$/;

        if (control.value) {

          return decimalsOnly.test(control.value)
            ? null
            : {
              currency: control.value.match(/[a-zA-Z,!@#$%^&*-+]/)

            };
        }

        return null;
      };

  }
  static numberValidator(): ValidatorFn {
    return (control: FormControl) => {
      const digitsOnly = /^[1-9]+[0-9]*$/;

      if (control.value) {

        return digitsOnly.test(control.value)
          ? null
          : {
            numbersOnly: control.value.match(/[^0-9]/),
            numberAtLeast1: control.value.match(/[0^&*]/)
          };
      }

      return null;
    };

}

  static emailValidator(): ValidatorFn {
    return (control: FormControl) => {
      const emailsOnly = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z0-9]{2,64})(\]?)$/;
      const myValue: string = control.value;

      if (myValue) {
          return emailsOnly.test(myValue) ? null : {email: true};
      }


      return null;
    };

}

  static asciiValidator(): ValidatorFn {

    return (control: FormControl) => {
      const regex = /^[\x00-\x7F]*$/;

      const myValue: string = control.value;

      if (myValue) {
        return regex.test(myValue) ? null : {invalidCharacters: true};
      }

      return null;
    };


  }

  static firstName(): ValidatorFn {

    return (control: FormControl) => {
      const regex = /^([a-zA-ZÀ-ÖØ-öø-ÿ])+$/;

      const myValue: string = control.value;

      if (myValue) {
        return regex.test(myValue) ? null : {firstName: true};
      }

      return null;
    };
  }
  static lastName(): ValidatorFn {

      return (control: FormControl) => {
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+(\s[a-zA-ZÀ-ÖØ-öø-ÿ-]+)?$/;

        const myValue: string = control.value;

        if (myValue) {
          return regex.test(myValue) ? null : {lastName: true};
        }

        return null;
      };

  }

  static ifMoveDateIsRequired(type: ApplicationSubType): ValidatorFn {

    return (control: FormControl) => {
      if (type === 'T' || type === 'G') {
        return (control.value && control.valid) ? null : {required: true};
      }
      return null;
    };

  }


  static matchingInputs( input1: string, input2: string){

    return (formGroup: AbstractControl): ValidationErrors | null  => {

      const firstInput = formGroup.get(input1).value;
      const secondInput = formGroup.get(input2).value;

      if (firstInput !== secondInput) {
        if (input2 === 'confirmPassword') {
          formGroup.get(input2).setErrors({valueDifferentFrom: true});
          return {valueDifferentFrom: true};
        } else {
          formGroup.get(input2).setErrors({emailsDifferentFrom: true});
          return {emailsDifferentFrom: true};
        }
      }

      formGroup.get(input2).setErrors(null);

      return null;

    }
  }



}
