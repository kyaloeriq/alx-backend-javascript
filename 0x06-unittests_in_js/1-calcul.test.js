// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.7, 3.2), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 1.4), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 2.9), 1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.9, 2.1), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 9.9, 2.9), 3);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0.1), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
