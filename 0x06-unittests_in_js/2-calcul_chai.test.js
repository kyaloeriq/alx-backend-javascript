// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai expect', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 2.7, 3.2)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 1.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 3.9, 2.9)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 10.1, 2.8)).to.equal(7);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8.9, 2.1)).to.equal(4);
      expect(calculateNumber('DIVIDE', 9.9, 2.9)).to.equal(3);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});

