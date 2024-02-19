import { NgModule } from "@angular/core";

import { CommunityRoutingModule } from "./community-routing.module";
import { CommunityComponent } from "./community/community.component";
import { SharedModule } from "../shared/shared.module";
import {
  EnterTypeComponent,
  AccessTypeDialog,
} from "./enter-type/enter-type.component";
import {AgmCoreModule} from '@agm/core';
import {
  EnterCodeComponent,
  AccessPropertyDialog,
} from "./enter-code/enter-code.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { HomeComponent } from './home/home.component';
import { CoApplicantSelectionDialogComponent } from './enter-type/cas-dialog/cas-dialog.component';



@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBTQWYzdpfXAKETg67auJ8TTsR5OLWR4ZU",//"AIzaSyDB7JgTVyxZIWXLNDM0I4L2mtOQpvHHgZk"
      libraries: ["places"]
    }),
    SharedModule,
    CommunityRoutingModule
  ],
  declarations: [
    CommunityComponent,
    EnterCodeComponent,
    EnterTypeComponent,
    AccessPropertyDialog,
    AccessTypeDialog,
    UserInfoComponent,
    HomeComponent,

    CoApplicantSelectionDialogComponent
  ],
  entryComponents: [AccessPropertyDialog, AccessTypeDialog, CoApplicantSelectionDialogComponent],
})
export class CommunityModule {}
