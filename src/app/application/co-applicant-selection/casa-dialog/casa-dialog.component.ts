import { Component, Inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog'
import { ApplicationSubType } from '../../../shared/definitions/types/application-sub-type'

export interface DialogData {
  link: any
}

@Component({
  selector: 'tev-fees-dialog',
  templateUrl: './casa-dialog.component.html',
  styleUrls: ['./casa-dialog.component.scss'],
})
export class CoApplicantSelectionAddDialogComponent implements OnInit {
  code: string
  type: ApplicationSubType

  constructor(
    public dialogRef: MatDialogRef<CoApplicantSelectionAddDialogComponent>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { code, type } = params
      this.code = code
      this.type = type
    })
  }
  onAccept() {
    this.dialogRef.close()
  }
}
