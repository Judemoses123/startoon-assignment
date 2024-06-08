import { NextFunction } from "express";
import User from "../model/user";

export const getUser = async (req: any, res: any, next: any) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user)
    return res.status(401).json({ message: "Invalid user", status: "failed" });

  const userData = {
    name: user.name,
    email: user.email,
    gender: user.gender,
    role: user.role,
  };

  return res.status(200).json({
    user: userData,
    message: "user fetched successfully",
    status: "success",
  });
};
