import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "@/database";
import userRoutes from "@/routes/user.routes";

dotenv.config();

async function main() {
  await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());

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
}

main().catch((error) => console.error("Error starting server: ", error));
