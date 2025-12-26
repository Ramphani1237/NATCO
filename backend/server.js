const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const facultyRoutes = require("./src/routes/facultyRoutes");
const app = express();

/* ===========================
   CORS (MUST COME FIRST)
=========================== */
const allowedOrigins = [
  "http://localhost:3000",
  "https://natco-pi.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman / server calls
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

// Preflight support
app.options("*", cors());

/* ===========================
   BODY PARSER
=========================== */
app.use(express.json());

/* ===========================
   ROUTES
=========================== */
app.use("/api/admin", adminRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/auth", authRoutes);
/* ===========================
   TEST ROUTES
=========================== */
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working" });
});


/* ===========================
   SERVER
=========================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
