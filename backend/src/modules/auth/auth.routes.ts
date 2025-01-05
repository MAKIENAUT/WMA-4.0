import express from "express";
import * as authController from "./auth.controller";
import { authenticateToken } from "./auth.middleware";
import { AuthRequest } from "./auth.middleware";
import { Response, NextFunction } from "express";

const router = express.Router();

router.post(
  "/register",
  (req: AuthRequest, res: Response, next: NextFunction) => {
    authController.register(req, res).catch(next);
  }
);

router.post("/login", (req: AuthRequest, res: Response, next: NextFunction) => {
  authController.login(req, res).catch(next);
});

router.post(
  "/logout",
  authenticateToken,
  (req: AuthRequest, res: Response, next: NextFunction) => {
    authController.logout(req, res).catch(next);
  }
);

router.get(
  "/me",
  authenticateToken,
  (req: AuthRequest, res: Response, next: NextFunction) => {
    authController.getAuthenticatedUser(req, res).catch(next);
  }
);

export default router;
