# Contributing

## Prerequisites

* `Node` version `>=10.9.0 <13.0.0`
* `Yarn` version `>=1.22.4 <2`
* `Nx cli` version `^10.0.12`
* `Angular cli` version `~10.0.0`

## Quickstart

Install dependencies:

```
❯ yarn
```

Run application:

```
❯ nx serve gloomhaven-tracker
```

Run tests:

```
❯ nx affected:test
```

Run E2E tests:

```
❯ nx affected:e2e
```

Run story book for specific project:

```
❯ nx run <project>:storybook
```

---

**NOTE**

To get more information about how to work with storybook let's see [storybook documentation][storybook] for Nx.

---

Run a specific task for specific project

```
❯ nx run <project>:<task>
```

---

**NOTE**

For more information about which tasks are available see [nx cli][nx-cli].

---

## Development

### Gloomhaven-tracker (application)

Entry point of our application is `apps/gloomhaven-tracker`. This module is as small as possible and every feature should be provided there by feature modules.

This module should contain only global available dependencies and imported sub-modules.

### Libraries & sub-modules

Every library and sub-module (feature module) has to be stored under `libs` folder and properly defined withing `nx` workspace in our case `angular.json`

#### api-interfaces

Library used for definition of interfaces, types and models used for communication of our application with backend (NestJS - target)

#### common-library

Library containing common interfaces, types and structures not specifically related to gloomhaven domain. 

This library will mostly be moved into separate repository/ies and used as dependency in the future.

#### common-components

Angular library used for definition of sub-modules containing components not specifically related to gloomhaven domain. (e.g. material components)

This library or its parts will mostly be moved into separate repository/ies and used as dependency in the future.

#### Feature modules

Angular libraries which represents the specific domain of our application, like party, campaign, scenario etc.

These libraries will provide only necessary interface for `gloomhaven-tracker` application, with whole necessary configuration. (e.g. routing, state). 

#### Additional libraries

There may be case we would like to store some definitions used across multiple feature modules and we want to expose them by `api-interfaces`, in this case we will use new library instead.

---

**NOTE**

Keep in mind that additional segmentation of the codebase can lead to lost of visibility and confusion.

For more information read [nx documentation][nx-library].

---

## Publishing your changes

If you want to publish some changes please:
 
* **Create issue** in related project in [repository][issues], so you can track its number in your upcoming PR.
* Make sure your code is valid and checked (lint, test, e2e) - most of this will handle husky hooks.
* Write reasonable and valid commit

### Commit message rules

Please follow these rules:

    1. Separate subject from body with a blank line
    2. Limit the subject line to 50 characters
    3. Capitalize the subject line
    4. Do not end the subject line with a period
    5. Use the imperative mood in the subject line
    6. Wrap the body at 72 characters
    7. Do no write single worded or empty commits
    8. Do not start the subject line with whitespace
    9. Subject starts with #<issue> <subject>

Example of commit message:

    #13 Implement fancy feature

    * Update contract for consumer
    * Provide new service

[storybook]: https://nx.dev/angular/plugins/storybook/overview
[nx-cli]: https://nx.dev/angular/cli/overview
[nx-library]: https://nx.dev/angular/tutorial/08-create-libs
[issues]: https://github.com/pesoklp13/gloomhaven-tracker/issues 
