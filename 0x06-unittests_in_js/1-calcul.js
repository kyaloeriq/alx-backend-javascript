// 1-calcul.js
function calculateNumber(type, a, b) {
  // Round both numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform operations based on type
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;

    case 'SUBTRACT':
      return roundedA - roundedB;

    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error'; // Prevent division by 0
      }
      return roundedA / roundedB;

    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
