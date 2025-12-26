const router = require("express").Router();
const { getProfile } = require("../Controllers/facultyController");
const { protect } = require("../middleware/authMiddleware");

router.get("/profile", protect, getProfile);

module.exports = router;
