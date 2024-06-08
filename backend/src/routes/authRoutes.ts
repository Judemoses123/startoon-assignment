import express from "express";
import { auth, login, signup } from "../controller/authController";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.use(auth);

export default router;
