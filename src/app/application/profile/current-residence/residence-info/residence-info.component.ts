import {Component, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ResidenceInfo} from '../../../../shared/definitions/forms/profile-form/current-residence/current-residence.interface';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {UiService} from '../../../../ui/ui.service';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {ChildForm} from '../../child-form.interface';
import {states} from '../../../../shared/definitions/constants/us_states';
import {countries} from '../../../../shared/definitions/constants/phone_codes';
import {CustomValidators} from '../../../../shared/custom-validators';
import {ProfileFormService} from '../../profile-form.service';
import {CurrentResidenceType} from '../../../../shared/definitions/types/current-residence.type';
import {takeUntil} from 'rxjs/operators';
import * as accents from 'remove-accents';
import {MapsAPILoader} from '@agm/core';
import { environment } from '../../../../../environments/environment';

let counter = 0;


// const {use_google_api} = environment;

@Component({
  selector: 'tev-residence-info',
  templateUrl: './residence-info.component.html',
  styleUrls: ['./residence-info.component.scss']
})
export class ResidenceInfoComponent implements OnInit, ChildForm, OnDestroy {

  childForm: FormGroup;
  formCounter = counter++;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  residenceType$: BehaviorSubject<CurrentResidenceType> = new BehaviorSubject<CurrentResidenceType>(null);

  states = states;
  countries = countries;

  data: ResidenceInfo;

  @Input()
  set info(info$: Observable<ResidenceInfo>) {
    info$.subscribe(info => {
      if (this.data = info) {
        this.dataReady$.next(true);
      }
    });
  }

  @Output() formChanged: EventEmitter<ResidenceInfo> = new EventEmitter<ResidenceInfo>();
  @Output() residenceTypeChanged: EventEmitter<CurrentResidenceType> = new EventEmitter<CurrentResidenceType>();

  zipValidators: ValidatorFn[];

  @ViewChild('locationSearch', {static: false})
  public searchElementRef: ElementRef;

  isGPlaceSelected = false;
  isEnterManually = !environment.use_google_api;
  isCoApplicantRequest: false;
  showModeButton: true;
  modeText = 'manually';
  isHouseNumberError: boolean;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {

    this.defaultValues();
    this.listenForFormValidation();
  }

