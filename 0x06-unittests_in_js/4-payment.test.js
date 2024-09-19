const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateStub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the calculateNumber method of Utils to always return 10
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to check the output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy to their original methods
    calculateStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log the correct total', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called once with the right arguments
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
