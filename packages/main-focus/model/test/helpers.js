"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureSync = exports.validationErrorWithMessages = exports.validateAll = exports.castAll = exports.castAndShouldFail = void 0;
const printValue_1 = __importDefault(require("../util/printValue"));
// @ts-ignore
let castAndShouldFail = (schema, value) => {
    expect(() => schema.cast(value)).toThrowError(TypeError);
};
exports.castAndShouldFail = castAndShouldFail;
// @ts-ignore
let castAll = (inst, { invalid = [], valid = [] }) => {
    valid.forEach(([value, result, schema = inst]) => {
        it(`should cast ${(0, printValue_1.default)(value)} to ${(0, printValue_1.default)(result)}`, () => {
            expect(schema.cast(value)).toBe(result);
        });
    });
    invalid.forEach((value) => {
        it(`should not cast ${(0, printValue_1.default)(value)}`, () => {
            (0, exports.castAndShouldFail)(inst, value);
        });
    });
};
exports.castAll = castAll;
// @ts-ignore
let validateAll = (inst, { valid = [], invalid = [] }) => {
    describe('valid:', () => {
        runValidations(valid, true);
    });
    describe('invalid:', () => {
        runValidations(invalid, false);
    });
    // @ts-ignore
    function runValidations(arr, isValid) {
        // @ts-ignore
        arr.forEach((config) => {
            let message = '', value = config, schema = inst;
            if (Array.isArray(config))
                [value, schema, message = ''] = config;
            it(`${(0, printValue_1.default)(value)}${message && `  (${message})`}`, () => __awaiter(this, void 0, void 0, function* () {
                yield expect(schema.isValid(value)).resolves.toEqual(isValid);
            }));
        });
    }
};
exports.validateAll = validateAll;
// @ts-ignore
function validationErrorWithMessages(...errors) {
    return expect.objectContaining({
        errors,
    });
}
exports.validationErrorWithMessages = validationErrorWithMessages;
// @ts-ignore
function ensureSync(fn) {
    let run = false;
    // @ts-ignore
    let resolve = (t) => {
        if (!run)
            return t;
        throw new Error('Did not execute synchronously');
    };
    // @ts-ignore
    let err = (t) => {
        if (!run)
            throw t;
        throw new Error('Did not execute synchronously');
    };
    // @ts-ignore
    let result = fn().then(resolve, err);
    run = true;
    return result;
}
exports.ensureSync = ensureSync;
