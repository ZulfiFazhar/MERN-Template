import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();
const authController = new AuthController();

router.post("/auth/register", (req, res) => authController.register(req, res));
router.post("/auth/login", (req, res) => authController.login(req, res));
router.post("/auth/logout", (req, res) => authController.logout(req, res));
router.get("/auth/me", (req, res) => authController.getMySession(req, res));

export default router;
