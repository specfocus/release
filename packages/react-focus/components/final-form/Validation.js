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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequired = exports.makeValidateSync = exports.makeValidate = void 0;
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
function get(obj, path, defaultValue) {
    const result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    return result === undefined || result === obj ? defaultValue : result;
}
// https://stackoverflow.com/questions/54733539/javascript-implementation-of-lodash-set-method
function set(obj, path, value) {
    if (Object(obj) !== obj)
        return obj; // When obj is not an object
    // If not yet an array, get the keys from the string-path
    if (!Array.isArray(path))
        path = path.toString().match(/[^.[\]]+/g) || [];
    path.slice(0, -1).reduce((a, c, i) => Object(a[c]) === a[c] // Does the key exist and is its value an object?
        ? // Yes: then follow that path
            a[c]
        : // No: create the key. Is the next key a potential array-index?
            (a[c] =
                Math.abs(path[i + 1]) >> 0 === +path[i + 1]
                    ? [] // Yes: assign a new array object
                    : {}), // No: assign a new plain object
    obj)[path[path.length - 1]] = value; // Finally assign the value to the last key
    return obj; // Return the top-level object to allow chaining
}
function normalizeValidationError(err, translator) {
    return err.inner.reduce((errors, innerError) => {
        const { path, message } = innerError;
        const el = translator ? translator(innerError) : message;
        // eslint-disable-next-line no-prototype-builtins
        if (path && errors.hasOwnProperty(path)) {
            const prev = get(errors, path);
            prev.push(el);
            set(errors, path, prev);
        }
        else {
            set(errors, path, [el]);
        }
        return errors;
    }, {});
}
/**
 * Wraps the execution of a Yup schema to return an Promise<ValidationError>
 * where the key is the form field and the value is the error string.
 */
function makeValidate(validator, translator) {
    return (values) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield validator.validate(values, { abortEarly: false });
            return {};
        }
        catch (err) {
            return normalizeValidationError(err, translator);
        }
    });
}
exports.makeValidate = makeValidate;
/**
 * Wraps the sync execution of a Yup schema to return an ValidationError
 * where the key is the form field and the value is the error string.
 */
function makeValidateSync(validator, translator) {
    return (values) => {
        try {
            validator.validateSync(values, { abortEarly: false });
            return {};
        }
        catch (err) {
            return normalizeValidationError(err, translator);
        }
    };
}
exports.makeValidateSync = makeValidateSync;
/**
 * Uses the private _exclusive field in the schema to get whether or not
 * the field is marked as required or not.
 */
function makeRequired(schema) {
    const fields = schema.fields;
    return Object.keys(fields).reduce((accu, field) => {
        if (fields[field].fields) {
            accu[field] = makeRequired(fields[field]);
        }
        else {
            accu[field] = !!fields[field].exclusiveTests.required;
        }
        return accu;
    }, {});
}
exports.makeRequired = makeRequired;
