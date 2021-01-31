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

export interface GloomhavenCharacter {
  name: GloomhavenCharacterName;
}
