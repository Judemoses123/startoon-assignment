import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import dotenv from "dotenv";
import Login from "../model/login";
dotenv.config();

interface UserData {
  name: string;
  email: string;
}

export const login = async (req: any, res: any, next: any) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ message: "Account doesn't exist", status: "failed" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(404)
        .json({ message: "Invalid Credentials", status: "failed" });
    }
    const token = await generateToken({ name, email });
    if (user.role === "user") {
      user.count = user.count + 1;
      user.lastLoginDate = new Date();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      const month_year =
        month < 11 ? month + 1 + "/" + year : 0 + "/" + (year - 1);
      console.log(month_year);

      let login: any;
      login = await Login.findOne({ month_year: month_year });

      if (!login) {
        login = new Login({ month_year: month_year, count: 1 });
      } else {
        login.count = login.count + 1;
      }

      await login.save();

      await user.save();
      return res.status(200).json({
        message: "Logged In succesfully",
        status: "success",
        token: token,
      });
    }
    return res.status(200).json({
      message: "Logged In succesfully",
      status: "success",
      token: token,
    });
  } catch (err) {
    console.log(err);
    console.error(err);

    return res.status(500).json({
      message: "User login failed",
      status: "failed",
    });
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, gender } = req.body;
    console.log(name, email, password, gender);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ message: "User already exists", status: "failed" });
    }

    const hashedPassword = await generatePasswordHash(password);
    const token = await generateToken({ name, email });

    if (!token) {
      return res
        .status(500)
        .json({ message: "Token generation failed", status: "failed" });
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
      count: 0,
      role: "user",
      lastLoginDate: new Date(),
    });

    return res.status(200).json({
      message: "User signup successful",
      status: "success",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "User signup failed",
      status: "failed",
    });
  }
};

export const auth = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers["authorization"];
    if (!token)
      return res
        .status(400)
        .json({ message: "invalid token", status: "failed" });
    const userData = getUserFromToken(token) as UserData;
    if (!userData)
      return res
        .status(400)
        .json({ message: "Something went wrong", status: "failed" });

    const email = userData.email;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ message: "invalid token", status: "failed" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", status: "failed" });
  }
};

const generatePasswordHash = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

const generateToken = async (userData: UserData): Promise<string | null> => {
  if (!process.env.JWT_KEY) {
    return null;
  }
  return jwt.sign(userData, process.env.JWT_KEY);
};

const getUserFromToken = (token: string) => {
  if (!process.env.JWT_KEY) {
    return null;
  }
  const userData = jwt.verify(token, process.env.JWT_KEY);
  return userData;
};
