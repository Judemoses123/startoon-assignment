"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "p-2 border-b w-full flex flex-row items-center gap-16 bg-sky-200", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-semibold text-xl", children: "Dashboard" }), (0, jsx_runtime_1.jsxs)("ul", { className: "flex flex-row gap-4 w-full justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-start gap-4", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { className: "underline", to: "/dashboard", children: "Dashboard" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { className: "underline", to: "/graph", children: "Graph" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-start gap-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "search", className: "bg-white border rounded-sm p-1", placeholder: "Search..." }), (0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 p-1 pl-2 pr-2 text-white", children: "Search" })] })] })] }));
};
exports.default = Navbar;
