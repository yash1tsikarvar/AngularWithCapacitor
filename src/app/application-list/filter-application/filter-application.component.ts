import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'tev-filter-application',
  templateUrl: './filter-application.component.html',
  styleUrls: ['./filter-application.component.scss']
})
export class FilterApplicationComponent implements OnInit {
  
  @Input() statusList: string[];
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  toggleFilter: boolean;

  constructor() { }

  ngOnInit() {
  }
  filter() {
    this.toggleFilter = !this.toggleFilter;   
  }
}
