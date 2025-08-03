import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import { connectDb } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

await connectDb();
// Middleware
app.use(
  cors({
    origin: "https://wellness-session-management.netlify.app",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
