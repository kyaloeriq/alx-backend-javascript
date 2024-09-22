import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
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
