#!/usr/bin/env node

// Import the http module
const http = require('http');

// Create the server function
const app = http.createServer((req, res) => {
  // Set the response header content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
