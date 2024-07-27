class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type check
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type check
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
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

// Uncomment the following lines to see the type checking in action
// course.name = 123; // Throws TypeError: Name must be a string
// course.length = 'long'; // Throws TypeError: Length must be a number
// course.students = 'Alice'; // Throws TypeError: Students must be an array of strings
// course.students = [123, 'Bob']; // Throws TypeError: Students must be an array of strings

