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
exports.Property = exports.Filter = exports.model = exports.ArraySchema = exports.ObjectSchema = exports.DateSchema = exports.NumberSchema = exports.StringSchema = exports.BooleanSchema = exports.MixedSchema = exports.BaseSchema = exports.ValidationError = exports.setLocale = exports.addMethod = exports.isSchema = exports.reach = exports.lazy = exports.ref = exports.array = exports.object = exports.date = exports.number = exports.string = exports.boolean = exports.bool = exports.mixed = void 0;
const mixed_1 = __importStar(require("./mixed"));
exports.MixedSchema = mixed_1.default;
Object.defineProperty(exports, "mixed", { enumerable: true, get: function () { return mixed_1.create; } });
const boolean_1 = __importStar(require("./boolean"));
exports.BooleanSchema = boolean_1.default;
Object.defineProperty(exports, "bool", { enumerable: true, get: function () { return boolean_1.create; } });
Object.defineProperty(exports, "boolean", { enumerable: true, get: function () { return boolean_1.create; } });
const string_1 = __importStar(require("./string"));
exports.StringSchema = string_1.default;
Object.defineProperty(exports, "string", { enumerable: true, get: function () { return string_1.create; } });
const number_1 = __importStar(require("./number"));
exports.NumberSchema = number_1.default;
Object.defineProperty(exports, "number", { enumerable: true, get: function () { return number_1.create; } });
const date_1 = __importStar(require("./date"));
exports.DateSchema = date_1.default;
Object.defineProperty(exports, "date", { enumerable: true, get: function () { return date_1.create; } });
const object_1 = __importStar(require("./object"));
exports.ObjectSchema = object_1.default;
Object.defineProperty(exports, "object", { enumerable: true, get: function () { return object_1.create; } });
const array_1 = __importStar(require("./array"));
exports.ArraySchema = array_1.default;
Object.defineProperty(exports, "array", { enumerable: true, get: function () { return array_1.create; } });
const Reference_1 = require("./Reference");
Object.defineProperty(exports, "ref", { enumerable: true, get: function () { return Reference_1.create; } });
const Lazy_1 = require("./Lazy");
Object.defineProperty(exports, "lazy", { enumerable: true, get: function () { return Lazy_1.create; } });
const ValidationError_1 = __importDefault(require("./ValidationError"));
exports.ValidationError = ValidationError_1.default;
const reach_1 = __importDefault(require("./util/reach"));
exports.reach = reach_1.default;
const isSchema_1 = __importDefault(require("./util/isSchema"));
exports.isSchema = isSchema_1.default;
const setLocale_1 = __importDefault(require("./setLocale"));
exports.setLocale = setLocale_1.default;
const schema_1 = __importDefault(require("./schema"));
exports.BaseSchema = schema_1.default;
function addMethod(schemaType, name, fn) {
    if (!schemaType || !(0, isSchema_1.default)(schemaType.prototype))
        throw new TypeError('You must provide a yup schema constructor function');
    if (typeof name !== 'string')
        throw new TypeError('A Method name must be provided');
    if (typeof fn !== 'function')
        throw new TypeError('Method function must be provided');
    schemaType.prototype[name] = fn;
}
exports.addMethod = addMethod;
var model_1 = require("./model");
Object.defineProperty(exports, "model", { enumerable: true, get: function () { return model_1.model; } });
var Filter_1 = require("./field/Filter");
Object.defineProperty(exports, "Filter", { enumerable: true, get: function () { return Filter_1.Filter; } });
// export { Model } from './Model2';
var Property_1 = require("./field/Property");
Object.defineProperty(exports, "Property", { enumerable: true, get: function () { return Property_1.Property; } });
