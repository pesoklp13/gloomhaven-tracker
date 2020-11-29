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
import { MatDialogModule } from "@angular/material/dialog";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  // tslint:disable-next-line:component-selector
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
    MatTooltipModule,
    MatDialogModule,
    A11yModule
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
    MatMockIconComponent,
    MatDialogModule,
    A11yModule
  ]
})
export class MaterialMockModule {

}

it('', () => {

});
