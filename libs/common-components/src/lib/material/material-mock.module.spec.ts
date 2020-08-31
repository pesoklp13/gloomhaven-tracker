import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MatMockIconComponent {
  @Input() svgIcon: any = null;
}

@NgModule({
  declarations: [MatMockIconComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatMockIconComponent
  ]
})
export class MaterialMockModule {

}

it('', () => {

});
