// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when a is 1.4 and b is 2.6 (rounds to 1 + 3)', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when a is 1.5 and b is 2.5 (rounds to 2 + 3)', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return 6 when a is 2.6 and b is 3.4 (rounds to 3 + 3)', function() {
    assert.strictEqual(calculateNumber(2.6, 3.4), 6);
  });

  it('should return 0 when a is 0.1 and b is -0.1 (rounds to 0 + 0)', function() {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should handle negative numbers, return -4 when a is -1.4 and b is -2.6', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should handle when one value is 0, return 3 when a is 0 and b is 2.6 (rounds to 3)', function() {
    assert.strictEqual(calculateNumber(0, 2.6), 3);
  });
});
