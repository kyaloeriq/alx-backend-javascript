class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with type check
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type check
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

// Example usage:
const currency = new Currency('USD', 'United States Dollar');
console.log(currency.displayFullCurrency()); // Output: United States Dollar (USD)

currency.code = 'EUR';
currency.name = 'Euro';
console.log(currency.displayFullCurrency()); // Output: Euro (EUR)

// Uncomment the following lines to see the type checking in action
// currency.code = 123; // Throws TypeError: Code must be a string
// currency.name = {}; // Throws TypeError: Name must be a string
