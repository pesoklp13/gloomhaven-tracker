import { LinkedList } from "@gloomhaven-tracker/common-library";

export interface GloomhavenPersonalQuest {
  name: string;
}

export interface GloomhavenPerk {
  name: string;
}

export interface GloomhavenAttackModifier {
  description: string;
}

export enum GloomhavenItemConsumptionEnum {
  NONE = 'none',
  CONSUME = 'consume',
  SPENT = 'spent'
}

export enum GloomhavenItemTypeEnum {
  HEAD = 'head',
  BODY = 'body',
  LEGS = 'legs',
  ONE_HAND = 'one_hand',
  TWO_HANDS = 'two_hands',
  SMALL_ITEM = 'small_item'
}

export interface GloomhavenItemEffect {
  description: string;
}

export interface GloomhavenItem {
  name: string;
  price: number;
  type: GloomhavenItemTypeEnum;
  consumption: GloomhavenItemConsumptionEnum;
  effect: GloomhavenItemEffect;
  /**
   * represents times item can be used before consumption effect takes its place
   */
  charges: number;
  attackModifiers: Array<GloomhavenAttackModifier>;
}

/**
 * status such a poison, etc.
 */
export interface GloomhavenStatus {
  name: string;
}

export enum GloomhavenCharacterName {
  Brute = "Brute",
  Cragheart = "Cragheart",
  Mindthief = "Mindthief",
  Scoundrel = "Scoundrel",
  Spellweaver = "Spellweaver",
  Tinkerer = "Tinkerer"
}

export enum GloomhavenCharacterAvatar {
  Brute = "/avatar/brute.jpg",
  Cragheart = "/avatar/cragheart.jpg",
  Mindthief = "/avatar/mindthief.jpg",
  Scoundrel = "/avatar/scoundrel.jpg",
  Spellweaver = "/avatar/spellweaver.jpg",
  Tinkerer = "/avatar/tinkerer.jpg"
}

// TODO@pesok add cards for character
//  add battle cards
//  perk list
export interface GloomhavenCharacterClass {
  name: GloomhavenCharacterName;
}

export class BruteClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Brute;
}

export class CragheartClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Cragheart;
}

export class MindthiefClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Mindthief;
}

export class ScoundrelClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Scoundrel;
}

export class SpellweaverClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Spellweaver;
}

export class TinkererClass implements GloomhavenCharacterClass {
  name = GloomhavenCharacterName.Tinkerer;
}

/**
 * Representation of the Character Sheet
 */
export interface GloomhavenCharacter {
  name: string;
  type: GloomhavenCharacterClass;
  level: number;
  exp: number;
  gold: number;
  items?: Array<GloomhavenItem>;
  notes?: string;
  checks?: number;
  perks?: Array<GloomhavenPerk>;
  personalQuest?: GloomhavenPersonalQuest;
  handSize?: number;
  health?: number;
}

export interface GloomhavenPartyAchievement {
  name: string;
}

export interface GloomhavenGlobalAchievement {
  name: string;
}

export interface GloomhavenScenarioRewardEffect {
  name: string;
}

export interface GloomhavenScenarioReward {
  description: string;
  effect: GloomhavenScenarioRewardEffect;
}

export interface GloomhavenScenario {
  name: string;
  /**
   * linked scenarios for which road event is not resolved
   */
  linkedScenarios?: Array<GloomhavenScenario>;
  /**
   * scenarios opened after completion of this scenario
   */
  openScenarios?: Array<GloomhavenScenario>;
  partyAchievement?: GloomhavenPartyAchievement;
}

export interface GloomhavenProsperity {
  value: number;
}

export enum GloomhavenEventDecisionEnum {
  A = 'A',
  B = 'B'
}

export interface GloomhavenEventEffect {
  description: string;
}

export enum GloomhavenEventResolutionEnum {
  REMOVE = 'remove',
  RETURN_TO_BOTTOM = 'remove_to_bottom'
}

export interface GloomhavenEventDecision {
  description: string;
  /**
   * corresponding outcome text of event card
   */
  decision: string;
  effects: Array<GloomhavenEventEffect>;
  resolution: GloomhavenEventResolutionEnum;
}

export interface GloomhavenEvent {
  introduction: string;
  decisions: Map<GloomhavenEventDecisionEnum, GloomhavenEventDecision>;
  /**
   * number of event card representation
   */
  trackNumber: number;
}

// tslint:disable-next-line:no-empty-interface
export interface GloomhavenCityEvent extends GloomhavenEvent {

}

// tslint:disable-next-line:no-empty-interface
export interface GloomhavenRoadEvent extends GloomhavenEvent {

}

export interface GloomhavenScenarioResult {
  scenarioRef: GloomhavenScenario;
  /**
   * immutable party reference of original party state
   */
  party: GloomhavenParty;
}

/**
 * representation of the Party Sheet
 */
export interface GloomhavenParty {
  /**
   * Precomputed level of party
   */
  level: number;
  name: string;
  location?: GloomhavenScenario;
  notes?: string;
  achievements?: Array<GloomhavenPartyAchievement>;
  reputation: number;
  members: Array<GloomhavenCharacter>;
  prosperity: number;
}

export interface GloomhavenCampaign extends GloomhavenParty {
  availableScenarios: Array<GloomhavenScenario>;
  story: LinkedList<GloomhavenScenarioResult | GloomhavenCityEvent | GloomhavenRoadEvent>;
  globalAchievements: Array<GloomhavenGlobalAchievement>
}

export interface Gloomhaven {
  parties: Array<GloomhavenParty>;
  prosperity: number;
  globalAchievements: Array<GloomhavenGlobalAchievement>;
  merchant: Map<string, GloomhavenItem>;
}
