import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import {UiService} from '../../ui/ui.service';
import {
  CharacterVerificationRequestDTO, KnowAgoCharacter, RelationshipCharacter, ViewCharacterVerificationDTO
} from '../../shared/definitions/models/personal-reference-verification.model';
import {CharacterAnswer} from '../../shared/definitions/models/character.answers.model';
import {EmploymentTimePeriods} from '../../shared/definitions/forms/profile-form/references/employmentTimeVerify';
import {CustomValidators} from '../../shared/custom-validators';

@Component({
  selector: 'tev-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit, AfterViewInit {

  id: string;
  hash: string;
  character: ViewCharacterVerificationDTO;

  status = '';
  errorData = '';

  title = 'Character Verification Form';
  type = 'Character';
  form: FormGroup;
  know: boolean = Boolean(0);
  relationship = RelationshipCharacter;
  knowAgoYears: number;
  knowAgoMonths: number;
  goodTenant: boolean;
  showError: boolean;
  remarks = 'Remarks ?';

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private activeRoute: ActivatedRoute,
              private uiService: UiService,
              private route: Router) {
    this.listenToUrlParams();
  }

  ngAfterViewInit() {

  }

  listenToUrlParams() {
    this.activeRoute
      .params
      .subscribe(params => {
        this.id = params.id;
        this.hash = params.hash;
        this.getDataFromService(this.id, this.hash);
      });
  }

  ngOnInit() {
    this.form = this.fb.group({
      knows: ['', Validators.required],
      remarks: ['', null],
      goodTenant: ['', null],
      knowAgoYears: ['', null],
      knowAgoMonths: ['', null],
      relationship: ['', null],
      verifierName: ['', Validators.required],
      sendResult: [],
      agreeAndAuthorize: []
    });

  }

  getDataFromService(id: string, hash: string) {

    this.httpService.getCharacterVerification(id, hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorCharacter(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  correctResponse(res: ViewCharacterVerificationDTO) {
    if (res) {
      this.character = res;
      if (res.status === 'Complete') {
        this.status = 'Complete';
        return;
      }
      this.initForm();
      this.status = this.character.status;
      return;
    }

    this.errorData = 'Can´t Parse Object';
    return;
  }

  errorCharacter(error: HttpErrorResponse) {
    switch (error.status) {
      case HttpStatusCode.NOT_FOUND:
        this.errorData = 'Verification Not Found';
        break;
      default:
        this.errorData = error.message;
        break;
    }
    this.status = 'Complete';
  }

  initForm() {
    this.form.get('knows').valueChanges.subscribe(val => {
      this.changeKnows(val);
    });
    this.form.get('knowAgoYears').valueChanges.subscribe(val => {
      this.changeKnowAgo(val);
    });
    this.form.get('knowAgoMonths').valueChanges.subscribe(val => {
      this.changeKnowAgo(val);
    });
    this.form.get('goodTenant').valueChanges.subscribe(val => {
      this.changeGoodTenant(val);
    });
    this.form.get('sendResult').valueChanges.subscribe(val => {
      if (val) {
        this.form.get('verifierEmail').setValidators(Validators.required);
      } else {
        this.form.get('verifierEmail').clearValidators();
      }
      this.form.get('verifierEmail').updateValueAndValidity();
    });

  }

  changeGoodTenant(val: string) {
    this.goodTenant = (val && val === 'Y');
    if (this.goodTenant) {
      this.remarks = 'Remarks ?';
      this.cleanAndClearValidators(this.form, 'remarks', false);
    } else {
      this.remarks = '* Remarks ?';
      this.addValidators(this.form.get('remarks'), Validators.required);
    }

  }

  changeKnowAgo(val: string) {
    if (this.form.get('knowAgoYears').value && !this.form.get('knowAgoMonths').value) {
      this.form.get('knowAgoMonths').clearValidators();
      this.form.get('knowAgoMonths').updateValueAndValidity({emitEvent: false});
    }
    if (this.form.get('knowAgoMonths').value && !this.form.get('knowAgoYears').value) {
      this.form.get('knowAgoYears').clearValidators();
      this.form.get('knowAgoYears').updateValueAndValidity({emitEvent: false});
    }
    if (!this.form.get('knowAgoMonths').value && !this.form.get('knowAgoYears').value) {
      this.form.get('knowAgoYears').setValidators([Validators.required, Validators.pattern('^[0-9]*$')]);
      this.form.get('knowAgoYears').updateValueAndValidity({emitEvent: false});
      this.form.get('knowAgoMonths').setValidators([Validators.required, Validators.pattern('^[0-9]*$')]);
      this.form.get('knowAgoMonths').updateValueAndValidity({emitEvent: false});
    }
  }

  changeKnows(val: string) {
    this.know = (val && val === 'Y');
    if (this.know) {
      this.addValidators(this.form.get('relationship'), Validators.required);
      this.addValidators(this.form.get('knowAgoYears'), [Validators.required, Validators.pattern('^[0-9]*$')]);
      this.addValidators(this.form.get('knowAgoMonths'), [Validators.required, Validators.pattern('^[0-9]*$')]);
      this.addValidators(this.form.get('goodTenant'), Validators.required);
      this.addValidators(this.form.get('agreeAndAuthorize'), Validators.requiredTrue);
      this.remarks = 'Remarks ?';
      this.cleanAndClearValidators(this.form, 'remarks', false);
    } else {
      this.cleanAndClearValidators(this.form, 'relationship', false);
      this.cleanAndClearValidators(this.form, 'knowAgoYears', false);
      this.cleanAndClearValidators(this.form, 'knowAgoMonths', false);
      this.cleanAndClearValidators(this.form, 'goodTenant', false);
      this.cleanAndClearValidators(this.form, 'agreeAndAuthorize', false);
      this.remarks = '* Remarks ?';
      this.addValidators(this.form.get('remarks'), Validators.required);
    }

  }

  addValidators(parentGroup: AbstractControl, validators: any) {
    parentGroup.setValidators(validators);
    parentGroup.updateValueAndValidity({emitEvent: true});
  }

  cleanAndClearValidators(parentGroup: AbstractControl, name: string, emitEvent = false) {
    parentGroup.get(name).reset(null, {emitEvent: emitEvent});
    parentGroup.get(name).setValue(null, {emitEvent: emitEvent});
    parentGroup.get(name).clearValidators();
    parentGroup.get(name).updateValueAndValidity({emitEvent: false});
  }

  getDescription() {
    if (this.character.applicantName) {
      return '<strong>' + this.character.applicantName +
        '</strong> has applied to a new residence. You are receiving this email because <strong>' + this.character.applicantName +
        '</strong> entered your contact information as their personal reference. As part of the application process, we need to verify ' +
        'their character. Please take a moment to complete the following online character verification form.';
    }
  }

  submitEvent() {
    this.form.markAllAsTouched();
    this.showError = true;
    if (this.form.valid) {
      const dto = this.getDTOFromForm();
      this.httpService.saveCharacterVerification(this.id, this.hash, dto)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.errorCharacter(error);
            return of(error);
          })
        )
        .subscribe((res) => {

          if (res && !(res instanceof HttpErrorResponse)) {
            this.correctResponse(res);
          }
        });
    }
  }

  getDTOFromForm(): CharacterVerificationRequestDTO {
    const dto = this.form.value;
    return {
      isKnown: dto.knows,
      remarks: dto.remarks,
      relationship: dto.relationship,
      knowAgoYears: dto.knowAgoYears,
      knowAgoMonths: dto.knowAgoMonths,
      goodTenant: dto.goodTenant === 'Y',
      name: dto.verifierName,
    };
  }

  getClassRow(i: number) {
    return (i % 2 !== 0) ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
  }

  declineEvent() {
    this.httpService.declineCharacterVerification(this.id, this.hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorCharacter(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  getError(controlName: string): string {
    if (this.form.get(controlName) && this.form.get(controlName).errors != null) {
      const {errors} = this.form.get(controlName);
      return this.uiService.getControlError(errors);
    }
    return '';
  }

  getErrorAgreeAndAuthorize(): string {
    if (this.know) {
      return this.form.get('agreeAndAuthorize').value ? '' : 'This field is required';
    } else {
      return '';
    }
  }
}
