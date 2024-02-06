import { Component, OnInit } from '@angular/core';
import {ApplicationSubType} from '../../shared/definitions/types/application-sub-type';
import {ActivatedRoute, Router} from '@angular/router';
import {CoApplicantType} from '../../shared/definitions/types/co-applicant.type';

@Component({
  selector: 'tev-co-applicant-added',
  templateUrl: './co-applicant-added.component.html',
  styleUrls: ['./co-applicant-added.component.scss']
})
export class CoApplicantAddedComponent implements OnInit {

  code: string;
  applicationType: ApplicationSubType;
  coApplicantType: CoApplicantType;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.subscribeToRouteParams();
  }

  ngOnInit() {
  }

  subscribeToRouteParams() {
    this.activeRoute
      .params
      .subscribe(params => {
        const {code, type, coApplicantType} = params;
        this.code = code;
        this.applicationType = type;
        this.coApplicantType = coApplicantType;
      });
  }

}
