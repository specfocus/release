"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const base_1 = __importDefault(require("./base"));
const Mixed = base_1.default;
exports.default = Mixed;
function create() {
    return new Mixed();
}
exports.create = create;
// XXX: this is using the Base schema so that `addMethod(mixed)` works as a base class
create.prototype = Mixed.prototype;
