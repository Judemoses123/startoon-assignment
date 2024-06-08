import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    required: true,
  },
  lastLoginDate: {
    type: Date,
  },
  role: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
