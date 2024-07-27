class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type check
  set name(value) {
    this._name = this._validateName(value);
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type check
  set length(value) {
    this._length = this._validateLength(value);
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type check
  set students(value) {
    this._students = this._validateStudents(value);
  }

  // Validation method for name
  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // Validation method for length
  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // Validation method for students
  _validateStudents(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}

// Example usage:
const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
console.log(course.name); // Output: JavaScript
console.log(course.length); // Output: 12
console.log(course.students); // Output: ['Alice', 'Bob', 'Charlie']

course.name = 'Python';
course.length = 14;
course.students = ['Dave', 'Eva'];
console.log(course.name); // Output: Python
console.log(course.length); // Output: 14
console.log(course.students); // Output: ['Dave', 'Eva']
