import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.model";

const userRepository = new UserRepository();

export class UserService {
  public async getUsers(): Promise<IUser[]> {
    return userRepository.find();
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return userRepository.findById(id);
  }
}
