import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports:[
    HttpClientModule
  ]
})
export class MatIconRegistryModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "map",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/map-icon.svg")
    ).addSvgIcon(
      "reputation",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/fame-icon.svg")
    ).addSvgIcon(
      "prosperity",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/diamond-icon.svg")
    ).addSvgIcon(
      "experience",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/experience-icon.svg")
    ).addSvgIcon(
      "treasure",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/treasure-icon.svg")
    ).addSvgIcon(
      "level",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/icons/level-icon.svg")
    );
  }
}
