const express = require("express");
const cors = require("cors");
const adminRoutes = require("./src/routes/adminRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const app = express();
app.use("/api/admin", adminRoutes);
app.use("/api/departments", departmentRoutes);
app.use(cors({
  origin: "https://natco-pi.vercel.app",
  credentials: true
}));

app.use(express.json());

// TEST ROUTE
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working" });
});

// AUTH ROUTE EXAMPLE
app.post("/api/auth/login", (req, res) => {
  res.json({ message: "Login route reached" });
});

// ✅ REQUIRED FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
