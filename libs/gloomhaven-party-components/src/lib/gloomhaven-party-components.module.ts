import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GloomhavenPartiesComponent} from "./gloomhaven-parties/gloomhaven-parties.component";
import {MaterialModule} from "@gloomhaven-tracker/common-components";
import {GloomhavenAvatarComponent} from "./gloomhaven-avatar/gloomhaven-avatar.component";
import {GloomhavenPartySelectorComponent} from "./gloomhaven-party-selector/gloomhaven-party-selector.component";
import {DeletePartyDialogComponent} from "./gloomhaven-parties/modal/delete-party-dialog.component";
import {GloomhavenPartySummaryComponent} from "./gloomhaven-party-summary/gloomhaven-party-summary.component";
import {PersistenceModule} from "@gloomhaven-tracker/persistence";
import {AddPartyDialogComponent} from "./gloomhaven-party-selector/modal/add-party-dialog.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PersistenceModule,
    FormsModule
  ],
  declarations: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartySelectorComponent,
    GloomhavenPartySummaryComponent,
    DeletePartyDialogComponent,
    AddPartyDialogComponent
  ],
  exports: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent,
    GloomhavenPartySelectorComponent,
    GloomhavenPartySummaryComponent
  ]
})
export class GloomhavenPartyComponentsModule {}
