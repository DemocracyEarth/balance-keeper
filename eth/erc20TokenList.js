'use strict';

const env = process.env.NODE_ENV || 'local'; // 'local', 'testnet' or 'mainnet'

const tokenList = {
  MANA: {
    desc: 'Decentraland',
    contract: {
      local: '0x0000000000000000000000000000000000000001',
      testnet: '0x0000000000000000000000000000000000000001',
      mainnet: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    },
    decimals: 18
  },
  GNO: {
    desc: 'Gnosis',
    contract: {
      local: '0x0000000000000000000000000000000000000002',
      testnet: '0x0000000000000000000000000000000000000002',
      mainnet: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
    },
    decimals: 18
  },
  ANT: {
    desc: 'Aragon',
    contract: {
      local: '0x0000000000000000000000000000000000000003',
      testnet: '0x0000000000000000000000000000000000000003',
      mainnet: '0x960b236A07cf122663c4303350609A66A7B288C0',
    },
    decimals: 18
  },
  RHOC: {
    desc: 'RChain',
    contract: {
      local: '0x0000000000000000000000000000000000000004',
      testnet: '0x0000000000000000000000000000000000000004',
      mainnet: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
    },
    decimals: 8
  }
};

Object.keys(tokenList).forEach(token => {
  tokenList[token].contract = tokenList[token].contract[env];
});

module.exports = tokenList;
