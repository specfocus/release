"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("../features/core");
const defaultI18nProvider_1 = __importDefault(require("../features/i18n/defaultI18nProvider"));
const AppContext = (props) => ((0, jsx_runtime_1.jsx)(core_1.BaseAppContext, Object.assign({}, props), void 0));
AppContext.defaultProps = {
    i18nProvider: defaultI18nProvider_1.default,
};
AppContext.displayName = 'AppContext';
exports.default = AppContext;
