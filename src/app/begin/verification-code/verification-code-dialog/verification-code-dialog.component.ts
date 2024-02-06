import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UiService } from '../../../ui/ui.service';
import { MobileMaskPipe } from '../../../shared/pipes/mobile-mask.pipe';

@Component({
  selector: 'tev-verification-code-dialog',
  templateUrl: './verification-code-dialog.component.html',
  styleUrls: ['./verification-code-dialog.component.scss'],
  providers: [ MobileMaskPipe ]
})
export class VerificationCodeDialog  {

  imagePath: string;
  title: string;
  message: string;
  btnText: string;
  ;

  constructor(
    public dialogRef: MatDialogRef<VerificationCodeDialog>,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    private router: Router,
    public mobileMask: MobileMaskPipe,
    private uiService: UiService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    if (this.data.validCode) {
      this.imagePath = "/assets/intro/icon_valid_code.svg";
      this.title = "Thank you!";
      this.message = "We have successfully verified your identity. You can now sign in to your new account.";
      this.btnText = "CONTINUE";
    }
    else {
      if (this.data.bySMS) {        
        this.imagePath = "/assets/intro/icon_sent_sms.svg";
        this.title = "We sent you an SMS";
        this.message = `Please check your phone ending ${this.mobileMask.transform(this.data.value, 4)} and enter the security code to verify your account.`;
        this.btnText = "CONTINUE";
      }
      else {
        this.imagePath = "/assets/intro/icon_sent_email.svg";
        this.title = "We sent you an email";
        this.message = `Please check your email ${this.data.value} and enter the security code to verify your account.`;
        this.btnText = "CONTINUE";
      }
    }
  }

  goTo() {
    if(this.data.validCode)
      this.router.navigate(['/login']);
    else{
      this.dialogRef.close();
    }
  }



}
export interface DialogData {
  bySMS: boolean;
  validCode: boolean;
  value: any;
}