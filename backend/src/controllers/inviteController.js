const Invite = require("../models/Invite");
const crypto = require("crypto");

// CREATE INVITE
exports.createInvite = async (req, res) => {
  const { email, role, department } = req.body;

  const token = crypto.randomBytes(32).toString("hex");
  const link = `http://localhost:3000/invite/${token}`;

  const invite = await Invite.create({
    email,
    role,
    department,
    token,
    link,
    used: false, // ✅ explicit
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
  });
  console.log(invite);

  res.json({
    message: "Invite created",
    invite
  });
};


// GET ALL INVITES
exports.getInvites = async (req, res) => {
  const invites = await Invite.find();
  res.json(invites);
};

// GET INVITE BY TOKEN (public)
exports.getInviteByToken = async (req, res) => {
  const { token } = req.params;
  const invite = await Invite.findOne({ token });
  if (!invite) return res.status(404).json({ message: "Invite not found" });
  res.json(invite);
};
