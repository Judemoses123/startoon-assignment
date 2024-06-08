import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI ?? "")
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
