import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from './components/components.module';
import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {MomentUtcDateAdapter} from './utils/moment-utc-date-adapters';
import {MatChipsModule} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import {ScriptService} from './services/script.service';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    DirectivesModule,
    NgbModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    TextMaskModule,
    MatMenuModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    DirectivesModule,
    NgbModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    TextMaskModule,
    MatMenuModule
  ]
})
export class SharedModule {
}
