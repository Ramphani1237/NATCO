const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  approveUser
} = require("../controllers/adminController");

const { protect, restrictTo } = require("../middleware/authMiddleware");

// ADMIN ONLY
router.use(protect, restrictTo("ADMIN"));

// GET all users    
router.get("/users", getAllUsers);

// APPROVE user
router.patch("/approve/:userId", approveUser);

module.exports = router;
