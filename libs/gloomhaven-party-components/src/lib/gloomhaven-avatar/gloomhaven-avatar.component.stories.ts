import { select, withKnobs } from "@storybook/addon-knobs";
import { GloomhavenAvatarComponent } from "./gloomhaven-avatar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { GloomhavenCharacterName } from "../../../../api-interfaces/src";

export default {
  title: "GloomhavenAvatarComponent",
  component: GloomhavenAvatarComponent,
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

export const Avatar = () =>({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatCardModule,
    ]
  },
  component: GloomhavenAvatarComponent,
  props: {
    name: select<GloomhavenCharacterName>("name", GloomhavenCharacterName, GloomhavenCharacterName.Brute)
  }
});

export const ThumbnailAvatar = () =>({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatCardModule,
    ]
  },
  component: GloomhavenAvatarComponent,
  props: {
    name: select<GloomhavenCharacterName>("name", GloomhavenCharacterName, GloomhavenCharacterName.Brute),
    thumbnail: true
  }
});
