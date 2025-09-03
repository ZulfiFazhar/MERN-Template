import { User, IUser } from "../models/user.model";

export class UserRepository {
  public async find(): Promise<IUser[]> {
    return await User.find();
  }

  public async findById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }
}
