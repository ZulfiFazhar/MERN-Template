import { type Request, type Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user = await this.authService.register(name, email, password);
      res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: user,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to register user" });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await this.authService.login(email, password);
      res.status(200).json({
        status: "success",
        message: "User logged in successfully",
        data: user,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to log in user" });
    }
  }

  public async logout(req: Request, res: Response): Promise<void> {
    try {
      await this.authService.logout(req.headers);
      res.status(200).json({
        status: "success",
        message: "User logged out successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to log out user" });
    }
  }

  public async getMySession(req: Request, res: Response): Promise<void> {
    try {
      const session = await this.authService.getMySession(req.headers);

      if (!session) {
        res.status(401).json({ status: "error", message: "unauthorized" });
        return;
      }
      res.json({
        status: "success",
        message: "Session retrieved successfully",
        data: session,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "error", message: "Failed to retrieve session" });
    }
  }
}
