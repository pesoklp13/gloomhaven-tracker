import { GloomhavenPartiesComponent } from "./gloomhaven-parties.component";
import { MatCardModule } from "@angular/material/card";
// tslint:disable-next-line:nx-enforce-module-boundaries
import {
  BruteClass,
  CragheartClass,
  MindthiefClass,
  ScoundrelClass,
  SpellweaverClass,
  TinkererClass
} from "../../../../api-interfaces/src";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
// tslint:disable-next-line:nx-enforce-module-boundaries
import { MatIconRegistryModule } from "../../../../common-components/src";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GloomhavenAvatarComponent } from "../gloomhaven-avatar/gloomhaven-avatar.component";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "GloomhavenPartiesComponent",
  component: GloomhavenPartiesComponent,
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

const moduleMetadata = {
  declarations: [
    GloomhavenAvatarComponent,
    GloomhavenPartiesComponent
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
};

export const NoParties = () => ({
  moduleMetadata,
  component: GloomhavenPartiesComponent,
  template: `<ght-parties [parties]="parties"></ght-parties>`,
  props: {
    parties: []
  }
});

export const ThreeParties = () => ({
  moduleMetadata,
  component: GloomhavenPartiesComponent,
  template: `<ght-parties [parties]="parties"></ght-parties>`,
  props: {
    parties: [
      {
        name: "test party 1",
        reputation: 0,
        prosperity: 0,
        level: 1,
        members: [
          {
            name: "member1",
            exp: 0,
            gold: 0,
            level: 1,
            type: new BruteClass()
          },
          {
            name: "member2",
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
            name: "member1",
            exp: 0,
            gold: 0,
            level: 1,
            type: new SpellweaverClass()
          },
          {
            name: "member2",
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
            name: "member1",
            exp: 0,
            gold: 0,
            level: 1,
            type: new BruteClass()
          },
          {
            name: "member2",
            exp: 0,
            gold: 0,
            level: 1,
            type: new ScoundrelClass()
          },
          {
            name: "member3",
            exp: 0,
            gold: 0,
            level: 1,
            type: new MindthiefClass()
          },
          {
            name: "member4",
            exp: 0,
            gold: 0,
            level: 1,
            type: new TinkererClass()
          }
        ]
      }
    ]
  }
});
