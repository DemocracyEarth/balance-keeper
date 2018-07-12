const MongoClient = require('mongodb').MongoClient;
const dataExpected = require('./expected');

checkData();

async function checkData() {
  let dataLoaded = false;
  let dataValid = true;
  let valid = [];
  let invalid = [];
  
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = client.db('test');
  const collections = await db.collections();
  
  if (collections.map(c => c.s.name).includes('users')) {
    dataLoaded = true;
    
    const cursor = db.collection('users').find({'profile.wallet.externalToken': true});
    for (let user = await cursor.next(); user != null; user = await cursor.next()) {
      const result = dataExpected.find(u => u.seq === user.seq);
      
      if ( result &&
        result.profile.wallet.balance === user.profile.wallet.balance &&
        result.profile.wallet.placed === user.profile.wallet.placed &&
        result.profile.wallet.available === user.profile.wallet.available
      ) {
        valid.push(user);
      } else {
        invalid.push(user);
        dataValid = false;
      }
    }
  }

  if (dataLoaded && dataValid && invalid.length === 0 && valid.length === dataExpected.length-1) {
    console.log("user data after check process is valid")
  } else if (dataLoaded && !dataValid) {
    console.log("user data after check process is invalid", invalid);
  } else {
    console.log("user data is not loaded");
  }

  if (client) {
    client.close();
  }
}