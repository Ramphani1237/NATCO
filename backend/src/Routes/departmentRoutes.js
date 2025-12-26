const router = require("express").Router();
const { createDepartment, getDepartments } = require("../controllers/departmentController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.post("/", protect, restrictTo("ADMIN"), createDepartment);
router.get("/", (req, res) => {
    console.log("✅ departmentRoutes loaded");
  res.json([
    { id: 1, name: "Oncology" },
    { id: 2, name: "Radiology" }
  ]);
});
module.exports = router;
