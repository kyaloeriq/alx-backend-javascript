import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2]; // Database path passed as an argument

    readDatabase(dbPath)
      .then((studentsByField) => {
        let response = 'This is the list of our students\n';

        const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        const totalStudents = fields.reduce((acc, field) => acc + studentsByField[field].length, 0);

        response += `Number of students: ${totalStudents}\n`;

        fields.forEach((field) => {
          const studentNames = studentsByField[field].join(', ');
          response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentNames}\n`;
        });

        res.status(200).send(response.trim()); // Remove the last newline
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = process.argv[2]; // Database path passed as an argument

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbPath)
      .then((studentsByField) => {
        if (!studentsByField[major]) {
          res.status(200).send('List: ');
          return;
        }

        const studentNames = studentsByField[major].join(', ');
        res.status(200).send(`List: ${studentNames}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
