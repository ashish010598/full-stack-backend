const Drive = require("../models/VaccinationDrive");
const Student = require("../models/Student");
const moment = require("moment");

exports.createDrive = async (data) => {
  const { date } = data;
  const driveDate = moment(date);
  if (!driveDate) {
    throw new Error("Drive date is required");
  }
  const today = moment();
  if (driveDate.isBefore(today)) {
    throw new Error("Drive date cannot be in the past");
  }
  if (driveDate.diff(today, "days") < 15) {
    throw new Error("Drive must be scheduled at least 15 days in advance");
  }
  const conflict = await Drive.findOne({ date });
  if (conflict) throw new Error("Drive already scheduled on this date");

  data.availableDoses = data.totalDoses;
  return await Drive.create(data);
};

exports.getAll = async () => {
  return await Drive.find();
};

exports.updateDrive = async (id, updates) => {
  const drive = await Drive.findById(id);
  if (!drive) throw new Error("Drive not found");

  if (moment(drive.date).isBefore(moment())) {
    throw new Error("Cannot edit a past drive");
  }

  return await Drive.findByIdAndUpdate(id, updates, { new: true });
};

exports.getDashboardStats = async () => {
  const totalStudents = await Student.countDocuments();
  const vaccinatedStudents = await Student.countDocuments({
    vaccinationRecords: { $exists: true, $not: { $size: 0 } },
  });

  const percentage = totalStudents
    ? ((vaccinatedStudents / totalStudents) * 100).toFixed(2)
    : 0;

  const upcomingDrives = await Drive.find({
    date: { $gte: new Date(), $lte: moment().add(30, "days").toDate() },
  });

  return {
    totalStudents,
    vaccinatedStudents,
    percentage,
    upcomingDrives,
  };
};
