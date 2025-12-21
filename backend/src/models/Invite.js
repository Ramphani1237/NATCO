const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema(
  {
    email: String,
    role: String,
    department: String,
    token: { type: String, required: true },
    link: { type: String, required: true },
    used: { type: Boolean, default: false }, 
    expiresAt: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invite", inviteSchema);
