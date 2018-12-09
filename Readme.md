
# NodeJS Kata Scaffolding
Use this to start a project very quickly such as a kata where you do not
need anything fancy but just babel and ability to run tests and run JS and Node

# Contents
 Configured for:
 - Babel 7
 - Mocha
 - Jest
 - eslint - [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) (for projects without React) & my own custom tweaks
   - For initial package.json setup, you can run `npx install-peerdeps --dev eslint-config-airbnb-base` to install all of peer dependencies needed for `eslint-config-airbnb-base`
     - *OR* install each peer dependency manually by running npm info "eslint-config-airbnb-base@latest" peerDependencies to list the peer dependencies and versions, then run yarn add --dev <dependency>@<version> for each listed peer dependency

# Tests

To run from command-line: yarn mocha-test
- `yarn test-mocha`
- `yarn test-jest` - _comming soon_

### IntelliJ GUI Test runner Config

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r src/test/test.config.js --recursive src/test -w`

### jest
_coming soon_
