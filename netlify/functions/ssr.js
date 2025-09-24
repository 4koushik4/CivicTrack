import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Example API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from CivicTrack API!" });
});

// Add your existing backend routes here (like CRUD for CivicTrack)

export const handler = serverless(app);
