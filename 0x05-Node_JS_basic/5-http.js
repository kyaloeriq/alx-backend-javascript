#!/usr/bin/env node

// Import the required modules
const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

// Helper function to read the CSV file and process student data
async function countStudents(database) {
  try {
    const data = await readFileAsync(database, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Filter out empty lines
    const students = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(','); // Ignore lastname and age
      if (field && field.trim() !== '') {
        if (!Object.prototype.hasOwnProperty.call(students, field)) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    const totalStudents = lines.length;
    let result = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create the server function
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // If the path is "/", respond with "Hello Holberton School!"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the path is "/students", return the student list
    const database = process.argv[2]; // The database file is passed as an argument
    if (!database) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database argument is missing.');
      return;
    }
    try {
      const studentList = await countStudents(database);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentList}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    // For any other path, return 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// The server listens on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
