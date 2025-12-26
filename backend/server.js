require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const cors = require("cors");
connectDB();

app.use(cors({
  origin: "https://natco-pi.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



