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
exports.auth = exports.signup = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../model/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_1 = __importDefault(require("../model/login"));
dotenv_1.default.config();
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const user = yield user_1.default.findOne({ email });
        if (!user)
            return res
                .status(401)
                .json({ message: "Account doesn't exist", status: "failed" });
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            return res
                .status(404)
                .json({ message: "Invalid Credentials", status: "failed" });
        }
        const token = yield generateToken({ name, email });
        if (user.role === "user") {
            user.count = user.count + 1;
            user.lastLoginDate = new Date();
            const month = new Date().getMonth();
            const year = new Date().getFullYear();
            const month_year = month < 11 ? month + 1 + "/" + year : 0 + "/" + (year - 1);
            console.log(month_year);
            let login;
            login = yield login_1.default.findOne({ month_year: month_year });
            if (!login) {
                login = new login_1.default({ month_year: month_year, count: 1 });
            }
            else {
                login.count = login.count + 1;
            }
            yield login.save();
            yield user.save();
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
    }
    catch (err) {
        console.log(err);
        console.error(err);
        return res.status(500).json({
            message: "User login failed",
            status: "failed",
        });
    }
});
exports.login = login;
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, gender } = req.body;
        console.log(name, email, password, gender);
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            return res
                .status(401)
                .json({ message: "User already exists", status: "failed" });
        }
        const hashedPassword = yield generatePasswordHash(password);
        const token = yield generateToken({ name, email });
        if (!token) {
            return res
                .status(500)
                .json({ message: "Token generation failed", status: "failed" });
        }
        const user = yield user_1.default.create({
            name,
            email,
            password: hashedPassword,
            gender,
            count: 0,
            role: "user",
        });
        return res.status(200).json({
            message: "User signup successful",
            status: "success",
            token,
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "User signup failed",
            status: "failed",
        });
    }
});
exports.signup = signup;
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["authorization"];
        if (!token)
            return res
                .status(400)
                .json({ message: "invalid token", status: "failed" });
        const userData = getUserFromToken(token);
        if (!userData)
            return res
                .status(400)
                .json({ message: "Something went wrong", status: "failed" });
        const email = userData.email;
        const user = yield user_1.default.findOne({ email: email });
        if (!user)
            return res
                .status(400)
                .json({ message: "invalid token", status: "failed" });
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "something went wrong", status: "failed" });
    }
});
exports.auth = auth;
const generatePasswordHash = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt_1.default.hash(password, 10);
});
const generateToken = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.JWT_KEY) {
        return null;
    }
    return jsonwebtoken_1.default.sign(userData, process.env.JWT_KEY);
});
const getUserFromToken = (token) => {
    if (!process.env.JWT_KEY) {
        return null;
    }
    const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
    return userData;
};
