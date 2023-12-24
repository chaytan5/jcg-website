import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an Email"],
    },
    message: {
      type: String,
      required: [true, "Please provide an Message"],
    },
  },
  {
    timestamps: true,
  },
);

const Message =
  mongoose.models.messages || mongoose.model("messages", messageSchema);

export default Message;
