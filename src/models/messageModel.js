import mongoose from "mongoose";

const msgSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  org: {
    type: String,
  },
  msg: {
    type: String,
    required: true,
    unique: true,
  },
});

const Message = mongoose.model("Msg", msgSchema);

export default Message;
