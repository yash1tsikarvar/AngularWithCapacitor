import {Component, Input} from '@angular/core';
import {ApplicationResponse} from '../../shared/definitions/responses/application.response';

@Component({
  selector: 'tev-application-info-contact',
  templateUrl: './application-info-contact.component.html',
  styleUrls: ['./application-info-contact.component.scss']
})
export class ApplicationInfoContactComponent {

  @Input() mainApplication: ApplicationResponse;

}
