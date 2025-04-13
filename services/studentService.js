const Student = require("../models/Student");

exports.addStudent = async (data) => {
  return await Student.create(data);
};

exports.getStudents = async (query) => {
  const search = {};
  if (query.name) search.name = new RegExp(query.name, "i");
  if (query.class) search.class = query.class;
  return await Student.find(search);
};

exports.markVaccinated = async (id, data) => {
  const student = await Student.findById(id);
  const already = student.vaccinationRecords.find(
    (v) => v.vaccineName === data.vaccineName && v.driveId == data.driveId
  );
  if (already) throw new Error("Already vaccinated for this drive");

  student.vaccinationRecords.push(data);
  return await student.save();
};

exports.bulkAdd = async (students) => {
  return await Student.insertMany(students);
};
