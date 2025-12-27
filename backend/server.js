const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const facultyRoutes = require("./src/routes/facultyRoutes");

const app = express();

/* ============================
   CORS — MUST BE FIRST
============================ */
const corsOptions = {
  origin: [
    "https://natco-pi.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true   // ✅ THIS IS THE KEY
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

/* ============================
   BODY PARSER
============================ */
app.use(express.json());

/* ============================
   ROUTES
============================ */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/faculty", facultyRoutes);

/* ============================
   HEALTH CHECK
============================ */
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working" });
});

/* ============================
   SERVER
============================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ Backend running on port", PORT);
});
