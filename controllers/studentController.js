const studentService = require("../services/studentService");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

exports.addStudent = async (req, res) => {
  try {
    const student = await studentService.addStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const query = req.query;
    const students = await studentService.getStudents(query);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markVaccinated = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body; // vaccineName, date, driveId
    const updated = await studentService.markVaccinated(id, data);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.bulkUpload = async (req, res) => {
  const csv = require("csv-parser");
  const fs = require("fs");
  const filePath = req.file.path;

  const students = [];

  try {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        students.push(row);
      })
      .on("end", async () => {
        const result = await studentService.bulkAdd(students);
        res.status(200).json({
          message: "Bulk upload successful",
          uploaded: result.length,
        });
      });
    fs.unlinkSync(filePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
