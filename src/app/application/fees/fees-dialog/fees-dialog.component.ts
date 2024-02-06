import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

export interface DialogData {
  link: any;
}

@Component({
  selector: 'tev-fees-dialog',
  templateUrl: './fees-dialog.component.html',
  styleUrls: ['./fees-dialog.component.scss']
})
export class FeesDialogComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<FeesDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
  }

  onAccept() {
    this.dialogRef.close();
    this.router.navigate(this.data.link);
  }

}
