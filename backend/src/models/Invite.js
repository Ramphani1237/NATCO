const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
  token: { type: String, required: true },
  department: { type: String, required: true },
  role: { type: String, default: "FACULTY" },
  used: { type: Boolean, default: false },
  expiresAt: { type: Date, required: true }
});

module.exports = mongoose.model("Invite", inviteSchema);
