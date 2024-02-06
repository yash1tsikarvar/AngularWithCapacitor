import { Component, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject ,  Observable ,  combineLatest } from 'rxjs';
import { AddressInfo } from '../../../../shared/definitions/forms/profile-form/address-details/address-info.interface';
import { UiService } from '../../../../ui/ui.service';
import { ChildForm } from '../../child-form.interface';
import { states, statesObj } from '../../../../shared/definitions/constants/us_states';
import { PropertyInfoResponse, PropertyUnitList } from '../../../../shared/definitions/responses/property-info.response';
import { CustomValidators } from '../../../../shared/custom-validators';
import { ProfileFormService } from '../../profile-form.service';
import { ApplicationSubType } from '../../../../shared/definitions/types/application-sub-type';
import { streetTypes, streetTypesObj } from '../../../../shared/definitions/constants/street_types';
import { takeUntil } from 'rxjs/operators';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { parseLocation } from 'parse-address';
import * as accents from 'remove-accents';
import { environment } from '../../../../../environments/environment';
import * as moment from 'moment';

// const {use_google_api} = environment;

@Component({
  selector: 'tev-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit, ChildForm, OnDestroy {

  type: ApplicationSubType;

  childForm: FormGroup;

  formReady$: Subject<boolean> = new Subject<boolean>();
  dataReady$: Subject<boolean> = new Subject<boolean>();

  states = states;
  statesObj = statesObj;

  unsubscribeSubject: Subject<boolean> = new Subject<boolean>();

  propertyInfo: PropertyInfoResponse;
  propertyInfoReady$: Subject<boolean> = new Subject<boolean>();
  unitList: PropertyUnitList[] = [];
  unitListObj: Record<string, PropertyUnitList> = {};

  searchControl: FormControl;

  data: AddressInfo;
  @Input()
  set info(info$: Observable<AddressInfo>) {
    info$.subscribe(addressInfo => {
      this.data = addressInfo;
      if (this.data) {
        this.dataReady$.next(true);
      }
    })
  }

  streetType = streetTypes;
  streetTypeObj = streetTypesObj;

  minMovingDate: Date;
  maxMovingDate: Date;
  minMovingOutDate: Date;
  maxMovingOutDate: Date;

  isCoApplicantRequest = false;

  isGPlaceSelected = false;
  isEnterManually = !environment.use_google_api;
  modeText = 'manually';

  isHouseNumberError = false;
  showModeButton = false;

  smallLogo: string;

  @Output() formChanged: EventEmitter<AddressInfo> = new EventEmitter<AddressInfo>();

  @ViewChild("locationSearch", {static: false})
  public searchElementRef: ElementRef;

  @Input() viewType: string = 'normal';
  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private profileFormService: ProfileFormService,
  ) {

    this.defaultValues();
    this.listenToApplicationRequest();
    this.listenToApplicationParams();
    this.listenToPropertyInformation();
    this.listenForFormValidation();
    this.listenToThemeValues();
    this.minMovingDate = this.profileFormService.minMovingDate;
    this.maxMovingDate = this.profileFormService.maxMovingDate;
    this.updateMoveOutDate(this.minMovingDate);
  }

  listenToThemeValues() {
    this.uiService
      .smallLogo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(value => this.smallLogo = `url(${value})`);
  }

  ngOnInit() {
    this.initForm();

    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if(!place || !place.address_components) {
            return;
          }

          this.isHouseNumberError = true;

          for (let x = place.address_components.length - 1; x >= 0; x--) {
            if(place.address_components[x].types[0] == 'street_number') {
              this.isHouseNumberError = false
            }
            else if(place.address_components[x].types[0] == 'country'
              && place.address_components[x]['short_name'] != 'US') {
              this.uiService.showError({
                message: 'Please enter a valid US address.',
                removeCurrent: true
              });
              this.clearAddressInfo()
              this.searchElementRef.nativeElement.focus();
              return;
            }
          }

          this.clearAddressInfo()

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
              splitData[addressType] = val.replace(/[^\w\d]/g, ' ');
            }
          }

          this.childForm.controls['houseNumber'].setValue(splitData['street_number']);
          this.childForm.controls['streetName'].setValue(splitData['route']);
          this.childForm.controls['city'].setValue(splitData['locality']);
          if (splitData['locality'] === undefined) {
            this.childForm.controls['city'].setValue(splitData['sublocality_level_1']);
          }
          if (this.childForm.controls['city'].value === undefined) {
            this.childForm.controls['city'].setValue(splitData['neighborhood']);
          }

            this.childForm.controls['state'].setValue(splitData['administrative_area_level_1']);
            this.childForm.controls['zipCode'].setValue(splitData['postal_code']);

            if (this.childForm.controls['zipCode'].value === undefined ||
              this.childForm.controls['state'].value === undefined ||
            this.childForm.controls['city'].value === undefined ||
            this.childForm.controls['houseNumber'].value === undefined ||
            this.childForm.controls['streetName'] === undefined
          ) {
            this.childForm.markAllAsTouched();
            this.formHasErrors();
          }

          this.childForm.controls['locationSearch'].setValue(accents.remove(place.formatted_address));
          this.childForm.controls['locationSearch'].disable();
          this.isGPlaceSelected = true;
          this.setAddressInput();
          this.childForm.updateValueAndValidity();
        });
      });
    });
  }

  formHasErrors() {
    this.isEnterManually = true;
    this.modeText = 'automatically';
  }

  ngAfterViewChecked(){
        if(this.searchElementRef && this.searchElementRef.nativeElement && this.searchElementRef.nativeElement.autocomplete == "off"){
            this.searchElementRef.nativeElement.autocomplete = "current-password";
        }
  }

  nextDay(origDate, addedDays) {
    const copy = new Date(Number(origDate));
    copy.setDate(origDate.getDate() + addedDays);
    return copy;
  }

  nextMonths(origDate, addedMonths) {
      const date = moment(origDate);
      date.add(addedMonths, 'months');
      return date.toDate();
  }

  onSearchKey(event: any) {
    if(event.key == 'Backspace' && this.isGPlaceSelected) {
      const addrStr = this.buildAddressString({
        houseNumber: this.childForm.controls['houseNumber'].value,
        streetName: this.childForm.controls['streetName'].value,
        streetType: this.childForm.controls['streetType'].value
      });
      this.childForm.controls['locationSearch'].setValue(addrStr);
    }
    this.clearAddressInfo()
    this.isGPlaceSelected = false;
    this.showModeButton = true;
  }

  onAddressKey(event: any) {
    const value = event.target.value;
    if(value) {
      let parsed = parseLocation(accents.remove(event.target.value));
      this.isHouseNumberError = !parsed.number;
      this.childForm.controls['houseNumber'].setValue(parsed.number);
      this.childForm.controls['streetName'].setValue([
        parsed.prefix || '',
        parsed.street || '',
        parsed.type || ''
      ].join(' ').trim());
    }
  }

  setAddressInput() {
    const addrStr = [
      this.childForm.controls['houseNumber'].value,
      this.childForm.controls['streetName'].value
    ];
    this.childForm.controls['address'].setValue(addrStr.join(' ').trim())
  }

  listenToApplicationRequest() {
    this.profileFormService
      .applicationRequest$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(request => {
        if (request){
          this.isCoApplicantRequest = !!request.mainApplicationId;
        }
      });
  }

  listenToPropertyInformation() {
    this.profileFormService
      .propertyInfo$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(info => {
        this.propertyInfo = info;
        this.unitList = this.propertyInfo.unitList || [];

        if (this.unitList.length) {
          this.unitListObj = this.unitList
            .reduce((acc, current) => ({...acc, [current.value]: current}), {});
        } else {
          this.unitListObj = {};
        }

        this.propertyInfoReady$.next(true);
      });
  }

  initForm() {
    const rentValidator = this.type === 'T' ? [Validators.required, Validators.maxLength(7),CustomValidators.currencyValidator()] : [Validators.maxLength(7),CustomValidators.currencyValidator()] ;
    const purchaseValidator = this.type === 'O' ? [Validators.required, Validators.maxLength(12),CustomValidators.currencyValidator()] : [Validators.maxLength(12),CustomValidators.currencyValidator()] ;

    //TODO
    const pattern = "^[ -'0-9a-zA-ZÀ-ÖØ-öø-ÿ.]+$"

    this.childForm = this.formBuilder
      .group({
        locationSearch: [null, [Validators.maxLength(80)]],
        address: [null, [Validators.required, Validators.maxLength(80), Validators.pattern(pattern)]],
        houseNumber: [null, [Validators.required, Validators.maxLength(8), Validators.pattern(pattern)]],
        streetName: [null, [Validators.required, Validators.maxLength(80), Validators.pattern(pattern)]],
        streetType: ['', [Validators.maxLength(10), Validators.pattern(pattern)]],
        city: [null, [Validators.required, Validators.maxLength(50), Validators.pattern(pattern)]],
        state: ['', [Validators.required, Validators.maxLength(2)]],
        aptUnit: ['', [Validators.required, Validators.maxLength(10), CustomValidators.asciiValidator()]],
        zipCode: [null, CustomValidators.usaZipCode()],
        monthlyRent: [null, rentValidator],
        purchasePrice: [null, purchaseValidator],
        moveDate: [null, [Validators.required, CustomValidators.futureDate()]],
        moveOutDate: [null, [CustomValidators.ifMoveDateIsRequired(this.type),
          CustomValidators.minDaysMonthsOnDate(this.propertyInfo.leaseTypeMonthDay, this.propertyInfo.minLease)]]
        //howLong: [null, [Validators.maxLength(3), CustomValidators.numberValidator()]],
      });

    this.subscribeToFormChanges();
    this.childForm.updateValueAndValidity();
    this.formReady$.next(true);
  }

  subscribeToFormChanges() {

    this.childForm
      .statusChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(status => {
        if (status === 'VALID') {
          this.formChanged.emit(this.childForm.value);
        } else {
          this.formChanged.emit(null);
        }
      });

    this.childForm
      .controls['moveDate']
      .valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(moveDate => {
        this.updateMoveOutDate(moveDate);
      });
  }

  /**
   * Fill the values with values previously stored
   */
  defaultValues() {

    combineLatest([this.formReady$, this.dataReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        Object.keys(this.childForm.controls)
          .forEach(controlName => {
            if (typeof this.data[controlName] !== 'undefined') {
              this.childForm.controls[controlName].setValue(this.data[controlName]);
            }
          });

        this.childForm.controls['address'].setValue([
          this.data['houseNumber'] || '',
          this.data['streetName'] || '',
          this.data['streetType'] || ''
        ].join(' ').trim());

        this.childForm.controls['streetType'].setValue('');
        this.setGPlaceAddress(this.data);

        if(this.data['moveDate']){
            this.updateMoveOutDate(this.data['moveDate']);
        }

        this.childForm.updateValueAndValidity();
        this.childForm.markAsDirty();
      });

    combineLatest([this.formReady$, this.propertyInfoReady$])
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(() => {

        /**
         * Only fill the values if the the information hasn't been filled with the information of the session storage
         */
        if (!this.childForm.dirty) {
          const { city, state, zipcode} = this.propertyInfo;

          this.childForm.controls['city'].setValue(city || '');
          this.childForm.controls['state'].setValue(state || '');
          this.childForm.controls['zipCode'].setValue(zipcode || '');

          this.setAddressInfoFromAddress();
        }

      });
  }

  setGPlaceAddress(data: any) {
    const addrStr = this.buildFormattedAddressString({
      houseNumber: data.houseNumber || '',
      streetName: data.streetName || '',
      streetType: data.streetType || '',
      city: data.city || '',
      zipCode: data.zipCode || '',
      state: data.state || ''
    })
    this.childForm.controls['locationSearch'].setValue(addrStr);
    this.childForm.controls['locationSearch'].disable();
    this.isGPlaceSelected = true
  }

  buildFormattedAddressString(data: any) {
    const {houseNumber, streetName, streetType, unit, city, state, zipCode} = data;
    return houseNumber +' '+streetName+(streetType?' '+streetType:'')+', '+city+', '+state+' '+zipCode+', USA';
  }

  buildAddressString(data: any) {
    const {houseNumber, streetName, streetType, unit, city, state, zipCode} = data;
    return houseNumber +' '+streetName+(streetType?' '+streetType:'');
  }

  clearLocationSearch() {
    this.childForm.controls['locationSearch'].setValue('');
    this.childForm.controls['locationSearch'].enable();
    this.clearAddressInfo()
  }

  clearAddressInfo() {
    //this.childForm.controls['aptUnit'].setValue('');
    this.childForm.controls['address'].setValue('');
    this.childForm.controls['houseNumber'].setValue('');
    this.childForm.controls['streetName'].setValue('');
    this.childForm.controls['city'].setValue('');
    this.childForm.controls['state'].setValue('');
    this.childForm.controls['zipCode'].setValue('');
    this.childForm.controls['streetType'].setValue('');
  }

  setAddressInfoFromAddress() {

    if (this.propertyInfo.prefillAddress) {
      const {houseNumber, street, streetType, unit, city, state, zipcode} = this.propertyInfo;

      this.childForm.controls['aptUnit'].setValue(unit || '');
      this.childForm.controls['houseNumber'].setValue(houseNumber || '');
      this.childForm.controls['streetName'].setValue(street || '');
      this.childForm.controls['streetType'].setValue(streetType || '');

      this.childForm.controls['address'].setValue([
        this.childForm.controls['houseNumber'],
        this.childForm.controls['streetName'],
        this.childForm.controls['streetType']
      ].join(' ').trim());

      const addrStr = this.buildFormattedAddressString({
        aptUnit: unit || '',
        houseNumber: houseNumber || '',
        streetName: street || '',
        streetType: streetType || '',
        city: city || '',
        zipCode: zipcode || '',
        state: state || ''
      })

      this.childForm.controls['address'].setValue(addrStr);
      this.isGPlaceSelected = true
    }
  }

  /**
   * Mark controls as touched to know where the error is.
   */
  markControlsAsTouched() {
    this.uiService.markControlsAsTouched(this.childForm);
  }

  getError(controlName: string): string {
    const {errors} = this.childForm.controls[controlName];
    return this.uiService.getControlError(errors);
  }

  submit(): void {
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

  listenToApplicationParams() {
    this.profileFormService
      .applicationParams$
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(params => {
        const {applicationType} = params;
        this.type = applicationType;
      })
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next(true);
  }

  reviewEdit(){
    this.viewType = 'review-edit';
    this.viewTypeChanged.emit(this.viewType);
  }

  changeAddressMode() {
      this.isEnterManually = !this.isEnterManually;
      this.modeText = !this.isEnterManually ? 'manually' : 'automatically';
  }

  updateMoveOutDate(moveInDate) {
        let startDate = moveInDate;
        if (moveInDate._isAMomentObject) {
          startDate =   new Date(moveInDate.utcOffset('+0000').format('YYYY-MM-DD HH:MM'));
        } else if (typeof moveInDate == "string") {
            startDate = new Date(moveInDate);
        }

        if (this.propertyInfo.leaseTypeMonthDay === 'MONTH' && this.propertyInfo.minLease > 0) {
          this.minMovingOutDate = this.nextMonths(startDate, this.propertyInfo.minLease);
        } else if (this.propertyInfo.leaseTypeMonthDay === 'DAY' && this.propertyInfo.minLease > 0) {
          this.minMovingOutDate = this.nextDay(startDate, this.propertyInfo.minLease);
        } else {
          this.minMovingOutDate = this.nextDay(startDate, 1);
        }
        this.maxMovingOutDate = this.nextDay(this.minMovingOutDate, 3650);
  }
}
