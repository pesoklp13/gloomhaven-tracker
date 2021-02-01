import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UUIDService} from './uuid/uuid.service';

@NgModule({
  imports: [CommonModule],
  providers: [UUIDService]
})
export class CommonServicesModule {}
