const Student = require("../models/Student");
const VaccinationDrive = require("../models/VaccinationDrive");

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
  if (!student) throw new Error("Student not found");

  const already = student.vaccinationRecords.find(
    (v) => v.driveId == data.driveId
  );
  if (already) throw new Error("Already vaccinated for this drive");

  const drive = await VaccinationDrive.findById(data.driveId);
  if (!drive) throw new Error("Vaccination drive not found");

  if (drive.availableDoses <= 0)
    throw new Error("No available doses for this drive");
  student.vaccinationRecords.push({
    driveId: data.driveId,
    vaccinationDate: data.date,
    vaccineName: drive.vaccineName,
  });
  await student.save();
  drive.availableDoses -= 1;
  await drive.save();

  return { student, drive };
};

exports.bulkAdd = async (students) => {
  return await Student.insertMany(students);
};
