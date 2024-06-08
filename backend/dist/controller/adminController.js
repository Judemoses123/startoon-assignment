"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyLogin = exports.getUsers = exports.checkAdmin = void 0;
const login_1 = __importDefault(require("../model/login"));
const user_1 = __importDefault(require("../model/user"));
const checkAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status({ message: "Unauthorized endpoint", status: "failed" });
    }
    next();
};
exports.checkAdmin = checkAdmin;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email: req.user.email });
        if (!user)
            return res
                .status(401)
                .json({ message: "Invalid user", status: "failed" });
        if (user.role == "user") {
            return res
                .status(401)
                .json({ message: "Access Denied", status: "failed" });
        }
        const users = yield user_1.default.find({ role: "user" }).select([
            "name",
            "email",
            "count",
            "lastLoginDate",
        ]);
        return res.json({
            users,
            message: "users fetched successfully",
            status: "success",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            status: "failed",
        });
    }
});
exports.getUsers = getUsers;
const getMonthlyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        let searchArray = [];
        // Constructing search parameters for the past 6 months
        for (let i = 0; i < 6; i++) {
            let searchMonth = month - i;
            let searchYear = year;
            if (searchMonth < 0) {
                searchMonth += 12;
                searchYear -= 1;
            }
            searchArray.push(`${searchMonth + 1}/${searchYear}`); // month is 0-indexed
        }
        // Preparing an answer array
        const monthlyLogin = [];
        // Searching in DB
        for (let i = 0; i < searchArray.length; i++) {
            const monthYear = searchArray[i];
            const login = yield login_1.default.findOne({ month_year: monthYear });
            const count = (login === null || login === void 0 ? void 0 : login.count) || 0;
            monthlyLogin.push({ month: monthYear, count: count });
        }
        console.log(monthlyLogin);
        return res.status(200).json({
            message: "Monthly login count fetched successfully",
            status: "success",
            monthlyLogin: monthlyLogin,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            status: "failed",
        });
    }
});
exports.getMonthlyLogin = getMonthlyLogin;
