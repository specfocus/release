"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const integer_1 = __importDefault(require("./integer"));
function date() {
    return `${(0, integer_1.default)({ max: 2021, min: 2000 })}-${(0, integer_1.default)({ max: 12, min: 1 })}-${(0, integer_1.default)({ max: 28, min: 1 })}`;
}
exports.default = date;
