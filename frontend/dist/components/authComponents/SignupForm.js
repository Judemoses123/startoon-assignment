"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const LoginForm = () => {
    return ((0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col gap-4 items-start justify-center w-2/3", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-2xl font-semibold text-blue-900", children: "Signup With Email ID" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", className: "border w-full p-1 rounded-md", placeholder: "Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "emailId", className: "border w-full p-1 rounded-md", placeholder: "Email Id" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "password", className: "border w-full p-1 rounded-md", placeholder: "Password" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "gender", children: "Gender" }), (0, jsx_runtime_1.jsxs)("label", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", name: "gender", id: "gender", value: "male" }), "Male"] }), (0, jsx_runtime_1.jsxs)("label", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", name: "gender", id: "gender", value: "female" }), "Female"] }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "bg-blue-500 w-full p-2 rounded-md", children: "Login" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/", children: "Already Have an account? Login" })] }));
};
exports.default = LoginForm;
