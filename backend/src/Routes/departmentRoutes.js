const router = require("express").Router();
const { createDepartment, getDepartments } = require("../Controllers/departmentController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.post("/", protect, restrictTo("ADMIN"), createDepartment);
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Oncology" },
    { id: 2, name: "Radiology" }
  ]);
});
module.exports = router;
