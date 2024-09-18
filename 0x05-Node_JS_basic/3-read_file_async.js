#!/usr/bin/env node

const fs = require('fs');

// Function to count students asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const fields = {};
      const students = lines.slice(1).filter((line) => line);

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

module.exports = countStudents;
