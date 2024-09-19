const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);  // Rounded 1 + 5 = 6
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);  // Rounded 1 - 5 = -4
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);  // Rounded 1 / 5 = 0.2
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');  // Division by zero
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
