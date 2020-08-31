import { Component, Input, OnInit } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-party-card',
  templateUrl: './gloomhaven-party-card.component.html',
  styleUrls: ['./gloomhaven-party-card.component.scss']
})
export class GloomhavenPartyCardComponent implements OnInit {

  @Input()
  party: GloomhavenParty;

  constructor() { }

  ngOnInit(): void {
  }

}
