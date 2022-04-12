"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBJECT = exports.PropExpr = exports.simplify = exports.isSimpleValue = exports.isSimpleType = exports.isSimpleObject = exports.isSimpleNumber = exports.isSimpleBoolean = exports.isObject = exports.isEmpty = exports.flatten = exports.clone = void 0;
var clone_1 = require("./clone");
Object.defineProperty(exports, "clone", { enumerable: true, get: function () { return __importDefault(clone_1).default; } });
var flatten_1 = require("./flatten");
Object.defineProperty(exports, "flatten", { enumerable: true, get: function () { return __importDefault(flatten_1).default; } });
var object_1 = require("./object");
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return object_1.isEmpty; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return object_1.isObject; } });
var simple_1 = require("./simple");
Object.defineProperty(exports, "isSimpleBoolean", { enumerable: true, get: function () { return simple_1.isSimpleBoolean; } });
Object.defineProperty(exports, "isSimpleNumber", { enumerable: true, get: function () { return simple_1.isSimpleNumber; } });
Object.defineProperty(exports, "isSimpleObject", { enumerable: true, get: function () { return simple_1.isSimpleObject; } });
Object.defineProperty(exports, "isSimpleType", { enumerable: true, get: function () { return simple_1.isSimpleType; } });
Object.defineProperty(exports, "isSimpleValue", { enumerable: true, get: function () { return simple_1.isSimpleValue; } });
var simplify_1 = require("./simplify");
Object.defineProperty(exports, "simplify", { enumerable: true, get: function () { return __importDefault(simplify_1).default; } });
exports.PropExpr = __importStar(require("./property-expr"));
exports.OBJECT = 'object';
