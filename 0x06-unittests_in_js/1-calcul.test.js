const assert = require('assert');
const calculateNumber = require('./1-calcul');

const withinTolerance = (actual, expected, tolerance = 0.001) => {
  return Math.abs(actual - expected) <= tolerance;
};

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 2.7, 3.2), 6);
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5); // Updated
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 1.4), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 2.9), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 10.1, 2.8), 7);
      assert.strictEqual(calculateNumber('SUBTRACT', -3.9, -2.9), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.ok(withinTolerance(calculateNumber('DIVIDE', 8.9, 2.1), 4.5)); // Allow tolerance
      assert.ok(withinTolerance(calculateNumber('DIVIDE', 9.9, 2.9), 3)); // Allow tolerance
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });

    it('should handle negative values for division', () => {
      assert.ok(withinTolerance(calculateNumber('DIVIDE', -8.9, 2.1), -4.5)); // Allow tolerance
      assert.ok(withinTolerance(calculateNumber('DIVIDE', 9.9, -2.9), -3)); // Allow tolerance
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
