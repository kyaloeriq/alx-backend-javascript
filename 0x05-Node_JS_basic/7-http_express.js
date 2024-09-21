#!/usr/bin/env node

// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of an Express app
const app = express();

// Helper function to read the CSV file and format the student data
function readDatabase(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line !== '');
        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const fields = lines.slice(1).map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return { firstname, lastname, age, field };
        });

        const studentsByField = fields.reduce((acc, student) => {
          if (!acc[student.field]) {
            acc[student.field] = [];
          }
          acc[student.field].push(student.firstname);
          return acc;
        }, {});

        resolve(studentsByField);
      }
    });
  });
}

// Route for the root ("/") URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the "/students" URL
app.get('/students', (req, res) => {
  const dbPath = process.argv[2]; // Get the CSV file path from command-line arguments

  readDatabase(dbPath)
    .then((studentsByField) => {
      let response = 'This is the list of our students\n';

      const totalStudents = Object.values(studentsByField).reduce((acc, students) => acc + students.length, 0);
      response += `Number of students: ${totalStudents}\n`;

      for (const field in studentsByField) {
        const studentNames = studentsByField[field].join(', ');
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentNames}\n`;
      }

      res.set('Content-Type', 'text/plain');
      res.send(response);
    })
    .catch((err) => {
      res.set('Content-Type', 'text/plain');
      res.send(err.message);
    });
});

// The app listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the Express app instance
module.exports = app
