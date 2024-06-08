"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UserDisplay = () => {
    const [users, setUsers] = (0, react_1.useState)([
        {
            srno: "1",
            name: "Ravi Kumar",
            email: "ravikumar123@gmail.com",
            count: "18",
            lastLoginDate: "07th Jun 2024",
        },
        {
            srno: "2",
            name: "Anjali Sharma",
            email: "anjali.sharma@gmail.com",
            count: "29",
            lastLoginDate: "03rd Jun 2024",
        },
        {
            srno: "3",
            name: "Vikram Singh",
            email: "vikramsingh@gmail.com",
            count: "13",
            lastLoginDate: "01st Jun 2024",
        },
        {
            srno: "4",
            name: "Priya Iyer",
            email: "priya.iyer@gmail.com",
            count: "22",
            lastLoginDate: "05th Jun 2024",
        },
        {
            srno: "5",
            name: "Arjun Verma",
            email: "arjun.verma@gmail.com",
            count: "15",
            lastLoginDate: "02nd Jun 2024",
        },
        {
            srno: "6",
            name: "Sneha Desai",
            email: "sneha.desai@gmail.com",
            count: "27",
            lastLoginDate: "06th Jun 2024",
        },
        {
            srno: "7",
            name: "Rahul Gupta",
            email: "rahul.gupta@gmail.com",
            count: "19",
            lastLoginDate: "04th Jun 2024",
        },
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: " grid grid-cols-8 w-3/4 m-auto  border-2 bg-blue-400", children: [(0, jsx_runtime_1.jsx)("div", { className: " col-span-1 border pl-2", children: "Sr. No" }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: "Name" }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: "Email" }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-1 border pl-2", children: "Count" }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: "Last Login Date" })] }), (0, jsx_runtime_1.jsx)("div", { children: users.map((user) => {
                    return ((0, jsx_runtime_1.jsxs)("div", { className: " grid grid-cols-8 w-3/4 m-auto  border-2", children: [(0, jsx_runtime_1.jsx)("div", { className: " col-span-1 border pl-2", children: user.srno }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: user.name }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: user.email }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-1 border pl-2", children: user.count }), (0, jsx_runtime_1.jsx)("div", { className: " col-span-2 border pl-2", children: user.lastLoginDate })] }));
                }) })] }));
};
exports.default = UserDisplay;
