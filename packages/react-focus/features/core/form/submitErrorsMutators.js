"use strict";
/**
 * Fork of the https://github.com/ignatevdev/final-form-submit-errors
 *
 * In ../../app, errors might be objects with `message` and `args` properties which
 * are used for translation.
 * The original final-form-submit-errors mutator was considering those errors as form
 * nested field like `name.message` and `name.args`.
 * This version detects those objects.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = exports.isValidationError = exports.flatten = exports.clean = exports.resetSubmitErrors = void 0;
function resetSubmitErrors([{ prev, current }], state, { getIn, setIn }) {
    // Reset the general submit error on any value change
    if (state.formState.submitError) {
        delete state.formState.submitError;
    }
    if (!isObjectEmpty(state.formState.submitErrors)) {
        // Flatten nested errors object for easier comparison
        const flatErrors = flatten(state.formState.submitErrors);
        const changed = [];
        // Iterate over each error
        Object.keys(flatErrors).forEach(key => {
            // Compare the value for the error field path
            if (getIn(prev, key) !== getIn(current, key)) {
                changed.push(key);
            }
        });
        // Reset the error on value change
        if (changed.length) {
            let newErrors = state.formState.submitErrors;
            changed.forEach(key => {
                newErrors = setIn(newErrors, key, null);
            });
            // Clear submit errors from empty objects and arrays
            const cleanErrors = clean(newErrors);
            state.formState.submitErrors = cleanErrors;
        }
    }
}
exports.resetSubmitErrors = resetSubmitErrors;
function clean(obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            const newVal = clean(obj[key]);
            if (!isObjectEmpty(newVal) && newVal.length !== 0) {
                newObj[key] = newVal;
            }
        }
        else if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}
exports.clean = clean;
function flatten(obj) {
    const toReturn = {};
    for (const i in obj) {
        if (!obj.hasOwnProperty(i)) {
            continue;
        }
        if (typeof obj[i] === 'object' &&
            obj[i] !== null &&
            !(0, exports.isValidationError)(obj[i])) {
            const flatObject = flatten(obj[i]);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }
                // Make a bracket array notation like some[1].array[0]
                const key = `${i}.${x}`.split('.').reduce((str, value) => {
                    if (/^\[\d\]/.test(value)) {
                        return `${str}${value}`;
                    }
                    if (!isNaN(Number(value))) {
                        return `${str}[${value}]`;
                    }
                    if (str) {
                        return `${str}.${value}`;
                    }
                    return value;
                }, '');
                toReturn[key] = flatObject[x];
            }
        }
        else {
            toReturn[i] = obj[i];
        }
    }
    return toReturn;
}
exports.flatten = flatten;
const isValidationError = (obj) => obj.message && obj.args;
exports.isValidationError = isValidationError;
function isObjectEmpty(obj) {
    if (!obj) {
        return true;
    }
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}
exports.isObjectEmpty = isObjectEmpty;
exports.default = {
    resetSubmitErrors,
};
