"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TranslatedButton_1 = __importDefault(require("../../../components/TranslatedButton"));
const ActionField = ({ api, disabled, dispatch, label: label, schema, values }) => {
    const onClick = (0, react_1.useCallback)(() => {
        dispatch(Object.assign({ form: api, values }, schema.payload));
    }, [dispatch, api, schema, values]);
    return ((0, jsx_runtime_1.jsx)(TranslatedButton_1.default, Object.assign({ disabled: disabled, onClick: onClick, variant: "contained" }, { children: label }), void 0));
};
exports.default = ActionField;
