const express = require("express");
const cors = require("cors");

const adminRoutes = require("./src/routes/adminRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const facultyRoutes = require("./src/routes/facultyRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

/* ======================
   CORS — MUST BE FIRST
====================== */
app.use(cors({
  origin: [
    "https://natco-pi.vercel.app",
    "http://localhost:3000"
  ],
  credentials: true
}));

app.options("*", cors());

/* ======================
   MIDDLEWARE
====================== */
app.use(express.json());

/* ======================
   ROUTES
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/faculty", facultyRoutes);

/* ======================
   TEST
====================== */
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working" });
});

/* ======================
   SERVER
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ Backend running on port", PORT);
});
