import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(express.json()); // parse JSON bodies
app.use(cors())
// Routes
app.use("/api", route);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err.message));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




