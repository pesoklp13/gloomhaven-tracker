import { LinkedList } from "@gloomhaven-tracker/common-library";

export interface GloomhavenPersonalQuest {

}

export interface GloomhavenPerk {

}

export interface GloomhavenAttackModifier {

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

}

/**
 * Representation of the Character Sheet
 */
export interface GloomhavenCharacter {
  name: string;
  level: number;
  exp: number;
  gold: number;
  items: Array<GloomhavenItem>;
  notes: string;
  checks: number;
  perks: Array<GloomhavenPerk>;
  personalQuest: GloomhavenPersonalQuest;
  handSize: number;
  health: number;
}

export interface GloomhavenPartyAchievement {

}

export interface GloomhavenGlobalAchievement {

}

export interface GloomhavenScenarioRewardEffect {

}

export interface GloomhavenScenarioReward {
  description: string;
  effect: GloomhavenScenarioRewardEffect;
}

export interface GloomhavenScenario {
  /**
   * linked scenarios for which road event is not resolved
   */
  linkedScenarios: Array<GloomhavenScenario>;
  /**
   * scenarios opened after completion of this scenario
   */
  openScenarios: Array<GloomhavenScenario>;
  partyAchievement: GloomhavenPartyAchievement;
}

/**
 * representation of the Party Sheet
 */
export interface GloomhavenParty {
  name: string;
  location: GloomhavenScenario;
  notes: string;
  achievements: Array<GloomhavenPartyAchievement>;
  reputation: number;
  members: Array<GloomhavenCharacter>;
}

export interface GloomhavenProsperity {

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

export interface GloomhavenCityEvent extends GloomhavenEvent {

}

export interface GloomhavenRoadEvent extends GloomhavenEvent {

}

export interface GloomhavenScenarioResult {
  scenarioRef: GloomhavenScenario;
  /**
   * immutable party reference of original party state
   */
  party: GloomhavenParty;
}

export interface GloomhavenCampaign {
  party: GloomhavenParty;
  availableScenarios: Array<GloomhavenScenario>;
  story: LinkedList<GloomhavenScenarioResult | GloomhavenCityEvent | GloomhavenRoadEvent>;
  prosperity: GloomhavenProsperity;
  globalAchievements: Array<GloomhavenGlobalAchievement>
}
