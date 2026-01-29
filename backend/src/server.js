import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js";
import { connectDB } from './config/db.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL, // frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});



connectDB()
  .then(() => {
    console.log("Database connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection failed ❌", err);
    process.exit(1); // exit if DB fails
  });


