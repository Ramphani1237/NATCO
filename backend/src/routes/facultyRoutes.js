const express = require("express");
const router = express.Router();

const { getMyProfile } = require("../controllers/facultyController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get(
  "/profile",
  protect,
  restrictTo("FACULTY"),
  getMyProfile
);

module.exports = router;
