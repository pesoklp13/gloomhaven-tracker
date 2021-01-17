import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { GloomhavenParty, PARTY_SERVICE_TOKEN, PartyService } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-party-selector',
  templateUrl: "./gloomhaven-party-selector.component.html",
  styleUrls: [
    "./gloomhaven-party-selector.component.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GloomhavenPartySelectorComponent {

  parties: Array<GloomhavenParty>;
  selectedParty: GloomhavenParty;
  newParty: boolean;

  constructor(@Inject(PARTY_SERVICE_TOKEN) public partyService: PartyService) {
    this.partyService.getParties().subscribe((parties) => {
      this.parties = parties;
    });
  }

  onAddParty() {
    this.newParty = !this.newParty;
    this.selectedParty = null;
  }

  onSelectParty(selectedParty: GloomhavenParty) {
    this.selectedParty = this.selectedParty === selectedParty ? null : selectedParty;
    this.newParty = false;
  }
}
