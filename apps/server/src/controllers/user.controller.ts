import { type Request, type Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();
export class UserController {
  public async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getUsers();
      res.status(200).json({
        status: "success",
        message: "Users retrieved successfully",
        data: users,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to retrieve users" });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        res.status(200).json({
          status: "success",
          message: "User retrieved successfully",
          data: user,
        });
      } else {
        res.status(404).json({ status: "error", message: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to retrieve user" });
    }
  }
}
