function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter(student => student && student.id !== undefined)
    .map(student => student.id);
}

module.exports = getListStudentIds;
