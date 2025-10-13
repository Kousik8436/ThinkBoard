// backend/src/server.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from backend/.env
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Debug logs to check env variables
console.log("Mongo URL:", process.env.MONGO_URL);
console.log("Redis URL:", process.env.UPSTASH_REDIS_REST_URL);

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/notes", (req, res, next) => {
  console.log(`API call: ${req.method} ${req.path}`);
  next();
}, notesRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  // Catch-all route to serve index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

// Start server
app.listen(port, () => {
  console.log("Server is running successfully on port", port);
});
