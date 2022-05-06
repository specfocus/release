"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataProvider = void 0;
const db_1 = __importDefault(require("../../examples/db"));
const fakeDataProvider_1 = __importDefault(require("./providers/fakeDataProvider"));
const baseDataProvider = (0, fakeDataProvider_1.default)((0, db_1.default)(), true);
exports.dataProvider = new Proxy(baseDataProvider, {
    get: (target, name) => (resource, params) => new Promise(resolve => setTimeout(() => resolve(baseDataProvider[name](resource, params)), 300)),
});
