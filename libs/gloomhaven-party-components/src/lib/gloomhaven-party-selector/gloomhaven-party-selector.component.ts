import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {GloomhavenCampaign} from "@gloomhaven-tracker/api-interfaces";
import {PartyStorageService} from "../../../../persistence/src/lib/party-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {AddPartyDialogComponent} from "./modal/add-party-dialog.component";

@Component({
  selector: 'ght-party-selector',
  templateUrl: "./gloomhaven-party-selector.component.html",
  styleUrls: [
    "./gloomhaven-party-selector.component.scss"
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class GloomhavenPartySelectorComponent implements OnInit {

  campaigns: Array<GloomhavenCampaign>;
  selectedParty: GloomhavenCampaign;

  constructor(private partyService: PartyStorageService, private dialog: MatDialog) {}

  ngOnInit() {
    this.partyService.fetchParties().subscribe((campaigns) => {
      this.campaigns = campaigns;
    });
  }

  onAddParty() {
    this.selectedParty = null;

    const addDialog = this.dialog.open<AddPartyDialogComponent, any, string>(AddPartyDialogComponent);

    addDialog.afterClosed().subscribe(partyName => {
      if (partyName) {
        // TODO@pesok add response to operation
        this.partyService.createParty(partyName).subscribe(() => {
          this.ngOnInit();
        });
      }
    })
  }

  onSelectParty(selectedParty: GloomhavenCampaign) {
    this.selectedParty = this.selectedParty === selectedParty ? null : selectedParty;
  }

  onDeleteParty(id: number) {
    // TODO@pesok add notification when success or failure
    this.partyService.deleteParty(id).subscribe(() => {
      this.ngOnInit();
      this.selectedParty = null;
    });
  }
}
