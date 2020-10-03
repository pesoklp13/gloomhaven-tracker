import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties/gloomhaven-parties.component";
import { MaterialModule } from "@gloomhaven-tracker/common-components";
import { GloomhavenPartyCardComponent } from './gloomhaven-party-card/gloomhaven-party-card.component';
import { GloomhavenAvatarComponent } from "./gloomhaven-avatar/gloomhaven-avatar.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent
  ],
  exports: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent
  ]
})
export class GloomhavenPartyComponentsModule {}
