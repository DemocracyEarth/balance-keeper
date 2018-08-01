const MongoClient = require('mongodb').MongoClient;
const data = require('./data');
const config = require('../../config/config.js');

load();

async function load() {
  const client = await MongoClient.connect(config.mongo.url, { useNewUrlParser: true });

  const db = client.db(config.mongo.name);
  const collections = await db.collections();
  if (collections.map(c => c.s.name).includes('users')) {
    await db.collection('users').drop();
  }
  await db.collection('users').insertMany(data);

  if (client) {
    client.close();
  }
}
