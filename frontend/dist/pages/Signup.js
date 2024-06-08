"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FormContainer_1 = __importDefault(require("../components/authComponents/FormContainer"));
const SignupForm_1 = __importDefault(require("../components/authComponents/SignupForm"));
const SignupPage = () => {
    return ((0, jsx_runtime_1.jsx)(FormContainer_1.default, { children: (0, jsx_runtime_1.jsx)(SignupForm_1.default, {}) }));
};
exports.default = SignupPage;
