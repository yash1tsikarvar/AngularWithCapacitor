import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {AddressDetailsComponent} from './address-details/address-details.component';
import {AddressInfoComponent} from './address-info/address-info.component';
import {OwnerInfoComponent} from './owner-info/owner-info.component';
import {RealEstateInfoComponent} from './real-estate-info/real-estate-info.component';
import {AgmCoreModule} from '@agm/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBTQWYzdpfXAKETg67auJ8TTsR5OLWR4ZU",//"AIzaSyDB7JgTVyxZIWXLNDM0I4L2mtOQpvHHgZk"
      libraries: ["places"]
    }),
    SharedModule,
    MatSlideToggleModule
  ],
  declarations: [
    AddressDetailsComponent,
    AddressInfoComponent,
    OwnerInfoComponent,
    RealEstateInfoComponent,
  ],  
  exports: [
    AddressDetailsComponent,
  ]
})
export class AddressDetailsModule {

}
