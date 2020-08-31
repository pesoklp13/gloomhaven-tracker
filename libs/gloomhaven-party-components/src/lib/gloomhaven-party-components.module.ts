import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GloomhavenPartiesComponent } from "./gloomhaven-parties/gloomhaven-parties.component";
import { MaterialModule } from "@gloomhaven-tracker/common-components";
import { GloomhavenPartyCardComponent } from './gloomhaven-party-card/gloomhaven-party-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent
  ],
  exports: [
    GloomhavenPartiesComponent,
    GloomhavenPartyCardComponent
  ]
})
export class GloomhavenPartyComponentsModule {}
