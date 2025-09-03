import { type Request, type Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, username } = req.body;
      const newUser = await UserService.createUser(name, email, username);

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

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (user) {
        res.status(200).json({
          response: 200,
          message: "User retrieved successfully",
          data: user,
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).json({ error: "Failed to retrieve user" });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, username } = req.body;
      const updatedUser = await UserService.updateUser(
        id,
        name,
        email,
        username
      );
      if (updatedUser) {
        res.status(200).json({
          response: 200,
          message: "User updated successfully",
          data: updatedUser,
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}
