import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to database");

    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
    });
    const savedUser = await newUser.save();
    console.log("User added successfully:", savedUser);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

main();
