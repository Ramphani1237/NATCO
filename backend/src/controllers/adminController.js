const User = require("../models/User");

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// APPROVE USER
exports.approveUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "APPROVED";
    await user.save();

    res.json({
      message: "User approved successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
