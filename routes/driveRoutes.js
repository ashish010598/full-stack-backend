const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const driveController = require("../controllers/driveController");

router.post("/", auth, driveController.createDrive);
router.get("/", auth, driveController.getDrives);
router.put("/:id", auth, driveController.updateDrive);
router.get("/dashboard/stats", auth, driveController.getDashboardStats);

module.exports = router;
