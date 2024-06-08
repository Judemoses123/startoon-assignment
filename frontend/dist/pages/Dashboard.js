"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("../components/navigationComponents/Navbar"));
const UserDisplay_1 = __importDefault(require("../components/userComponents/UserDisplay"));
const Dashboard = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-screen h-screen flex flex-col items-center justify-stretch", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("main", { className: "w-full bg-white pt-10 h-full", children: (0, jsx_runtime_1.jsx)(UserDisplay_1.default, {}) })] }));
};
exports.default = Dashboard;
