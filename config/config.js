'use strict';

/** 
 * Config file.
 * Use: `export NODE_ENV=testnet` to set testnet configuration
 */

// const env = process.env.NODE_ENV || 'local'; // 'local', 'testnet' or 'mainnet'
const env = 'localMeteor'

const local = {
  env: 'local',
  network:'https://ropsten.infura.io/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    name: process.env.MONGO_NAME || 'test'
  }
};

const localMeteor = {
  env: 'local',
  network:'https://ropsten.infura.io/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://127.0.0.1:3001/meteor',
    name: process.env.MONGO_NAME || 'meteor'
  }
};

const testnet = {
  env: 'testnet',
  network: process.env.NETWORK || 'https://ropsten.infura.io/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    name: process.env.MONGO_NAME || 'test'
  }
};

const mainnet = {
  env: 'mainnet',
  network: process.env.NETWORK || 'https://mainnet.infura.io/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    name: process.env.MONGO_NAME || 'test'
  }
};

const config = {
 local,
 localMeteor,
 testnet,
 mainnet
};

module.exports = config[env];
