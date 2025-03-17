import { Schema, model, Document, Model } from "mongoose";

// Definisikan interface yang mewarisi Document
export interface IUser extends Document {
  name: string;
  email: string;
}

// Definisikan schema untuk User
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true, // jika ingin menyimpan createdAt dan updatedAt
  }
);

// Export model mongoose untuk User
export const User: Model<IUser> = model<IUser>("User", userSchema);
