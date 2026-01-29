import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"

import { connectDB } from './config/db.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,
}));


app.use("/api/auth", authRoutes)


connectDB()
  .then(() => {
    console.log("Database connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection failed ❌", err);
    process.exit(1); // exit if DB fails
  });


