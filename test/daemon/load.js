const MongoClient = require('mongodb').MongoClient;
const data = require('./data');

load();

async function load() {
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const db = client.db('test');
  const collections = await db.collections();
  if (collections.map(c => c.s.name).includes('users')) {
    await db.collection('users').drop();
  }
  await db.collection('users').insertMany(data);

  if (client) {
    client.close();
  }
}