import {Component, Input, OnInit} from '@angular/core';
import {ProfileAccordionButton} from '../../definitions/viewparams/profile-accordion-button.interface';

@Component({
  selector: 'tev-profile-accordion-buttons',
  templateUrl: './profile-accordion-buttons.component.html',
  styleUrls: ['./profile-accordion-buttons.component.scss']
})
export class ProfileAccordionButtonsComponent implements OnInit {

  @Input() buttons: ProfileAccordionButton[];

  constructor() { }

  ngOnInit() {
  }

}
