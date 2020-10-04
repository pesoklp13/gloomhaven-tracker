import { Component, Inject } from "@angular/core";
import { GloomhavenParty, PARTY_SERVICE_TOKEN, PartyService } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-party-selector',
  templateUrl: "./gloomhaven-party-selector.component.html",
  styleUrls: [
    "./gloomhaven-party-selector.component.scss"
  ]
})
export class GloomhavenPartySelectorComponent {

  parties: Array<GloomhavenParty>;

  constructor(@Inject(PARTY_SERVICE_TOKEN) public partyService: PartyService) {
    this.partyService.getParties().subscribe((parties) => {
      this.parties = parties;
    });
  }

  onAddParty() {
    // TODO@pesok add functionality
  }

  onSelectParty(selectedParty: GloomhavenParty) {
    // TODO@pesok add functionality
  }
}
