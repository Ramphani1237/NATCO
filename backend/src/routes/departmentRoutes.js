const router = require("express").Router();
const { createDepartment, getDepartments } = require("../controllers/departmentController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.post("/", protect, restrictTo("ADMIN"), createDepartment);
router.get("/", getDepartments);

module.exports = router;
