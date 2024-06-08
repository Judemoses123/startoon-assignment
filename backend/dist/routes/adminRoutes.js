"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controller/adminController");
const router = express_1.default.Router();
router.use(adminController_1.checkAdmin);
router.get("/getUsers", adminController_1.getUsers);
router.get("/getMonthlyLogin", adminController_1.getMonthlyLogin);
exports.default = router;
