import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {AdditionalInfoComponent} from './additional-info/additional-info.component';
import { UnderageInfoComponent } from './underage-info/underage-info.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { UnderageFormComponent } from './underage-form/underage-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AdditionalInfoComponent,
    UnderageInfoComponent,
    VehicleInfoComponent,
    PetInfoComponent,
    UnderageFormComponent,
    PetFormComponent,
    VehicleFormComponent,
  ],
  exports: [
    AdditionalInfoComponent,
  ]
})
export class AdditionalInfoModule {

}
