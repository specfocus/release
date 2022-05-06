"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recoil_1 = require("recoil");
const counterState = (0, recoil_1.atom)({
    key: "counterState",
    default: 0
});
const x2Selector = (0, recoil_1.selector)({
    key: "x2Selector",
    get: ({ get }) => {
        const count = get(counterState);
        return count * 2;
    }
});
const Preset = ({}) => {
    const [count, setCount] = (0, recoil_1.useRecoilState)(counterState);
    const doubleCount = (0, recoil_1.useRecoilValue)(x2Selector);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Count: ", count] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["Double Count: ", doubleCount] }, void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: increment }, { children: "Increment" }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: decrement }, { children: "Decrement" }), void 0)] }, void 0));
};
exports.default = Preset;
