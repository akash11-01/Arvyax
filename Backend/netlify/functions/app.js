import express from "express";
import serverless from "serverless-http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "../../routes/authRoutes.js";
import sessionRoutes from "../../routes/sessionRoutes.js";
import { connectDb } from "../../config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

await connectDb();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", sessionRoutes);

export const handler = serverless(app);
