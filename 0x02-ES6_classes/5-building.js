// Define the Building class as an abstract class with required methods and attributes.
class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Ensure that any class extending Building implements evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

module.exports = Building;
