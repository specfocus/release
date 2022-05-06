"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = exports.darkTheme = void 0;
const styles_1 = require("@mui/material/styles");
const dark_1 = __importDefault(require("./dark"));
const light_1 = __importDefault(require("./light"));
exports.darkTheme = (0, styles_1.createTheme)(dark_1.default);
exports.lightTheme = (0, styles_1.createTheme)(light_1.default);
