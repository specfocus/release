"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const integer_1 = __importDefault(require("./integer"));
const word_1 = require("./word");
function url() {
    return `http://${(0, word_1.words)((0, integer_1.default)({ max: 3, min: 2 })).join(".")}.com`;
}
exports.default = url;
