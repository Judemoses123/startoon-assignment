import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  month_year: { type: String, required: true },

  count: { type: Number, required: true },
});

const Login = mongoose.model("Login", LoginSchema);

export default Login;
