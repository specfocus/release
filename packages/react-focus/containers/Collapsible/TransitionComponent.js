"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Collapse_1 = __importDefault(require("@mui/material/Collapse"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_spring_1 = require("react-spring");
function TransitionComponent(props) {
    const style = (0, react_spring_1.useSpring)({
        from: {
            opacity: 0,
            transform: 'translate3d(20px,0,0)',
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
        },
    });
    return ((0, jsx_runtime_1.jsx)(react_spring_1.animated.div, Object.assign({ style: style }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.default, Object.assign({}, props), void 0) }), void 0));
}
TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: prop_types_1.default.bool,
};
exports.default = TransitionComponent;
