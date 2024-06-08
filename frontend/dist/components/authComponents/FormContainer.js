"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const logo = require("../../images/Logo.jpg");
const FormContainer = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-screen h-screen grid grid-rows-3 md:grid-cols-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "md:col-span-1 md:row-span-3 h-full bg-white row-span-1", children: (0, jsx_runtime_1.jsx)("img", { src: logo, className: " object-contain object-center w-full h-full" }) }), (0, jsx_runtime_1.jsx)("div", { className: "md:col-span-1 md:row-span-3 h-full bg-sky-200 flex items-center justify-center row-span-2", children: props.children })] }));
};
exports.default = FormContainer;
