const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post(
  "/upload",
  auth,
  upload.single("file"),
  studentController.bulkUpload
);
router.post("/", auth, studentController.addStudent);
router.get("/", auth, studentController.getStudents);
router.put("/vaccinate/:id", auth, studentController.markVaccinated);

module.exports = router;
