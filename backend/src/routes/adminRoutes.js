const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  approveUser,
  deleteUser
} = require("../controllers/adminController");

const { protect, restrictTo } = require("../middleware/authMiddleware");

router.use(protect, restrictTo("ADMIN"));

router.get("/users", getAllUsers);
router.put("/approve/:id", approveUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
