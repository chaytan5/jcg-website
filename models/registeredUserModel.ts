import mongoose from "mongoose";

const registeredUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an Email"],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const RegisteredUser =
  mongoose.models.registeredUsers ||
  mongoose.model("registeredUsers", registeredUserSchema);

export default RegisteredUser;
