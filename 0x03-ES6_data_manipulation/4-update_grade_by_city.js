/**
 * Updates the grades of students by city.
 * @param {Array} students - The list of students.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - The new grades to be assigned.
 * @returns {Array} - The list of students with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

module.exports = updateStudentGradeByCity;
