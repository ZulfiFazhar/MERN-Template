import { User, type IUser } from "../models/user.model";

export class UserRepository {
  public static async createUser(name: string, email: string): Promise<IUser> {
    const user = new User({ name, email });
    return user.save();
  }

  public static async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }
}
