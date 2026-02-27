// backend/src/server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

// Debug logs to check env variables
console.log("Mongo URL:", process.env.MONGO_URL);
console.log("Redis URL:", process.env.UPSTASH_REDIS_REST_URL);

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/api/notes", (req, res, next) => {
  console.log(`API call: ${req.method} ${req.path}`);
  next();
}, notesRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

// Start server
app.listen(port, () => {
  console.log("Server is running successfully on port", port);
});
