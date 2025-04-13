const mongoose = require("mongoose");

const DriveSchema = new mongoose.Schema({
  vaccineName: String,
  date: Date,
  dosesAvailable: Number,
  applicableClasses: [String],
});

module.exports = mongoose.model("VaccinationDrive", DriveSchema);
