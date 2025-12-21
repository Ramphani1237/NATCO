const express = require("express");
const router = express.Router();
const {
  createDepartment,
  getDepartments
} = require("../controllers/departmentController");

const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get("/", protect, getDepartments);
router.post("/", protect, restrictTo("ADMIN"), createDepartment);

module.exports = router;
