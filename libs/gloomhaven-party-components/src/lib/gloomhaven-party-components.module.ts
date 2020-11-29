import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties/gloomhaven-parties.component";
import { MaterialModule } from "@gloomhaven-tracker/common-components";
import { GloomhavenPartyCardComponent } from './gloomhaven-party-card/gloomhaven-party-card.component';
import { GloomhavenAvatarComponent } from "./gloomhaven-avatar/gloomhaven-avatar.component";
import { GloomhavenPartySelectorComponent } from "./gloomhaven-party-selector/gloomhaven-party-selector.component";
import { DeletePartyDialogComponent } from "./gloomhaven-parties/modal/delete-party-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent,
    GloomhavenPartySelectorComponent,
    DeletePartyDialogComponent
  ],
  exports: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent,
    GloomhavenPartySelectorComponent
  ]
})
export class GloomhavenPartyComponentsModule {}
