const mongoose = require("mongoose");

const DriveSchema = new mongoose.Schema({
  vaccineName: String,
  date: Date,
  totalDoses: Number,
  availableDoses: Number,
  applicableClasses: [String],
});

module.exports = mongoose.model("VaccinationDrive", DriveSchema);
