import { Component, Input } from "@angular/core";
import { GloomhavenCharacterName } from "@gloomhaven-tracker/api-interfaces";

@Component({
  selector: 'ght-avatar',
  templateUrl: './gloomhaven-avatar.component.html',
  styleUrls: [
    './gloomhaven-avatar.component.scss'
  ]
})
export class GloomhavenAvatarComponent {

  @Input()
  name: GloomhavenCharacterName;

  @Input()
  thumbnail = false

}
