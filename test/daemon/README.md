# Test Daemon

In order to test the daemon, you should perform the following steps:

0. run `npm install` if you haven't yet.

1. run `node test/daemon/load.js` to set the mongoDB database.

2. run `npm start` to execute the main program.

3. run `node test/daemon/validate.js` to validate data after execution.