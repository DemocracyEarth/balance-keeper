const expect = require('chai').expect;
const ETH = require('../main');
const addresses = require('./addresses');
const bigNumber = require('bignumber.js');

describe('ETH', () => {
	let eth;

  before(done => {
    eth = new ETH();
    console.log('ETH class initialized');
    done();
  });

	describe('getETHBalance', () => {
		it('should get ETH balance for valid address', done => {
			eth.getETHBalance(addresses['ETH'].positive).then(balance => {
				const balanceBN = new bigNumber(balance);
				expect(balance).to.be.a.string;
				expect(balanceBN.c[0]).to.be.above(0);
				done();
			});
		});

		it('should return getETHBalance error for invalid address', done => {
			eth.getETHBalance('0xabc').catch(error => {
				expect(error.error).to.equal('getETHBalance');
				done();
			});
		});

		it('should return 0 balance for address with no ETH', done => {
			eth.getETHBalance(addresses['ETH'].empty).then(balance => {
				expect(balance).to.be.a.string;
				expect(balance).to.be.equal('0');
				done();
			});
		});
	});

	describe('getERC20Balance', () => {
		it('should return getERC20Balance error for invalid address', done => {
			eth.getERC20Balance('MANA','0x123').catch(error => {
				expect(error.error).to.equal('getERC20Balance');
				done();
			});
		});

		describe('MANA', () => {
			it('should get MANA balance from valid address', done => {
				eth.getERC20Balance('MANA', addresses['MANA'].positive).then(balance => {
					const balanceBN = new bigNumber(balance);
					expect(balance).to.be.a.string;
					expect(balanceBN.c[0]).to.be.above(0);	
					done();
				});
			});
			it('should return 0 balance for address with no MANA', done => {
				eth.getERC20Balance('MANA', addresses['MANA'].empty).then(balance => {
					expect(balance).to.be.a.string;
					expect(balance).to.be.equal('0');
					done();
				});
			});
		});

		describe('ANT', () => {
			it('should get ANT balance from valid address', done => {
				eth.getERC20Balance('ANT', addresses['ANT'].positive).then(balance => {
					const balanceBN = new bigNumber(balance);
					expect(balance).to.be.a.string;
					expect(balanceBN.c[0]).to.be.above(0);	
					done();
				});
			});
			it('should return 0 balance for address with no MANA', done => {
				eth.getERC20Balance('ANT', addresses['ANT'].empty).then(balance => {
					expect(balance).to.be.a.string;
					expect(balance).to.be.equal('0');
					done();
				});
			});
		});
	});
});
