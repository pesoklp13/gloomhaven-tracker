#!/usr/bin/env node

import * as fs from "fs";
import * as Readline from "readline";

const Reset = "\x1b[0m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";

const BLACKLISTED_WORDS = [
  "added", "adds", "adding",
  "affixed", "affixes", "affixing",
  "adjusted", "adjusts", "adjusting",
  "amended", "amends", "amending",
  "avoided", "avoids", "avoiding",
  "bumped", "bumps", "bumping",
  "changed", "changes", "changing",
  "checked", "checks", "checking",
  "committed", "commits", "committing",
  "copied", "copies", "copying",
  "corrected", "corrects", "correcting",
  "created", "creates", "creating",
  "decreased", "decreases", "decreasing",
  "deleted", "deletes", "deleting",
  "disabled", "disables", "disabling",
  "dropped", "drops", "dropping",
  "duplicated", "duplicates", "duplicating",
  "enabled", "enables", "enabling",
  "enhanced", "enhances", "enhancing",
  "excluded", "excludes", "excluding",
  "extracted", "extracts", "extracting",
  "fixed", "fixes", "fixing",
  "handled", "handles", "handling",
  "implemented", "implements", "implementing",
  "improved", "improves", "improving",
  "included", "includes", "including",
  "increased", "increases", "increasing",
  "installed", "installs", "installing",
  "introduced", "introduces", "introducing",
  "leased", "leases", "leasing",
  "managed", "manages", "managing",
  "merged", "merges", "merging",
  "moved", "moves", "moving",
  "normalised", "normalises", "normalising",
  "normalized", "normalizes", "normalizing",
  "passed", "passes", "passing",
  "pointed", "points", "pointing",
  "pruned", "prunes", "pruning",
  "ran", "runs", "running",
  "refactored", "refactors", "refactoring",
  "released", "releases", "releasing",
  "removed", "removes", "removing",
  "renamed", "renames", "renaming",
  "replaced", "replaces", "replacing",
  "resolved", "resolves", "resolving",
  "reverted", "reverts", "reverting",
  "sets", "setting",
  "showed", "shows", "showing",
  "swapped", "swaps", "swapping",
  "tested", "tests", "testing",
  "tidied", "tidies", "tidying",
  "updated", "updates", "updating",
  "upped", "ups", "upping",
  "used", "uses", "using"
].reduce((map: Record<string, boolean>, blacklistedWord: string) => {
  map[blacklistedWord] = true;

  return map;
}, {} as Record<string, boolean>);

type SubjectValidator = (subject: string, next?: (subject: string) => boolean) => boolean;

class SubjectValidatorHandler {
  private validators: Array<SubjectValidator> = [];

  register(validator: SubjectValidator) {
    this.validators.push(validator);

    return this;
  }

  public validate(subject: string) {
    this.validators = this.validators.map((validator, index) => subject => {
      return validator(subject, this.validators[index + 1]);
    });

    const result = this.validators[0](subject);

    if (!result) {
      process.exit(1);
    }
  }
}

const subjectValidatorHandler = new SubjectValidatorHandler();
subjectValidatorHandler.register((subject, next) => {
    const match = subject.match(/#[\d]\s(?<subject>.*)/) as any;

    if (!match?.groups.subject) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 9 violation: Subject has to start with #<issue> <subject>");

      return false;
    }

    return next(match.groups.subject);
  }
).register(
  (subject, next) => {
    if (subject.length > 50) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 3 violation: Subject limit is 50 characters");

      return false;
    }

    return next(subject);
  }
).register(
  (subject, next) => {
    const firstCharacter = subject.charAt(0);

    if (firstCharacter !== firstCharacter.toUpperCase()) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 2 violation: Subject line has to be capitalized");
      console.log(`${FgGreen}Use %s${Reset} instead of ${FgMagenta}%s${Reset}\n`,
        `${firstCharacter.toUpperCase()}${subject.slice(1)}`,
        subject
      );

      return false;
    }

    return next(subject);
  }
).register(
  (subject, next) => {
    if (subject.charAt(subject.length - 1) === ".") {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 4 violation: Subject line must not end by period");
      console.log(`${FgGreen}Use %s${Reset} instead of ${FgMagenta}%s${Reset}\n`,
        `${subject.slice(0, -1)}`,
        subject
      );

      return false;
    }

    return next(subject);
  }
).register(
  (subject, next) => {
    if (subject.match(/\S+/g).length < 2) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 7 violation: Subject line has to have more then one word");

      return false;
    }

    return next(subject);
  }
).register(
  (subject, next) => {
    if (subject.trimLeft().length !== subject.length) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 8 violation: Subject line must not start with whitespace");

      return false;
    }

    return next(subject);
  }
).register(
  (subject) => {
    const verb = subject.trim().split(" ")[0].toLowerCase();

    const result = !(!!BLACKLISTED_WORDS[verb]);

    if(!result) {
      console.error(`${FgRed}%s${Reset}\n`, "Rule 5 violation: Subject line must be in imperative mood");
    }

    return result;
  }
);

console.log(`${FgBlue}%s\n\n${FgYellow}\t%s\n\t%s\n\t%s\n\t%s\n\t%s\n\t%s\n\t%s\n\t%s\n\t%s\n\n${FgBlue}%s\n\n${FgGreen}%s\n\n%s\n%s\n\n${Reset}`,
  "Validating git commit message to follow rules:",
  "1. Separate subject from body with a blank line",
  "2. Limit the subject line to 50 characters",
  "3. Capitalize the subject line",
  "4. Do not end the subject line with a period",
  "5. Use the imperative mood in the subject line",
  "6. Wrap the body at 72 characters",
  "7. Do no write single worded or empty commits",
  "8. Do not start the subject line with whitespace",
  "9. Subject starts with #<issue> <subject>",
  "Example of commit message:",
  "#13 Implement fancy feature",
  "* Update contract for consumer",
  "* Provide new service"
);

const commitMessageFile = process.argv[3];

const reader = Readline.createInterface({
  input: fs.createReadStream(commitMessageFile, "utf8")
});

const listenersFactory = () => {
  let lineNumber = 0;

  return {
    lineListener: (line: string) => {
      switch (lineNumber) {
        case 0:
          // subject
          subjectValidatorHandler.validate(line);
          break;
        case 1:
          // empty line
          if (line.length > 0) {
            console.error(`${FgRed}%s${Reset}\n`, "Rule 1 violation: Please separate commit subject and body with empty line");
            process.exit(1);
          }

          break;
        default:
          // body
          if (line.length > 72) {
            console.error(`${FgRed}%s${Reset}\n`, "Rule 7 violation: Body line can have at most 72 characters");
            process.exit(1);
          }
      }

      lineNumber++;
    },
    closeListener: () => {
      if (lineNumber < 3) {
        console.error(`${FgRed}%s${Reset}\n`, "Commit format violation: Use the proper format for commit message");
        process.exit(1);
      }

      console.log(`\n${FgGreen}%s${Reset}\n`, "Commit accepted");
    }
  };
};

const { lineListener, closeListener } = listenersFactory();


reader.on("line", lineListener);
reader.on("close", closeListener);
