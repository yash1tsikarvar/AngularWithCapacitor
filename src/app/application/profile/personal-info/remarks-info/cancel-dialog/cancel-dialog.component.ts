import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'tev-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.scss']
})
export class CancelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CancelDialogComponent>,

  ) { }

  ngOnInit() {
  }
  onAccept() {
    this.dialogRef.close()
  }

}
