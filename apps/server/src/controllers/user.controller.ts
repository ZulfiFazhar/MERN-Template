import { type Request, type Response } from "express";
import { UserService } from "@/services/user.service";

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email } = req.body;
      const newUser = await UserService.createUser(name, email);

      res.status(201).json({
        response: 201,
        message: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      res.status(200).json({
        response: 200,
        message: "Users retrieved successfully",
        data: users,
      });
    } catch (error) {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  }
}
