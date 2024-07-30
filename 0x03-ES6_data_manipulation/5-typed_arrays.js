/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position in the buffer to set the value.
 * @param {number} value - The Int8 value to set at the specified position.
 * @returns {Int8Array} - The typed array view of the ArrayBuffer.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;

  return int8View;
}

module.exports = createInt8TypedArray;
