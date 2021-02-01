import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageModule} from '@ngx-pwa/local-storage';
import {PartyStorageService} from './party-storage.service';
import {CommonServicesModule} from '@gloomhaven-tracker/common-services';

@NgModule({
  imports: [
    CommonModule,
    StorageModule,
    CommonServicesModule
  ],
  providers: [
    PartyStorageService
  ]
})
export class PersistenceModule {}
