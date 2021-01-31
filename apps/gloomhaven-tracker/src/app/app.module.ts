import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {GloomhavenPartyComponentsModule} from "@gloomhaven-tracker/gloomhaven-party-components";
import {MaterialModule, MatIconRegistryModule} from "@gloomhaven-tracker/common-components";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GloomhavenPartyComponentsModule,
    MatIconRegistryModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
