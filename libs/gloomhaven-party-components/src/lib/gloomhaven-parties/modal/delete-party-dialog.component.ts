import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-delete-party-dialog',
  templateUrl: 'delete-party-dialog.component.html'
})
export class DeletePartyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeletePartyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public party: GloomhavenParty
  ) {

  }
}
