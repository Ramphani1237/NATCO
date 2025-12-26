const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const inviteRoutes = require("./routes/inviteRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

app.use(cors({
  origin: "https://natco-pi.vercel.app",
  credentials: true
}));

//allow cors preflight requests
app.options("*", cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/invite", inviteRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/", (req, res) => {
  res.send("NATCO Cancer Centre API Running");
});

module.exports = app;
