"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ArraySchema_1 = require("../../../lib/ArraySchema");
const BooleanSchema_1 = require("../../../lib/BooleanSchema");
const NumberSchema_1 = require("../../../lib/NumberSchema");
const StringSchema_1 = require("../../../lib/StringSchema");
const ArrayField_1 = __importDefault(require("./ArrayField"));
const BooleanField_1 = __importDefault(require("./BooleanField"));
const NumberField_1 = __importDefault(require("./NumberField"));
const StringField_1 = __importDefault(require("./StringField"));
const SimpleField = (props) => {
    switch (props.schema.type) {
        case ArraySchema_1.ARRAY_TYPE:
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(ArrayField_1.default, Object.assign({}, props), void 0));
        case BooleanSchema_1.BOOLEAN_TYPE:
            return ((0, jsx_runtime_1.jsx)(BooleanField_1.default, Object.assign({}, props), void 0));
        case NumberSchema_1.NUMBER_TYPE:
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(NumberField_1.default, Object.assign({}, props), void 0));
        case StringSchema_1.STRING_TYPE:
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(StringField_1.default, Object.assign({}, props), void 0));
        default:
            console.warn(`Unknnown schema type ${props.schema.type}`);
            return null;
    }
};
exports.default = SimpleField;
