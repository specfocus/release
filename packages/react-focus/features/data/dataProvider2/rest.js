"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpleRestProvider_1 = __importDefault(require("../providers/simpleRestProvider"));
const restProvider = (0, simpleRestProvider_1.default)('http://localhost:4000');
const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) => name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
        ? self
        : (resource, params) => new Promise(resolve => setTimeout(() => resolve(restProvider[name](resource, params)), 500)),
});
exports.default = delayedDataProvider;
