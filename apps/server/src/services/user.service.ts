import { type IUser } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  public static async createUser(name: string, email: string): Promise<IUser> {
    if (!email.includes("@")) {
      throw new Error("Email tidak valid");
    }

    return UserRepository.createUser(name, email);
  }

  public static async getUsers(): Promise<IUser[]> {
    return UserRepository.getAllUsers();
  }
}
