/**
 * Filters students by location.
 * @param {Array} students - The list of students.
 * @param {string} city - The city to filter students by.
 * @returns {Array} - The list of students located in the specified city.
 */
function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

module.exports = getStudentsByLocation;
