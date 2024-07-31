// Defines the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creates two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Creates an array containing the student objects
const studentsList: Student[] = [student1, student2];

// Renders a table using Vanilla JavaScript
const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
