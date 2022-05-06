"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultI18nProvider = exports.AppUI = exports.AppRouter = exports.AppContext = exports.AutoApp = void 0;
const AutoApp_1 = __importDefault(require("./AutoApp"));
exports.AutoApp = AutoApp_1.default;
const AppUI_1 = __importDefault(require("./AppUI"));
exports.AppUI = AppUI_1.default;
const AppContext_1 = __importDefault(require("./AppContext"));
exports.AppContext = AppContext_1.default;
const AppRouter_1 = __importDefault(require("./AppRouter"));
exports.AppRouter = AppRouter_1.default;
const defaultI18nProvider_1 = __importDefault(require("../features/i18n/defaultI18nProvider"));
exports.defaultI18nProvider = defaultI18nProvider_1.default;
__exportStar(require("../features/core"), exports);
__exportStar(require("../components"), exports);
