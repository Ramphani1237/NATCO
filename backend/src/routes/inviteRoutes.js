const express = require("express");
const router = express.Router();
const {
  createInvite,
  getInvites,
  getInviteByToken
} = require("../controllers/inviteController");

const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get("/:token", getInviteByToken); // public

router.use(protect, restrictTo("ADMIN"));

router.post("/", createInvite);
router.get("/", getInvites);

module.exports = router;
