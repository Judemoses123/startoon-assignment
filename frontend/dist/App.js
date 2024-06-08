"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Homapage_1 = __importDefault(require("./pages/Homapage"));
const Signup_1 = __importDefault(require("./pages/Signup"));
const Dashboard_1 = __importDefault(require("./pages/Dashboard"));
const Graph_1 = __importDefault(require("./pages/Graph"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Homapage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(Signup_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/graph", element: (0, jsx_runtime_1.jsx)(Graph_1.default, {}) })] }) }));
}
exports.default = App;
