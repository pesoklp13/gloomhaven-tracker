import {Component, OnInit} from "@angular/core";
import {GloomhavenCampaign} from "@gloomhaven-tracker/api-interfaces";
import {PartyStorageService} from "@gloomhaven-tracker/persistence";
import {MatDialog} from "@angular/material/dialog";
import {AddPartyDialogComponent} from "./modal/add-party-dialog.component";

@Component({
  selector: 'ght-party-selector',
  templateUrl: "./gloomhaven-party-selector.component.html",
  styleUrls: [
    "./gloomhaven-party-selector.component.scss"
  ]
})
export class GloomhavenPartySelectorComponent implements OnInit {

  campaigns: Array<GloomhavenCampaign>;
  selectedParty: GloomhavenCampaign;

  constructor(private partyService: PartyStorageService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadParties();
  }

  onAddParty() {
    this.selectedParty = null;

    const addDialog = this.dialog.open<AddPartyDialogComponent, any, string>(AddPartyDialogComponent);

    addDialog.afterClosed().subscribe(partyName => {
      if (partyName) {
        // TODO@pesok add response to operation
        this.partyService.createParty(partyName).subscribe((uid) => {
          this.loadParties(uid);
        });
      }
    })
  }

  onSelectParty(selectedParty: GloomhavenCampaign) {
    this.selectedParty = this.selectedParty === selectedParty ? null : selectedParty;
  }

  onDeleteParty(uid: string) {
    // TODO@pesok add notification when success or failure
    this.partyService.deleteParty(uid).subscribe(() => {
      this.loadParties();

      if (this.selectedParty.uid === uid) {
        this.selectedParty = null;
      }
    });
  }

  private loadParties(uid?: string): void {
    this.partyService.fetchParties().subscribe((campaigns) => {
      this.campaigns = campaigns;
      if (uid) {
        this.selectedParty = this.campaigns.find(campaign => campaign.uid === uid);
      }
    });
  }
}
