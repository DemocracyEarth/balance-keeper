'use strict';

/** 
 * Config file.
 * Use: `export NODE_ENV=testnet` to set testnet configuration
 */

const env = process.env.NODE_ENV || 'local'; // 'local', 'testnet' or 'mainnet'

const local = {
  env: 'local',
  network:'https://ropsten.infura.io/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    name: process.env.MONGO_NAME || 'test'
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
  network: process.env.NETWORK || 'https://democracy.earth.eth.node/',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    name: process.env.MONGO_NAME || 'test'
  }
};

const config = {
 local,
 testnet,
 mainnet
};

module.exports = config[env];
