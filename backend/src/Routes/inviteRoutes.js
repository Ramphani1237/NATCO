const router = require("express").Router();
const { createInvite } = require("../Controllers/inviteController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.use(protect, restrictTo("ADMIN"));
router.post("/", createInvite);

module.exports = router;
