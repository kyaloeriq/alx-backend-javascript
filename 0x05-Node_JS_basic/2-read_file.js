#!/usr/bin/env node

// Import required 'fs' module
const fs = require('fs');

// Function to count students from a CSV file
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file into lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line);

    // Check if there are lines other than the header
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Process CSV header and student data
    const students = lines.slice(1);

    // Total number of students
    console.log(`Number of students: ${students.length}`);

    // Initialize field groupings
    const fieldGroups = {};

    // Loop through each student and group them by field
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }

      // Add student to the appropriate field group
      fieldGroups[field].push(firstname);
    });

    // Output the number of students in each field and their names
    Object.keys(fieldGroups).forEach((field) => {
      const studentsInField = fieldGroups[field];
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
    });
  } catch (error) {
    // If the file cannot be read, throw an error
    throw new Error('Cannot load the database');
  }
}

// Export the function to be used in other files
module.exports = countStudents;
