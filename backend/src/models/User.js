const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["ADMIN", "FACULTY"], default: "FACULTY" },
    department: String,
    status: { type: String, enum: ["PENDING", "APPROVED"], default: "PENDING" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
