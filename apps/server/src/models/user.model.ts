import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

export class UserModel {
  static async createUser(
    name: string,
    email: string
  ): Promise<mongoose.Document> {
    const user = new User({ name, email });
    return await user.save();
  }

  static async getUsers(): Promise<(typeof User)[]> {
    return await User.find();
  }
}
