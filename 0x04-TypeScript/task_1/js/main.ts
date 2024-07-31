// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Index signature to allow additional properties
}

// Create a Teacher class that implements the Teacher interface
class TeacherClass implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  [propName: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Example usage
const teacher1 = new TeacherClass('John', 'Doe', true, 'New York', 5);
teacher1.contract = true;

const teacher2 = new TeacherClass('Jane', 'Smith', false, 'Los Angeles');
teacher2.contract = false;

console.log(teacher1);
console.log(teacher2);
