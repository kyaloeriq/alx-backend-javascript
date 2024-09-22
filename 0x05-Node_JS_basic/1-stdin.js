#!/usr/bin/env node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input (name)
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get input and remove trailing newline
  process.stdout.write(`Your name is: ${name}\n`);

  // End input after receiving the name
  process.stdin.end();
});

// Handle program exit after input ends
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
