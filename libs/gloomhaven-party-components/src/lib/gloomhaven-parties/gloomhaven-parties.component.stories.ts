import { GloomhavenPartiesComponent } from "./gloomhaven-parties.component";
import { MatCardModule } from "@angular/material/card";
import {
  BruteClass,
  CragheartClass,
  GloomhavenParty, MindthiefClass,
  PARTY_SERVICE_TOKEN,
  PartyService, ScoundrelClass, SpellweaverClass, TinkererClass
} from "../../../../api-interfaces/src";
import { Observable, of } from "rxjs";
import { GloomhavenPartyCardComponent } from "../gloomhaven-party-card/gloomhaven-party-card.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconRegistryModule } from "../../../../common-components/src";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";

export default {
  title: "GloomhavenPartiesComponent",
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark", value: "#a59a93"
        }
      ]
    }
  }
};

const getPartyServiceInstance = (storyName: string): PartyService => {
  let data = [];

  if (storyName === "Three Parties")
    data = [
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
    ];

  return {

    getParties(): Observable<Array<GloomhavenParty>> {
      return of(data);
    }

  };
};

const Template = (args: GloomhavenPartiesComponent & { name: string }) => {
  return {
    moduleMetadata: {
      declarations: [
        GloomhavenAvatarComponent,
        GloomhavenPartyCardComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatBadgeModule,
        MatIconModule,
        MatDividerModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconRegistryModule
      ],
      providers: [
        { provide: PARTY_SERVICE_TOKEN, useValue: getPartyServiceInstance(args.name) }
      ]
    },
    component: GloomhavenPartiesComponent,
    props: args
  };
};

export const NoParties = Template.bind({});
export const ThreeParties = Template.bind({});
