"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api/", authRoutes_1.default);
app.use("/api/user", userRoute_1.default);
app.use("/api/admin", adminRoutes_1.default);
console.log(process.env.MONGO_URI);
mongoose_1.default
    .connect((_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "")
    .then(() => {
    app.listen(8080);
})
    .catch((err) => {
    console.log(err);
});
