import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-parties',
  templateUrl: './gloomhaven-parties.component.html',
  styleUrls: ['./gloomhaven-parties.component.scss']
})
export class GloomhavenPartiesComponent{

  @Input()
  parties: Array<GloomhavenParty>;

  @Output()
  addParty: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  selectParty: EventEmitter<GloomhavenParty> = new EventEmitter<GloomhavenParty>();

}
