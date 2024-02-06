import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ApplicationSubType } from "../../../shared/definitions/types/application-sub-type";

export interface DialogData {
  link: any;
}

@Component({
  selector: "tev-fees-dialog",
  templateUrl: "./cas-dialog.component.html",
  styleUrls: ["./cas-dialog.component.scss"],
})
export class CoApplicantSelectionDialogComponent implements OnInit {
  code: string;
  type: ApplicationSubType;

  constructor(
    public dialogRef: MatDialogRef<CoApplicantSelectionDialogComponent>,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { code, type } = params;
      this.code = code;
      this.type = type;
    });
  }
  onAccept() {
    this.dialogRef.close();
    //console.log(this.type);
    /*switch (this.type) {
      case "T":
        this.router
          .navigate(["/application/new", this.code, this.type, "fees"])
          .catch(console.log);
        break;
      case "O":
        this.router.navigate(["add"]).catch(console.log);
        break;
      case "G":
        this.router
          .navigate(["/application/new", this.code, this.type, "fees", "W"])
          .catch(console.log);
        break;
      default:
        return null;
    }*/
    this.router.navigate(this.data.link);
  }
}
