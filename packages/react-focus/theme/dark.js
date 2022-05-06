"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@mui/utils");
const default_1 = __importDefault(require("./default"));
const darkThemeOptions = (0, utils_1.deepmerge)(default_1.default, {
    palette: {
        mode: 'dark',
    }
}, {
    clone: true
});
exports.default = darkThemeOptions;
