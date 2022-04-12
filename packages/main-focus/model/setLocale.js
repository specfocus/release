"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = __importDefault(require("./locale"));
function setLocale(custom) {
    Object.keys(custom).forEach((type) => {
        // @ts-ignore
        Object.keys(custom[type]).forEach((method) => {
            // @ts-ignore
            locale_1.default[type][method] = custom[type][method];
        });
    });
}
exports.default = setLocale;
