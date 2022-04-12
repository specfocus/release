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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDomain = exports.ruleFor = void 0;
__exportStar(require("./binary"), exports);
__exportStar(require("./unary"), exports);
const array_1 = require("../array");
const boolean_1 = require("../boolean");
const maybe_1 = require("../maybe");
const number_1 = require("../number");
const nameof_1 = require("../reflection/nameof");
const string_1 = require("../string");
const unary_1 = require("./unary");
class GlobalDomainRuleMap {
    constructor() {
        this.AbsoluteUrl = {
            test: string_1.isAbsoluteUrl,
            name: (0, nameof_1.nameOf)((o) => o.AbsoluteUrl),
        };
        this.Array = { test: array_1.isArray, name: (0, nameof_1.nameOf)((o) => o.Array) };
        this.Boolean = { test: boolean_1.isBoolean, name: (0, nameof_1.nameOf)((o) => o.Boolean) };
        this.EmailAddress = { test: string_1.isEmailAddress, name: (0, nameof_1.nameOf)((o) => o.EmailAddress) };
        this.Guid = { test: string_1.isGuid, name: (0, nameof_1.nameOf)((o) => o.Guid) };
        this.Intenger = { test: number_1.isInteger, name: (0, nameof_1.nameOf)((o) => o.Intenger) };
        this.LowerCase = { test: string_1.isLowerCase, name: (0, nameof_1.nameOf)((o) => o.LowerCase) };
        this.NaN = { test: unary_1.isNaN, name: (0, nameof_1.nameOf)((o) => o.NaN) };
        this.NegativeInteger = {
            test: number_1.isNegativeInteger,
            name: (0, nameof_1.nameOf)((o) => o.NegativeInteger),
        };
        this.NegativeNumber = {
            test: number_1.isNegativeNumber,
            name: (0, nameof_1.nameOf)((o) => o.NegativeNumber),
        };
        this.Nil = { test: maybe_1.isNil, name: (0, nameof_1.nameOf)((o) => o.Nil) };
        this.NonNevativeInteger = {
            test: number_1.isNonNegativeInteger,
            name: (0, nameof_1.nameOf)((o) => o.NonNevativeInteger),
        };
        this.NonNevativeNumber = {
            test: number_1.isNonNegativeNumber,
            name: (0, nameof_1.nameOf)((o) => o.NonNevativeNumber),
        };
        this.NonPositiveInteger = {
            test: number_1.isNonPositiveInteger,
            name: (0, nameof_1.nameOf)((o) => o.NonPositiveInteger),
        };
        this.NonPositiveNumber = {
            test: number_1.isNonPositiveNumber,
            name: (0, nameof_1.nameOf)((o) => o.NonPositiveNumber),
        };
        this.Null = { test: maybe_1.isNull, name: (0, nameof_1.nameOf)((o) => o.Null) };
        this.Number = { test: number_1.isNumber, name: (0, nameof_1.nameOf)((o) => o.Number) };
        this.NumberOrString = {
            test: unary_1.isNumberOrString,
            name: (0, nameof_1.nameOf)((o) => o.NumberOrString),
        };
        this.PositiveInteger = {
            test: number_1.isPositiveInteger,
            name: (0, nameof_1.nameOf)((o) => o.PositiveInteger),
        };
        this.PositiveNumber = {
            test: number_1.isPositiveNumber,
            name: (0, nameof_1.nameOf)((o) => o.PositiveNumber),
        };
        this.String = { test: string_1.isString, name: (0, nameof_1.nameOf)((o) => o.String) };
        this.UpperCase = { test: string_1.isUpperCase, name: (0, nameof_1.nameOf)((o) => o.UpperCase) };
    }
}
const _map = Object.freeze(new GlobalDomainRuleMap());
const _keys = Object.freeze(Object.keys(_map).sort());
const _values = Object.freeze(_keys.map((k) => _map[k]));
function ruleFor(ruleFunction) {
    throw new Error("Error");
    // return <GlobalDomainRule<T>>_map[nameOf<GlobalDomainRuleMap>(ruleFunction)];
}
exports.ruleFor = ruleFor;
/*
ruleFor<AbsoluteUrl>(o => o.AbsoluteUrl);
ruleFor<String>((o) => o.AbsoluteUrl);
ruleFor<AbsoluteUrl>((o) => o.String);
*/
class GlobalDomain {
}
exports.GlobalDomain = GlobalDomain;
GlobalDomain.has = (key) => key in GlobalDomainRuleMap;
GlobalDomain.test = (name, val) => { var _a; return (_a = _map[name]) === null || _a === void 0 ? void 0 : _a.test(val); };
GlobalDomain.map = _map;
GlobalDomain.all = _values;
