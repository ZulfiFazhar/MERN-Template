import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "@/routes/user.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db_url = process.env.MONGO_URI as string;

mongoose
  .connect(db_url)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

app.use("/api", userRoutes);

app.get("/", async (req, res) => {
  try {
    res.json({
      message: "Hello from Bun + Express!",
      database: "Connected",
    });
  } catch (error: any) {
    res.json({
      message: "Hello from Bun + Express!",
      database: "Disconnected",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