  ngOnInit() {
    this.initForm();

    // tslint:disable-next-line:comment-format
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });


      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (!place || !place.address_components) {
            return;
          }

          let houseNumber = '';

          for (let x = place.address_components.length - 1; x >= 0; x--) {
            if (houseNumber === '' && place.address_components[x].types[0] === 'street_number') {
              houseNumber = place.address_components[x].long_name;
            }
          }

          const id = this.searchElementRef.nativeElement.id.replace('propertyLocationSearch-', '');

          if (!isNaN(+id)) {
            this.clearAddressInfo();

            const componentForm = {
              street_number: ['short_name', 'houseNumber'],
              route: ['long_name', 'streetName'],
              locality: ['long_name', 'city'],
              sublocality_level_1: ['long_name', 'sublocality'],
              neighborhood: ['long_name', 'neighborhood'],
              administrative_area_level_1: ['short_name', 'state'],
              postal_code: ['short_name', 'zipCode'],
              country: ['short_name', 'country']
            };

            const splitData: String[] = [];

            for (let i = 0; i < place.address_components.length; i++) {
              const addressType = place.address_components[i].types[0];
              if (componentForm[addressType]) {
                const val = accents.remove(place.address_components[i][componentForm[addressType][0]]);
                splitData[addressType] = val;
              }
            }

            this.childForm.controls['number'].setValue(splitData['street_number']);
            this.childForm.controls['streetName'].setValue(splitData['route']);
            this.childForm.controls['country'].setValue(splitData['country']);
            this.childForm.controls['city'].setValue(splitData['locality']);


            if (splitData['locality'] === undefined) {
              this.childForm.controls['city'].setValue(splitData['sublocality_level_1']);
            }
            if (this.childForm.controls['city'].value === undefined) {
              this.childForm.controls['city'].setValue(splitData['neighborhood']);
            }

            if (splitData['country'] === 'US' || splitData['country'] === 'CA') {
              this.childForm.controls['state'].setValue(splitData['administrative_area_level_1']);
              this.childForm.controls['zip'].setValue(splitData['postal_code']);
              if (this.childForm.controls['zip'].value === undefined ||
                this.childForm.controls['state'].value === undefined
              ) {
                this.childForm.markAllAsTouched();
                this.formHasErrors();
              }
            }

            if (this.childForm.controls['city'].value === undefined ||
              this.childForm.controls['country'].value === undefined ||
              this.childForm.controls['number'].value === undefined ||
              this.childForm.controls['streetName'] === undefined
            ) {
              this.childForm.markAllAsTouched();
              this.formHasErrors();
            }

            this.childForm.controls['locationSearch'].setValue(accents.remove(place.formatted_address));
            this.childForm.controls['locationSearch'].disable();
            this.isGPlaceSelected = true;


            this.childForm.updateValueAndValidity();
          }
        });
      });
    });


  }

  initForm() {
    const pattern = '^[ -\'0-9a-zA-ZÀ-ÖØ-öø-ÿ]+$';
    this.childForm = this.formBuilder
      .group({
        locationSearch: [null, [Validators.maxLength(80)]],
        type: [null, Validators.required],
        number: [null, [Validators.required, Validators.maxLength(20), CustomValidators.asciiValidator()]],
        streetName: [null, [Validators.required, Validators.maxLength(80), CustomValidators.asciiValidator()]],
        apt: [null, [Validators.maxLength(10), CustomValidators.asciiValidator()]],
        country: ['US', [Validators.required, Validators.maxLength(2)]],
        city: [null, [Validators.required, Validators.maxLength(50), CustomValidators.asciiValidator()]],
        years: [null, Validators.min(0)],
        months: [null, Validators.min(0)],
      });

    this.zipValidators = [
      CustomValidators.requiredIfControlEqualsTo(this.childForm, 'country', 'US'),
      CustomValidators.requiredIfControlEqualsTo(this.childForm, 'country', 'CA'),
    ];

    const zipControl = new FormControl('');


    const stateControl = new FormControl('', {
      validators: [
        CustomValidators
          .requiredIfControlEqualsTo(this.childForm, 'country', 'US'),
        Validators.maxLength(2)
      ]
    });

    this.childForm.addControl('zip', zipControl);
    this.childForm.addControl('state', stateControl);

    this.updateZipValidators('US');

    this.subscribeToFormChanges();
    this.formReady$.next(true);
  }

  onResidenceTypeChanged(data: CurrentResidenceType) {
    this.childForm.controls['type'].patchValue(data);
    this.childForm.controls['type'].updateValueAndValidity();
  }

  subscribeToFormChanges() {
    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if ('VALID' === status) {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm
      .controls['country']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((country) => {
        this.childForm.controls['zip'].setValue('');
        this.childForm.controls['state'].setValue('');

        this.updateZipValidators(country);

        this.childForm.controls['state'].updateValueAndValidity();
        this.childForm.controls['zip'].updateValueAndValidity();
      });

    this.childForm
      .controls['type']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(type => {
        this.residenceTypeChanged.emit(type);
      });
  }

  updateZipValidators(countryCode: string) {

    const zipValidators = this.zipValidators.slice(0);

    switch (countryCode) {
      case 'US':
        zipValidators.push(CustomValidators.usaZipCode());
        break;
      case 'CA':
        zipValidators.push(CustomValidators.canadaZipCode());
        break;
    }

    this.childForm.controls['zip'].setValidators(zipValidators);
  }

  defaultValues() {
    combineLatest([this.dataReady$, this.formReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            if (typeof this.data[controlName] !== 'undefined') {
              const data = this.data[controlName];
              this.childForm.controls[controlName].setValue(data);

              if ('type' === controlName) {
                this.residenceType$.next(data);
              }
            }
          });

        this.setGPlaceAddress(this.data);

        this.childForm.updateValueAndValidity();
      });
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];

    return this.uiService.getControlError(errors);
  }

  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  submit() {
    if (!this.childForm.valid) {
      this.markControlsAsTouched();
    }
  }

  listenForFormValidation(): void {
    this.profileFormService
      .validateForm$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {
        this.markControlsAsTouched();
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  formHasErrors() {
    this.isEnterManually = true;
    this.modeText = 'automatically';
  }

  changeAddressMode() {
    this.isEnterManually = !this.isEnterManually;
    this.modeText = !this.isEnterManually ? 'manually' : 'automatically';
  }

  onSearchKey(event: any) {
    if (event.key == 'Backspace' && this.isGPlaceSelected) {
      const addrStr = this.buildFormattedAddressString({
        houseNumber: this.childForm.controls['number'].value || '',
        streetName: this.childForm.controls['streetName'].value || '',
        city: this.childForm.controls['city'].value || '',
        zipCode: this.childForm.controls['zip'].value || '',
        state: this.childForm.controls['state'].value || '',
        country: this.childForm.controls['country'] || ''
      });

      this.childForm.controls['locationSearch'].setValue(addrStr);
    }
    this.clearAddressInfo();
    this.isGPlaceSelected = false;
    this.showModeButton = true;
  }

  clearLocationSearch() {
    this.childForm.controls['locationSearch'].setValue('');
    this.childForm.controls['locationSearch'].enable();
    this.clearAddressInfo();
  }

  private clearAddressInfo() {
    this.childForm.controls['number'].setValue('');
    this.childForm.controls['streetName'].setValue('');
    this.childForm.controls['country'].setValue('');
    this.childForm.controls['city'].setValue('');
    this.childForm.controls['state'].setValue('');
    this.childForm.controls['zip'].setValue('');
  }


  private setGPlaceAddress(data: any) {
    const addrStr = this.buildFormattedAddressString({
      houseNumber: data.number || '',
      streetName: data.streetName || '',
      city: data.city || '',
      zipCode: data.zip || '',
      state: data.state || '',
      country: data.country
    });
    this.childForm.controls['locationSearch'].setValue(addrStr);
    this.childForm.controls['locationSearch'].disable();
    this.isGPlaceSelected = true;
  }

  private buildFormattedAddressString(param: {
    zipCode: any; streetName: any; city:
      any; houseNumber: any; state: any, country: any
  }) {
    const selectedCountry = countries.filter(x => x.code === param.country)[0];

    let formattedAddress = param.houseNumber + ' ' + param.streetName + ', ' + param.city;
    if (param.country === 'US') {
      formattedAddress += ', ' + param.state;
    }

    formattedAddress += ' ' + param.zipCode + ' ,' + selectedCountry.name;
    return formattedAddress;
  }
}
