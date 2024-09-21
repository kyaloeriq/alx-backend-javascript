#!/usr/bin/env node

// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the route for the root ("/") URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// The app listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the Express app instance
module.exports = app;
