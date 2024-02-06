import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../../ui/ui.service';
import {catchError, takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';
import HttpStatusCode from '../../../shared/utils/HTTPStatusCode';
import {AmericanDatePipe} from '../../../shared/pipes/american-date.pipe';
import {ApplicationListItem} from '../../../shared/definitions/responses/application-list.response';
import {PhotoVehicleRegistrationVerification} from '../../../shared/definitions/models/photo-tag-registration-verification';


@Component({
  selector: 'tev-update-vehicle-registration',
  templateUrl: './update-vehicle-registration.component.html',
  styleUrls: ['./update-vehicle-registration.component.scss'],
  providers: [AmericanDatePipe],
  encapsulation: ViewEncapsulation.None
})
export class UpdateVehicleRegistrationComponent implements OnInit {

  childForm: FormGroup;
  plateDisabled = false;
  iconPlateDisabled = true;
  enableSend: boolean;
  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();
  @Input() application: ApplicationListItem;
  @Input() applicantFullName: string;


  data: PhotoVehicleRegistrationVerification;
  @Output()
  dataSent = new EventEmitter<string>();
  retry: boolean;
  private veh: any;

  @Input()
  set info(info: PhotoVehicleRegistrationVerification) {
    this.data = info;
    this.data.vehRegInfoDTO = {plate: ''};
  }

  constructor(private formBuilder: FormBuilder,
              private uiService: UiService,
              private httpService: HttpService,
  ) {
  }

  initForm() {

    this.childForm = this.formBuilder
      .group({
        id: [this.data.id],
        plate: [this.data.plate, Validators.maxLength(11)],
      });

    this.plateDisabled = (this.data.plate) ? true : false;
    if (this.data.plate && this.data.plate !== '') {
      this.childForm.controls['plate'].disable();
      this.plateDisabled = false;
    }

  }

  ngOnInit() {

    this.initForm();

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID' && this.childForm.controls['plate'].value.length > 0) {
          this.enableSend = true;
        } else {
          this.enableSend = false;
        }
      });
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    } else {

      const plateCoincidence = (this.plateDisabled
        || this.childForm.controls['plate'].value.toLowerCase() === this.data.step1Plate.toLowerCase());

      if (!this.retry && !plateCoincidence) {
        this.retry = true;
        this.uiService.confirmAction({
          showCancel: false,
          message: 'The information doesn\'t match with the application. ' +
            'Please make sure to upload the vehicle registration for car with plate ' + this.data.step1Plate +
            ' please try again.',
          type: 'warning',
          confirmButtonText: 'Retry'
        });

      } else {
        this.data.vehRegInfoDTO.plate = this.childForm.controls['plate'].value;

        this.callServiceVerifyDocument(this.data.documentId, this.data);
      }

    }
  }

  /**
   * Mark controls as touched to know where the error is.
   */
  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }


  callServiceVerifyDocument(id, veh) {

    this.httpService
      .verifyVehicleRegistrationDocument(id, veh)
      .pipe(
        catchError(error => {
          this.uiService
            .showError({
              message: `There was a problem sending information`
            });
          return of(error);
        })
      )
      .subscribe(data => {
        if (data == null || data.status === HttpStatusCode.OK) {
          this.dataSent.emit('finish');
        }
      });

  }

  getError(formControl: string) {
    const {errors} = this.childForm.controls[formControl];
    return this.uiService.getControlError(errors);
  }


  onChange(event: Event, mat: string) {

  }

  retryUpload() {
    this.dataSent.emit('retry');
  }
}
