import { MatCardModule } from "@angular/material/card";
import { GloomhavenPartyCardComponent } from "./gloomhaven-party-card.component";
import { object, withKnobs } from "@storybook/addon-knobs";
import {
  BruteClass,
  GloomhavenParty,
  MindthiefClass,
  ScoundrelClass,
  TinkererClass
} from "../../../../api-interfaces/src";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatIconRegistryModule } from "../../../../common-components/src";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";

export default {
  title: "GloomhavenPartyCardComponent",
  component: GloomhavenPartyCardComponent,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark", value: "#a59a93"
        }
      ]
    }
  },
  decorators: [withKnobs]
};

const party: GloomhavenParty = {
  name: 'TestParty',
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
  ],
  location: {
    name: ''
  }
}

export const PartyCard = () =>({
  moduleMetadata: {
    declarations: [
      GloomhavenAvatarComponent
    ],
    imports: [
      BrowserAnimationsModule,
      MatCardModule,
      MatBadgeModule,
      MatIconModule,
      MatDividerModule,
      MatTooltipModule,
      MatIconRegistryModule
    ]
  },
  component: GloomhavenPartyCardComponent,
  props: {
    party: object('party', party)
  }
});
