const driveService = require("../services/driveService");

exports.createDrive = async (req, res) => {
  try {
    const drive = await driveService.createDrive(req.body);
    res.status(201).json(drive);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDrives = async (req, res) => {
  try {
    const drives = await driveService.getAll();
    res.json(drives);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateDrive = async (req, res) => {
  try {
    const updated = await driveService.updateDrive(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = await driveService.getDashboardStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
