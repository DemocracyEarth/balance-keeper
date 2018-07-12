'user strict';

const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config.js');

class db {
  constructor() {
    return (async () => {
      this.client = await MongoClient.connect(config.mongo.url, { useNewUrlParser: true });
      this.db = this.client.db(config.mongo.name);
      this.ready = true;
      return this;
    })();
  }

  ready() {
    return this.ready;
  }

  close() {
    return this.client.close();
  }

  getUsers() {
    return this.db.collection('users').find({'profile.wallet.externalToken': true});
  }

  updateUserBalance(user, userVotePower) {
    this.db.collection('users').update(
      {_id: user._id},
      {$set: {
        "profile.wallet.balance": userVotePower,
        "profile.wallet.available": userVotePower - user.profile.wallet.placed
      } 
    });
  }

  updateUserBalanceReallocate(user, userVotePower) {
    this.db.collection('users').update(
      {_id: user._id},
      {$set: {
        "profile.wallet.balance": userVotePower,
        "profile.wallet.available": 0,
        reallocate: true
      }
    });
  }
}


module.exports = db