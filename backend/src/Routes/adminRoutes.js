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
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Admin User 1" }
  ]);
});
// APPROVE user
router.patch("/approve/:userId", approveUser);
router.post("/generateInvite", (req, res) => {
  res.json({ message: "Invite generated" });
});

module.exports = router;
