"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titlebar = exports.useTitlebar = exports.atomTitlebar = void 0;
var state_1 = require("./state");
Object.defineProperty(exports, "atomTitlebar", { enumerable: true, get: function () { return state_1.atomTitlebar; } });
Object.defineProperty(exports, "useTitlebar", { enumerable: true, get: function () { return state_1.useTitlebar; } });
var Titlebar_1 = require("./Titlebar");
Object.defineProperty(exports, "Titlebar", { enumerable: true, get: function () { return __importDefault(Titlebar_1).default; } });
