import { User, type IUser } from "../models/user.model";

export class UserRepository {
  public static async createUser(
    name: string,
    email: string,
    username: string
  ): Promise<IUser> {
    const user = new User({ name, email, username });
    return user.save();
  }

  public static async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  public static async getUserById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  public static async updateUser(
    id: string,
    name: string,
    email: string,
    username: string
  ): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, { name, email, username }, { new: true });
  }

  public static async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  }
}
