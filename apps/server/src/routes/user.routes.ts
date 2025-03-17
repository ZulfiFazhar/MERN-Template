import { Router } from "express";
import { UserController } from "@/controllers/user.controller";

const router = Router();
const userController = new UserController();

// POST /users
router.post("/add-user", (req, res) => userController.createUser(req, res));

// GET /users
router.get("/users", (req, res) => userController.getUsers(req, res));

export default router;
