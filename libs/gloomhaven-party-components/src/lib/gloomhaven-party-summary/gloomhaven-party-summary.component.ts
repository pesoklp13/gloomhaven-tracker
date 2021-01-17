import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { GloomhavenParty } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-party-summary',
  templateUrl: './gloomhaven-party-summary.component.html',
  styleUrls: ['./gloomhaven-party-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GloomhavenPartySummaryComponent {

  @Input() party: GloomhavenParty | null;

}
