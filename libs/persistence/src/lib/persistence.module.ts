import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageModule} from '@ngx-pwa/local-storage';
import {PartyStorageService} from './party-storage.service';

@NgModule({
  imports: [
    CommonModule,
    StorageModule
  ],
  providers: [
    PartyStorageService
  ]
})
export class PersistenceModule {}
