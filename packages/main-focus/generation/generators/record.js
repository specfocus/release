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
exports.recordDictionary = exports.recordArray = void 0;
const lodash_1 = require("lodash");
const array_1 = require("../../array");
const record_1 = require("../../record");
const string_1 = require("../../string");
const integer_1 = __importDefault(require("./integer"));
const value_1 = __importStar(require("./value"));
function recordArray(type, count, models) {
    const ret = [];
    for (let i = 0; i < count; i++) {
        ret.push(record(type, models));
    }
    return ret;
}
exports.recordArray = recordArray;
function recordDictionary(type, count, models, keyType = string_1.GUID) {
    const ret = {};
    for (let i = 0; i < count; i++) {
        Object.assign(ret, { [(0, value_1.default)(keyType)]: record(type, models) });
    }
    return ret;
}
exports.recordDictionary = recordDictionary;
function record(type, models) {
    const fields = (0, string_1.isString)(type) ? models[type].fields : type;
    if (!fields) {
        return null;
    }
    return Object.entries(fields).reduce((acc, [key, field]) => {
        if ((0, string_1.isString)(field.type)) {
            if (field.type === record_1.RECORD) {
                return {};
            }
            let val = (0, value_1.default)(field.type);
            if (typeof val === undefined) {
                val = record(field.type, models);
            }
            return Object.assign(acc, { [key]: val });
        }
        else if (!(0, lodash_1.isArray)(field.type)) {
            return acc;
        }
        // @ts-ignore
        const [type, primary, secondary, ...more] = field.type;
        if (!(0, string_1.isString)(type)) {
            if (primary === array_1.ARRAY) {
                const val = recordArray(type, (0, integer_1.default)({ max: 9, min: 2 }), models);
                return Object.assign(acc, { [key]: val });
            }
            else if (primary === record_1.DICTIONARY) {
                const val = recordDictionary(type, (0, integer_1.default)({ max: 9, min: 2 }), models, more.shift() || string_1.GUID);
                return Object.assign(acc, { [key]: val });
            }
            const val = record(type, models);
            return Object.assign(acc, { [key]: val });
        }
        if (primary === record_1.RECORD) {
            if (secondary === array_1.ARRAY) {
                const val = recordArray(type, (0, integer_1.default)({ max: 9, min: 2 }), models);
                return Object.assign(acc, { [key]: val });
            }
            else if (secondary === record_1.DICTIONARY) {
                const val = recordDictionary(type, (0, integer_1.default)({ max: 9, min: 2 }), models, more.shift() || string_1.GUID);
                return Object.assign(acc, { [key]: val });
            }
            const val = record(type, models);
            return Object.assign(acc, { [key]: val });
        }
        else if (primary === array_1.ARRAY) {
            const val = (0, value_1.valueArray)(type, (0, integer_1.default)({ max: 9, min: 2 }));
            return Object.assign(acc, { [key]: val });
        }
        else if (primary === record_1.DICTIONARY) {
            const val = (0, value_1.valueDictionary)(type, (0, integer_1.default)({ max: 9, min: 2 }), secondary || string_1.GUID);
            return Object.assign(acc, { [key]: val });
        }
        let val = (0, value_1.default)(type);
        if (typeof val === undefined) {
            val = record(type, models);
        }
        return Object.assign(acc, { [key]: val });
    }, {});
}
exports.default = record;
