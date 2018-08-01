'use strict';

const env = process.env.NODE_ENV || 'local'; // 'local', 'testnet' or 'mainnet'

const addressesList = {
  ETH: {
    positive: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98' // Bittrex  
    },
    empty: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0x4c1fb0F42d86E83C8bb0Ac5528e65D34109A0082'
    }
  },
  MANA: {
    positive: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98' // Bittrex  
    },
    empty: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0x34718f3bf4e2C513C370D9f766E83Fd75ebb0Ce3'
    }
  },
  ANT: {
    positive: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98' // Bittrex  
    },
    empty: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xf8bd08e90c77f540dd4cd17e32be039f027a2074'
    }
  },
  GNO: {
    positive: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98' // Bittrex  
    },
    empty: {
      local: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      testnet: '0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD',
      mainnet: '0xf8bd08e90c77f540dd4cd17e32be039f027a2074'
    }
  },
  RHOC: {
    positive: {
      local: 'localAddressWithCredit',
      testnet: 'testnetAddressWithCredit',
      mainnet: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98' // Bittrex  
    },
    empty: {
      local: 'localAddressWithoutCredit',
      testnet: 'testnetAddressWithoutCredit',
      mainnet: 'mainnetAddressWithoutCredit'
    }
  },
  AE: {
    positive: {
      local: 'localAddressWithCredit',
      testnet: 'testnetAddressWithCredit',
      mainnet: '0x34718f3bf4e2C513C370D9f766E83Fd75ebb0Ce3' // Bittrex  
    },
    empty: {
      local: 'localAddressWithoutCredit',
      testnet: 'testnetAddressWithoutCredit',
      mainnet: 'mainnetAddressWithoutCredit'
    }
  }
};

let addresses = {};
Object.keys(addressesList).forEach(token => {
  addresses[token] = {};
  addresses[token].positive = addressesList[token].positive[env];
  addresses[token].empty = addressesList[token].empty[env];
});

module.exports = addresses;
