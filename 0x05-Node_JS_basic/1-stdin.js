#!/usr/bin/env node

// Program to interact with user through command line

  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  // Listen for user input
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    
    // Close the input stream after receiving the input
    process.stdin.end();
  });

  // Handle program exit
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
