import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'ght-add-party-dialog',
  templateUrl: 'add-party-dialog.component.html',
  styleUrls: [
    "add-party-dialog.component.scss"
  ]
})
export class AddPartyDialogComponent {

  error: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddPartyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public partyName: string
  ) {}

  save(): void {
    this.error = false;

    if (!this.partyName) {
      this.error = true;
      return;
    }

    this.dialogRef.close(this.partyName);
  }
}
