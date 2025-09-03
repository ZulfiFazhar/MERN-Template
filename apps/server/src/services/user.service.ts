import { type IUser } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  public static async createUser(
    name: string,
    email: string,
    username: string
  ): Promise<IUser> {
    if (!email.includes("@")) {
      throw new Error("Email tidak valid");
    }

    return UserRepository.createUser(name, email, username);
  }

  public static async getUsers(): Promise<IUser[]> {
    return UserRepository.getAllUsers();
  }

  public static async getUserById(id: string): Promise<IUser | null> {
    return UserRepository.getUserById(id);
  }

  public static async updateUser(
    id: string,
    name: string,
    email: string,
    username: string
  ): Promise<IUser | null> {
    return UserRepository.updateUser(id, name, email, username);
  }

  public static async deleteUser(id: string): Promise<void> {
    return UserRepository.deleteUser(id);
  }
}
