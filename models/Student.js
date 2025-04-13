const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  class: String,
  studentId: String,
  vaccinationRecords: [
    {
      vaccineName: String,
      date: Date,
      driveId: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);
