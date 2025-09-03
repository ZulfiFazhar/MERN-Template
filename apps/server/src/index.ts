import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.get("/", async (_req: Request, res: Response) => {
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
