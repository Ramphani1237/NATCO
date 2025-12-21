const User = require("../models/User");
const Invite = require("../models/Invite");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    if (user.status !== "APPROVED")
      return res.status(403).json({ message: "Account not approved" });

    const token = generateToken(user);

    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REGISTER VIA INVITE
exports.register = async (req, res) => {
  try {
    const { token, name, password } = req.body;

    if (!token || !name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const invite = await Invite.findOne({ token });

    if (!invite) {
      return res.status(400).json({ message: "Invite not found" });
    }

    if (invite.used) {
      return res.status(400).json({ message: "Invite already used" });
    }

    if (invite.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invite has expired" });
    }

    const existingUser = await User.findOne({ email: invite.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email: invite.email,
      password: hashedPassword,
      role: invite.role,
      department: invite.department,
      status: "PENDING"
    });

    invite.used = true;
    await invite.save();

    res.status(201).json({
      message: "Registration successful. Await admin approval."
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET USER BY EMAIL (public, for invite page)
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email }).select('name email role status department');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET CURRENT USER
exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};
