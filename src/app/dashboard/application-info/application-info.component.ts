import { Component, Input, OnInit} from '@angular/core';
import { ApplicationResponse} from '../../shared/definitions/responses/application.response';
@Component({
  selector: 'tev-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.scss']
})
export class ApplicationInfoComponent implements OnInit{

  @Input() mainApplication: ApplicationResponse;

  constructor() { }

  ngOnInit() {
    
  }

  checkIfHaveRealtor() {
    if (
      (this.mainApplication.realtorName !== null)
      &&
      (this.mainApplication.realtorName !== '')
      ) {
      return true;
    }
    if (
      (this.mainApplication.realtorEmail !== null)
      &&
      (this.mainApplication.realtorEmail !== '')
      ) {
      return true;
    }
    if (
      (this.mainApplication.realtorPhone !== null)
      ) {
      return true;
    }
    return false;
  }

}
