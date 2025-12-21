const User = require("../models/User");

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// APPROVE USER
exports.approveUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.status = "APPROVED";
  await user.save();

  res.json({ message: "User approved" });
};

// REJECT / DELETE USER
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User removed" });
};
