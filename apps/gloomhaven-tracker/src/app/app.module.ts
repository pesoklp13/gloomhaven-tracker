import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GloomhavenPartyComponentsModule } from "@gloomhaven-tracker/gloomhaven-party-components";
import { MaterialModule, MatIconRegistryModule } from "@gloomhaven-tracker/common-components";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  BruteClass, CragheartClass,
  GloomhavenParty,
  MindthiefClass,
  PARTY_SERVICE_TOKEN,
  ScoundrelClass, SpellweaverClass, TinkererClass
} from "@gloomhaven-tracker/api-interfaces";
import { Observable, of } from "rxjs";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GloomhavenPartyComponentsModule,
    MatIconRegistryModule
  ],
  providers: [
    { provide: PARTY_SERVICE_TOKEN, useValue: { // TODO@pesok use concrete service implementation
      getParties(): Observable<Array<GloomhavenParty>> {
        return of([
          {
            name: "test party 1",
            reputation: 0,
            prosperity: 0,
            level: 1,
            members: [
              {
                name: 'member1',
                exp: 0,
                gold: 0,
                level: 1,
                type: new BruteClass()
              },
              {
                name: 'member2',
                exp: 0,
                gold: 0,
                level: 1,
                type: new CragheartClass()
              }
            ]
          },
          {
            name: "test party 2",
            reputation: 0,
            prosperity: 0,
            level: 1,
            members: [
              {
                name: 'member1',
                exp: 0,
                gold: 0,
                level: 1,
                type: new SpellweaverClass()
              },
              {
                name: 'member2',
                exp: 0,
                gold: 0,
                level: 1,
                type: new CragheartClass()
              }
            ]
          },
          {
            name: "test party 3",
            reputation: 0,
            prosperity: 0,
            level: 1,
            members: [
              {
                name: 'member1',
                exp: 0,
                gold: 0,
                level: 1,
                type: new BruteClass()
              },
              {
                name: 'member2',
                exp: 0,
                gold: 0,
                level: 1,
                type: new ScoundrelClass()
              },
              {
                name: 'member3',
                exp: 0,
                gold: 0,
                level: 1,
                type: new MindthiefClass()
              },
              {
                name: 'member4',
                exp: 0,
                gold: 0,
                level: 1,
                type: new TinkererClass()
              }
            ]
          }
        ]);
      }
      }}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
