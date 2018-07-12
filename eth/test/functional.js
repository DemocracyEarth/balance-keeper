const expect = require('chai').expect;
const eth = require('../main');

describe('ETH', () => {
	describe('getETHBalance', () => {
		it('should get balance for valid address', done => {
			eth.getETHBalance('0x9D4e856E572E442f0A4b2763e72d08A0E99D8deD').then(balance => {
				expect(balance).to.be.a.string;
				done();
			});
		});

		it('should return error for invalid address', done => {
			try {
				eth.getETHBalance('0xabc').then(balance => {
					expect(balance).to.be.a.string;
				});
			} catch (error) {
				expect(error.message).to.include('the capitalization checksum test failed');
				done();
			}
		});
	});
});