'use strict';

/**
 * Main file to interact with ETH node.
 * Functions:
 * - getETHBalance
 * - getERC20Balance
 */

const config = require('../config/config');
const Web3 = require('web3');
const erc20TokenList = require('./erc20TokenList');
const erc20ABI = require('./erc20ABI');

class eth {
  constructor(){
    this.web3 = new Web3(new Web3.providers.HttpProvider(config.network));
    Object.keys(erc20TokenList).forEach(token => {
      console.log('token', token);
      // web3 version 1.*
      this[token] = new this.web3.eth.Contract(erc20ABI, erc20TokenList[token].contract);
      //this.token[token] = new this.web3.eth.contract(erc20ABI).at(erc20TokenList[token].contract);
    });
  }

  getETHBalance (walletAddress) {
    try {
      return this.web3.eth.getBalance(walletAddress);
    } catch (e) {
      return new Promise((res, rej) => rej({error: 'getETHBalance'}));
    }
  }
  
  getERC20Balance (token, address) {
    try {
      return this[token].methods.balanceOf(address).call();
    } catch (e) {
      return new Promise((res, rej) => rej({error: 'getERC20Balance'}));
    }
  }
}

module.exports = eth;