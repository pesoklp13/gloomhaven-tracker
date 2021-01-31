import {GloomhavenCharacter, GloomhavenCharacterName} from "./character/character.model";

// TODO@pesok add cards for character
//  add battle cards
//  perk list
export class BruteClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Brute;
}

export class CragheartClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Cragheart;
}

export class MindthiefClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Mindthief;
}

export class ScoundrelClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Scoundrel;
}

export class SpellweaverClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Spellweaver;
}

export class TinkererClass implements GloomhavenCharacter {
  name = GloomhavenCharacterName.Tinkerer;
}
