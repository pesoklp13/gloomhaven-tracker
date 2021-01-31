import {GloomhavenCharacter} from "../character/character.model";
import {GloomhavenLocation} from "../campaign/campaign.model";

export interface PartyMember {
  name: string;
  character: GloomhavenCharacter;
  level: number;
  exp: number;
  gold: number;
  items?: string[] // TODO@pesok change to items
  notes?: string;
  checks?: number;
  perks?: string[] // TODO@pesok change to perks
  personalQuest?: string // TODO@pesok change to personal quests
  handSize?: number;
  health?: number;
}

export interface GloomhavenParty {
  name: string;
  currentLocation: GloomhavenLocation;
  members: PartyMember[];
  achievements: string[]; // TODO@pesok change to PartyAchievements
  reputation: number;
}
