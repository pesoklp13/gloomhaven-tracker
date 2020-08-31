import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './material/material.module';
export * from './material/mat-icon-registry.module';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CommonComponentsModule {}
