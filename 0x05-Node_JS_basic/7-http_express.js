#!/usr/bin/env node

// Import the required modules
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

// Promisify the fs.readFile function for async file reading
const readFileAsync = promisify(fs.readFile);

// Initialize an Express application
const app = express();

// Helper function to count students from the CSV database
async function countStudents(database) {
  try {
    const data = await readFileAsync(database, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname')); // Ignore empty lines and header

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(','); // We only care about firstname and field
      if (field && field.trim() !== '') {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    });

    let result = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (students[field]) {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Define the root URL path handler
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Define the /students URL path handler
app.get('/students', async (req, res) => {
  const database = process.argv[2]; // The database file should be passed as an argument

  let responseText = 'This is the list of our students\n';

  if (database) {
    try {
      const studentList = await countStudents(database);
      responseText += studentList;
      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  } else {
    // No database provided
    res.status(200).send(responseText);
  }
});

// Set the app to listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Export the app for testing or further usage
module.exports = app;
