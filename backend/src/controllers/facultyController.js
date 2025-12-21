exports.getMyProfile = async (req, res) => {
  try {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      department: req.user.department,
      status: req.user.status
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
