"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const login_1 = require("../../utils/login");
const react_1 = require("react");
const LoginForm = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const loginFunction = () => {
        const loginData = { name, email, password };
        (0, login_1.login)(loginData);
    };
    return ((0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col gap-4 items-start justify-center w-2/3", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-2xl font-semibold text-blue-900", children: "Login With Email ID" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", className: "border w-full p-1 rounded-md", placeholder: "Name", onInput: (e) => setName(e.currentTarget.value) }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "emailId", className: "border w-full p-1 rounded-md", placeholder: "Email Id", onInput: (e) => setEmail(e.currentTarget.value) }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", className: "border w-full p-1 rounded-md", placeholder: "Password", onInput: (e) => setPassword(e.currentTarget.value) }), (0, jsx_runtime_1.jsx)("button", { onClick: loginFunction, type: "button", className: "bg-blue-500 w-full p-2 rounded-md", children: "Login" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/signup", children: "Don't have an account? Signup" })] }));
};
exports.default = LoginForm;
