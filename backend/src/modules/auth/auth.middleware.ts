import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../common/utils/jwt.utils";

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
  };
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  let token = req.cookies.token;

  if (!token) {
    const authHeader = req.headers["authorization"];
    token = authHeader && authHeader.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(403).json({ error: "Invalid or expired token" });
  }
};
