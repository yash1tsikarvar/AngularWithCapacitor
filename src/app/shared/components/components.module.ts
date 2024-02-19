import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertBadgeComponent} from './alert-badge/alert-badge.component';
import {YesNoInputComponent} from './yes-no-input/yes-no-input.component';
import {RadioGroupComponent} from './radio-group/radio-group.component';
import {ProfileAccordionButtonsComponent} from './profile-accordion-buttons/profile-accordion-buttons.component';
import {RouterModule} from '@angular/router';
import {TooltipComponent} from './tooltip/tooltip.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WhiteLabelFooterComponent} from './white-label-footer/white-label-footer.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {ProgressComponent} from './progress/progress.component';
import {CountdownComponent} from './countdown/countdown.component';
import {AwesomeMessageComponent} from './awesome-message/awesome-message.component';
import {UploadingMessageComponent} from './uploading-message/uploading-message.component';
import {ExpiredDialogComponent} from './expired-dialog/expired-dialog.component';
import {HeaderComponent} from './layout/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FooterComponent} from './layout/footer/footer.component';
import {LoaderComponent} from './loader/loader.component';
import {MatCardModule, MatProgressBarModule} from '@angular/material';
import {SignVideoComponent} from './sign-video/sign-video.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatRadioModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  declarations: [
    AlertBadgeComponent,
    YesNoInputComponent,
    RadioGroupComponent,
    ProfileAccordionButtonsComponent,
    TooltipComponent,
    WhiteLabelFooterComponent,
    ProgressComponent,
    CountdownComponent,
    AwesomeMessageComponent,
    UploadingMessageComponent,
    ExpiredDialogComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SignVideoComponent,
  ],
  exports: [
    AlertBadgeComponent,
    YesNoInputComponent,
    RadioGroupComponent,
    ProfileAccordionButtonsComponent,
    TooltipComponent,
    WhiteLabelFooterComponent,
    CountdownComponent,
    AwesomeMessageComponent,
    ProgressComponent,
    UploadingMessageComponent,
    ExpiredDialogComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SignVideoComponent

  ]
})
export class ComponentsModule {
}
