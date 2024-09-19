// 2-calcul_chai.js
/**
 * Performs different operations based on the 'type' argument.
 * @param {string} type - The type of operation ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or 'Error' for division by zero.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      return roundedB === 0 ? 'Error' : roundedA / roundedB;
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
