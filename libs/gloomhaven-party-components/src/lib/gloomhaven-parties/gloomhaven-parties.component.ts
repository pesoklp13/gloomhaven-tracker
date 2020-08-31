import { Component, Inject, OnInit } from "@angular/core";
import { GloomhavenParty, PARTY_SERVICE_TOKEN, PartyService } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-parties',
  templateUrl: './gloomhaven-parties.component.html',
  styleUrls: ['./gloomhaven-parties.component.scss']
})
export class GloomhavenPartiesComponent implements OnInit {

  parties: Array<GloomhavenParty>;

  constructor(@Inject(PARTY_SERVICE_TOKEN) public partyService: PartyService) {
    this.partyService.getParties().subscribe((parties) => {
      this.parties = parties;
    });
  }

  ngOnInit(): void {}

}
