const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const inviteRoutes = require("./routes/inviteRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/invite", inviteRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/faculty", facultyRoutes);

app.get("/", (req, res) => {
  res.send("NATCO Cancer Centre API Running");
});

module.exports = app;
