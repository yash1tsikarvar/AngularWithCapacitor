import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError, takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import HttpStatusCode from '../../shared/utils/HTTPStatusCode';
import {UiService} from '../../ui/ui.service';
import {
  EmploymentVerificationRequestDTO,
  ViewEmploymentVerificationDTO
} from '../../shared/definitions/models/employment-verification.model';
import {EmploymentAnswer} from '../../shared/definitions/models/employment.answers.model';
import {CustomValidators} from '../../shared/custom-validators';
import {ProfileFormService} from '../../application/profile/profile-form.service';
import {SalaryPeriods} from '../../shared/definitions/forms/profile-form/references/salary-periods';
import {EmploymentTimePeriods} from '../../shared/definitions/forms/profile-form/references/employmentTimeVerify';

@Component({
  selector: 'tev-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
})
export class EmploymentComponent implements OnInit, AfterViewInit {

  id: string;
  hash: string;
  employment: ViewEmploymentVerificationDTO;

  status = '';
  errorData = '';

  title = 'Employment Verification Form';
  type = 'Employment';
  form: FormGroup;
  know: boolean = Boolean(0);
  salaryPeriods = SalaryPeriods;
  employmentTimeVerify = EmploymentTimePeriods;
  data: EmploymentAnswer [];
  showError: boolean;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private activeRoute: ActivatedRoute,
              private uiService: UiService,
              private profileFormService: ProfileFormService,
              private route: Router) {
    this.listenToUrlParams();
    this.listenForFormValidation();
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
      verifierName: ['', Validators.required],
      verifierPosition: ['', Validators.required],
      verifierBeginWork: ['', Validators.required],
      verifierCompanyName: ['', Validators.required],
      verifierCurrentPosition: ['', Validators.required],
      verifierCurrentSalary: ['', CustomValidators.currencyValidator()],
      verifierOften: [],
      verifierFullPart: ['', Validators.required]
    });

  }

  getDataFromService(id: string, hash: string) {

    this.httpService.getEmploymentVerification(id, hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorEmployment(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  correctResponse(res: ViewEmploymentVerificationDTO) {
    if (res) {
      this.employment = res;
      if (res.status === 'Complete') {
        this.status = 'Complete';
        return;
      }
      this.initForm();
      this.status = this.employment.status;
      return;
    }

    this.errorData = 'Can´t Parse Object';
    return;
  }

  errorEmployment(error: HttpErrorResponse) {
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
    this.form.markAllAsTouched();
  }

  getDescription() {
    if (this.employment.applicantName) {
      return '<strong> ' + this.employment.applicantName +
        ' </strong> has applied to a new residence. You are receiving this email because <strong>' + this.employment.applicantName +
        '</strong> entered your contact information as his/her current employer. As part of the application process, ' +
        'we need to verify the applicant’s employment. Please take a moment to complete the following online employment verification form.';
    }
  }

  submitEvent() {
    this.form.markAllAsTouched();
    this.showError = true;
    if (this.form.valid) {
      const dto = this.getDTOFromForm();
      this.httpService.saveEmploymentVerification(this.id, this.hash, dto)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.errorEmployment(error);
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

  getDTOFromForm(): EmploymentVerificationRequestDTO {
    const dto = this.form.value;
    return {
      name: dto.verifierName,
      position: dto.verifierPosition,
      beginWork: dto.verifierBeginWork,
      companyNane: dto.verifierCompanyName,
      currentPosition: dto.verifierCurrentPosition,
      currentSalary: dto.verifierCurrentSalary,
      often: dto.verifierOften,
      fullPart: dto.verifierFullPart
    };
  }

  getClassRow(i: number) {
    return (i % 2 !== 0) ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
  }

  declineEvent() {
    this.httpService.declineEmploymentVerification(this.id, this.hash)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorEmployment(error);
          return of(error);
        })
      )
      .subscribe((res) => {

        if (res && !(res instanceof HttpErrorResponse)) {
          this.correctResponse(res);
        }

      });
  }

  listenForFormValidation(): void {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.form.markAllAsTouched();
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
