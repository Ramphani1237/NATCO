const express = require("express");
const router = express.Router();
const { login, register, getUserByEmail, getMe, registerDepartment } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", login);
router.post("/register", register);
router.post("/register-department", registerDepartment);
router.get("/user", getUserByEmail); // public
router.get("/me", protect, getMe);

module.exports = router;
