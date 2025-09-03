import { Schema, model, Document, Model } from "mongoose";
export interface IUser extends Document {
  name: string;
  email: string;
  emailVerified: boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUser> = model<IUser>("User", userSchema, "user");
