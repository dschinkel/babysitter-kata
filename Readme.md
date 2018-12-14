
# babysitter_kata

Thanks for reviewing my kata.

# Run instructions:
Clone the repository using 'git clone'.<br>
Verify you are using python 3.6.  For convenience, you may want to install nosetest (pip install nose).<br>
From the 'src' directory, run 'nosetests' and it will run all the tests.<br>
If you don't have nose, you may run tests with 'python babysitter_test.py' and 'python calculator_test.py'<br>

## Background
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward.

## Feature
*As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>*

## Old Requirements:
The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)

# Tests

To run from command-line: yarn mocha-test
- `yarn test-mocha`

    ![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/console-run-tests.png)

- `yarn test-jest` - _comming soon_

### IntelliJ GUI Test runner Config

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r src/test/test.config.js --recursive src/test -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)

### jest
_coming soon_
