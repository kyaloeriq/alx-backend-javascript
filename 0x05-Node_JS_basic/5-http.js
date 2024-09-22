#!/usr/bin/env node

// Import the required modules
const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

// Promisify the fs.readFile function for async file reading
const readFileAsync = promisify(fs.readFile);

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

// Create the server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // For the root URL (/), return the welcome message
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // For the /students URL, return student list
    const database = process.argv[2]; // The database file should be passed as an argument
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('This is the list of our students\n');

    if (database) {
      try {
        const studentList = await countStudents(database);
        res.end(`${studentList}`);
      } catch (error) {
        res.end('Cannot load the database');
      }
    } else {
      res.end('');
    }
  } else {
    // For other paths, return 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// The server listens on port 1245
app.listen(1245);

// Export the app for testing or further usage
module.exports = app;
