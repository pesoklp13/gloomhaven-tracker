import {GloomhavenParty} from "../party/party.model";

export interface Gloomhaven {
  achievements: string[]; // TODO@pesok add achievements instead
  prosperity: number; // TODO@pesok add prosperity object instead
}

export interface GloomhavenCampaign {
  uid: string;
  gloomhaven: Gloomhaven;
  party: GloomhavenParty;
}

// TODO@pesok extend when scenario implementation
export interface GloomhavenLocation {
  name: string;
}
