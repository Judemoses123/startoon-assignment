import express from "express";
import {
  getUsers,
  getMonthlyLogin,
  checkAdmin,
} from "../controller/adminController";

const router = express.Router();

router.use(checkAdmin);

router.get("/getUsers", getUsers);

router.get("/getMonthlyLogin", getMonthlyLogin);

export default router;
