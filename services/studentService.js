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
  if (!student) throw new Error("Student not found");

  // Check if the student is already vaccinated for this drive
  const already = student.vaccinationRecords.find(
    (v) => v.vaccineName === data.vaccineName && v.driveId == data.driveId
  );
  if (already) throw new Error("Already vaccinated for this drive");

  // Find the vaccination drive
  const drive = await VaccinationDrive.findById(data.driveId);
  if (!drive) throw new Error("Vaccination drive not found");

  // Check if there are available doses
  if (drive.availableDoses <= 0)
    throw new Error("No available doses for this drive");

  // Update the student's vaccination records
  student.vaccinationRecords.push(data);
  await student.save();

  // Decrement the available doses in the vaccination drive
  drive.availableDoses -= 1;
  await drive.save();

  return { student, drive };
};

exports.bulkAdd = async (students) => {
  return await Student.insertMany(students);
};
