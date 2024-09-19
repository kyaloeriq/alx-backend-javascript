const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Setup: before each test, spy on console.log
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Teardown: after each test, restore the original console.log
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once when passed 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    // Verify that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once when passed 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // Verify that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
