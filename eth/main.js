'use strict';

/**
 * Main file to interact with ETH node.
 * Functions:
 * - getBalance
 */

const config = require('../config/config');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(config.network));

const getETHBalance = (walletAddress) => {
  return web3.eth.getBalance(walletAddress);
}

module.exports = {
  getETHBalance
};