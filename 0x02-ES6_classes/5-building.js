// Define the Building class as an abstract class with required methods and attributes.
class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Method to be overridden in derived classes
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

module.exports = Building;
