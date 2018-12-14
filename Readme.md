
# babysitter_kata

## Background
This kata simulates a babysitter working and getting paid for one night.

## Feature
*As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>*

## Requirements:
The babysitter:
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from child's bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)

## Technical Constraints
- You cannot use any type objects.  Must use strings or integers
# Tests

To run from command-line: yarn mocha-test
- `yarn test-mocha`

    ![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/console-run-tests.png)

### IntelliJ GUI Test runner Config

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r src/test/test.config.js --recursive src/test -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)
