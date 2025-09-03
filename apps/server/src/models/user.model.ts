import { Schema, model, Document, Model } from "mongoose";

// Definisikan interface yang mewarisi Document
export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  username: string;
}

// Definisikan schema untuk User
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
  },
  {
    timestamps: true, // jika ingin menyimpan createdAt dan updatedAt
  }
);

// Export model mongoose untuk User
export const User: Model<IUser> = model<IUser>("User", userSchema);
