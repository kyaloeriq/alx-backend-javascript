#!/usr/bin/env node

// Import the required modules
const http = require('http');
const countStudents = require('./3-read_file_async');
const url = require('url');

// The database file path should be provided as a command-line argument
const databaseFile = process.argv[2];

// Create the server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set header for plain text response
  res.setHeader('Content-Type', 'text/plain');

  // Root URL "/"
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  // "/students" URL to fetch students from the CSV database
  else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    
    // Call countStudents to fetch and display the student data
    countStudents(databaseFile)
      .then((output) => {
        res.end(output);
      })
      .catch((err) => {
	res.statusCode = 500; // Internal Server Error
        res.end(err.message || 'Cannot load the database');
      });
  } else {
    // Handle unknown paths with a 404
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245...');
});

// Export the server for external usage or testing
module.exports = app;
