'use strict';

/**
 * Daemon program to update mongodb balances based on eth balances
 * 
*/

const eth = require('./eth/main.js');
const Database = require('./db/main.js');
const {votePower} = require('./utils');

// run inside timeout
adjustBalance();

async function adjustBalance() {

  const db = await new Database();

  const cursor = db.getUsers();

  for (let user = await cursor.next(); user != null; user = await cursor.next()) {
    var ethBalance = await eth.getETHBalance(user.profile.wallet.address[0].hash);
    var userVotePower = votePower(ethBalance)
  
    console.log(`user ${JSON.stringify(user)} - ethBalance: ${ethBalance} - vote power: ${userVotePower}`);

    if (userVotePower != user.profile.wallet.balance){
      if (userVotePower > user.profile.wallet.balance) {
        console.log("[1] update user balance");
        db.updateUserBalance(user, userVotePower);
      } else {
        if (userVotePower > user.profile.wallet.placed) {
          console.log("[1] update user balance");
          db.updateUserBalance(user, userVotePower);
        } else {
          console.log("[2] update user balance and reallocate");
          db.updateUserBalanceReallocate(user, userVotePower);
        }
      }
    }
  }

  if (db.ready) {
    db.close();
  }
}