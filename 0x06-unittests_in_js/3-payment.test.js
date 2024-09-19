const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM and totalAmount, totalShipping', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;  // Make sure the spy was called once
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;  // Check the arguments
  });
});
