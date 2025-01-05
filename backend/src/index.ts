import express, { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./modules/auth/auth.routes";
import { authenticateToken } from "./modules/auth/auth.middleware";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

export const prisma = new PrismaClient();
const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    res.json({ status: "healthy", database: "connected" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ status: "error", message: error.message });
    } else {
      res
        .status(500)
        .json({ status: "error", message: "An unknown error occurred" });
    }
  }
});

app.get("/api", (req: Request, res: Response): void => {
  try {
    res.status(200).json({ message: "API is working" });
  } catch (error) {
    console.error("Error in API endpoint:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.use("/api/v1/auth", authRoutes);

app.get(
  "/api/v1/users",
  authenticateToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Global error handler:", err);
  res.status(500).json({
    error: "Something went wrong",
    message: err.message,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received: closing HTTP server");
  await prisma.$disconnect();
  process.exit(0);
});
