"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inflate = exports.deflate = void 0;
var deflate_1 = require("./deflate");
Object.defineProperty(exports, "deflate", { enumerable: true, get: function () { return __importDefault(deflate_1).default; } });
var inflate_1 = require("./inflate");
Object.defineProperty(exports, "inflate", { enumerable: true, get: function () { return __importDefault(inflate_1).default; } });
