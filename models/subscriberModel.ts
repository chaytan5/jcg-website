import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
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

const Subscriber =
  mongoose.models.subscribers ||
  mongoose.model("subscribers", subscriberSchema);

export default Subscriber;
