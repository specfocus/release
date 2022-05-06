"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AppStack_1 = require("../../app/AppStack");
function Frame({ children, name }) {
    const appFrameStack = (0, AppStack_1.useAppStack)();
    // change app title and restore previous on exit
    (0, react_1.useEffect)(() => {
        appFrameStack.push(name, {});
        return () => { appFrameStack.pop(name); };
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0));
}
exports.default = Frame;
